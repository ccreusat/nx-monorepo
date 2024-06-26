import { Download } from '@ccreusat-monorepo/icons';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';

import { useDropzoneContext } from './dropzone.context';
import Button from '../button/button';

const DropzoneImport = () => {
  const { t } = useTranslation();
  const { files, inputRef } = useDropzoneContext();

  const hasFiles = files && files.length > 0;

  const classes = clsx('import-wrapper', {
    'd-flex': !hasFiles,
    'd-none': hasFiles,
  });

  return (
    <div className={classes}>
      <Download height={48} width={48} />
      <p className="my-16">{t('dropzone.text')}</p>
      <Button onClick={() => inputRef?.current?.click()}>
        {t('dropzone.import')}
      </Button>
    </div>
  );
};

DropzoneImport.displayName = 'Dropzone.Import';

export default DropzoneImport;
