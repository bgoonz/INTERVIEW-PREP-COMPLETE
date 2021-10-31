//17. Write a JavaScript program to count all factors of given number number

function countFactors(n) {
  factors = [];

  for (let i = 0; i <= n; i++) {
    if (n % i == 0) {
      factors.push(i);
    }
  }

  console.log(factors.length);
}

countFactors(10);
countFactors(4);
