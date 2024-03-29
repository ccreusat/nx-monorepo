import type { Meta, StoryObj } from '@storybook/react';
import { PopoverFooter } from './popover';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof PopoverFooter> = {
  component: PopoverFooter,
  title: 'PopoverFooter',
};
export default meta;
type Story = StoryObj<typeof PopoverFooter>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to PopoverFooter!/gi)).toBeTruthy();
  },
};
