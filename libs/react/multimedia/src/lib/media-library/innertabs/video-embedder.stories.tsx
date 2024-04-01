import type { Meta, StoryObj } from '@storybook/react';
import { VideoEmbedder } from './video-embedder';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof VideoEmbedder> = {
  component: VideoEmbedder,
  title: 'VideoEmbedder',
};
export default meta;
type Story = StoryObj<typeof VideoEmbedder>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to VideoEmbedder!/gi)).toBeTruthy();
  },
};
