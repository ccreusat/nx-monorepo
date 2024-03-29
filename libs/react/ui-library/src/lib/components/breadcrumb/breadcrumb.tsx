import { forwardRef, Ref } from 'react';

import { RafterRight } from '@ccreusat-monorepo/icons';
import { IWebApp } from '@ccreusat-monorepo/client';
import { useTranslation } from 'react-i18next';

import BreadcrumbItem from './breadcrumb-item';
import BreadcrumbList from './breadcrumb-list';
import BreadcrumbNav from './breadcrumb-nav';
import Heading from '../heading/heading';
import AppIcon from '../app-icon/app-icon';

export interface BreadcrumbProps {
  /**
   * Pass all data about current application
   */
  app: IWebApp;
  /**
   * Show name of the current resource
   */
  name?: string;
}

export const Breadcrumb = forwardRef(
  ({ app, name }: BreadcrumbProps, ref: Ref<HTMLElement>) => {
    const { t } = useTranslation();

    return (
      <BreadcrumbNav app={app} ref={ref} className="mw-100">
        <BreadcrumbList className="gap-12 mw-100">
          {name ? (
            <>
              <BreadcrumbItem>
                <a href={app?.address} className="d-flex">
                  <AppIcon app={app} size="40" />
                </a>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <RafterRight
                  color="var(--edifice-gray-600)"
                  width={20}
                  height={20}
                />
              </BreadcrumbItem>
              <BreadcrumbItem className="text-truncate">
                <Heading level="h1" headingStyle="h3" className="text-truncate">
                  {name}
                </Heading>
              </BreadcrumbItem>
            </>
          ) : (
            <BreadcrumbItem className="gap-12 d-flex align-items-center">
              <a href={app?.address} className="d-flex">
                <AppIcon app={app} size="40" />
              </a>
              <Heading
                level="h1"
                headingStyle="h3"
                className="d-none d-md-flex"
              >
                {t(app?.displayName)}
              </Heading>
            </BreadcrumbItem>
          )}
        </BreadcrumbList>
      </BreadcrumbNav>
    );
  }
);

Breadcrumb.displayName = 'Breadcrumb';

export default Breadcrumb;
