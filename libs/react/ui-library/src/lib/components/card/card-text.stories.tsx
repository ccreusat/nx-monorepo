import type { Meta, StoryObj } from '@storybook/react';
import { CardText } from './card-text';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof CardText> = {
  component: CardText,
  title: 'CardText',
};
export default meta;
type Story = StoryObj<typeof CardText>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to CardText!/gi)).toBeTruthy();
  },
};
