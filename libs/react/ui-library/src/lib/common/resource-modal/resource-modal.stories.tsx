import type { Meta, StoryObj } from '@storybook/react';
import { ResourceModal } from './resource-modal';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof ResourceModal> = {
  component: ResourceModal,
  title: 'Modal/Resource',
};
export default meta;
type Story = StoryObj<typeof ResourceModal>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to ResourceModal!/gi)).toBeTruthy();
  },
};
