//26. Write a javascript program to check if a given number is prime or not

function primeNumOrNot(n) {
  factors = [];

  for (let i = 0; i <= n; i++) {
    if (n % i == 0) {
      factors.push(i);
    }
  }

  if (factors.length === 2) {
    console.log('Given number is PRIME ' + n);
  } else {
    console.log('Given number is not a PRIME ' + n);
  }
}

primeNumOrNot(2);
primeNumOrNot(20);
primeNumOrNot(13);
primeNumOrNot(23);
primeNumOrNot(9);
primeNumOrNot(7);
