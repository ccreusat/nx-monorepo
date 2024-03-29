import type { Meta, StoryObj } from '@storybook/react';
import { DropdownMenuGroup } from './dropdown-menu-group';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof DropdownMenuGroup> = {
  component: DropdownMenuGroup,
  title: 'DropdownMenuGroup',
};
export default meta;
type Story = StoryObj<typeof DropdownMenuGroup>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to DropdownMenuGroup!/gi)).toBeTruthy();
  },
};
