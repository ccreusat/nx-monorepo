import type { Meta, StoryObj } from '@storybook/react';
import { CardTitle } from './card-title';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof CardTitle> = {
  component: CardTitle,
  title: 'CardTitle',
};
export default meta;
type Story = StoryObj<typeof CardTitle>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to CardTitle!/gi)).toBeTruthy();
  },
};
