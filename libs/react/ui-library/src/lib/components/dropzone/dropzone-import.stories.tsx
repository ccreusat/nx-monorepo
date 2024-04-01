import type { Meta, StoryObj } from '@storybook/react';
import { DropzoneImport } from './dropzone-import';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof DropzoneImport> = {
  component: DropzoneImport,
  title: 'DropzoneImport',
};
export default meta;
type Story = StoryObj<typeof DropzoneImport>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to DropzoneImport!/gi)).toBeTruthy();
  },
};
