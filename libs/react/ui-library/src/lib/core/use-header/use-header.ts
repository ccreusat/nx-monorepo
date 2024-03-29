import { useState, useId, useCallback, useMemo } from 'react';

import { IUserInfo, odeServices } from '@ccreusat-monorepo/client';
import { useTranslation } from 'react-i18next';

import { useOdeClient } from '../../providers/ode-client-provider/ode-client-provider';
import useBookmark from '../use-bookmark/use-bookmark';
import useHasWorkflow from '../use-has-workflow/use-has-workflow';
import useHover from '../../hooks/use-hover/use-hover';

export function useHeader({
  user,
  avatar,
}: {
  user: IUserInfo | undefined;
  avatar: string;
}): any {
  const { appCode } = useOdeClient();
  const { t } = useTranslation();

  /**
   * Get document title for responsive usage
   */
  const title = t(appCode);

  /**
   * Collapse helper for Responsive
   */
  const [isCollapsed, setIsCollapsed] = useState<boolean>(true);

  /**
   * useHover hook
   */
  const [appsRef, isAppsHovered] = useHover<HTMLLIElement>();

  /**
   * IDs for Popover Component
   */
  const popoverAppsId = useId();
  const popoverSearchId = useId();

  /**
   * Get user info: avatar, username and welcome message
   */
  const userAvatar = avatar;
  const userName = user?.username;

  const welcomeUser = t('welcome', { username: user?.firstName });

  /**
   * Get Bookmarked Apps
   */
  const bookmarkedApps = useBookmark();

  /**
   * Handle Header Workflows
   */
  const communityWorkflow = useHasWorkflow(
    'net.atos.entng.community.controllers.CommunityController|view'
  );
  const conversationWorflow = useHasWorkflow(
    'org.entcore.conversation.controllers.ConversationController|view'
  );
  const searchWorkflow = useHasWorkflow(
    'fr.openent.searchengine.controllers.SearchEngineController|view'
  );

  const toggleCollapsedNav = useCallback(() => {
    setIsCollapsed(!isCollapsed);
  }, [isCollapsed]);

  const handleLogout = async () => {
    await odeServices.session().logout();
    window.location.href = '/auth/login';
  };

  return useMemo(
    () => ({
      title,
      bookmarkedApps,
      appsRef,
      isAppsHovered,
      popoverAppsId,
      popoverSearchId,
      userAvatar,
      userName,
      welcomeUser,
      communityWorkflow,
      conversationWorflow,
      searchWorkflow,
      isCollapsed,
      toggleCollapsedNav,
      handleLogout,
    }),
    [
      appsRef,
      bookmarkedApps,
      communityWorkflow,
      conversationWorflow,
      isAppsHovered,
      isCollapsed,
      popoverAppsId,
      popoverSearchId,
      searchWorkflow,
      title,
      toggleCollapsedNav,
      userAvatar,
      userName,
      welcomeUser,
    ]
  );
}

export default useHeader;
