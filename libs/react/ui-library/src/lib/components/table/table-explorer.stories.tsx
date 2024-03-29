import type { Meta, StoryObj } from '@storybook/react';
import { TableExplorer } from './table-explorer';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof TableExplorer> = {
  component: TableExplorer,
  title: 'TableExplorer',
};
export default meta;
type Story = StoryObj<typeof TableExplorer>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to TableExplorer!/gi)).toBeTruthy();
  },
};
