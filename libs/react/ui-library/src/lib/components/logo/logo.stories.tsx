import type { Meta, StoryObj } from '@storybook/react';
import { Logo } from './logo';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof Logo> = {
  component: Logo,
  title: 'Logo',
};
export default meta;
type Story = StoryObj<typeof Logo>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to Logo!/gi)).toBeTruthy();
  },
};
