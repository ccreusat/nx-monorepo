import { WorkspaceElement } from '@ccreusat-monorepo/client';

import { Dropzone } from '@ccreusat-monorepo/ui-library';
import { MediaLibraryType } from '../media-library';
import { useMediaLibraryContext } from '../media-library.context';
import UploadFiles from '../../upload-files/upload-files';

const acceptedTypes = (type: MediaLibraryType) => {
  const acceptedTypes = [];

  switch (type) {
    case 'audio':
    case 'video':
      acceptedTypes.push('video/*');
      break;
    case 'image':
      acceptedTypes.push('image/*');
      break;
    default:
      break;
  }
  return acceptedTypes;
};

export const Upload = () => {
  const { type, multiple, setResult, setResultCounter, addCancellable } =
    useMediaLibraryContext();

  const handleOnFilesChange = (uploadedFiles: WorkspaceElement[]) => {
    if (uploadedFiles.length) {
      // Uploaded files are subject to cancel action
      addCancellable(uploadedFiles);
      // Uploaded files are subject to success action
      setResultCounter(uploadedFiles.length);
      setResult(uploadedFiles);
    } else {
      setResultCounter(undefined);
      setResult(undefined);
    }
  };

  return (
    <div className="py-8 flex-grow-1">
      <Dropzone multiple={multiple} accept={acceptedTypes(type ?? 'embedder')}>
        <UploadFiles onFilesChange={handleOnFilesChange} />
      </Dropzone>
    </div>
  );
};
