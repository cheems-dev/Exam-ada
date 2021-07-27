export default function log(array: Array<number>) {
  let index = 0, pivot = Math.floor(array.length / 2);
  let account;
  while (index < pivot) {
    if (index >= 1 && array[index] === array[index - 1])
      index++;
    else {
      const account_tmp_1 = recursividad(array[index], 0, array);
      const account_tmp_2 = recursividad(array[pivot + index], Math.floor(array.length / 2), array);
      account = (account_tmp_1 > account_tmp_2)
        ? account_tmp_1
        : account_tmp_2;
      index++;
    }
  }
  return account;
}

function recursividad(value: number, index: number, array: Array<number>): number {
  return (value === array[index])
    ? 1 + recursividad(value, index++, array)
    : recursividad(value, index++, array);
}