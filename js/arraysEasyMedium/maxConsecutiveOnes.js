// https://leetcode.com/problems/max-consecutive-ones/description/

// Given a binary array nums, return the maximum number of consecutive 1's in the array.

function findMaxConsecutiveOnes(nums) {
  let max = 0;
  let cur = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      cur++;
      max = Math.max(max, cur);
    } else {
      cur = 0;
    }
  }

  return max;
}

function hisSolution(nums) {
  let max = 0;
  let cur = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      cur++;
    } else {
      max = Math.max(max, cur);
      cur = 0;
    }
  }

  return Math.max(cur, max);
}

console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]));
console.log(findMaxConsecutiveOnes([1, 0, 1, 1, 0, 1]));

console.log(hisSolution([1, 1, 0, 1, 1, 1]));
console.log(hisSolution([1, 0, 1, 1, 0, 1]));
