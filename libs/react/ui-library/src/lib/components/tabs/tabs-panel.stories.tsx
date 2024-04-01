import type { Meta, StoryObj } from '@storybook/react';
import { TabsPanel } from './tabs-panel';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof TabsPanel> = {
  component: TabsPanel,
  title: 'TabsPanel',
};
export default meta;
type Story = StoryObj<typeof TabsPanel>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to TabsPanel!/gi)).toBeTruthy();
  },
};
