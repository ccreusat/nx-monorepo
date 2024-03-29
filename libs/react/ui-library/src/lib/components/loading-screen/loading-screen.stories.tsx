import type { Meta, StoryObj } from '@storybook/react';
import { LoadingScreen } from './loading-screen';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof LoadingScreen> = {
  component: LoadingScreen,
  title: 'LoadingScreen',
};
export default meta;
type Story = StoryObj<typeof LoadingScreen>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to LoadingScreen!/gi)).toBeTruthy();
  },
};
