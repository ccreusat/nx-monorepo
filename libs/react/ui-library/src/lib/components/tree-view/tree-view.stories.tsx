import type { Meta, StoryObj } from '@storybook/react';
import { TreeView } from './tree-view';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof TreeView> = {
  component: TreeView,
  title: 'TreeView',
};
export default meta;
type Story = StoryObj<typeof TreeView>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to TreeView!/gi)).toBeTruthy();
  },
};
