import type { Meta, StoryObj } from '@storybook/react';
import { FormControl } from './form-control';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof FormControl> = {
  component: FormControl,
  title: 'FormControl',
};
export default meta;
type Story = StoryObj<typeof FormControl>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to FormControl!/gi)).toBeTruthy();
  },
};
