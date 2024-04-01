import type { Meta, StoryObj } from '@storybook/react';
import { BreadcrumbItem } from './breadcrumb-item';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof BreadcrumbItem> = {
  component: BreadcrumbItem,
  title: 'BreadcrumbItem',
};
export default meta;
type Story = StoryObj<typeof BreadcrumbItem>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to BreadcrumbItem!/gi)).toBeTruthy();
  },
};
