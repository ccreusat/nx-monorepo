import type { Meta, StoryObj } from '@storybook/react';
import { Workspace } from './workspace';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof Workspace> = {
  component: Workspace,
  title: 'Workspace',
};
export default meta;
type Story = StoryObj<typeof Workspace>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to Workspace!/gi)).toBeTruthy();
  },
};
