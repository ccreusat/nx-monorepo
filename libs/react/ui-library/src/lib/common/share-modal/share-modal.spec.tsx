/* eslint-disable @typescript-eslint/no-empty-function */
import { render } from '@testing-library/react';

import { ShareModal } from './share-modal';

describe('ShareModal', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <ShareModal
        isOpen={false}
        resourceId=""
        onSuccess={() => {}}
        onCancel={() => {}}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
