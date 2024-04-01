import type { Meta, StoryObj } from '@storybook/react';
import { NavLink } from './nav-link';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof NavLink> = {
  component: NavLink,
  title: 'NavLink',
};
export default meta;
type Story = StoryObj<typeof NavLink>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to NavLink!/gi)).toBeTruthy();
  },
};
