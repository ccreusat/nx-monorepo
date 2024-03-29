import type { Meta, StoryObj } from '@storybook/react';
import { Radio } from './radio';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof Radio> = {
  component: Radio,
  title: 'Radio',
};
export default meta;
type Story = StoryObj<typeof Radio>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to Radio!/gi)).toBeTruthy();
  },
};
