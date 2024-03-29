import { useCallback, useEffect, useState } from 'react';

import { odeServices } from '@ccreusat-monorepo/client';

export function useIsAdml() {
  const [isAdml, setIsAdml] = useState(false);

  useEffect(() => {
    initIsAdml();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const initIsAdml = useCallback(async () => {
    const isAdmlRes = await odeServices.session().isAdml();
    setIsAdml(isAdmlRes);
  }, []);

  return {
    isAdml,
  };
}

export default useIsAdml;
