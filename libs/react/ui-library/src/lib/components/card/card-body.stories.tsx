import type { Meta, StoryObj } from '@storybook/react';
import { CardBody } from './card-body';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof CardBody> = {
  component: CardBody,
  title: 'CardBody',
};
export default meta;
type Story = StoryObj<typeof CardBody>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to CardBody!/gi)).toBeTruthy();
  },
};
