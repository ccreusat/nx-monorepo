import { ReactNode, useMemo } from 'react';

import clsx from 'clsx';

import { DropzoneContext } from './dropzone.context';
import DropzoneDrag from './dropzone-drag';
import DropzoneFile from './dropzone-file';
import DropzoneImport from './dropzone-import';
import useDropzone from '../../hooks/use-dropzone/use-dropzone';

interface DropzoneProps {
  className?: string;
  accept?: string[];
  multiple?: boolean;
  handle?: boolean;
  children?: ReactNode;
}

export const Dropzone = ({
  className,
  accept,
  multiple = true,
  handle = false,
  children,
}: DropzoneProps) => {
  const {
    inputRef,
    dragging,
    files,
    addFile,
    deleteFile,
    handleDragLeave,
    handleDragging,
    handleDrop,
    handleOnChange,
  } = useDropzone();

  const classes = clsx(
    'dropzone',
    {
      'is-dragging': !multiple ? files.length < 1 && dragging : dragging,
      'is-drop-files': files.length !== 0 && !handle ? false : true,
    },
    className
  );

  const value = useMemo(
    () => ({
      inputRef,
      files,
      addFile,
      deleteFile,
    }),
    [addFile, deleteFile, files, inputRef]
  );

  return (
    <DropzoneContext.Provider value={value}>
      <div
        className={classes}
        onDragEnter={handleDragging}
        onDragOver={handleDragging}
        onDragLeave={handleDragLeave}
        onDrop={files.length > 0 && !multiple ? undefined : handleDrop}
      >
        <div className="align-center">
          {!handle ? (
            <>
              <Dropzone.File>{children}</Dropzone.File>
              <Dropzone.Import />
            </>
          ) : null}
          <Dropzone.Drag />
        </div>
        <input
          ref={inputRef}
          accept={accept?.join(',')}
          multiple={multiple}
          type="file"
          name="attachment-input"
          id="attachment-input"
          onChange={handleOnChange}
          hidden
        />
      </div>
    </DropzoneContext.Provider>
  );
};

Dropzone.File = DropzoneFile;
Dropzone.Import = DropzoneImport;
Dropzone.Drag = DropzoneDrag;

Dropzone.displayName = 'Dropzone';

export default Dropzone;
