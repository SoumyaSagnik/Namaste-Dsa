// https://leetcode.com/problems/move-zeroes/description/

/*
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
Note that you must do this in-place without making a copy of the array.

Follow up: Could you minimize the total number of operations done?
*/

function moveZeroes(nums) {
  if (nums.length === 1) return nums;

  let p1 = 0;
  let p2 = 1;

  while (p2 < nums.length) {
    if (nums[p1] === 0 && nums[p2] !== 0) {
      let c = nums[p2];
      nums[p2] = nums[p1];
      nums[p1] = c;
      p1++;
      p2++;
    } else if (nums[p1] === 0 && nums[p2] === 0) {
      p2++;
    } else {
      p1++;
      p2++;
    }
  }

  return nums;
}

function hisSolution(nums) {
  let x = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[x] = nums[i];
      x++;
    }
  }

  // fill out remaining elements to 0
  for (let i = x; i < nums.length; i++) {
    nums[i] = 0;
  }

  return nums;
}

console.log(moveZeroes([1, 0, 1]));
console.log(moveZeroes([0, 1, 0, 3, 12]));

console.log(hisSolution([1, 0, 1]));
console.log(hisSolution([0, 1, 0, 3, 12]));
