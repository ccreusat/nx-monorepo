import type { Meta, StoryObj } from '@storybook/react';
import { Dropzone } from './dropzone';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof Dropzone> = {
  component: Dropzone,
  title: 'Dropzone',
};
export default meta;
type Story = StoryObj<typeof Dropzone>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to Dropzone!/gi)).toBeTruthy();
  },
};
