import type { Meta, StoryObj } from '@storybook/react';
import { Attachment } from './attachment';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof Attachment> = {
  component: Attachment,
  title: 'Attachment',
};
export default meta;
type Story = StoryObj<typeof Attachment>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to Attachment!/gi)).toBeTruthy();
  },
};
