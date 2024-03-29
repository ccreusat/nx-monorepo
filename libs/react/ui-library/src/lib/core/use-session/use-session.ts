import { useQuery } from '@tanstack/react-query';
import { IGetSession, odeServices } from '@ccreusat-monorepo/client';

export function useSession() {
  return useQuery<IGetSession>({
    queryKey: ['session'],
    queryFn: async () => await odeServices.session().getSession(),
  });
}

export default useSession;
