import type { Meta, StoryObj } from '@storybook/react';
import { CardUser } from './card-user';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof CardUser> = {
  component: CardUser,
  title: 'CardUser',
};
export default meta;
type Story = StoryObj<typeof CardUser>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to CardUser!/gi)).toBeTruthy();
  },
};
