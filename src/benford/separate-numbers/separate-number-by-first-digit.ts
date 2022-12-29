export enum EKeys {
  'd0' = 'd0',
  'd1' = 'd1',
  'd2' = 'd2',
  'd3' = 'd3',
  'd4' = 'd4',
  'd5' = 'd5',
  'd6' = 'd6',
  'd7' = 'd7',
  'd8' = 'd8',
  'd9' = 'd9',
  'total' = 'total',
}
export type ObjSeparated = {
  [key in keyof typeof EKeys]: { total: number; percent: number };
};

export const separateNumberByFirstDigit = (array: number[]): ObjSeparated => {
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
      total: { total: array.length, percent: 1 },
    }),
    {} as ObjSeparated
  );
};
