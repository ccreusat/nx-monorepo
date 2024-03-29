import type { Meta, StoryObj } from '@storybook/react';
import { VideoEmbed } from './video-embed';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof VideoEmbed> = {
  component: VideoEmbed,
  title: 'VideoEmbed',
};
export default meta;
type Story = StoryObj<typeof VideoEmbed>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to VideoEmbed!/gi)).toBeTruthy();
  },
};
