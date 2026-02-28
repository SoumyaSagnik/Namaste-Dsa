// https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/

/*Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. 
The relative order of the elements should be kept the same.
Consider the number of unique elements in nums to be k​​​​​​​​​​​​​​. After removing duplicates, return the number of unique elements k.
*/

/*
Constraints:
1 <= nums.length <= 3 * 104
-100 <= nums[i] <= 100
nums is sorted in non-decreasing order.
*/

// my solution
function removeDuplicates2(nums) {
  let map = new Map();
  let pos = 0;
  for (let i = 0; i < nums.length; i++) {
    if (!map.has(nums[i])) {
      map.set(nums[i], pos);
      nums[pos] = nums[i];
      pos++;
    }
  }
  return pos;
}

// optimal solution
function removeDuplicates(nums) {
  let pos = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[pos]) {
      pos++;
      nums[pos] = nums[i];
    }
  }

  return pos + 1;
}
