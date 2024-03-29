import type { Meta, StoryObj } from '@storybook/react';
import { FileIcon } from './file-icon';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof FileIcon> = {
  component: FileIcon,
  title: 'FileIcon',
};
export default meta;
type Story = StoryObj<typeof FileIcon>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to FileIcon!/gi)).toBeTruthy();
  },
};
