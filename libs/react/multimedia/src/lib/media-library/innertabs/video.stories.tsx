import type { Meta, StoryObj } from '@storybook/react';
import { Video } from './video';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof Video> = {
  component: Video,
  title: 'Video',
};
export default meta;
type Story = StoryObj<typeof Video>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to Video!/gi)).toBeTruthy();
  },
};
