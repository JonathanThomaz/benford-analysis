import { separateNumberByFirstDigit } from '../dist';
import { arrayTest } from './array.mock';

describe('separate', () => {
  it('s total 100', () => {
    const result = separateNumberByFirstDigit(arrayTest);
    expect(result.total.total).toEqual(100);
  });
  it('d1 percent is 0.14', () => {
    const result = separateNumberByFirstDigit(arrayTest);
    expect(result.d1.percent).toEqual(0.14);
  });
});
