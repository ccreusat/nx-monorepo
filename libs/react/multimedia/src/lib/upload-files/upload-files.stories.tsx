import type { Meta, StoryObj } from '@storybook/react';
import { Upload } from './upload-files';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof Upload> = {
  component: Upload,
  title: 'Upload',
};
export default meta;
type Story = StoryObj<typeof Upload>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to Upload!/gi)).toBeTruthy();
  },
};
