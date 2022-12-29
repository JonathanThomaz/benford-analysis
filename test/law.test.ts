import { getDeviationByFirstDigit, separateNumberByFirstDigit } from '../dist';
import { arrayTest } from './array.mock';

describe('separate', () => {
  it('s digit 1', () => {
    const { d1, d2, d3, d4, d5, d6, d7, d8, d9 } = separateNumberByFirstDigit(
      arrayTest
    );
    const array = [d1, d2, d3, d4, d5, d6, d7, d8, d9];
    const list = array.map((item, index) =>
      getDeviationByFirstDigit(index + 1, item.percent)
    );
    expect(list[0].digit).toEqual(1);
  });
});
