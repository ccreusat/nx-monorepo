import type { Meta, StoryObj } from '@storybook/react';
import { AppIcon } from './app-icon';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof AppIcon> = {
  component: AppIcon,
  title: 'AppIcon',
};
export default meta;
type Story = StoryObj<typeof AppIcon>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to AppIcon!/gi)).toBeTruthy();
  },
};
