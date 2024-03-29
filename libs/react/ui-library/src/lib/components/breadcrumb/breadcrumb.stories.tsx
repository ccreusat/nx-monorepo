import type { Meta, StoryObj } from '@storybook/react';
import { Breadcrumb } from './breadcrumb';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof Breadcrumb> = {
  component: Breadcrumb,
  title: 'Breadcrumb',
};
export default meta;
type Story = StoryObj<typeof Breadcrumb>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to Breadcrumb!/gi)).toBeTruthy();
  },
};
