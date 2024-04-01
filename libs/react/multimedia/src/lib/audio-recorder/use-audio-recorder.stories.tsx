import type { Meta, StoryObj } from '@storybook/react';
import { useAudioRecorder } from './use-audio-recorder';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof useAudioRecorder> = {
  component: useAudioRecorder,
  title: 'useAudioRecorder',
};
export default meta;
type Story = StoryObj<typeof useAudioRecorder>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to useAudioRecorder!/gi)).toBeTruthy();
  },
};
