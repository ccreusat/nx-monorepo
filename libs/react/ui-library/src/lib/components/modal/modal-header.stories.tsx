import type { Meta, StoryObj } from '@storybook/react';
import { ModalHeader } from './modal-header';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof ModalHeader> = {
  component: ModalHeader,
  title: 'ModalHeader',
  argTypes: {
    onModalClose: { action: 'onModalClose executed!' },
  },
};
export default meta;
type Story = StoryObj<typeof ModalHeader>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to ModalHeader!/gi)).toBeTruthy();
  },
};
