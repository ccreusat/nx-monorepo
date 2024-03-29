import type { Meta, StoryObj } from '@storybook/react';
import { TextArea } from './textarea';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof TextArea> = {
  component: TextArea,
  title: 'TextArea',
};
export default meta;
type Story = StoryObj<typeof TextArea>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to TextArea!/gi)).toBeTruthy();
  },
};
