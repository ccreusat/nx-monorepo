import { ReactNode } from 'react';

import { Plus } from '@ccreusat-monorepo/icons';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';

import { useDropzoneContext } from './dropzone.context';
import Button from '../button/button';

const DropzoneFile = ({
  children,
  multiple = false,
}: {
  children: ReactNode;
  multiple?: boolean;
}) => {
  const { t } = useTranslation();
  const { files, inputRef } = useDropzoneContext();

  const hasFiles = files && files.length > 0;

  const classes = clsx('drop-file-wrapper', {
    'd-block': hasFiles,
    'd-none': !hasFiles,
  });

  return (
    <div className={classes}>
      <div className="drop-file-content">
        <div className="add-button p-4">
          <Button
            variant="ghost"
            startIcon={<Plus></Plus>}
            disabled={!multiple}
            onClick={() => inputRef?.current?.click()}
          >
            {t('dropzone.add.more')}
          </Button>
        </div>
      </div>
      <div className="p-8">{children}</div>
    </div>
  );
};

DropzoneFile.displayName = 'Dropzone.File';

export default DropzoneFile;
