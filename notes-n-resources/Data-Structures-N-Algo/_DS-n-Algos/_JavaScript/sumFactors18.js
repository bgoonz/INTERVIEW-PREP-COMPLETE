//18. Write a Program to find total of all factors of given number.

function sumFactors(n) {
  factors = [];

  for (let i = 0; i <= n; i++) {
    if (n % i == 0) {
      factors.push(i);
    }
  }

  console.log(
    factors.reduce(function (sum, factor) {
      return sum + factor;
    }, 0)
  );
}

sumFactors(10);
sumFactors(4);
