import type { Meta, StoryObj } from '@storybook/react';
import { CardHeader } from './card-header';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof CardHeader> = {
  component: CardHeader,
  title: 'CardHeader',
};
export default meta;
type Story = StoryObj<typeof CardHeader>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to CardHeader!/gi)).toBeTruthy();
  },
};
