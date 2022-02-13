import { render } from '@testing-library/react';

import Showcase from './showcase';

describe('Showcase', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Showcase />);
    expect(baseElement).toBeTruthy();
  });
});
