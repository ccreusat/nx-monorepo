import type { Meta, StoryObj } from '@storybook/react';
import { Grid } from './grid';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof Grid> = {
  component: Grid,
  title: 'Grid',
};
export default meta;
type Story = StoryObj<typeof Grid>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to Grid!/gi)).toBeTruthy();
  },
};
