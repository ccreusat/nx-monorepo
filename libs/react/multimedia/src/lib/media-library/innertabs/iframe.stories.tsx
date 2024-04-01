import type { Meta, StoryObj } from '@storybook/react';
import { Iframe } from './iframe';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof Iframe> = {
  component: Iframe,
  title: 'Iframe',
};
export default meta;
type Story = StoryObj<typeof Iframe>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to Iframe!/gi)).toBeTruthy();
  },
};
