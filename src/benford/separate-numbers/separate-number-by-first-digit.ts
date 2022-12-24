export const separateNumberByFirstDigit = (array: number[]) => {
  let arrayAux: number[][] = [[], [], [], [], [], [], [], [], [], []];

  array.map(number => {
    const firstDigit = Number(number.toString().charAt(0));
    arrayAux[firstDigit].push(number);
  });

  return arrayAux.reduce(
    (prev, value, index) => ({
      ...prev,
      [`d${index}`]: {
        total: value.length,
        percent: (value.length * 100) / array.length / 100,
      },
      total: array.length,
    }),
    {}
  );
};
