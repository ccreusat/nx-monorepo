import type { Meta, StoryObj } from '@storybook/react';
import { Toolbar } from './toolbar';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof Toolbar> = {
  component: Toolbar,
  title: 'Toolbar',
};
export default meta;
type Story = StoryObj<typeof Toolbar>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to Toolbar!/gi)).toBeTruthy();
  },
};
