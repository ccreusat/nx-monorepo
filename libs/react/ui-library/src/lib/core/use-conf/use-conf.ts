import { useQuery } from '@tanstack/react-query';
import { App, IGetConf, odeServices } from '@ccreusat-monorepo/client';

export function useConf({ appCode }: { appCode: App }) {
  return useQuery<IGetConf>({
    queryKey: ['conf'],
    queryFn: async () => await odeServices.conf().getConf(appCode),
  });
}

export default useConf;
