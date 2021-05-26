//Write a program which determines the largest prime palindrome less than 1000.

function isPrime(number) {
  if (number < 2) return false;

  //An integer is prime if it is not divisible by any prime less than or equal to its square root

  let q = Math.floor(Math.sqrt(number));

  for (let i = 2; i <= q; i++) {
    if (number % i == 0) {
      return false;
    }
  }

  return true;
}

let isPalindrome = function (number) {
  let numToString = number.toString();
  let checkPalindrome = numToString.split("").reverse().join("");

  if (numToString === checkPalindrome) {
    return true;
  } else {
    return false;
  }
};

for (let i = 1000; true; i--) {
  if (isPalindrome(i) && isPrime(i)) {
    console.log(i);
    break;
  }
}
