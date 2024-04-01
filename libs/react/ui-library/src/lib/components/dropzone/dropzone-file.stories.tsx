import type { Meta, StoryObj } from '@storybook/react';
import { DropzoneFile } from './dropzone-file';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof DropzoneFile> = {
  component: DropzoneFile,
  title: 'DropzoneFile',
};
export default meta;
type Story = StoryObj<typeof DropzoneFile>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to DropzoneFile!/gi)).toBeTruthy();
  },
};
