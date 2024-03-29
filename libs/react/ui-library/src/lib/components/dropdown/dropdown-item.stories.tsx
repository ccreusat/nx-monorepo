import type { Meta, StoryObj } from '@storybook/react';
import { DropdownItem } from './dropdown-item';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof DropdownItem> = {
  component: DropdownItem,
  title: 'DropdownItem',
};
export default meta;
type Story = StoryObj<typeof DropdownItem>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to DropdownItem!/gi)).toBeTruthy();
  },
};
