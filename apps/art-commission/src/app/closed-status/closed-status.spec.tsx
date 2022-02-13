import { render } from '@testing-library/react';

import ClosedStatus from './closed-status';

describe('ClosedStatus', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ClosedStatus />);
    expect(baseElement).toBeTruthy();
  });
});
