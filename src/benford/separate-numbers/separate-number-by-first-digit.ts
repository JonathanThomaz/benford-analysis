export const separateNumberByFirstDigit = (array: number[]) => {
  const arrayAux: number[][] = [[], [], [], [], [], [], [], [], [], []];

  array.map(number => {
    const firstDigit = Number(number.toString().charAt(0));
    arrayAux[firstDigit].push(number);
  });

  return arrayAux.reduce(
    (prev, value, index) => ({
      ...prev,
      [index]: { numbers: value, total: value.length },
      total: array.length,
    }),
    {}
  );
};
