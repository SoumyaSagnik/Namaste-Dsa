function linearSearch(arr, n) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === n) return i;
  }

  return -1;
}

console.log(linearSearch([9, 9, 6, 6, 6, 9], 6));
