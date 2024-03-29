import type { Meta, StoryObj } from '@storybook/react';
import { SearchEngine } from './search-engine';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof SearchEngine> = {
  component: SearchEngine,
  title: 'SearchEngine',
};
export default meta;
type Story = StoryObj<typeof SearchEngine>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to SearchEngine!/gi)).toBeTruthy();
  },
};
