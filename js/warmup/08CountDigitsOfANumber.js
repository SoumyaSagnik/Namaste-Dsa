function countDigits(n) {
  if (n === 0) return 1;

  n = Math.abs(n);
  let count = 0;

  while (n > 0) {
    count++;
    n = Math.floor(n / 10);
  }

  return count;
}

console.log(countDigits(243));
console.log(countDigits(0));
console.log(countDigits(-12345));
