import type { Meta, StoryObj } from '@storybook/react';
import { IconButton } from './button-icon';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof IconButton> = {
  component: IconButton,
  title: 'IconButton',
};
export default meta;
type Story = StoryObj<typeof IconButton>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to IconButton!/gi)).toBeTruthy();
  },
};
