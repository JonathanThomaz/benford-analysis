export const getDefaultDeviation = (list: Array<number>) => {
  const media = list.reduce(
    (prev, value, _, array) => prev + value / array.length,
    0
  );
  const variance = list.reduce(
    (prev, value, _, array) => prev + Math.pow(media - value, 2) / array.length,
    0
  );
  return Math.sqrt(variance);
};
