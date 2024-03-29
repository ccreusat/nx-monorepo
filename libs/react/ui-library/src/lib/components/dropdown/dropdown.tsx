import { ReactNode, useMemo } from 'react';

import { Placement } from '@floating-ui/react';
import clsx from 'clsx';

import DropdownCheckboxItem from './dropdown-checkbox-item';
import { DropdownContext } from './dropdown.context';
import DropdownItem from './dropdown-item';
import DropdownMenu from './dropdown-menu';
import DropdownMenuGroup from './dropdown-menu-group';
import DropdownRadioItem from './dropdown-radio-item';
import DropdownSeparator from './dropdown-separator';
import DropdownTrigger from './dropdown-trigger';
import useDropdown from '../../hooks/use-dropdown/use-dropdown';
import useClickOutside from '../../hooks/use-click-outside/use-click-outside';

export interface DropdownProps {
  /** Children Props */
  children: ReactNode | ((...props: any) => ReactNode);
  /** Full width Dropdown */
  block?: boolean;
  /**
   * Add overflow and maxHeight
   */
  overflow?: boolean;
  /**
   * Default placement with FloatingUI
   */
  placement?: Placement;
  /**
   * Extra keydown handler for the Dropdown Trigger.
   * Useful for a11y keyboard navigation between a Dropdown element and other elements,
   * for example in the Toolbar component.
   */
  extraTriggerKeyDownHandler?: (
    event: React.KeyboardEvent<HTMLButtonElement>
  ) => void;
}

export type DropdownMenuOptions =
  | {
      /**
       * Object type
       */
      type?: undefined;
      /**
       * Icon component
       */
      icon: JSX.Element;
      /**
       * Label for a11y
       */
      label: string;
      /**
       * Action OnClick
       */
      action: (elem: any) => any;
    }
  | {
      /**
       * Object type
       */
      type: 'divider';
    };

const Root = ({
  children,
  block,
  overflow = true,
  placement = 'bottom-start',
  extraTriggerKeyDownHandler,
}: DropdownProps) => {
  const {
    visible,
    isFocused,
    triggerProps,
    menuProps,
    itemProps,
    itemRefs,
    setVisible,
  } = useDropdown(placement, extraTriggerKeyDownHandler);

  /* Ref to close dropdown when clicking outside */
  const ref = useClickOutside(() => setVisible(false));

  const value = useMemo(
    () => ({
      visible,
      isFocused,
      triggerProps,
      menuProps,
      itemProps,
      itemRefs,
      block,
      setVisible,
    }),
    [
      visible,
      isFocused,
      triggerProps,
      menuProps,
      itemProps,
      itemRefs,
      block,
      setVisible,
    ]
  );

  const dropdown = clsx('dropdown', {
    'w-100': block,
    overflow,
  });

  return (
    <DropdownContext.Provider value={value}>
      <div ref={ref} className={dropdown}>
        {typeof children === 'function'
          ? children(triggerProps, itemRefs)
          : children}
      </div>
    </DropdownContext.Provider>
  );
};

Root.displayName = 'Dropdown';

/* Compound Components */
export const Dropdown = Object.assign(Root, {
  Trigger: DropdownTrigger,
  Menu: DropdownMenu,
  Item: DropdownItem,
  Separator: DropdownSeparator,
  CheckboxItem: DropdownCheckboxItem,
  RadioItem: DropdownRadioItem,
  MenuGroup: DropdownMenuGroup,
});

export default Dropdown;
