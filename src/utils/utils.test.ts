/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-var-requires */
import range from './range';


describe('utils test', () => {
  test('test range', async () => {
    expect(range(1,5)).toStrictEqual([1, 2, 3, 4, 5]);
  });
});
