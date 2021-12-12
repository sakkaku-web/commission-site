import { commissionClient } from './commission-client';

describe('commissionClient', () => {
  it('should work', () => {
    expect(commissionClient()).toEqual('commission-client');
  });
});
