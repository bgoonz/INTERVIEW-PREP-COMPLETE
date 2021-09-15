//20. Write a JavaScript program to find the sum of digits of given number.

function countDigits(n) {
  var strn = String(n);
  console.log(strn.split('').length);
}

countDigits(1234);
countDigits(0);
countDigits(42589325);
