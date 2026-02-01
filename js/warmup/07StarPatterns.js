/*
  n = 4
  ****
  ****
  ****
  ****
*/

function pattern1(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n; j++) {
      row += "*";
    }
    console.log(row);
  }
}

console.log("Pattern 1");
pattern1(4);
pattern1(3);

/*
  n = 4
  *
  **
  ***
  ****
*/

function pattern2(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < i + 1; j++) {
      row += "*";
    }
    console.log(row);
  }
}

console.log("Pattern 2");
pattern2(4);
pattern2(5);

/*
  n = 5
  1
  12
  123
  1234
  12345
*/

function pattern3(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (j = 0; j < i + 1; j++) {
      row += j + 1;
    }
    console.log(row);
  }
}

console.log("Pattern 3");
pattern3(5);
pattern3(7);

/*
  n = 5
  1
  22
  333
  4444
  55555
*/

function pattern4(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < i + 1; j++) {
      row += i + 1;
    }

    console.log(row);
  }
}

console.log("Pattern 4");
pattern4(5);
pattern4(7);

/*
  n = 5
  12345
  1234
  123
  12
  1
*/

function pattern5(n) {
  for (let i = n; i > 0; i--) {
    let row = "";
    for (let j = 0; j < i; j++) {
      row += j + 1;
    }
    console.log(row);
  }
}

function pattern5b(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n - i; j++) {
      row += j + 1;
    }
    console.log(row);
  }
}

console.log("Pattern 5");
pattern5(5);
pattern5(2);

console.log("Pattern 5 second solution");
pattern5b(7);

/*
  n = 5
  *****
  ****
  ***
  **
  *
*/

function pattern6(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n - i; j++) {
      row += "*";
    }
    console.log(row);
  }
}

console.log("Pattern 6");
pattern6(5);

/*
  n = 5
      *
     **
    ***
   ****
  *****
*/

function pattern7(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n; j++) {
      if (n - j - 1 < i + 1) row += "*";
      else row += " ";
    }
    console.log(row);
  }
}

console.log("Pattern 7");
pattern7(5);

function pattern7b(n) { 
  for (let i = 0; i < n; i++) { 
    let row = "";
    for (let j = 0; j < n - (i + 1); j++) {
      row += " ";
    }
    for (let k = 0; k < i + 1; k++) {
      row += "*";
    }
    console.log(row);
  }
}

console.log("Pattern 7 second solution");
pattern7b(7);

/*
1
10
101
1010
10101
*/

function pattern8(n) { 
  for (let i=0;i<n;i++) {
    let row = '';
    for (let j=0;j<i+1;j++) {
      row += j % 2 === 0 ? '1' : '0';
    }
    console.log(row);
  }
}

console.log("Pattern 8");
pattern8(5);
pattern8(8);

function pattern9(n) {
  let curr = '1';
  for (let i=0;i<n;i++) { 
    let row = '';
    for (let j=0;j<i+1;j++) {
      row += curr;
      curr = curr === '1' ? '0' : '1';
    }
    console.log(row);
  }
}

console.log("Pattern 9");
pattern9(5);
pattern9(8);