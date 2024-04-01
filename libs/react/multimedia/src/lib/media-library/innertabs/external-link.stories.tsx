import type { Meta, StoryObj } from '@storybook/react';
import { ExternalLink } from './external-link';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof ExternalLink> = {
  component: ExternalLink,
  title: 'ExternalLink',
};
export default meta;
type Story = StoryObj<typeof ExternalLink>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to ExternalLink!/gi)).toBeTruthy();
  },
};
