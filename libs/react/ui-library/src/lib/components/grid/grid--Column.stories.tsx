import type { Meta, StoryObj } from '@storybook/react';
import { Column } from './grid';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof Column> = {
  component: Column,
  title: 'Column',
};
export default meta;
type Story = StoryObj<typeof Column>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to Column!/gi)).toBeTruthy();
  },
};
