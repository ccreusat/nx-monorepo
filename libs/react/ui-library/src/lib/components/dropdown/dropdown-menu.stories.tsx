import type { Meta, StoryObj } from '@storybook/react';
import { DropdownMenu } from './dropdown-menu';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof DropdownMenu> = {
  component: DropdownMenu,
  title: 'DropdownMenu',
};
export default meta;
type Story = StoryObj<typeof DropdownMenu>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to DropdownMenu!/gi)).toBeTruthy();
  },
};
