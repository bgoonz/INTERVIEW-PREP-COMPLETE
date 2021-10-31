//27. Write a JavaScript Program to display all prime numbers between 1 to 100.

function allPrimes() {
  for (let i = 2; i <= 100; i++) {
    factors = [];

    for (let j = 0; j <= i; j++) {
      if (i % j == 0) {
        factors.push(j);
      }
    }

    if (factors.length === 2) {
      console.log(i);
    }
  }
}

allPrimes();
