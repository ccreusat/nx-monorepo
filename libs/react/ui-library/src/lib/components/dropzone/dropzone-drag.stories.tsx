import type { Meta, StoryObj } from '@storybook/react';
import { DropzoneDrag } from './dropzone-drag';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof DropzoneDrag> = {
  component: DropzoneDrag,
  title: 'DropzoneDrag',
};
export default meta;
type Story = StoryObj<typeof DropzoneDrag>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to DropzoneDrag!/gi)).toBeTruthy();
  },
};
