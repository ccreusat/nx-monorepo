/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useRef } from 'react';

import { Image } from '@ccreusat-monorepo/ui-library';
import { NodeViewWrapper } from '@tiptap/react';
import { useTranslation } from 'react-i18next';

import { MediaResizeProps, useResizeMedia } from '../../hooks';

const MediaRenderer = (props: MediaResizeProps) => {
  const { node } = props;

  const { t } = useTranslation();

  const resizableMedia = useRef<HTMLImageElement | HTMLVideoElement>(null);

  const { startVerticalResize, stopVerticalResize, isVerticalResizeActive } =
    useResizeMedia(props, resizableMedia);

  const alignContent = (textalign: string) => {
    switch (textalign) {
      case 'center':
      case 'justify':
        return {
          marginLeft: 'auto',
          marginRight: 'auto',
          width: 'fit-content',
        };
      case 'left':
        return { marginRight: 'auto', width: 'fit-content' };
      case 'right':
        return { marginLeft: 'auto', width: 'fit-content' };
      default:
        return {};
    }
  };

  return (
    <NodeViewWrapper style={alignContent(node.attrs.textAlign)}>
      <div className="media-node-view">
        <div data-drag-handle>
          {node.type.name === 'custom-image' ? (
            <Image
              {...node.attrs}
              className={`custom-image`}
              ref={resizableMedia as React.RefObject<HTMLImageElement>}
            />
          ) : (
            // eslint-disable-next-line jsx-a11y/media-has-caption
            <video
              ref={resizableMedia as React.RefObject<HTMLVideoElement>}
              controls={node.attrs.controls}
              src={node.attrs.src}
              width={node.attrs.width}
              height={node.attrs.height}
              data-video-resolution={`${node.attrs.width}x${node.attrs.height}`}
              data-document-id={node.attrs.documentId}
              data-document-is-captation={node.attrs.isCaptation}
            >
              <source src={node.attrs.src} />
            </video>
          )}
        </div>

        <div
          className={`vertical-resize-handle ${
            isVerticalResizeActive ? 'vertical-resize-active' : ''
          }`}
          title={t('tiptap.media.resize')}
          onMouseDown={(e) => startVerticalResize(e)}
          onMouseUp={() => stopVerticalResize}
        />
      </div>
    </NodeViewWrapper>
  );
};

export default MediaRenderer;
