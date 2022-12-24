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
    percent: percent,
    deviation,
  };
};
