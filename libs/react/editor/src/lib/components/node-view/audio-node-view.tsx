import { Audio } from '@ccreusat-monorepo/tiptap-extension-audio';
import { ReactNodeViewRenderer } from '@tiptap/react';

const AudioNodeView = (Component: any) =>
  Audio.extend({
    addNodeView() {
      return ReactNodeViewRenderer(Component);
    },
  });

export default AudioNodeView;
