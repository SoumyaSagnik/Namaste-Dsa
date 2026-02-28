// https://leetcode.com/problems/remove-element/description/

/*
Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. 
The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:

Change the array nums such that the first k elements of nums contain the elements which are not equal to val.
The remaining elements of nums are not important as well as the size of nums.
Return k.
*/

// my solution
function removeElement(nums, val) {
  let pos = nums.length - 1;
  let count = 0;
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] === val) {
      let c = nums[i];
      nums[i] = nums[pos];
      nums[pos] = c;
      pos--;
      count++;
    }
  }

  return nums.length - count;
}

// optimal solution
function removeElementOptimal(nums, val) {
  let pos = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[pos] = nums[i];
      pos++;
    }
  }

  return pos;
}
