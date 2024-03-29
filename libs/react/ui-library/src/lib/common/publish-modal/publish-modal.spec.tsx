/* eslint-disable @typescript-eslint/no-empty-function */
import { render } from '@testing-library/react';

import { PublishModal } from './publish-modal';

describe('PublishModal', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <PublishModal
        isOpen={false}
        resourceId=""
        onSuccess={() => {}}
        onCancel={() => {}}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
