import type { Meta, StoryObj } from '@storybook/react';
import { LinkerCard } from './linker-card';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof LinkerCard> = {
  component: LinkerCard,
  title: 'LinkerCard',
};
export default meta;
type Story = StoryObj<typeof LinkerCard>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to LinkerCard!/gi)).toBeTruthy();
  },
};
