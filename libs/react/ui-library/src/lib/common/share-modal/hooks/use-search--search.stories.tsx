import type { Meta, StoryObj } from '@storybook/react';
import { search } from './use-search';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof search> = {
  component: search,
  title: 'search',
};
export default meta;
type Story = StoryObj<typeof search>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to search!/gi)).toBeTruthy();
  },
};
