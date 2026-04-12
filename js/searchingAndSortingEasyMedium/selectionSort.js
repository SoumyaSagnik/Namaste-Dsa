function ascending(nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    let smallestIndex = i;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] < nums[smallestIndex]) smallestIndex = j;
    }

    if (smallestIndex !== i) {
      let c = nums[i];
      nums[i] = nums[smallestIndex];
      nums[smallestIndex] = c;
    }
  }

  return nums;
}

console.log(ascending([7, 1, 5, 12, 4, 3, 2]));
