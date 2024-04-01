import type { Meta, StoryObj } from '@storybook/react';
import { adaptedResults } from './use-search';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof adaptedResults> = {
  component: adaptedResults,
  title: 'adaptedResults',
};
export default meta;
type Story = StoryObj<typeof adaptedResults>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to adaptedResults!/gi)).toBeTruthy();
  },
};
