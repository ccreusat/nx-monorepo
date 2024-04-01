import type { Meta, StoryObj } from '@storybook/react';
import { NavItem } from './nav-item';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof NavItem> = {
  component: NavItem,
  title: 'NavItem',
};
export default meta;
type Story = StoryObj<typeof NavItem>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to NavItem!/gi)).toBeTruthy();
  },
};
