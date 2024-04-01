import type { Meta, StoryObj } from '@storybook/react';
import { AudioRecorderTimer } from './audio-recorder-timer';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof AudioRecorderTimer> = {
  component: AudioRecorderTimer,
  title: 'AudioRecorderTimer',
};
export default meta;
type Story = StoryObj<typeof AudioRecorderTimer>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to AudioRecorderTimer!/gi)).toBeTruthy();
  },
};
