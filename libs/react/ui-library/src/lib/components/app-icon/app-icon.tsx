import { forwardRef, Ref } from 'react';

import clsx from 'clsx';
import { IWebApp } from '@ccreusat-monorepo/client';
import useOdeIcons from '../../core/use-ode-icons/use-ode-icons';
import usePaths from '../../core/use-paths/use-paths';
import Image from '../image/image';

export type AppIconSize = '24' | '32' | '40' | '48' | '80' | '160';

export interface AppIconBaseProps {
  /**
   * Define icon size
   */
  size?: AppIconSize;
  /**
   * App information to get code and name
   */
  app?: IWebApp | string;
}

type AppVariants = 'square' | 'circle' | 'rounded';
type SquareVariant = Extract<AppVariants, 'square'>;

type SquareIcon = {
  /**
   * Show icon full width
   */
  iconFit?: 'contain';
  /**
   * Square variant
   */
  variant?: SquareVariant;
};

type VariantsIcon = {
  /**
   * Add padding around icon
   */
  iconFit: 'ratio';
  /**
   * Rounded or Circle variant
   */
  variant: AppVariants;
};

export type VariantsProps = SquareIcon | VariantsIcon;
export type AppIconProps = AppIconBaseProps & VariantsProps;

/**
 * Icon Component used to display the icon of an application
 */
export const AppIcon = forwardRef(
  (
    { app, size = '24', iconFit = 'contain', variant = 'square' }: AppIconProps,
    ref: Ref<SVGSVGElement>
  ) => {
    const { isIconUrl, getIconCode } = useOdeIcons();
    const [, iconPath] = usePaths();

    const isSquare = variant === 'square';
    const isRounded = variant === 'rounded';
    const isCircle = variant === 'circle';
    const isContain = iconFit === 'contain';
    const isRatio = iconFit === 'ratio';

    const iconSizes = {
      'icon-xs': size === '24',
      'icon-sm': size === '40',
      'icon-md': size === '48',
      'icon-lg': size === '80',
      'icon-xl': size === '160',
    };

    const iconVariant = {
      square: isSquare,
      rounded: isRounded,
      'rounded-circle': isCircle,
    };

    const iconFits = {
      'icon-contain': isContain,
      'icon-ratio': isRatio,
    };

    const icon =
      typeof app === 'string'
        ? app
        : app?.icon !== undefined
        ? app.icon
        : 'placeholder';
    const displayName =
      typeof app !== 'string' && app?.displayName !== undefined
        ? app.displayName
        : '';
    const code = app ? getIconCode(app) : '';
    const isIconURL = isIconUrl(icon);

    const appCode = code || 'placeholder';

    const classes = clsx('app-icon', {
      ...iconSizes,
      ...iconVariant,
      ...iconFits,
      [`bg-light-${appCode}`]: appCode && !isContain,
      [`color-app-${appCode}`]: appCode,
    });

    if (isIconURL) {
      return (
        <Image
          src={icon}
          alt={displayName}
          objectFit="contain"
          width={size}
          height={size}
          className="h-full"
        />
      );
    }

    return (
      <div
        className={classes}
        style={{ width: size + 'px', height: size + 'px' }}
      >
        <svg
          ref={ref}
          width={size}
          height={size}
          role="img"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <use xlinkHref={`${iconPath}/apps.svg#${appCode}`} />
        </svg>
      </div>
    );
  }
);

AppIcon.displayName = 'AppIcon';

export default AppIcon;
