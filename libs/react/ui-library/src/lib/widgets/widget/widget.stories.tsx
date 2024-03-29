import type { Meta, StoryObj } from '@storybook/react';
import { Widget } from './widget';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof Widget> = {
  component: Widget,
  title: 'Widget',
};
export default meta;
type Story = StoryObj<typeof Widget>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to Widget!/gi)).toBeTruthy();
  },
};
