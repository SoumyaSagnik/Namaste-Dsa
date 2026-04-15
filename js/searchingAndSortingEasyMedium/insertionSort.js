function ascending(nums) {
  for (let i = 1; i < nums.length; i++) {
    let prev = i - 1;
    for (let j = i; j > 0; j--) {
      if (nums[j] < nums[prev]) {
        let c = nums[j];
        nums[j] = nums[prev];
        nums[prev] = c;
        prev--;
      } else {
        break;
      }
    }
  }

  return nums;
}

function optimal(nums) {
  for (let i = 1; i < nums.length; i++) {
    let prev = i - 1;
    let curr = nums[i];
    while (curr < nums[prev] && prev >= 0) {
      nums[prev + 1] = nums[prev];
      prev--;
    }

    nums[prev + 1] = curr;
  }

  return nums;
}

console.log(ascending([7, 4, 3, 5, 1, 2]));
console.log(optimal([7, 4, 3, 5, 1, 2]));
