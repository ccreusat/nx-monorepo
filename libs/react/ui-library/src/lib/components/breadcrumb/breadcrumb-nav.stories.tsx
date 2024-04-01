import type { Meta, StoryObj } from '@storybook/react';
import { BreadcrumbNav } from './breadcrumb-nav';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof BreadcrumbNav> = {
  component: BreadcrumbNav,
  title: 'BreadcrumbNav',
};
export default meta;
type Story = StoryObj<typeof BreadcrumbNav>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to BreadcrumbNav!/gi)).toBeTruthy();
  },
};
