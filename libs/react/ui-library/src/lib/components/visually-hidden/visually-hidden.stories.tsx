import type { Meta, StoryObj } from '@storybook/react';
import { VisuallyHidden } from './visually-hidden';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof VisuallyHidden> = {
  component: VisuallyHidden,
  title: 'VisuallyHidden',
};
export default meta;
type Story = StoryObj<typeof VisuallyHidden>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to VisuallyHidden!/gi)).toBeTruthy();
  },
};
