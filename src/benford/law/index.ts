export const expectPercentByFirstDigit = (d: number) => Math.log10(1 + 1 / d);

export const getDeviationByFirstDigit = (d: number, percent: number) => {
  const expectPercent = expectPercentByFirstDigit(d);
  const deviation =
    percent > expectPercent
      ? (percent - expectPercent) / percent
      : (expectPercent - percent) / percent;
  return {
    digit: d,
    expectPercent,
    percent,
    deviation,
  };
};
export const getBenfordFirstDigitExpected = () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return array.map(item => ({
    digit: item,
    expectedPercent: expectPercentByFirstDigit(item),
  }));
};
