import { useEffect, useState } from 'react';

import { odeServices } from '@ccreusat-monorepo/client';
import { useOdeClient } from '../../providers/ode-client-provider/ode-client-provider';

/** Apply XiTi tracking (navigation). */
export function useXitiTrackPageLoad() {
  const [xitiStatus, setXitiStatus] = useState<string>('pending');
  const { currentApp } = useOdeClient();

  useEffect(() => {
    const trackPageLoad = async () => {
      if (!currentApp) {
        setXitiStatus('[Xiti] Error, currentApp is not defined.');
        return;
      }
      try {
        await odeServices
          .analytics()
          .trackPageLoad(window.location.pathname, currentApp);
        console.info(
          `[Xiti] Success tracking page ${window.location.pathname}`
        );
        setXitiStatus(
          `[Xiti] Success tracking page ${window.location.pathname}`
        );
      } catch (e) {
        console.error('[Xiti] Error Tracking Page Load', e);
        setXitiStatus(`[Xiti] Error Tracking Page Load: ${e}`);
      }
    };
    trackPageLoad();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { xitiStatus };
}

export default useXitiTrackPageLoad;
