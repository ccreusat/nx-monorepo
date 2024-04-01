import type { Meta, StoryObj } from '@storybook/react';
import { options } from './use-help';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof options> = {
  component: options,
  title: 'options',
};
export default meta;
type Story = StoryObj<typeof options>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to options!/gi)).toBeTruthy();
  },
};
