import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './avatar';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof Avatar> = {
  component: Avatar,
  title: 'Avatar',
};
export default meta;
type Story = StoryObj<typeof Avatar>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to Avatar!/gi)).toBeTruthy();
  },
};
