import type { Meta, StoryObj } from '@storybook/react';
import { WidgetApps } from './widget-apps';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof WidgetApps> = {
  component: WidgetApps,
  title: 'WidgetApps',
};
export default meta;
type Story = StoryObj<typeof WidgetApps>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to WidgetApps!/gi)).toBeTruthy();
  },
};
