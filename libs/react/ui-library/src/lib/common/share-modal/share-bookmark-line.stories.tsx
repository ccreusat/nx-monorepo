import type { Meta, StoryObj } from '@storybook/react';
import { ShareBookmarkLine } from './share-bookmark-line';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof ShareBookmarkLine> = {
  component: ShareBookmarkLine,
  title: 'ShareBookmarkLine',
};
export default meta;
type Story = StoryObj<typeof ShareBookmarkLine>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to ShareBookmarkLine!/gi)).toBeTruthy();
  },
};
