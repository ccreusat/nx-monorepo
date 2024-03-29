import type { Meta, StoryObj } from '@storybook/react';
import { SelectTrigger } from './select-trigger';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof SelectTrigger> = {
  component: SelectTrigger,
  title: 'SelectTrigger',
};
export default meta;
type Story = StoryObj<typeof SelectTrigger>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to SelectTrigger!/gi)).toBeTruthy();
  },
};
