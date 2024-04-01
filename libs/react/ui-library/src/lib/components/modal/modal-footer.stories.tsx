import type { Meta, StoryObj } from '@storybook/react';
import { ModalFooter } from './modal-footer';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof ModalFooter> = {
  component: ModalFooter,
  title: 'ModalFooter',
};
export default meta;
type Story = StoryObj<typeof ModalFooter>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to ModalFooter!/gi)).toBeTruthy();
  },
};
