import { NAMES } from "../constants/index.js";

/**
 * Алгоритм бинарного поиска элемента в массиве
 * @param {Array} array - массив любых значений 
 * @param {any} value - элемент массива, который необходимо найти
 * @returns идекс искомого элемента в массиве
 */
function binarySearch(array, value) {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    let middle = Math.floor((right + left) / 2);

    if (value === array[middle]) return middle;

    if (value > array[middle]) {
      left = middle + 1;
    }

    if (value < array[middle]) {
      right = middle - 1;
    }
  }

  return -1;
}

const indexOfCustomFunc = binarySearch(NAMES, "Оксана");
const index = NAMES.findIndex((x) => x === "Оксана");

console.log("Результат выполнения binarySearch: ", indexOfCustomFunc);
console.log("Результат выполнения findIndex: ", index);
