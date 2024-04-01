import type { Meta, StoryObj } from '@storybook/react';
import { ColorPickerItem } from './color-picker-item';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof ColorPickerItem> = {
  component: ColorPickerItem,
  title: 'ColorPickerItem',
};
export default meta;
type Story = StoryObj<typeof ColorPickerItem>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to ColorPickerItem!/gi)).toBeTruthy();
  },
};
