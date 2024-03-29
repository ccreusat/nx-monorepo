import type { Meta, StoryObj } from '@storybook/react';
import { DropdownCheckboxItem } from './dropdown-checkbox-item';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof DropdownCheckboxItem> = {
  component: DropdownCheckboxItem,
  title: 'DropdownCheckboxItem',
};
export default meta;
type Story = StoryObj<typeof DropdownCheckboxItem>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to DropdownCheckboxItem!/gi)).toBeTruthy();
  },
};
