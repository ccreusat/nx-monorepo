import type { Meta, StoryObj } from '@storybook/react';
import { CardFooter } from './card-footer';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof CardFooter> = {
  component: CardFooter,
  title: 'CardFooter',
};
export default meta;
type Story = StoryObj<typeof CardFooter>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to CardFooter!/gi)).toBeTruthy();
  },
};
