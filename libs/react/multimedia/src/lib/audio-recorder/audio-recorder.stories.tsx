import type { Meta, StoryObj } from '@storybook/react';
import { AudioRecorder } from './audio-recorder';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof AudioRecorder> = {
  title: 'Multimedia/AudioRecorder',
  component: AudioRecorder,
  parameters: {
    docs: {
      description: {
        component:
          'Audio recorder component that allows user to record an audio through the micro device.',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof AudioRecorder>;

export const Base: Story = {};
