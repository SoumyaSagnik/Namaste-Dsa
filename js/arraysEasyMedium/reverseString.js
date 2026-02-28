// https://leetcode.com/problems/reverse-string/description/

/*
Write a function that reverses a string. The input string is given as an array of characters s.
You must do this by modifying the input array in-place with O(1) extra memory.
*/

function reverseString(s) {
  for (let i = 0, j = s.length - 1; i < j; i++, j--) {
    let c = s[i];
    s[i] = s[j];
    s[j] = c;
  }

  return s;
}

function reverseString2(s) {
  for (let i = 0; i < s.length / 2; i++) {
    let c = s[i];
    s[i] = s[s.length - 1 - i];
    s[s.length - 1 - i] = c;
  }

  return s;
}

console.log(reverseString(["a", "p", "p", "l", "e"]));
console.log(reverseString2(["a", "p", "p", "l", "e"]));
