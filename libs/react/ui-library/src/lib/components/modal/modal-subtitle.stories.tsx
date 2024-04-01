import type { Meta, StoryObj } from '@storybook/react';
import { ModalSubtitle } from './modal-subtitle';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof ModalSubtitle> = {
  component: ModalSubtitle,
  title: 'ModalSubtitle',
};
export default meta;
type Story = StoryObj<typeof ModalSubtitle>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to ModalSubtitle!/gi)).toBeTruthy();
  },
};
