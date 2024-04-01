import type { Meta, StoryObj } from '@storybook/react';
import { TreeItem } from './tree-item';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof TreeItem> = {
  component: TreeItem,
  title: 'TreeItem',
};
export default meta;
type Story = StoryObj<typeof TreeItem>;

export const Primary = {
  args: {
    nodeId: '',
    label: '',
    section: false,
    selected: false,
  },
};

export const Heading: Story = {
  args: {
    nodeId: '',
    label: '',
    section: false,
    selected: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to TreeItem!/gi)).toBeTruthy();
  },
};
