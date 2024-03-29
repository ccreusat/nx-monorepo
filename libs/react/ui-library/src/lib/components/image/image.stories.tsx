import type { Meta, StoryObj } from '@storybook/react';
import { Image } from './image';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof Image> = {
  component: Image,
  title: 'Image',
};
export default meta;
type Story = StoryObj<typeof Image>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to Image!/gi)).toBeTruthy();
  },
};
