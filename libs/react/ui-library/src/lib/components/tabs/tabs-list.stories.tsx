import type { Meta, StoryObj } from '@storybook/react';
import { TabsList } from './tabs-list';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof TabsList> = {
  component: TabsList,
  title: 'TabsList',
};
export default meta;
type Story = StoryObj<typeof TabsList>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to TabsList!/gi)).toBeTruthy();
  },
};
