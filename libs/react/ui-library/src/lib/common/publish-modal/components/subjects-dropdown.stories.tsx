import type { Meta, StoryObj } from '@storybook/react';
import { SubjectsDropdown } from './subjects-dropdown';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof SubjectsDropdown> = {
  component: SubjectsDropdown,
  title: 'SubjectsDropdown',
};
export default meta;
type Story = StoryObj<typeof SubjectsDropdown>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to SubjectsDropdown!/gi)).toBeTruthy();
  },
};
