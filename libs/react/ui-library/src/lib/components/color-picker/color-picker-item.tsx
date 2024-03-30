import { DeleteColor } from '@ccreusat-monorepo/icons';
import clsx from 'clsx';

import { ColorPaletteItem } from './color-palette';

export interface ColorPickerItemProps {
  /**
   * Color item to display
   */
  model: ColorPaletteItem;
  /**
   * Render as selected
   */
  selected?: boolean;
  /**
   * Optional class for styling purpose
   */
  className?: string;
}

export const ColorPickerItem = ({
  model,
  selected,
  className,
}: ColorPickerItemProps) =>
  model.isReset ? (
    <DeleteColor />
  ) : (
    <div
      aria-label={model.description}
      className={clsx(
        'color-picker-hue-color-item rounded-1',
        className,
        model.hue === 'light' ? 'light' : 'dark',
        selected && 'selected'
      )}
      style={{ backgroundColor: model.value }}
    ></div>
  );

ColorPickerItem.displayName = 'ColorPickerItem';

export default ColorPickerItem;
