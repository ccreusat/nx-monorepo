import { WorkspaceElement } from '@ccreusat-monorepo/client';

import ImageEditor from '../image-editor/components/image-editor';
import {
  UploadCard,
  customSize,
  useUploadFiles,
} from '@ccreusat-monorepo/ui-library';

export const Upload = ({
  onFilesChange,
}: {
  onFilesChange: (uploadedFiles: WorkspaceElement[]) => void;
}) => {
  const {
    files,
    uploadedFiles,
    status,
    uploadFile,
    removeFile,
    updateImage,
    editingImage,
    setEditingImage,
    getUrl,
  } = useUploadFiles({ handleOnChange: onFilesChange });

  return (
    <>
      {files.map((file) => {
        const resource = uploadedFiles.find(
          (uploadedFile) => uploadedFile.name === file.name
        );

        const item = {
          name: file.name,
          info: {
            type: file.type,
            weight: customSize(file.size || 0, 1),
          },
          src: getUrl(resource, true),
        };

        return (
          <UploadCard
            key={file.name}
            status={status[file.name]}
            item={item}
            onEdit={() => setEditingImage(resource)}
            onRetry={() => uploadFile(file)}
            onDelete={() => removeFile(file)}
          />
        );
      })}
      {editingImage && (
        <ImageEditor
          altText={editingImage.alt}
          legend={editingImage.title}
          image={getUrl(editingImage, true)}
          isOpen={!!editingImage}
          onCancel={() => setEditingImage(undefined)}
          onSave={updateImage}
          onError={console.error}
        />
      )}
    </>
  );
};

Upload.displayName = 'Upload';

export default Upload;
