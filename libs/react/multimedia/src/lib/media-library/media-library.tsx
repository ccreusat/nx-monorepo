/* eslint-disable no-throw-literal */
import {
  forwardRef,
  useImperativeHandle,
  useMemo,
  useRef,
  Ref,
  useState,
  useEffect,
  useCallback,
} from 'react';

import {
  Applications,
  Globe,
  Folder,
  Mic,
  RecordVideo,
  Smartphone,
  Code,
} from '@ccreusat-monorepo/icons';
import { WorkspaceElement } from '@ccreusat-monorepo/client';
import { useTranslation } from 'react-i18next';

import { ExternalLink, ExternalLinkTabProps } from './innertabs/external-link';
import {
  InternalLink,
  InternalLinkTabProps,
  InternalLinkTabResult,
} from './innertabs/internal-link';
import { MediaLibraryContext } from './media-library.context';
import {
  Button,
  Modal,
  ModalElement,
  Tabs,
  TabsItemProps,
  useHasWorkflow,
  useHttpErrorToast,
} from '@ccreusat-monorepo/ui-library';
import { Audio } from './innertabs/audio';
import { Video } from './innertabs/video';
import { Workspace } from './innertabs/workspace';
import { Iframe } from './innertabs/iframe';
import { VideoEmbedder } from './innertabs/video-embedder';
import { Upload } from './innertabs/upload';

//---------------------------------------------------
// Tabs parameters
//---------------------------------------------------
/** Ordered list of tabs. */
const orderedTabs = [
  'audio-capture',
  'video-capture',
  'internal-link', // Link to a shared resource (previously known as "internal linker")
  'external-link', // Link to an external website (previously known as "external linker")
  'iframe', // Framed website
  'upload', // Filesystem browser + drag'n'drop of files
  'workspace', // Media browser
  'video-embedder', // Link to a hosted video
];

/**
 * Available features exposed by tabs :
 * "workspace" | "upload" | "audio-capture" | ...
 */
export type AvailableTab = (typeof orderedTabs)[number];

/** Additional properties of tabs. */
export type MediaLibraryTabProps = {
  /**
   * Media Library types where this tab should be displayed.
   * "*" for all types.
   */
  availableFor: Array<MediaLibraryType | '*' | null>;

  /** Required checks before using this feature. */
  isEnable: null | (() => boolean);
};

//---------------------------------------------------
// Media Library parameters
//---------------------------------------------------
/**
 * Pre-configured types of media libraries.
 * Choosing a type will filter out unwanted tabs.
 */
export type MediaLibraryType =
  /** Audio files */
  | 'audio'
  /** Video files / streams / links */
  | 'video'
  /** Image files */
  | 'image'
  /** Attached files */
  | 'attachment'
  /** Embedded websites */
  | 'embedder'
  /** Hyperlinks */
  | 'hyperlink';

type MediaLibraryTypeOptions = {
  /** I18n key describing this MediaLibrary type. */
  title: string;
  /** Default tab to display. */
  defaultTab: AvailableTab;
};

export interface MediaLibraryRef {
  /** Open the Media Library on given type. */
  show: (type: MediaLibraryType) => void;

  /** Close the Media Library. */
  hide: () => void;

  /**
   * Open the MediaLibrary on a internal/external link Tab,
   * and prefill the tab with data.
   */
  showLink: (data: InternalLinkTabProps | ExternalLinkTabProps) => void;

  /** Get the Media Libray type currently displayed, or null if hidden. */
  type: MediaLibraryType | null;
}

/** Map of MediaLibrary types and options. */
export const mediaLibraryTypes: { none: null } & {
  [key in MediaLibraryType]: MediaLibraryTypeOptions;
} = {
  none: null,
  audio: {
    title: 'bbm.audio.modal.title',
    defaultTab: 'audio-capture',
  },
  video: {
    title: 'bbm.video.modal.title',
    defaultTab: 'video-capture',
  },
  image: { title: 'bbm.image.modal.title', defaultTab: 'workspace' },
  attachment: {
    title: 'bbm.attachment.modal.title',
    defaultTab: 'workspace',
  },
  hyperlink: { title: 'bbm.link.modal.title', defaultTab: 'linker' },
  embedder: { title: 'bbm.embedder.modal.title', defaultTab: 'iframe' },
};

/**
 * The resulting type depends on the actual selected Tab when modal is closed.
 */
export type MediaLibraryResult =
  | WorkspaceElement[] // Workspace result
  | WorkspaceElement // Workspace result
  | InternalLinkTabResult // Linker result
  | string
  | /*TODO type des autres résultats ?*/ any;

/**
 * MediaLibrary component properties
 */
