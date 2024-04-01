import type { Meta, StoryObj } from '@storybook/react';
import { ImageEditorToolbar } from './image-editor-toolbar';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof ImageEditorToolbar> = {
  component: ImageEditorToolbar,
  title: 'ImageEditorToolbar',
};
export default meta;
type Story = StoryObj<typeof ImageEditorToolbar>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to ImageEditorToolbar!/gi)).toBeTruthy();
  },
};
