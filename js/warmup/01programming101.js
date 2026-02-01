const a = 3 + 7 + "";
const b = 3 + "" + 7;
console.log({ a, b }); // a: '10' b: '37'

const c = "ab" - "a";
console.log({ c }); // c: NaN

const arr = [0];
console.log(arr[1]); // undefined
