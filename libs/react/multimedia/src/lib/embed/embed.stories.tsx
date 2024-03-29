import type { Meta, StoryObj } from '@storybook/react';
import { Embed } from './embed';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof Embed> = {
  title: 'Multimedia/Embed',
  component: Embed,
  parameters: {
    docs: {
      description: {
        component: 'Embeded/Iframe.',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Embed>;

export const Base: Story = {};
