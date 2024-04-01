import type { Meta, StoryObj } from '@storybook/react';
import { InternalLink } from './internal-link';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof InternalLink> = {
  component: InternalLink,
  title: 'InternalLink',
};
export default meta;
type Story = StoryObj<typeof InternalLink>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to InternalLink!/gi)).toBeTruthy();
  },
};
