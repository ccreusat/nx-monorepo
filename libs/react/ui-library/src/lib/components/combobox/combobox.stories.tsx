import type { Meta, StoryObj } from '@storybook/react';
import { Combobox } from './combobox';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof Combobox> = {
  component: Combobox,
  title: 'Combobox',
};
export default meta;
type Story = StoryObj<typeof Combobox>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to Combobox!/gi)).toBeTruthy();
  },
};
