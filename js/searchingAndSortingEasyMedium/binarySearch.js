// https://leetcode.com/problems/binary-search/

/*
Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums.
If target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.
*/

function search(nums, target) {
  let l = 0;
  let r = nums.length - 1;
  while (l <= r) {
    const mid = Math.floor((l + r) / 2);
    if (target === nums[mid]) return mid;
    else if (target > nums[mid]) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }

  return -1;
}

console.log(search([-1, 0, 3, 5, 9, 12], 12));
console.log(search([-1, 0, 3, 5, 9, 12], -1));
console.log(search([-1, 0, 3, 5, 9, 12], 15));

// time complexity - O(log n) base 2
// space complexity - O(1)
