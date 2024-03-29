import type { Meta, StoryObj } from '@storybook/react';
import { MediaLibrary } from './media-library';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof MediaLibrary> = {
  component: MediaLibrary,
  title: 'MediaLibrary',
};
export default meta;
type Story = StoryObj<typeof MediaLibrary>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to MediaLibrary!/gi)).toBeTruthy();
  },
};
