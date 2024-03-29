import React, { useEffect, useRef } from 'react';

import { odeServices, LAYER_NAME } from '@ccreusat-monorepo/client';
import { useTranslation } from 'react-i18next';

import useToast, { CustomToastOptions } from '../../hooks/use-toast/use-toast';

export const useHttpErrorToast = (options?: CustomToastOptions) => {
  const message = useRef<string>();
  const toast = useToast();
  const { t } = useTranslation();

  useEffect(() => {
    const subscription = odeServices
      .notify()
      .events()
      .subscribe(LAYER_NAME.TRANSPORT, (event) => {
        message.current = t(
          event?.data?.payload?.error || event.data.response.statusText
        );
        toast.error(
          React.createElement('div', { children: [message.current] }),
          options
        );
      });

    return () => subscription.revoke();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [t, toast]);

  return message.current;
};

export default useHttpErrorToast;
