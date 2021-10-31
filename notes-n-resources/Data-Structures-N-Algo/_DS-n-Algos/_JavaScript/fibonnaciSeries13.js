//13. Write a JavaScript Program to generate fibonacci series until gien number

function fibonacciSeries(n) {
  let i;
  let fib = [];

  fib[0] = 1;
  fib[1] = 1;

  for (i = 2; i <= n; i++) {
    fib[i] = fib[i - 2] + fib[i - 1];
    console.log(fib[i]);
  }
}

fibonacciSeries(10);
