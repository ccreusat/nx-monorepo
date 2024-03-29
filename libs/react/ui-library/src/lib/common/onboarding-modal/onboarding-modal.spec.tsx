import { render } from '@testing-library/react';

import { OnboardingModal } from './onboarding-modal';

describe('OnboardingModal', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <OnboardingModal
        id="showOnboardingTrash"
        items={[
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
        ]}
        modalOptions={{
          title: 'explorer.modal.onboarding.trash.title',
          prevText: 'explorer.modal.onboarding.trash.prev',
          nextText: 'explorer.modal.onboarding.trash.next',
          closeText: 'explorer.modal.onboarding.trash.close',
        }}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
