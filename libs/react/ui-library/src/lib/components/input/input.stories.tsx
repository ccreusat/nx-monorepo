import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './input';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof Input> = {
  component: Input,
  title: 'Input',
};
export default meta;
type Story = StoryObj<typeof Input>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to Input!/gi)).toBeTruthy();
  },
};
