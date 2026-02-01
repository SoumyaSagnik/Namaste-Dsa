// Write a function that searches for an element in an array and returns its index. If the element is not present, return -1.
function elementIndex(arr, element) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === element) return i;
  }

  return -1;
}

console.log("Find element in an array");
console.log(elementIndex([1, 2, 3, 4], 5));
console.log(elementIndex([1, 2, 3, 4], 4));

// ---------------------------------------------

// Write a function that returns the number of negative numbers in an array
function noOfNegativeNumbers(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) count++;
  }

  return count;
}

console.log("Return no. of negative numbers in an array");
console.log(noOfNegativeNumbers([0, 1, 2, 3]));
console.log(noOfNegativeNumbers([0, -1, 2, 3, -6, -9, 10]));

// ---------------------------------------------

// Write a function that returns the largest number in an array
function getLargest(arr) {
  let largest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) largest = arr[i];
  }

  return largest;
}

console.log("Largest element in an array");
console.log(getLargest([]));
console.log(getLargest([0, -2, 2, 1]));
console.log(getLargest([-1, 2]));
console.log(getLargest([1, 2, 69, 100, -867]));
console.log(getLargest([17, 2, 3]));
