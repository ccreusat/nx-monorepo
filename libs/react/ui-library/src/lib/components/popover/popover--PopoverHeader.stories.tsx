import type { Meta, StoryObj } from '@storybook/react';
import { PopoverHeader } from './popover';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof PopoverHeader> = {
  component: PopoverHeader,
  title: 'PopoverHeader',
};
export default meta;
type Story = StoryObj<typeof PopoverHeader>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to PopoverHeader!/gi)).toBeTruthy();
  },
};
