import type { Meta, StoryObj } from '@storybook/react';
import { AudioRecorder } from './audio-recorder';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof AudioRecorder> = {
  component: AudioRecorder,
  title: 'AudioRecorder',
};
export default meta;
type Story = StoryObj<typeof AudioRecorder>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to AudioRecorder!/gi)).toBeTruthy();
  },
};
