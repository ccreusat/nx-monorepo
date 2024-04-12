import { RafterDown } from '@ccreusat-monorepo/icons';
import {
  Community,
  Disconnect,
  Home,
  MyApps,
  NeoAssistance,
  NeoMessaging,
  NewRelease,
  OneAssistance as Assistance,
  OneMessaging,
  OneProfile,
  Userbook,
} from '@ccreusat-monorepo/icons/nav';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';

import { Badge } from './badge';
import { Navbar } from './navbar';
import { NavBarNav } from './navbar-nav';
import { NavItem } from './nav-item';
import { NavLink } from './nav-link';
import { WidgetAppsBody, WidgetAppsFooter } from './widget-apps';
import { useHelp } from '../help/hooks/use-help';
import SearchEngine from '../search-engine/search-engine';
import useConversation from '../../core/use-conversation/use-conversation';
import useHeader from '../../core/use-header/use-header';
import useUser from '../../core/use-user/use-user';
import Help from '../help/help';
import Avatar from '../../components/avatar/avatar';
import Logo from '../../components/logo/logo';
import {
  Popover,
  PopoverBody,
  PopoverFooter,
} from '../../components/popover/popover';
import VisuallyHidden from '../../components/visually-hidden/visually-hidden';
import { useOdeClient } from '../../providers/ode-client-provider/ode-client-provider';

export interface HeaderProps {
  is1d?: boolean;
  src: string | undefined;
}

