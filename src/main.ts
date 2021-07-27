import exponential from "./functions/exponential";
import log from "./functions/log";

const array: Array<number> = [1, 9, 8, 7, 6, 5, 4, 2, 1, 3, 5, 6, 7, 3, 3, 6, 6];

function main(): void {
  console.log('Complejidad exponencial');
  exponential(array);
  console.log('Complejidad lineal');
  console.log(array.sort());
  log(array);
}

main();
