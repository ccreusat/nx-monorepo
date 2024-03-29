import { IUserDescription, IUserInfo } from '@ccreusat-monorepo/client';
import { useOdeClient } from '../../providers/ode-client-provider/ode-client-provider';
import { useOdeTheme } from '../../providers/theme-provider/theme-provider';

export interface useUserProps {
  user: IUserInfo | undefined;
  avatar: string;
  userDescription: IUserDescription | undefined;
}

export function useUser(): useUserProps {
  const { user, userDescription, userProfile } = useOdeClient();
  const { theme } = useOdeTheme();

  function avatarUrl(): string {
    let avatar = userDescription?.picture;
    if (!avatar || avatar === 'no-avatar.jpg' || avatar === 'no-avatar.svg') {
      avatar = `${theme?.basePath}/img/illustrations/no-avatar.svg`;
    }
    return avatar;
  }

  return {
    user: {
      ...user,
      type: userProfile,
    },
    avatar: avatarUrl(),
    userDescription,
  };
}

export default useUser;
