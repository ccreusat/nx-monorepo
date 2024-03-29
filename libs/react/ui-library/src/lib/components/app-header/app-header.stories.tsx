import type { Meta, StoryObj } from '@storybook/react';
import { AppHeader } from './app-header';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof AppHeader> = {
  component: AppHeader,
  title: 'AppHeader',
};
export default meta;
type Story = StoryObj<typeof AppHeader>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to AppHeader!/gi)).toBeTruthy();
  },
};
