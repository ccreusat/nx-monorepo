import type { Meta, StoryObj } from '@storybook/react';
import { OnboardingModal } from './onboarding-modal';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { HttpResponse, http } from 'msw';

const meta: Meta<typeof OnboardingModal> = {
  component: OnboardingModal,
  title: 'Modal/Onboarding',
  args: {
    id: 'showOnboardingTrash',
    items: [
      {
        src: 'onboarding/illu-trash-menu.svg',
        alt: 'explorer.modal.onboarding.trash.screen1.alt',
        text: 'explorer.modal.onboarding.trash.screen1.title',
      },
      {
        src: 'onboarding/illu-trash-notif.svg',
        alt: 'explorer.modal.onboarding.trash.screen2.alt',
        text: 'explorer.modal.onboarding.trash.screen2.alt',
      },
      {
        src: 'onboarding/illu-trash-delete.svg',
        alt: 'explorer.modal.onboarding.trash.screen3.alt',
        text: 'explorer.modal.onboarding.trash.screen3.title',
      },
    ],
    modalOptions: {
      title: 'explorer.modal.onboarding.trash.title',
      prevText: 'explorer.modal.onboarding.trash.prev',
      nextText: 'explorer.modal.onboarding.trash.next',
      closeText: 'explorer.modal.onboarding.trash.close',
    },
  },
};
export default meta;
type Story = StoryObj<typeof OnboardingModal>;

export const Base: Story = {
  args: {},
  parameters: {
    msw: {
      handlers: {
        onboarding: http.get('/userbook/preference/showOnboardingTrash', () => {
          return HttpResponse.json({
            preference: '{"showOnboardingTrash":true}',
          });
        }),
      },
    },
  },
};
