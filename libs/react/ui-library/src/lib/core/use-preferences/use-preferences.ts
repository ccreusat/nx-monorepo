import { odeServices } from '@ccreusat-monorepo/client';

export function usePreferences(name: string) {
  const getPreference = async (): Promise<any> => {
    const res = await odeServices.conf().getPreference(name);
    return res;
  };

  const savePreference = async (value: any): Promise<void> => {
    const res = await odeServices
      .conf()
      .savePreference(name, JSON.stringify(value));
    return res;
  };

  return { getPreference, savePreference };
}

export default usePreferences;
