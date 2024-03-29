import Embed from '../../embed/embed';
import { useMediaLibraryContext } from '../media-library.context';

export const Iframe = () => {
  const { setResult } = useMediaLibraryContext();

  const handleOnSuccess = (ressource?: string) => {
    setResult(ressource);
  };

  return <Embed onSuccess={handleOnSuccess}></Embed>;
};
