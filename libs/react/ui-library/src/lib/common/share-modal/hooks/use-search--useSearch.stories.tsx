import type { Meta, StoryObj } from '@storybook/react';
import { useSearch } from './use-search';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof useSearch> = {
  component: useSearch,
  title: 'useSearch',
};
export default meta;
type Story = StoryObj<typeof useSearch>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to useSearch!/gi)).toBeTruthy();
  },
};
