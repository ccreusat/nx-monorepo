import type { Meta, StoryObj } from '@storybook/react';
import { ModalBody } from './modal-body';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof ModalBody> = {
  component: ModalBody,
  title: 'ModalBody',
};
export default meta;
type Story = StoryObj<typeof ModalBody>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to ModalBody!/gi)).toBeTruthy();
  },
};
