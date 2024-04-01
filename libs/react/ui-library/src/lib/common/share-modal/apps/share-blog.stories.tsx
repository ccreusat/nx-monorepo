import type { Meta, StoryObj } from '@storybook/react';
import { ShareBlog } from './share-blog';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof ShareBlog> = {
  component: ShareBlog,
  title: 'ShareBlog',
};
export default meta;
type Story = StoryObj<typeof ShareBlog>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to ShareBlog!/gi)).toBeTruthy();
  },
};
