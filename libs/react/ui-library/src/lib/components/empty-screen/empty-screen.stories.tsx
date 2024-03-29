import type { Meta, StoryObj } from '@storybook/react';
import { EmptyScreen } from './empty-screen';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof EmptyScreen> = {
  component: EmptyScreen,
  title: 'EmptyScreen',
};
export default meta;
type Story = StoryObj<typeof EmptyScreen>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to EmptyScreen!/gi)).toBeTruthy();
  },
};
