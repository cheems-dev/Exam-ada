export default function exponential(array: Array<number>): number {
  let account: number = 0, value: number = 0;
  for (let i = 0; i < array.length; i++) {
    let account_tmp = 0;
    for (let j = i; j < array.length; j++) {
      if (array[i] === array[j])
        account_tmp++;
    }
    if (account < account_tmp) {
      value = array[i];
      account = account_tmp;
    }
  }
  console.log(`Valor: ${value}, Numero total: ${account}`);
  return account;
}