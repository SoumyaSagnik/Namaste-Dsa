// https://leetcode.com/problems/single-number/description/

/*
Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
You must implement a solution with a linear runtime complexity and use only constant extra space.
*/

function bruteForce(nums) {
  if (nums.length === 1) return nums[0];

  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      map.set(nums[i], map.get(nums[i]) + 1);
    } else {
      map.set(nums[i], 1);
    }
  }

  for (let [key, value] of map.entries()) {
    if (value === 1) return key;
  }
}

function optimalSolution(nums) {
  // using xor operator
  let res = nums[0];
  for (let i = 1; i < nums.length; i++) {
    res ^= nums[i];
  }

  return res;
}

console.log(bruteForce([4, 1, 2, 1, 2]));
console.log(bruteForce([1]));
console.log(bruteForce([5, 1, 3, 4, 3, 1, 5]));

console.log(optimalSolution([4, 1, 2, 1, 2]));
console.log(optimalSolution([1]));
console.log(optimalSolution([5, 1, 3, 4, 3, 1, 5]));
