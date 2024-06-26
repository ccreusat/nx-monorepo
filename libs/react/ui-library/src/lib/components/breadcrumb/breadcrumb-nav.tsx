import { forwardRef, ReactNode, Ref } from 'react';

import clsx from 'clsx';
import { IWebApp } from '@ccreusat-monorepo/client';
import { useTranslation } from 'react-i18next';

import useOdeIcons from '../../core/use-ode-icons/use-ode-icons';

export interface BreadcrumbNavProps extends React.ComponentPropsWithRef<'nav'> {
  /**
   * Pass all data about current application
   */
  app: IWebApp;
  /**
   * Children
   */
  children: ReactNode;
  /**
   * Optional class for styling purpose
   */
  className?: string;
}

const BreadcrumbNav = forwardRef(
  ({ children, app, className }: BreadcrumbNavProps, ref: Ref<HTMLElement>) => {
    const { t } = useTranslation();
    const { getIconClass } = useOdeIcons();

    const classes = clsx(
      'd-flex align-items-center mb-0',
      getIconClass(app),
      className
    );

    const style = {
      '--edifice-breadcrumb-divider': '-',
    } as React.CSSProperties;

    return (
      <nav
        ref={ref}
        className={classes}
        aria-label={t('breadcrumb')}
        style={style}
      >
        {children}
      </nav>
    );
  }
);

BreadcrumbNav.displayName = 'BreadcrumbNav';

export default BreadcrumbNav;
