export const separateNumberByFirstDigit = (array: number[]) => {
  const arrayAux: number[][] = [[], [], [], [], [], [], [], [], [], []];

  array.map(number => {
    const firstDigit = Number(number.toString().charAt(0));
    arrayAux[firstDigit].push(number);
  });
  arrayAux.splice(0, 1);

  return `ArrayAux length: ${arrayAux} <br/> ${arrayAux.map(
    (item, index) => `<br/>first digit:${++index}  quantidade:${item.length}`
  )}`;
};
