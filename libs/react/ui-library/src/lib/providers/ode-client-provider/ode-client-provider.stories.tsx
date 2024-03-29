import type { Meta, StoryObj } from '@storybook/react';
import { OdeClientProvider } from './ode-client-provider';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof OdeClientProvider> = {
  component: OdeClientProvider,
  title: 'OdeClientProvider',
};
export default meta;
type Story = StoryObj<typeof OdeClientProvider>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to OdeClientProvider!/gi)).toBeTruthy();
  },
};
