import type { Meta, StoryObj } from '@storybook/react';
import { BreadcrumbList } from './breadcrumb-list';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof BreadcrumbList> = {
  component: BreadcrumbList,
  title: 'BreadcrumbList',
};
export default meta;
type Story = StoryObj<typeof BreadcrumbList>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to BreadcrumbList!/gi)).toBeTruthy();
  },
};
