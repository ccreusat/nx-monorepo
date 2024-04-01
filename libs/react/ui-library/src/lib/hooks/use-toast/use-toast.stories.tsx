import type { Meta, StoryObj } from '@storybook/react';
import { useToast } from './use-toast';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof useToast> = {
  component: useToast,
  title: 'useToast',
};
export default meta;
type Story = StoryObj<typeof useToast>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to useToast!/gi)).toBeTruthy();
  },
};
