import type { Meta, StoryObj } from '@storybook/react';
import { DropdownTrigger } from './dropdown-trigger';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof DropdownTrigger> = {
  component: DropdownTrigger,
  title: 'DropdownTrigger',
};
export default meta;
type Story = StoryObj<typeof DropdownTrigger>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to DropdownTrigger!/gi)).toBeTruthy();
  },
};
