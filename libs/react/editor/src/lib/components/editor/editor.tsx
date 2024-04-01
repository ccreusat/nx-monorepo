/* eslint-disable no-throw-literal */
import { Suspense, lazy, forwardRef, useImperativeHandle, Ref } from 'react';

import '@ccreusat-monorepo/tiptap-extension-image';
import { LoadingScreen, useOdeClient } from '@ccreusat-monorepo/ui-library';
import { MediaLibrary } from '@ccreusat-monorepo/multimedia';
import {
  EditorContent,
  Content,
  JSONContent,
  EditorContext,
} from '@tiptap/react';
import clsx from 'clsx';
import {
  useTipTapEditor,
  useMediaLibraryModal,
  useMathsModal,
  useImageModal,
  useLinkToolbar,
  useSpeechSynthetisis,
} from '../../hooks';
import BubbleMenuEditImage from '../bubble-menu-edit-image/bubble-menu-edit-image';
import { EditorToolbar } from '../editor-toolbar/editor-toolbar';
import { LinkToolbar } from '../toolbar/link-toolbar';
import { TableToolbar } from '../toolbar/table-toolbar';

const MathsModal = lazy(async () => await import('../maths-modal/maths-modal'));
const ImageEditor = lazy(
  async () => await import('../image-editor/image-editor')
);

export interface EditorRef {
  /** Get the current content. */
  getContent: (
    as: 'html' | 'json' | 'plain'
  ) => undefined | string | JSONContent;

  /** Get speech synthetisis current state */
  isSpeeching: () => boolean;
  /** [De]activate speech synthetisis */
  toogleSpeechSynthetisis: () => boolean;
}

/**
 * Editor component properties
 */
export interface EditorProps {
  /** Rich content to render. */
  content: Content;
  /**
   * Rendering mode : `edit` to allow content modifications, or `read` (default)
   * Switching to `edit` mode will also render the toolbar
   * (unless `toolbar` property is `none`).
   */
  mode?: 'edit' | 'read' /* | "preview" */;
  /** Toolbar to display in `edit` mode. */
  toolbar?: 'full' | 'none';
  /** Display with or without a border */
  variant?: 'outline' | 'ghost';
}

const Editor = forwardRef(
  (
    {
      content,
      mode = 'read',
      toolbar = 'full',
      variant = 'outline',
    }: EditorProps,
    ref: Ref<EditorRef>
  ) => {
    const { appCode } = useOdeClient();
    const { editor, editable } = useTipTapEditor(mode === 'edit', content);
    const { ref: mediaLibraryModalRef, ...mediaLibraryModalHandlers } =
      useMediaLibraryModal(editor);
    const { toggle: toggleMathsModal, ...mathsModalHandlers } =
      useMathsModal(editor);
    const imageModal = useImageModal(editor);
    const linkToolbarHandlers = useLinkToolbar(editor, mediaLibraryModalRef);
    const speechSynthetisis = useSpeechSynthetisis(editor);

    //----- Editor API
    useImperativeHandle(ref, () => ({
      getContent: (as: 'html' | 'json' | 'plain') => {
        switch (as) {
          case 'html':
            return editor?.getHTML();
          case 'json':
            return editor?.getJSON();
          case 'plain':
            return editor?.getText();
          default:
            throw `[Editor] Unknown content format ${as}`;
        }
      },
      toogleSpeechSynthetisis: speechSynthetisis.toggle,
      isSpeeching: () => speechSynthetisis.isActivated,
    }));

    if (!editor) return null;

    const borderClass = clsx(variant === 'outline' && 'border rounded-3');
    const contentClass = clsx(variant === 'outline' && 'py-12 px-16');

    return (
      <EditorContext.Provider
        value={{
          editor,
        }}
      >
        <div className={borderClass}>
          {toolbar !== 'none' && editable && (
            <EditorToolbar
              {...{
                editor,
                mediaLibraryRef: mediaLibraryModalRef,
                toggleMathsModal: toggleMathsModal,
              }}
            />
          )}
          <EditorContent
            editor={editor}
            id="editorContent"
            className={contentClass}
          />
        </div>

        <LinkToolbar editor={editor} {...linkToolbarHandlers} />

        <TableToolbar editor={editor} />

        {editor && (
          <BubbleMenuEditImage
            editor={editor}
            onEditImage={imageModal.handleEdit}
            openEditImage={imageModal.isOpen}
            editable={editable}
          />
        )}

        <Suspense fallback={<LoadingScreen />}>
          {editable && (
            <MediaLibrary
              appCode={appCode}
              ref={mediaLibraryModalRef}
              {...mediaLibraryModalHandlers}
            />
          )}

          {editable && mathsModalHandlers.isOpen && (
            <MathsModal {...mathsModalHandlers} />
          )}

          {editable && imageModal?.isOpen && imageModal?.currentImage && (
            <ImageEditor
              altText={imageModal?.currentImage.alt}
              legend={imageModal?.currentImage.title}
              image={imageModal?.currentImage.src}
              isOpen={imageModal.isOpen}
              onCancel={imageModal.handleCancel}
              onSave={imageModal.handleSave}
              onError={console.error}
            />
          )}
        </Suspense>
      </EditorContext.Provider>
    );
  }
);

export default Editor;
