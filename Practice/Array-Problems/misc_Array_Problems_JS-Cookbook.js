/* Problem statement 1 - You want to convert an array of decimal numbers into a new array with their hexadecimal equivalents.
 */

let decimalArray = [23, 255, 122, 5, 16, 99];

let hexadecimalArray = decimalArray.map(function (element) {
  return element.toString(16);
});

console.log(hexadecimalArray);

/* Problem statement 2 - You want to filter element values in an array and assign the results to a new array. */

let charSet = ["**", "bb", "cd", "**", "cc", "**", "dd", "**"];

let newArray = charSet.filter(function (element) {
  return element !== "**";
});

console.log(newArray);

/* Problem Statement 3 - You want to ensure that array contents meet certain criteria. In this case, ensure that every element in the array consists of alphabetical characters */

function testValue(element, index, array) {
  let testExp = /^[a-zA-Z]+$/;
  return testExp.test(element);
}

let elementSet = ["**", 123, "aaa", "abc", "-", 46, "AAA"];

let result = elementSet.every(testValue);

console.log(result);

let elementSet2 = ["elephant", "lion", "cat", "dog"];

let result2 = elementSet2.every(testValue);

console.log(result2);

/* The Array-problems some() method checks to ensure that at least some of the array elements are alphabetical strings*/

let result3 = elementSet.some(testValue);

console.log(result3);

/* Problem Statement 3 - */
