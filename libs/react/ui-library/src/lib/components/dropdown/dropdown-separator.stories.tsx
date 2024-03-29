import type { Meta, StoryObj } from '@storybook/react';
import { DropdownSeparator } from './dropdown-separator';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof DropdownSeparator> = {
  component: DropdownSeparator,
  title: 'DropdownSeparator',
};
export default meta;
type Story = StoryObj<typeof DropdownSeparator>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to DropdownSeparator!/gi)).toBeTruthy();
  },
};
