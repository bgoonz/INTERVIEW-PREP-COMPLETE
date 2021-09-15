//19. Write a JavaScript Program to accept a number and print its digits

function digitsNums(n) {
  //converting the number to string
  var strn = String(n);

  //applying split method to the string so that it returns sub strings in an array
  console.log(strn.split(''));
}

digitsNums(1234);
digitsNums(0);
digitsNums(42589325);
