import { ShareRight } from '@ccreusat-monorepo/client';

export const showShareRightLine = (
  shareRight: ShareRight,
  showBookmarkMembers: boolean
): boolean =>
  (shareRight.isBookmarkMember && showBookmarkMembers) ||
  !shareRight.isBookmarkMember;
