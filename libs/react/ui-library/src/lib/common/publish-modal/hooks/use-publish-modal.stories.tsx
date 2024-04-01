import type { Meta, StoryObj } from '@storybook/react';
import { usePublishModal } from './use-publish-modal';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof usePublishModal> = {
  component: usePublishModal,
  title: 'usePublishModal',
};
export default meta;
type Story = StoryObj<typeof usePublishModal>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to usePublishModal!/gi)).toBeTruthy();
  },
};
