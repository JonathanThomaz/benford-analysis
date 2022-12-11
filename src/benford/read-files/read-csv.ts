import fs from 'fs';

export const readCsv = (csvPath: string) => {
  const fileContent = fs.readFileSync(csvPath, { encoding: 'utf-8' });

  const arrayContent = fileContent.replace(/(?:\r\n|\r|\n)/g, ',').split(',');

  const arraySeparetedColumns = arrayContent.map(item =>
    item.split(';').filter(value => value !== '')
  );
  let arrayAux = new Array(arraySeparetedColumns[0]?.length);
  arraySeparetedColumns.forEach(item => {
    if (item.length <= 1) arrayAux.push(item);
    if (item.length > 1) {
      item.forEach((value, index) => {
        if (arrayAux[index] === undefined) arrayAux[index] = [];
        arrayAux[index].push(value);
      });
    }
  });

  const arrayFiltered = arrayAux.map(item => {
    if (Array.isArray(item) && item.length > 0)
      return item.filter(value => value !== '' && value);
    return;
  });

  const arrayTransform = arrayFiltered.map(item => {
    const number = Number(item);
    if (!Number.isNaN(number)) return number;
    if (item?.length === 1) return item[0];
    if (item && item?.length > 0)
      return item?.map(value => {
        const number = Number(value);
        if (!Number.isNaN(number)) return number;
        return value;
      });
    return item ? item[0] : null;
  });

  return arrayTransform.filter(value => value);
};
