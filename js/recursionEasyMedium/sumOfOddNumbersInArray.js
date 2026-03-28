function oddSum(nums) {
  let index = nums.length - 1;
  function sum(i) {
    if (i < 0) return 0;
    return nums[i] % 2 !== 0 ? nums[i] + sum(i - 1) : sum(i - 1);
  }

  return sum(index);
}

console.log(oddSum([2, 4, 6, 8, 1, 9, 2, 4, 7]));
console.log(oddSum([2, 4, 6, 8, 10]));
