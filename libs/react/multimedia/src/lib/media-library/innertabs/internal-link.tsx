import { ILinkedResource } from '@ccreusat-monorepo/client';
import { useTranslation } from 'react-i18next';

import { Checkbox, useToggle } from '@ccreusat-monorepo/ui-library';
import InternalLinker from '../../linker/internal-linker';
import { useMediaLibraryContext } from '../media-library.context';

export type InternalLinkTabProps = {
  target?: '_blank' | null;
  appPrefix?: string | null;
  resourceId?: string | null;
};

export type InternalLinkTabResult = {
  target?: '_blank';
  resources?: ILinkedResource[];
};

export const InternalLink = ({
  target,
  resourceId,
  appPrefix,
}: InternalLinkTabProps) => {
  const { t } = useTranslation();
  const { setResult, setResultCounter, appCode } = useMediaLibraryContext();
  const [isChecked, toggleChecked] = useToggle(target === '_blank');

  const handleSelect = (resources: ILinkedResource[]) => {
    setResult({
      target: isChecked ? '_blank' : undefined,
      resources,
    } as InternalLinkTabResult);
    if (resources && resources.length) {
      setResultCounter(resources.length);
    } else {
      setResultCounter(undefined);
    }
  };

  return (
    <div className="d-flex flex-column flex-fill gap-16">
      <InternalLinker
        appCode={appCode}
        defaultAppCode={appPrefix}
        defaultResourceId={resourceId}
        onSelect={handleSelect}
      ></InternalLinker>
      <Checkbox
        className="align-items-center"
        checked={isChecked}
        label={t('bbm.linker.open.tab')}
        onChange={() => toggleChecked()}
      />
    </div>
  );
};
