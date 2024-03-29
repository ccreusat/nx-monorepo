import type { Meta, StoryObj } from '@storybook/react';
import { ActionBar } from './action-bar';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof ActionBar> = {
  component: ActionBar,
  title: 'ActionBar',
};
export default meta;
type Story = StoryObj<typeof ActionBar>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to ActionBar!/gi)).toBeTruthy();
  },
};
