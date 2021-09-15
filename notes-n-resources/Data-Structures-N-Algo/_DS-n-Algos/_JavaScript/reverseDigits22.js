//22. Write a JavaScript Program to reverse the given number

function reverseDigits(n) {
  let strn = String(n);

  numArray1 = strn.split('');

  let numArray2 = numArray1.reverse();
  let numsReverse = numArray2.map(Number);

  console.log(numsReverse);
}

reverseDigits(1234);
reverseDigits(0);
reverseDigits(42589325);
