import type { Meta, StoryObj } from '@storybook/react';
import { PopoverBody } from './popover';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof PopoverBody> = {
  component: PopoverBody,
  title: 'PopoverBody',
};
export default meta;
type Story = StoryObj<typeof PopoverBody>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to PopoverBody!/gi)).toBeTruthy();
  },
};
