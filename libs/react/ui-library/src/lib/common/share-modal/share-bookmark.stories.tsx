import type { Meta, StoryObj } from '@storybook/react';
import { ShareBookmark } from './share-bookmark';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof ShareBookmark> = {
  component: ShareBookmark,
  title: 'ShareBookmark',
};
export default meta;
type Story = StoryObj<typeof ShareBookmark>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to ShareBookmark!/gi)).toBeTruthy();
  },
};
