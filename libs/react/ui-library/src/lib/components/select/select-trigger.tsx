import { RefAttributes } from 'react';

import { JSX } from 'react/jsx-runtime';

import Dropdown from '../dropdown/dropdown';
import { DropdownTriggerProps } from '../dropdown/dropdown-trigger';

export const SelectTrigger = (
  props: JSX.IntrinsicAttributes &
    Omit<DropdownTriggerProps, 'ref'> &
    RefAttributes<HTMLButtonElement>
) => {
  return (
    <Dropdown.Trigger {...props} aria-haspopup="listbox" role="combobox" />
  );
};

SelectTrigger.displayName = 'SelectTrigger';
export default SelectTrigger;
