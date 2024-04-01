import type { Meta, StoryObj } from '@storybook/react';
import { BlogPublic } from './blog-public';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof BlogPublic> = {
  component: BlogPublic,
  title: 'BlogPublic',
};
export default meta;
type Story = StoryObj<typeof BlogPublic>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to BlogPublic!/gi)).toBeTruthy();
  },
};
