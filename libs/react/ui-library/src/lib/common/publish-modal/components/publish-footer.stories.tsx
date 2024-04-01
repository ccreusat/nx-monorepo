import type { Meta, StoryObj } from '@storybook/react';
import { PublishModalFooter } from './publish-footer';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof PublishModalFooter> = {
  component: PublishModalFooter,
  title: 'PublishModalFooter',
};
export default meta;
type Story = StoryObj<typeof PublishModalFooter>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to PublishModalFooter!/gi)).toBeTruthy();
  },
};
