import { useCallback, useEffect, useState } from 'react';

import {
  App,
  GetContextParameters,
  odeServices,
  SnipletsService,
} from '@ccreusat-monorepo/client';
/*
 * Augmented definition of a resource, until behaviours are dropped.
 * The path would otherwise be found by using `IWebResourceService.getViewUrl(resource)`
 */
import { ILinkedResource } from '@ccreusat-monorepo/client';

/**
 * A hook to search for resources produced by applications.
 *
 * @param appCode Currently running application.
 * @returns An object with 2 fields :
 *
 * `resourceApplications: Array<App>`
 * Resources-producing applications the user can use.
 *
 * `loadResources: (filters:GetContextParameters) => void`
 * A search method with filters.
 *
 * Note : until all applications are using the explorer main page,
 * only the first resource of the `filter.types` array will be considered while searching.
 */
export const useResourceSearch = (appCode: App) => {
  // Resources-producing applications the user can use
  const [resourceApplications, setResourceApplications] = useState<App[]>([]);

  // Init services, only once
  useEffect(() => {
    (async () => {
      try {
        await SnipletsService.initialize(odeServices, appCode);
      } catch (error) {
        console.error(error);
      }
      await SnipletsService.registerBehaviours(appCode);
      setResourceApplications(SnipletsService.resourceProducingApps);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadResources = useCallback(
    async (filters: GetContextParameters) => {
      const [resourceType] = filters.types;
      // If mocked data is available, use it. Otherwise load from server.
      const payload = await odeServices
        .resource(appCode, resourceType)
        .searchContext(filters)
        .then((results) => results.resources);

      return payload;
    },
    [appCode]
  );

  return { resourceApplications, loadResources } as {
    resourceApplications: Array<App>;
    loadResources: (
      filters: GetContextParameters
    ) => Promise<ILinkedResource[]>;
  };
};

export default useResourceSearch;
