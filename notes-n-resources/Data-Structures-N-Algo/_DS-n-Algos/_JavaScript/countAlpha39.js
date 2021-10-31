//39. Write a Javascript program to count alphabet in given string.

function countAlpha(str) {
  let reg1 = / /g; //removing empty spaces using regular expressions
  str = str.replace(reg1, '');
  let alphaStr = str.split('');

  console.log(alphaStr);
  console.log(alphaStr.length);
}

countAlpha('Hello How are you');
countAlpha('Rohit Tony');
