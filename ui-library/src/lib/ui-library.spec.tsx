import { render } from '@testing-library/react';

import UiLibrary from './ui-library';

describe('UiLibrary', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiLibrary />);
    expect(baseElement).toBeTruthy();
  });
});
