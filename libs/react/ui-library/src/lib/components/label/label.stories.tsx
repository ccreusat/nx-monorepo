import type { Meta, StoryObj } from '@storybook/react';
import { Label } from './label';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof Label> = {
  component: Label,
  title: 'Label',
};
export default meta;
type Story = StoryObj<typeof Label>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to Label!/gi)).toBeTruthy();
  },
};
