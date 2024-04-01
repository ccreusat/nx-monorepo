import type { Meta, StoryObj } from '@storybook/react';
import { Audio } from './audio';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof Audio> = {
  component: Audio,
  title: 'Audio',
};
export default meta;
type Story = StoryObj<typeof Audio>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to Audio!/gi)).toBeTruthy();
  },
};
