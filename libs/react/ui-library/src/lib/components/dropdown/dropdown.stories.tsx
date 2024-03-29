import type { Meta, StoryObj } from '@storybook/react';
import { Dropdown } from './dropdown';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof Dropdown> = {
  component: Dropdown,
  title: 'Dropdown',
};
export default meta;
type Story = StoryObj<typeof Dropdown>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to Dropdown!/gi)).toBeTruthy();
  },
};
