// https://leetcode.com/problems/reverse-integer/description/

const MAX_INT = 2 ** 31 - 1;
const MIN_INT = -(2 ** 31);

function reverseInteger(n) {
  let copy = n;
  let rev = 0;
  n = Math.abs(n);

  while (n > 0) {
    let a = n % 10;
    rev = rev * 10 + a;
    n = Math.floor(n / 10);
  }

  rev = copy < 0 ? -rev : rev;

  if (rev < MIN_INT || rev > MAX_INT) return 0;
  return rev;
}