export const Header = ({
  is1d = false,
  src = '',
}: HeaderProps): JSX.Element => {
  const { t } = useTranslation();
  const { messages, msgLink, zimbraWorkflow } = useConversation();
  const { user, avatar } = useUser();
  const { currentLanguage, currentApp } = useOdeClient();

  const {
    isModalOpen: isHelpOpen,
    setIsModalOpen: setIsHelpOpen,
    parsedContent,
    parsedHeadline,
    error,
  } = useHelp();

  const classes = clsx('header', {
    'no-2d': is1d,
    'no-1d': !is1d,
  });

  const {
    title,
    bookmarkedApps,
    appsRef,
    isAppsHovered,
    popoverAppsId,
    userAvatar,
    userName,
    welcomeUser,
    communityWorkflow,
    conversationWorflow,
    searchWorkflow,
    isCollapsed,
    toggleCollapsedNav,
    handleLogout,
  } = useHeader({ user, avatar });

  const hasMessages = messages > 0;

  return (
    <header className={classes}>
      {is1d ? (
        <>
          <div className="container-fluid">
            <Navbar>
              <a
                className="navbar-title d-md-none text-truncate h4"
                href={currentApp ? currentApp.address : '/timeline/timeline'}
              >
                {title}
              </a>
              <div className="d-none d-md-inline-flex gap-12 align-items-center">
                <Avatar
                  alt={userName}
                  size="sm"
                  src={`${userAvatar}?thumbnail=32x32`}
                  variant="circle"
                  width="32"
                  height="32"
                />
                <span className="navbar-text">{welcomeUser}</span>
              </div>
              <NavBarNav
                className="gap-8"
                aria-hidden="false"
                aria-label={t('navbar.main.navigation')}
              >
                {conversationWorflow && (
                  <NavItem>
                    <a href="/conversation/conversation" className="nav-link">
                      <OneMessaging className="icon notification" />
                      {hasMessages && <Badge>{messages}</Badge>}
                      <VisuallyHidden>{t('navbar.messages')}</VisuallyHidden>
                    </a>
                  </NavItem>
                )}
                <NavItem>
                  <NavLink
                    link="/userbook/mon-compte"
                    className="dropdown-item"
                    translate={t('navbar.myaccount')}
                  >
                    <OneProfile className="icon user" />
                  </NavLink>
                </NavItem>
                {currentLanguage === 'fr' ? (
                  <NavItem>
                    <button
                      className="nav-link"
                      onClick={() => {
                        setIsHelpOpen(true);
                      }}
                    >
                      <Assistance className="icon help" />
                      <VisuallyHidden>{t('navbar.help')}</VisuallyHidden>
                    </button>

                    <Help
                      isHelpOpen={isHelpOpen}
                      setIsHelpOpen={setIsHelpOpen}
                      parsedContent={parsedContent}
                      parsedHeadline={parsedHeadline}
                      error={error}
                    />
                  </NavItem>
                ) : null}
                <NavItem>
                  <button className="nav-link" onClick={handleLogout}>
                    <Disconnect className="icon logout" />
                    <VisuallyHidden>{t('navbar.disconnect')}</VisuallyHidden>
                  </button>
                </NavItem>
                <NavItem className="d-md-none">
                  <button
                    className="nav-link btn btn-naked"
                    type="button"
                    aria-controls="navbarCollapsed"
                    aria-expanded={!isCollapsed}
                    aria-label={t('navbar.secondary.navigation')}
                    onClick={toggleCollapsedNav}
                  >
                    <RafterDown
                      className="icon rafter-down"
                      width="20"
                      height="20"
                    />
                  </button>
                </NavItem>
              </NavBarNav>
            </Navbar>
          </div>
          <Navbar
            className="no-2d navbar-secondary navbar-expand-md"
            aria-label={t('navbar.secondary.navigation')}
          >
            <div className="container-fluid">
              <div
                className={`collapse navbar-collapse ${
                  !isCollapsed ? 'show' : ''
                }`}
                id="navbarCollapsed"
              >
                <Logo
                  is1d
                  src={`${src}/img/illustrations/logo.png`}
                  translate={t('navbar.home')}
                />

                <NavBarNav className="gap-8">
                  <NavItem>
                    <a href="/timeline/timeline" className="button">
                      <NewRelease color="#fff" className="d-md-none" />
                      <span className="d-inline-block">
                        {t('portal.header.navigation.whatsnew')}
                      </span>
                    </a>
                  </NavItem>
                  <NavItem>
                    <a href="/userbook/annuaire" className="button">
                      <Userbook color="#fff" className="d-md-none" />
                      <span className="d-inline-block">
                        {t('portal.header.navigation.classMembers')}
                      </span>
                    </a>
                  </NavItem>
                  <NavItem>
                    <a href="/welcome" className="button">
                      <MyApps color="#fff" className="d-md-none" />
                      <span className="d-inline-block">
                        {t('portal.header.navigation.myapps')}
                      </span>
                    </a>
                  </NavItem>
                </NavBarNav>
              </div>
            </div>
          </Navbar>
        </>
      ) : (
        <Navbar className="navbar-expand-md">
          <div className="container-fluid">
            <Logo src={`${src}/img/illustrations/logo.png`} />
            <a
              href={currentApp ? currentApp.address : '/timeline/timeline'}
              className="navbar-title text-truncate d-md-none"
            >
              {title}
            </a>
            <ul className="navbar-nav">
              <NavItem>
                <NavLink link="/timeline/timeline" translate={t('navbar.home')}>
                  <Home color="#fff" />
                </NavLink>
              </NavItem>
              <NavItem
                className="position-relative"
                ref={appsRef}
                id={popoverAppsId}
                aria-haspopup="true"
                aria-expanded={isAppsHovered}
              >
                <NavLink link="/welcome" translate={t('navbar.applications')}>
                  <MyApps color="#fff" />
                </NavLink>
                <Popover
                  className="top-100 widget"
                  id={popoverAppsId}
                  isVisible={isAppsHovered}
                >
                  <PopoverBody>
                    <WidgetAppsBody bookmarkedApps={bookmarkedApps} />
                  </PopoverBody>
                  <PopoverFooter className="widget-footer border-top border-ghost">
                    <WidgetAppsFooter />
                  </PopoverFooter>
                </Popover>
              </NavItem>
              {conversationWorflow && (
                <NavItem>
                  <NavLink
                    className="position-relative"
                    link="/conversation/conversation"
                    translate={t('conversation')}
                  >
                    <NeoMessaging color="#fff" />
                    {hasMessages && <Badge>{messages}</Badge>}
                  </NavLink>
                </NavItem>
              )}
              {zimbraWorkflow && (
                <NavItem>
                  <NavLink
                    className="position-relative"
                    link={msgLink}
                    translate={t('conversation')}
                  >
                    <NeoMessaging color="#fff" />
                    {hasMessages && <Badge>{messages}</Badge>}
                  </NavLink>
                </NavItem>
              )}
              {currentLanguage === 'fr' ? (
                <NavItem>
                  <button
                    className="nav-link btn btn-naked"
                    onClick={() => {
                      setIsHelpOpen(true);
                    }}
                  >
                    <NeoAssistance color="#fff" />
                    <VisuallyHidden>{t('support')}</VisuallyHidden>
                  </button>

                  <Help
                    isHelpOpen={isHelpOpen}
                    setIsHelpOpen={setIsHelpOpen}
                    parsedContent={parsedContent}
                    parsedHeadline={parsedHeadline}
                    error={error}
                  />
                </NavItem>
              ) : null}
              <NavItem>
                <div className="dropdown">
                  <button
                    className="nav-link btn btn-naked d-md-none"
                    type="button"
                    aria-controls="dropdown-navbar"
                    aria-expanded={!isCollapsed}
                    aria-label={t('navbar.open.menu')}
                    onClick={toggleCollapsedNav}
                  >
                    <RafterDown
                      className="icon rafter-down"
                      width="20"
                      height="20"
                      color="#fff"
                    />
                  </button>
                  <ul
                    className={`dropdown-menu dropdown-menu-end ${
                      !isCollapsed ? 'show' : ''
                    }`}
                    id="dropdown-navbar"
                  >
                    {communityWorkflow && (
                      <NavItem>
                        <a href="/community" className="nav-link dropdown-item">
                          <Community className="icon community" />
                          <span className="nav-text">
                            {t('navbar.community')}
                          </span>
                        </a>
                      </NavItem>
                    )}
                    {searchWorkflow ? <SearchEngine /> : null}
                    <NavItem>
                      <a
                        href="/userbook/mon-compte"
                        className="nav-link dropdown-item"
                      >
                        <Avatar
                          alt={userName}
                          size="sm"
                          src={`${userAvatar}?thumbnail=32x32`}
                          variant="circle"
                          className="bg-white"
                          width="32"
                          height="32"
                        />
                        <span className="nav-text">
                          {t('navbar.myaccount')}
                        </span>
                      </a>
                    </NavItem>
                    <NavItem>
                      <hr className="dropdown-divider" />
                    </NavItem>
                    <NavItem>
                      <a
                        href="/auth/logout?callback="
                        className="nav-link dropdown-item"
                      >
                        <Disconnect className="icon logout" />
                        <span id="logout-label" className="nav-text">
                          {t('navbar.disconnect')}
                        </span>
                      </a>
                    </NavItem>
                  </ul>
                </div>
              </NavItem>
            </ul>
          </div>
        </Navbar>
      )}
    </header>
  );
};

Header.displayName = 'Header';

export default Header;
