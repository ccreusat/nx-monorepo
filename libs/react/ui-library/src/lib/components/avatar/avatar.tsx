import { forwardRef, Ref } from 'react';

import clsx from 'clsx';

import usePaths from '../../core/use-paths/use-paths';
import Image from '../image/image';

export type AvatarVariants = 'square' | 'rounded' | 'circle';
export type AvatarSizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface AvatarProps extends React.ComponentPropsWithRef<'img'> {
  /**
   * Shape of Avatar
   * `title`, `square`, `circle`
   */
  variant?: AvatarVariants;
  /**
   * Avatar' size
   */
  size?: AvatarSizes;
  /**
   * Show image when `src` props is provided
   */
  src?: string;
  /**
   * Custom fallback image
   */
  imgPlaceholder?: string;
  /**
   * Alternative text when using image
   */
  alt: string;
  /**
   * Optional class for styling purpose
   */
  className?: string;
}

export const Avatar = forwardRef(
  (
    {
      variant = 'square',
      size = 'md',
      alt,
      src,
      imgPlaceholder,
      className,
      ...restProps
    }: AvatarProps,
    ref: Ref<HTMLDivElement>
  ) => {
    const [imagePath] = usePaths();
    const placeholder = imgPlaceholder || `${imagePath}/avatar/no-avatar.svg`;

    const isSquare = variant === 'square';
    const isRounded = variant === 'rounded';
    const isCircle = variant === 'circle';

    const avatarSizes = {
      'avatar-xs': size === 'xs',
      'avatar-sm': size === 'sm',
      'avatar-md': size === 'md',
      'avatar-lg': size === 'lg',
      'avatar-xl': size === 'xl',
    };

    const avatarVariants = {
      square: isSquare,
      rounded: isRounded,
      'rounded-circle': isCircle,
    };

    const classes = clsx(
      'avatar',
      {
        ...avatarSizes,
        ...avatarVariants,
      },
      className
    );

    return (
      <div ref={ref} className={classes}>
        <Image
          src={src || placeholder}
          alt={alt}
          imgPlaceholder={placeholder}
          {...restProps}
        />
      </div>
    );
  }
);

Avatar.displayName = 'Avatar';

export default Avatar;
