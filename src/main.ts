import exponential from "./functions/exponential";

const array: Array<number> = [1, 10, 9, 8, 7, 6, 5, 4, 2, 1, 3, 5, 6, 7, 3, 3, 6];

function main(): void {
  console.log('Complejidad exponencial');
  exponential(array);
}

main();
