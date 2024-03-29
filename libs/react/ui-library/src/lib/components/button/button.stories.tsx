import type { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonProps } from './button';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import {
  AddUser,
  Close,
  RafterLeft,
  RafterRight,
  Hourglass,
} from '@ccreusat-monorepo/icons';
import IconButton from './button-icon';

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  argTypes: {
    color: {
      options: ['primary', 'secondary', 'tertiary', 'danger'],
      control: { type: 'select' },
    },
    variant: {
      options: ['filled', 'outline', 'ghost'],
      control: { type: 'select' },
    },
    type: {
      options: ['button', 'submit', 'reset'],
      control: { type: 'select' },
    },
    loadingPosition: {
      options: ['left', 'right'],
      control: { type: 'inline-radio' },
    },
  },
  args: {
    color: 'primary',
    variant: 'filled',
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Base: Story = {
  args: {
    color: 'primary',
    variant: 'filled',
    children: 'Label',
    type: 'button',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    color: 'primary',
    variant: 'filled',
    children: 'Label',
    type: 'button',
    disabled: true,
  },

  parameters: {
    docs: {
      description: {
        story: 'Add the disabled props to the button to disable it.',
      },
    },
  },
};

export const Danger: Story = {
  args: {
    color: 'danger',
    variant: 'filled',
    children: 'Label',
    type: 'button',
    disabled: false,
  },

  parameters: {
    docs: {
      description: {
        story:
          'Used for destructive actions and warning the user of an important action.',
      },
    },
  },
};

export const WithStartIcon: Story = {
  args: {
    color: 'primary',
    variant: 'filled',
    children: 'New user',
    type: 'button',
    disabled: false,
    startIcon: <AddUser title="Add User" />,
  },
};

export const WithEndIcon: Story = {
  args: {
    color: 'primary',
    variant: 'filled',
    children: 'Close',
    type: 'button',
    disabled: false,
    endIcon: <Close title="Close" />,
  },
};

export const WithBothIcon: Story = {
  args: {
    color: 'primary',
    variant: 'filled',
    children: 'Button',
    type: 'button',
    disabled: false,
    startIcon: <RafterLeft title="Chevron Left" />,
    endIcon: <RafterRight title="Chevron Right" />,
  },
};

export const LoadingButtonWithText: Story = {
  args: {
    color: 'primary',
    variant: 'filled',
    children: 'Loading...',
    type: 'button',
    isLoading: true,
  },

  parameters: {
    docs: {
      description: {
        story:
          'Loading button is not disabled but we have `pointer-events:none` to desactive its behaviour. You can add the disabled props if you want. Default position of the loading icon is on the left.',
      },
    },
  },
};

export const LoadingButtonRightWithText: Story = {
  args: {
    color: 'primary',
    variant: 'filled',
    children: 'Loading...',
    type: 'button',
    isLoading: true,
    loadingPosition: 'right',
  },

  parameters: {
    docs: {
      description: {
        story:
          "You can change the position of the loading icon by adding `loadingPosition='right'`",
      },
    },
  },
};

export const LoadingButtonWithCustomIcon: Story = {
  args: {
    color: 'primary',
    variant: 'filled',
    children: 'Loading...',
    type: 'button',
    isLoading: true,
    loadingIcon: <Hourglass />,
  },
};

export const ButtonGroupWithSecondaryAction: Story = {
  render: (args: ButtonProps) => {
    return (
      <div className="d-flex align-items-center gap-8">
        <Button {...args} color="secondary" variant="outline">
          Cancel
        </Button>
        <Button {...args} color="secondary" variant="filled">
          Save
        </Button>
      </div>
    );
  },

  parameters: {
    docs: {
      description: {
        story:
          'When more than one buttons, primary action is always on the right side. Then secondary action on its left.',
      },
    },
  },
};

export const ButtonGroupWithIconButton: Story = {
  render: (args: ButtonProps) => {
    return (
      <div className="d-flex align-items-center gap-8">
        <Button {...args} color="primary" variant="filled">
          Button
        </Button>
        <IconButton
          {...args}
          aria-label="Next Page"
          color="primary"
          variant="filled"
          icon={<RafterRight />}
        />
      </div>
    );
  },

  parameters: {
    docs: {
      description: {
        story:
          'Pictograms buttons are standing by themselfs, if put with text buttons, always put them on the right. In this case, they are advanced options of the primary action button.',
      },
    },
  },
};

export const ButtonGroupWithThirdAction: Story = {
  render: (args: ButtonProps) => {
    return (
      <div className="d-flex align-items-center gap-8">
        <Button
          {...args}
          color="primary"
          variant="ghost"
          startIcon={<RafterLeft />}
          endIcon={<RafterRight />}
        >
          Button
        </Button>
        <Button
          {...args}
          color="primary"
          variant="outline"
          startIcon={<RafterLeft />}
          endIcon={<RafterRight />}
        >
          Button
        </Button>
        <Button
          {...args}
          color="primary"
          variant="filled"
          startIcon={<RafterLeft />}
          endIcon={<RafterRight />}
        >
          Button
        </Button>
      </div>
    );
  },

  parameters: {
    docs: {
      description: {
        story:
          'When more than two buttons, third action is furthest to the left.',
      },
    },
  },
};
