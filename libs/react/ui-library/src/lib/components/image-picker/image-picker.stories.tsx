import type { Meta, StoryObj } from '@storybook/react';
import { ImagePicker } from './image-picker';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof ImagePicker> = {
  component: ImagePicker,
  title: 'ImagePicker',
};
export default meta;
type Story = StoryObj<typeof ImagePicker>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to ImagePicker!/gi)).toBeTruthy();
  },
};
