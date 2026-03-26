// https://leetcode.com/problems/merge-sorted-array/description

/*
You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n,
representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n,
 where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.
*/

function bruteForce(nums1, m, nums2, n) {
  let nums2Pointer = 0;
  for (let i = m; i < m + n; i++) {
    nums1[i] = nums2[nums2Pointer];
    nums2Pointer++;
  }

  nums1 = nums1.sort((a, b) => a - b);

  console.log(nums1);
}

function betterSolution(nums1, m, nums2, n) {
  let nums1Pointer = 0;
  let nums2Pointer = 0;
  const nums1Copy = nums1.slice(0, m);

  for (let i = 0; i < m + n; i++) {
    if (nums1Pointer >= m) {
      nums1[i] = nums2[nums2Pointer];
      nums2Pointer++;
      continue;
    }

    if (nums2Pointer >= n) {
      nums1[i] = nums1Copy[nums1Pointer];
      nums1Pointer++;
      continue;
    }

    if (nums1Copy[nums1Pointer] < nums2[nums2Pointer]) {
      nums1[i] = nums1Copy[nums1Pointer];
      nums1Pointer++;
    } else {
      nums1[i] = nums2[nums2Pointer];
      nums2Pointer++;
    }
  }

  console.log(nums1);
}

function optimalSolution(nums1, m, nums2, n) {
  let p1 = m - 1;
  let p2 = n - 1;
  for (let i = nums1.length - 1; i >= 0; i--) {
    if (p1 < 0) {
      nums1[i] = nums2[p2];
      p2--;
      continue;
    }

    if (p2 < 0) {
      break;
    }

    if (nums1[p1] > nums2[p2]) {
      nums1[i] = nums1[p1];
      p1--;
    } else {
      nums1[i] = nums2[p2];
      p2--;
    }
  }

  console.log(nums1);
}

bruteForce([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
betterSolution([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
optimalSolution([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
