import { Video } from '@ccreusat-monorepo/tiptap-extension-video';
import { ReactNodeViewRenderer } from '@tiptap/react';

const VideoNodeView = (Component: any) =>
  Video.extend({
    addNodeView() {
      return ReactNodeViewRenderer(Component);
    },
  });

export default VideoNodeView;
