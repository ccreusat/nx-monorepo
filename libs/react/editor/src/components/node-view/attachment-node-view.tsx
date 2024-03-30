import { Attachment } from '@ccreusat-monorepo/tiptap-extension-attachment';
import { ReactNodeViewRenderer } from '@tiptap/react';

const AttachmentNodeView = (Component: any) =>
  Attachment.extend({
    addNodeView() {
      return ReactNodeViewRenderer(Component);
    },
  });

export default AttachmentNodeView;
