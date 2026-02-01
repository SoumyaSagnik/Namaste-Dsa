// Write a function to find the second largest element in an array
function getSecondLargest(arr) {
  if (arr.length < 2) return undefined;
  let largest = -Infinity;
  let secondLargest = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] !== largest) {
      secondLargest = arr[i];
    }
  }

  return secondLargest;
}

console.log("Second largest");
console.log(getSecondLargest([0, -1, 2, -1, 3, 4]));
console.log(getSecondLargest([0]));
console.log(getSecondLargest([4, 9, 0, 2, 8, 7, 1]));
console.log(getSecondLargest([10, 20, 30, 20, 10, 30]));
