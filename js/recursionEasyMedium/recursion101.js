// print n to 1 using recursion
function nToOne(n) {
  if (n === 0) return;
  console.log(n);
  n--;
  nToOne(n);
}

nToOne(5);

// print 1 to n using recursion
function oneToN(n) {
  let i = 1;
  function print(i, n) {
    if (i > n) return;
    console.log(i);
    print(++i, n);
  }

  print(i, n);
}

oneToN(5);

function oneToN2(n) {
  let i = 1;
  function print(i) {
    if (i > n) return;
    console.log(i);
    print(++i);
  }

  print(i);
}

oneToN2(5);
