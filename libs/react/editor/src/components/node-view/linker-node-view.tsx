import { Linker } from '@ccreusat-monorepo/tiptap-extension-linker';
import { ReactNodeViewRenderer } from '@tiptap/react';

const LinkerNodeView = (Component: any) =>
  Linker.extend({
    addNodeView() {
      return ReactNodeViewRenderer(Component);
    },
  });

export default LinkerNodeView;
