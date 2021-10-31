//16. Write a JavaScript Program to take in a number and display all the factors

function displayFactors(n) {
  factors = [];

  for (let i = 0; i <= n; i++) {
    if (n % i == 0) {
      factors.push(i);
    }
  }

  console.log(factors);
}

displayFactors(10);
displayFactors(4);
displayFactors(2);
