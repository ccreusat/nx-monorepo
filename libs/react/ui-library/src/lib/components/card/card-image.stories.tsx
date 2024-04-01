import type { Meta, StoryObj } from '@storybook/react';
import { CardImage } from './card-image';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof CardImage> = {
  component: CardImage,
  title: 'CardImage',
};
export default meta;
type Story = StoryObj<typeof CardImage>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to CardImage!/gi)).toBeTruthy();
  },
};
