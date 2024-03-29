import VideoEmbed from '../../video-embed/video-embed';
import { useMediaLibraryContext } from '../media-library.context';

export const VideoEmbedder = () => {
  const { setResult } = useMediaLibraryContext();

  const handleOnSuccess = (ressource?: string) => {
    setResult(ressource);
  };

  return <VideoEmbed onSuccess={handleOnSuccess}></VideoEmbed>;
};
