import { IWebApp } from '@ccreusat-monorepo/client';
import { useOdeClient } from '../../providers/ode-client-provider/ode-client-provider';

export function useBookmark(): IWebApp[] | undefined {
  const { sessionQuery } = useOdeClient();

  const set = new Set();
  const bookmarkedApps = sessionQuery?.data?.bookmarkedApps.filter(
    (el: { displayName: unknown }) => {
      const duplicate = set.has(el.displayName);
      set.add(el.displayName);
      return !duplicate;
    }
  );

  return bookmarkedApps;
}

export default useBookmark;
