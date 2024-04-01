import type { Meta, StoryObj } from '@storybook/react';
import { ToastSuccess } from './toast-success';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof ToastSuccess> = {
  component: ToastSuccess,
  title: 'ToastSuccess',
};
export default meta;
type Story = StoryObj<typeof ToastSuccess>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to ToastSuccess!/gi)).toBeTruthy();
  },
};
