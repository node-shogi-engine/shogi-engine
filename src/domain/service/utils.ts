export const range = (start: number, end: number): number[] => {
  const array = [];
  for (let i = start; i < end; i += 1) {
    array.push(i);
  }
  return array;
};

export const divideArray = <T>(array: T[], n: number): T[][] => {
  const result: T[][] = [];
  result.push([]);
  let index = 0;
  array.forEach((value, j) => {
    result[index].push(value);
    if ((j + 1) % n === 0) {
      result.push([]);
      index += 1;
    }
  });
  return result;
};
