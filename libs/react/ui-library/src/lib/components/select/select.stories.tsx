import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './select';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof Select> = {
  component: Select,
  title: 'Select',
};
export default meta;
type Story = StoryObj<typeof Select>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to Select!/gi)).toBeTruthy();
  },
};
