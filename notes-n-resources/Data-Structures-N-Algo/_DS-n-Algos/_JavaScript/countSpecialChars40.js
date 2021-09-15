// 41. Write a Javascript Program to count special characters in a String.

function countSpecialChars(givenString) {
  const givenStringNum = givenString.match(
    /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/gi
  ).length;
  console.log(givenStringNum);
}

countSpecialChars('Hey****#$*&');
