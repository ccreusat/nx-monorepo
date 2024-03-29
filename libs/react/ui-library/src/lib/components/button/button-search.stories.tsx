import type { Meta, StoryObj } from '@storybook/react';
import { SearchButton } from './button-search';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof SearchButton> = {
  component: SearchButton,
  title: 'SearchButton',
};
export default meta;
type Story = StoryObj<typeof SearchButton>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to SearchButton!/gi)).toBeTruthy();
  },
};
