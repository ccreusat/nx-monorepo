import type { Meta, StoryObj } from '@storybook/react';
import { NavBarNav } from './navbar-nav';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof NavBarNav> = {
  component: NavBarNav,
  title: 'NavBarNav',
};
export default meta;
type Story = StoryObj<typeof NavBarNav>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to NavBarNav!/gi)).toBeTruthy();
  },
};
