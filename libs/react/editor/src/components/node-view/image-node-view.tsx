import { CustomImage } from '@ccreusat-monorepo/tiptap-extension-image';
import { ReactNodeViewRenderer } from '@tiptap/react';

const ImageNodeView = (Component: any) =>
  CustomImage.extend({
    addNodeView() {
      return ReactNodeViewRenderer(Component);
    },
  });

export default ImageNodeView;
