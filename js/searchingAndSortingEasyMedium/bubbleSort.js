function ascending(nums) {
  let totalCycles = nums.length - 1;
  while (totalCycles > 0) {
    for (let i = 0; i < totalCycles; i++) {
      if (nums[i] > nums[i + 1]) {
        let c = nums[i];
        nums[i] = nums[i + 1];
        nums[i + 1] = c;
      }
    }

    totalCycles--;
  }

  return nums;
}

function hisSolutionAscending(nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = 0; j < nums.length - 1 - i; j++) {
      if (nums[j] > nums[j + 1]) {
        let c = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = c;
      }
    }
  }

  return nums;
}

function optimalSolutionAscending(nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    let isSorted = true;
    for (let j = 0; j < nums.length - 1 - i; j++) {
      if (nums[j] > nums[j + 1]) {
        let c = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = c;
        isSorted = false;
      }
    }

    if (isSorted) break;
  }

  return nums;
}

console.log(ascending([5, 2, 4, 1]));
console.log(ascending([5, 0, 1, 2, 7, 9, 3, 4]));
console.log("-------------------------");
console.log(hisSolutionAscending([5, 2, 4, 1]));
console.log(hisSolutionAscending([5, 0, 1, 2, 7, 9, 3, 4]));
console.log("-------------------------");
console.log(optimalSolutionAscending([5, 2, 4, 1]));
console.log(optimalSolutionAscending([5, 0, 1, 2, 7, 9, 3, 4]));

// time complexity: O(n^2) | space complexity: O(1)
