// 38.	Write a JavaScript program to find out maximum of three numbers using Ternary operator.

function ternaryThree(a, b, c) {
  console.log(a > b ? (a > c ? a : c) : b > c ? b : c);
}

ternaryThree(100000, 100, 2000);
