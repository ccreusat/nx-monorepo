import type { Meta, StoryObj } from '@storybook/react';
import { LangSelect } from './lang-select';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof LangSelect> = {
  component: LangSelect,
  title: 'LangSelect',
};
export default meta;
type Story = StoryObj<typeof LangSelect>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to LangSelect!/gi)).toBeTruthy();
  },
};
