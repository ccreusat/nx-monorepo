import type { Meta, StoryObj } from '@storybook/react';
import { useHelp } from './use-help';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof useHelp> = {
  component: useHelp,
  title: 'useHelp',
};
export default meta;
type Story = StoryObj<typeof useHelp>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to useHelp!/gi)).toBeTruthy();
  },
};
