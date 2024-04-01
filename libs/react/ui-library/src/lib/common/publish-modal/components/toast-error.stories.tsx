import type { Meta, StoryObj } from '@storybook/react';
import { ToastError } from './toast-error';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof ToastError> = {
  component: ToastError,
  title: 'ToastError',
};
export default meta;
type Story = StoryObj<typeof ToastError>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to ToastError!/gi)).toBeTruthy();
  },
};
