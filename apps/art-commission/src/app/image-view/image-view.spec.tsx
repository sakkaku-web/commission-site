import { render } from '@testing-library/react';

import ImageView from './image-view';

describe('ImageView', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImageView />);
    expect(baseElement).toBeTruthy();
  });
});
