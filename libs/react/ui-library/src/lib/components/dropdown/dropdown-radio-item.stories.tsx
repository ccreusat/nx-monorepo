import type { Meta, StoryObj } from '@storybook/react';
import { DropdownRadioItem } from './dropdown-radio-item';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof DropdownRadioItem> = {
  component: DropdownRadioItem,
  title: 'DropdownRadioItem',
};
export default meta;
type Story = StoryObj<typeof DropdownRadioItem>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to DropdownRadioItem!/gi)).toBeTruthy();
  },
};
