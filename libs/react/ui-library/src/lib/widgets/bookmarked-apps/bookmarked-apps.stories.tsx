import type { Meta, StoryObj } from '@storybook/react';
import { BookmarkedApps } from './bookmarked-apps';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof BookmarkedApps> = {
  component: BookmarkedApps,
  title: 'BookmarkedApps',
};
export default meta;
type Story = StoryObj<typeof BookmarkedApps>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to BookmarkedApps!/gi)).toBeTruthy();
  },
};
