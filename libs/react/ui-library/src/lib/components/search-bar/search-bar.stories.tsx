import type { Meta, StoryObj } from '@storybook/react';
import { SearchBar } from './search-bar';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof SearchBar> = {
  component: SearchBar,
  title: 'SearchBar',
};
export default meta;
type Story = StoryObj<typeof SearchBar>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to SearchBar!/gi)).toBeTruthy();
  },
};
