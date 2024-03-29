import type { Meta, StoryObj } from '@storybook/react';
import { FormText } from './form-text';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof FormText> = {
  component: FormText,
  title: 'FormText',
};
export default meta;
type Story = StoryObj<typeof FormText>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to FormText!/gi)).toBeTruthy();
  },
};
