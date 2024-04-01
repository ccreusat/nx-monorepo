import type { Meta, StoryObj } from '@storybook/react';
import { AgeSelect } from './age-select';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof AgeSelect> = {
  component: AgeSelect,
  title: 'AgeSelect',
};
export default meta;
type Story = StoryObj<typeof AgeSelect>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to AgeSelect!/gi)).toBeTruthy();
  },
};
