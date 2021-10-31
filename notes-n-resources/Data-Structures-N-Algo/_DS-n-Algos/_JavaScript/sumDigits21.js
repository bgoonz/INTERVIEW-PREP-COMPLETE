//21. Write a Program to find the sum of digits of given number

function sumDigits(n) {
  let strn = String(n);

  //creating an array by spliting the string
  numbers = strn.split('');

  //converting the "String Array" to "Number Array" so that we can perform "Reduce" helper
  let numbers_array = numbers.map(Number);

  console.log(
    numbers_array.reduce(function (sum, number) {
      return sum + number;
    }, 0)
  );
}

sumDigits(1234);
sumDigits(0);
sumDigits(42589325);
