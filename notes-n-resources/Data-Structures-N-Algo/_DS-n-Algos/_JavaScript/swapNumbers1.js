// 1. Write a JavaScript Program to swap given numbers.

function swapNumbers() {
  let a = 3;
  let b = 4;

  [a, b] = [b, a];

  console.log(a);
  console.log(b);
}

swapNumbers();
