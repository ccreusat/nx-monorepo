import type { Meta, StoryObj } from '@storybook/react';
import { ComboboxTrigger } from './combobox-trigger';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof ComboboxTrigger> = {
  component: ComboboxTrigger,
  title: 'ComboboxTrigger',
};
export default meta;
type Story = StoryObj<typeof ComboboxTrigger>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to ComboboxTrigger!/gi)).toBeTruthy();
  },
};
