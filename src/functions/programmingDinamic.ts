const A: Array<number> = [3, 4, 5, 2, 3, 7, 5, 1, 8, 9];

function programmingDynamic(array: Array<number>) {
  let memoization: Array<number> = [];
  for (let i = 0; i < array.length; i++) {
    let subMemoization: Array<number> = [];
    for (let j = i; j < array.length; j++) {
      if (findFibonacciNumber(array[j]) && subMemoization.length < 2)
        subMemoization.push(array[j]);
      else if (subMemoization[subMemoization.length - 2] + subMemoization[subMemoization.length - 1] === array[j])
        subMemoization.push(array[j]);
    }
    if (subMemoization.length >= memoization.length)
      memoization = subMemoization;
  }
  console.log(memoization);
}


function findFibonacciNumber(fib_nth: number): Boolean {
  let n_1 = 1,
    n_2 = 0;
  if (fib_nth == 0) return true;
  while (true) {
    [[n_1], [n_2]] = [[n_1 + n_2], [n_1]];
    if (fib_nth === n_1)
      return true;
    else if (fib_nth < n_1)
      return false;
  }
}


function main(): void {
  programmingDynamic(A);
}

main();