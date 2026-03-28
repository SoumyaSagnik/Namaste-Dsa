function arraySum(nums) {
  let index = nums.length - 1;
  function sum(i) {
    if (i < 0) return 0;
    return nums[i] + sum(i - 1);
  }

  return sum(index);
}

console.log(arraySum([1, 2, 0, 3, 1]));
console.log(arraySum([1, 1, 1, 1, 1, 0, 0, 0, 1]));
