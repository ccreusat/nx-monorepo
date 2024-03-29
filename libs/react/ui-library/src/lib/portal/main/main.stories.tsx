import type { Meta, StoryObj } from '@storybook/react';
import { Main } from './main';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof Main> = {
  component: Main,
  title: 'Main',
};
export default meta;
type Story = StoryObj<typeof Main>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to Main!/gi)).toBeTruthy();
  },
};
