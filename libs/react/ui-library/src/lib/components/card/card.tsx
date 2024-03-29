import { forwardRef, ReactNode, Ref, useMemo } from 'react';

import clsx from 'clsx';
import { IWebApp } from '@ccreusat-monorepo/client';

import CardBody from './card-body';
import { CardContext } from './card.context';
import CardFooter from './card-footer';
import CardHeader from './card-header';
import CardImage from './card-image';
import CardText from './card-text';
import CardTitle from './card-title';
import CardUser from './card-user';
import useOdeIcons from '../../core/use-ode-icons/use-ode-icons';

export interface CardProps {
  /**
   * IWebApp
   */
  app?: IWebApp | undefined;
  /**
   * Has option
   */
  isSelectable?: boolean;
  /**
   * Action on Card
   */
  isClickable?: boolean;
  /**
   * Selected state
   */
  isSelected?: boolean;
  /**
   * Click on card
   */
  onClick?: (item?: any) => void;
  /**
   * Select a card with option menu
   */
  onSelect?: () => void;
  /* Children Node */
  children?: ReactNode | ((...props: any) => ReactNode);
  /**
   * Optional class for styling purpose
   */
  className?: string;
}

const Root = forwardRef(
  (
    {
      app,
      isSelectable = true,
      isClickable = true,
      isSelected = false,
      onClick,
      onSelect,
      children,
      className,
    }: CardProps,
    ref: Ref<HTMLDivElement>
  ) => {
    const { getIconCode } = useOdeIcons();
    const appCode = app ? getIconCode(app) : 'placeholder';

    const values = useMemo(
      () => ({
        app,
        appCode,
        isSelectable,
        isClickable,
        onClick,
        onSelect,
      }),
      [app, appCode, isSelectable, isClickable, onClick, onSelect]
    );
    return (
      <CardContext.Provider value={values}>
        <div
          ref={ref}
          className={clsx(
            'card',
            {
              'is-selected': isSelected,
              'c-pointer': isClickable,
            },
            className
          )}
        >
          <Card.Header />
          {typeof children === 'function' ? children(appCode) : children}
        </div>
      </CardContext.Provider>
    );
  }
);

Root.displayName = 'Card';

export const Card = Object.assign(Root, {
  Title: CardTitle,
  Text: CardText,
  Image: CardImage,
  Body: CardBody,
  User: CardUser,
  Footer: CardFooter,
  Header: CardHeader,
});

export default Card;
