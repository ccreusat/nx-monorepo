import type { Meta, StoryObj } from '@storybook/react';
import { TabsItem } from './tabs-item';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof TabsItem> = {
  component: TabsItem,
  title: 'TabsItem',
};
export default meta;
type Story = StoryObj<typeof TabsItem>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to TabsItem!/gi)).toBeTruthy();
  },
};
