import type { Meta, StoryObj } from '@storybook/react';
import { ImageEditor } from './image-editor';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof ImageEditor> = {
  component: ImageEditor,
  title: 'ImageEditor',
};
export default meta;
type Story = StoryObj<typeof ImageEditor>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to ImageEditor!/gi)).toBeTruthy();
  },
};
