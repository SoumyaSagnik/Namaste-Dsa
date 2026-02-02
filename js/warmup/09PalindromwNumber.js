function isPalindromeNumber(n) {
  if (n < 0) return false;
  let originalN = n;
  let rev = 0;
  while (n > 0) {
    let a = n % 10;
    rev = rev * 10 + a;
    n = Math.floor(n / 10);
  }

  return rev === originalN;
}

function isPalindromeNumber2(n) {
  let arr = n.toString().split("");
  for (let i = 0, j = arr.length - 1; i < j; i++, j--) {
    if (arr[i] !== arr[j]) return false;
  }

  return true;
}

console.log(12321, isPalindromeNumber(12321));
console.log(-121, isPalindromeNumber(-121));
console.log(12321, isPalindromeNumber2(12321));
console.log(-121, isPalindromeNumber2(-121));

/*
AI:
isPalindromeNumber(n):

Time Complexity: O(log n) - the while loop runs for the number of digits in n
Space Complexity: O(1) - uses only a few constant variables
isPalindromeNumber2(n):

Time Complexity: O(log n) - converts to string, splits to array, then loops through digits
Space Complexity: O(log n) - creates an array storing all digits of n
Winner: isPalindromeNumber is better

Both have the same time complexity, but isPalindromeNumber is superior because it uses O(1) space instead of O(log n).
It reverses the number mathematically without allocating extra data structures, making it more memory-efficient.


The second function uses i < j and moves pointers from both ends toward the middle, so it only iterates through half the array.
However, this doesn't change the Big O analysis:

It still has O(log n) time complexity because O(log n / 2) = O(log n) - constants don't matter in Big O notation
It still has O(log n) space complexity due to the array allocation
So while isPalindromeNumber2 is faster in practice (roughly half the iterations),
isPalindromeNumber is still better overall because it saves the entire O(log n) space requirement.

In summary:

First function: Slightly slower iterations, but optimal space
Second function: Faster iterations (half), but wastes space on the array
For large numbers, the space savings of the first function would typically outweigh the iteration savings of the second.
*/