export interface MediaLibraryProps {
  /** Application Code (example: "blog"). */
  appCode: string;
  multiple?: boolean;
  /**
   * Called when the user validates the modal (Add button).
   * @param result depends on which InnerTab is visible
   */
  onSuccess: (result: MediaLibraryResult) => void;
  /**
   * Called when the user closes the modal.
   * @param uploads uploaded workspace elements to cancel.
   */
  onCancel: (uploads?: WorkspaceElement[]) => void;
  /**
   * Called when the user swith between tabs, without closing the modal.
   * @param tab Props of the newly displayed tab.
   * @param uploads uploaded workspace elements to cancel.
   */
  onTabChange?: (tab: TabsItemProps, uploads?: WorkspaceElement[]) => void;
}

//---------------------------------------------------
// Media Library implementation
//---------------------------------------------------
export const Root = forwardRef(
  (
    { appCode, multiple, onSuccess, onCancel, onTabChange }: MediaLibraryProps,
    ref: Ref<MediaLibraryRef>
  ) => {
    // Local ref will be merged with forwardRef in useImperativeHandle() below
    const refModal = useRef<ModalElement>(null);
    // Methods to control the Media Library from parent component
    useImperativeHandle(ref, () => ({
      show,
      hide,
      showLink,
      type,
      ...refModal.current,
    }));

    // HTTP errors toasts
    useHttpErrorToast({ isDismissible: true, duration: Infinity });

    const { t } = useTranslation();

    const workspaceCreateWorkflow = useHasWorkflow(
      'org.entcore.workspace.controllers.WorkspaceController|addDocument'
    );
    const videoCaptureWorkflow = useHasWorkflow(
      'com.opendigitaleducation.video.controllers.VideoController|capture'
    );

    // Used to prefill the [in|ex]ternal innertab.
    const [linkTabProps, setLinkTabProps] = useState<
      InternalLinkTabProps | ExternalLinkTabProps | undefined
    >();

    const [type, setType] = useState<MediaLibraryType | null>(null);

    const availableTabs: {
      [tabname in AvailableTab]: TabsItemProps & MediaLibraryTabProps;
    } = {
      workspace: {
        id: 'workspace',
        icon: <Folder />,
        label: t('bbm.workspace'),
        content: <InnerTabs.Workspace />,
        availableFor: ['audio', 'video', 'image', 'attachment'],
        isEnable: null,
      },
      upload: {
        id: 'upload',
        icon: <Smartphone />,
        label: t('bbm.device'),
        content: <InnerTabs.Upload />,
        availableFor: ['audio', 'video', 'image', 'attachment'],
        isEnable: () => (workspaceCreateWorkflow ? true : false),
      },
      'video-capture': {
        id: 'video-capture',
        icon: <RecordVideo />,
        label: t('bbm.video'),
        content: <InnerTabs.Video />,
        availableFor: ['video'],
        isEnable: () => (videoCaptureWorkflow ? true : false),
      },
      'audio-capture': {
        id: 'audio-capture',
        icon: <Mic />,
        label: t('bbm.audio'),
        content: <InnerTabs.Audio />,
        availableFor: ['audio'],
        isEnable: () => (workspaceCreateWorkflow ? true : false),
      },
      'external-link': {
        id: 'external-link',
        icon: <Globe />,
        label: t('bbm.linker.ext'),
        content: (
          <InnerTabs.ExternalLink {...(linkTabProps as ExternalLinkTabProps)} />
        ),
        availableFor: ['hyperlink'],
        isEnable: null,
      },
      'internal-link': {
        id: 'internal-link',
        icon: <Applications />,
        label: t('bbm.linker.int'),
        content: (
          <InnerTabs.InternalLink {...(linkTabProps as InternalLinkTabProps)} />
        ),
        availableFor: ['hyperlink'],
        isEnable: null,
      },
      iframe: {
        id: 'iframe',
        icon: <Code />,
        label: t('bbm.embed'),
        content: <InnerTabs.Iframe />,
        availableFor: ['embedder'],
        isEnable: null,
      },
      'video-embedder': {
        id: 'iframe',
        icon: <Code />,
        label: t('bbm.embed'),
        content: <InnerTabs.VideoEmbedder />,
        availableFor: ['video'],
        isEnable: null,
      },
    };

    // --------------- Hooks
    /* Filter out unwanted tabs. */
    const tabs = useMemo(
      () =>
        orderedTabs
          .map((key) => availableTabs[key])
          .filter(
            (tab) =>
              tab.isEnable?.() !== false &&
              (tab.availableFor.length === 0 || tab.availableFor.includes(type))
          ),
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [type]
    );

    const [defaultTabId, setDefaultTabId] = useState<
      AvailableTab | undefined
    >();

    /* Compute the index of the displayed tab by default. */
    const defaultTabIdx = useMemo<number>(() => {
      const index = tabs.findIndex((t) => t.id === defaultTabId);
      return 0 > index || index >= tabs.length ? 0 : index;
    }, [tabs, defaultTabId]);

    // Stateful contextual values
    const [resultCounter, setResultCounter] = useState<number | undefined>();
    const [result, setResult] = useState<MediaLibraryResult | undefined>();
    const [cancellable, setCancellable] = useState<WorkspaceElement[]>([]);
    const [onSuccessAction, setPreSuccess] =
      useState<() => Promise<MediaLibraryResult>>();

    function setVisibleTab(tab: AvailableTab) {
      const index = tabs.findIndex((t) => t.id === tab);
      if (index < 0) throw 'tab.not.visible';
      // TODO améliorer le composant Tabs pour pouvoir le piloter depuis le parent.
      throw 'not.implemented.yet';
    }

    function switchType(type: MediaLibraryType) {
      setLinkTabProps(undefined);
      setDefaultTabId(undefined);
      setType(type);
    }

    // --------------- Imperative functions
    const show = (type: MediaLibraryType) => {
      setType(type);
    };

    const hide = () => {
      setType(null);
    };

    const showLink = (props: InternalLinkTabProps | ExternalLinkTabProps) => {
      setLinkTabProps(props);
      const asInternal = props as InternalLinkTabProps;
      if (!asInternal?.resourceId && !asInternal?.appPrefix) {
        setDefaultTabId('external-link');
      }
      setType('hyperlink');
    };

    // If not set before, determine which available tab to display when type change.
    useEffect(() => {
      const typeKey = type || 'none';
      if (
        !defaultTabId &&
        typeof mediaLibraryTypes[typeKey]?.defaultTab === 'string'
      ) {
        setDefaultTabId(mediaLibraryTypes[typeKey]?.defaultTab);
      }
    }, [defaultTabId, type]);

    // --------------- Utility functions
    const modalHeader = t(mediaLibraryTypes[type ?? 'none']?.title ?? 'bbm');
    const addCancellable = (uploads: WorkspaceElement[]) =>
      setCancellable((previous) => {
        // Append WorkspaceElements which not already in the list.
        const ids = previous.map((element) => element._id);
        const newUploads = uploads.filter(
          (upload) => upload._id && ids.findIndex((id) => id === upload._id) < 0
        );
        return previous.concat(newUploads);
      });

    const resetState = () => {
      setResult(undefined);
      setResultCounter(undefined);
      setLinkTabProps(undefined);
      setDefaultTabId(undefined);
      setPreSuccess(undefined);
      setCancellable([]);
    };

    const handleTabChange = (tab: TabsItemProps) => {
      onTabChange?.(tab, cancellable);
      resetState();
    };

    const handleOnSuccess = useCallback(() => {
      if (onSuccessAction) {
        onSuccessAction().then((result) => {
          onSuccess(result);
        });
      } else if (result) {
        onSuccess(result);
      }
      resetState();
    }, [onSuccess, onSuccessAction, result]);

    const handleOnCancel = () => {
      onCancel(cancellable);
      resetState();
    };

    return type ? (
      <MediaLibraryContext.Provider
        value={{
          appCode,
          multiple,
          type,
          setResultCounter,
          setResult,
          addCancellable,
          setVisibleTab,
          switchType,
          setPreSuccess,
        }}
      >
        <Modal
          id="media-library"
          isOpen={type !== null}
          onModalClose={handleOnCancel}
          size="lg"
          viewport
          scrollable
        >
          <Modal.Header onModalClose={handleOnCancel}>
            {modalHeader}
          </Modal.Header>
          <Tabs
            items={tabs}
            defaultId={tabs[defaultTabIdx].id}
            onChange={handleTabChange}
          >
            {(currentItem) => (
              <>
                {tabs.length > 1 && <Tabs.List className="mt-16" />}
                <Modal.Body className="d-flex">
                  <Tabs.Panel currentItem={currentItem}>
                    {currentItem?.content}
                  </Tabs.Panel>
                </Modal.Body>
              </>
            )}
          </Tabs>
          <Modal.Footer>
            <Button
              type="button"
              color="tertiary"
              variant="ghost"
              onClick={handleOnCancel}
            >
              {t('cancel')}
            </Button>
            <Button
              type="button"
              color="primary"
              variant="filled"
              disabled={typeof result === 'undefined'}
              onClick={handleOnSuccess}
            >
              {t('add')}
              {typeof resultCounter === 'number' &&
                resultCounter > 1 &&
                ` (${resultCounter})`}
            </Button>
          </Modal.Footer>
        </Modal>
      </MediaLibraryContext.Provider>
    ) : null;
  }
);

// Add inner tabs implementations to exported component.
const InnerTabs = {
  Audio,
  Video,
  Upload,
  ExternalLink,
  Workspace,
  InternalLink,
  Iframe,
  VideoEmbedder,
};

export const MediaLibrary = Object.assign(Root, InnerTabs);
