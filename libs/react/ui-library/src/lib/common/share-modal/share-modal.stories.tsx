import type { Meta, StoryObj } from '@storybook/react';
import { ShareModal } from './share-modal';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof ShareModal> = {
  component: ShareModal,
  title: 'Modal/Share',
};
export default meta;
type Story = StoryObj<typeof ShareModal>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to ShareModal!/gi)).toBeTruthy();
  },
};
