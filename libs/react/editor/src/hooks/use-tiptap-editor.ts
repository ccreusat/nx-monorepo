import { useEffect } from 'react';

// Import TipTap module overloaded typings (custom commands)
import '@ccreusat-monorepo/tiptap-extension-audio';
import '@ccreusat-monorepo/tiptap-extension-image';
import '@ccreusat-monorepo/tiptap-extension-video';

import { Alert } from '@ccreusat-monorepo/tiptap-extension-alert';
import { FontSize } from '@ccreusat-monorepo/tiptap-extension-font-size';
import { CustomHeading } from '@ccreusat-monorepo/tiptap-extension-heading';
import { CustomHighlight } from '@ccreusat-monorepo/tiptap-extension-highlight';
import { Hyperlink } from '@ccreusat-monorepo/tiptap-extension-hyperlink';
import { Iframe } from '@ccreusat-monorepo/tiptap-extension-iframe';
import { SpeechRecognition } from '@ccreusat-monorepo/tiptap-extension-speech-recognition';
import { SpeechSynthesis } from '@ccreusat-monorepo/tiptap-extension-speech-synthesis';
import { TableCell } from '@ccreusat-monorepo/tiptap-extension-table-cell';
import { useOdeClient } from '@ccreusat-monorepo/ui-library';
import Color from '@tiptap/extension-color';
import Focus from '@tiptap/extension-focus';
import FontFamily from '@tiptap/extension-font-family';
import Subscript from '@tiptap/extension-subscript';
import Superscript from '@tiptap/extension-superscript';
import Table from '@tiptap/extension-table';
import TableHeader from '@tiptap/extension-table-header';
import TableRow from '@tiptap/extension-table-row';
import TextAlign from '@tiptap/extension-text-align';
import TextStyle from '@tiptap/extension-text-style';
import Typography from '@tiptap/extension-typography';
import Underline from '@tiptap/extension-underline';
import { Content, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { Mathematics } from '@tiptap-pro/extension-mathematics';
import AttachmentNodeView from '../components/node-view/attachment-node-view';
import AudioNodeView from '../components/node-view/audio-node-view';
import ImageNodeView from '../components/node-view/image-node-view';
import LinkerNodeView from '../components/node-view/linker-node-view';
import VideoNodeView from '../components/node-view/video-node-view';
import AttachmentRenderer from '../components/renderer/attachment-renderer';
import AudioRenderer from '../components/renderer/audio-renderer';
import LinkerRenderer from '../components/renderer/linker-renderer';
import MediaRenderer from '../components/renderer/media-renderer';

/**
 * Hook that creates a tiptap editor instance,
 * and a function to add rich content from the MediaLibrary.
 *
 * @param isEditable truthy if the editor content should be editable
 * @param content default rich content
 */
export const useTipTapEditor = (editable: boolean, content: Content) => {
  const { currentLanguage } = useOdeClient();

  const editor = useEditor({
    // fix WB-2534
    // TipTap editor must be instantiated in editable mode for table columns to be resizable.
    // It will then be set in the correct editable mode, by a useEffect below.
    editable: true,
    extensions: [
      StarterKit,
      CustomHighlight.configure({
        multicolor: true,
      }),
      Underline,
      TextStyle,
      Color,
      Focus.configure({
        className: 'has-focus',
        mode: 'all',
      }),
      Subscript,
      Superscript,
      Table.configure({
        resizable: true,
      }),
      TableRow,
      TableHeader,
      TableCell,
      TextAlign.configure({
        types: ['heading', 'paragraph', 'custom-image', 'video'],
      }),
      CustomHeading.configure({
        levels: [1, 2],
      }),
      Typography,
      FontSize,
      SpeechRecognition,
      SpeechSynthesis.configure({
        lang:
          currentLanguage?.length === 2
            ? `${currentLanguage}-${currentLanguage.toUpperCase()}` // FIXME very dirty hack for demo
            : 'fr-FR',
      }),
      Iframe,
      Hyperlink,
      FontFamily,
      Mathematics,
      Alert,
      VideoNodeView(MediaRenderer),
      AudioNodeView(AudioRenderer),
      LinkerNodeView(LinkerRenderer),
      ImageNodeView(MediaRenderer),
      AttachmentNodeView(AttachmentRenderer),
    ],
    content,
  });

  useEffect(() => {
    editor?.setEditable(editable);
  }, [editor, editable]);

  useEffect(() => {
    editor?.commands.setContent(content);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [content]);

  return { editor, editable };
};
