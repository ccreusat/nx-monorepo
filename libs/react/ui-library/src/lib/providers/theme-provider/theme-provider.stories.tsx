import type { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from './theme-provider';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof ThemeProvider> = {
  component: ThemeProvider,
  title: 'ThemeProvider',
};
export default meta;
type Story = StoryObj<typeof ThemeProvider>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to ThemeProvider!/gi)).toBeTruthy();
  },
};
