# Examples

```js
// external js file
// Write all JavaScript code here

alert("welcome to JavaScript written in external file");
console.log("welcome to JavaScript written in external file");
document.write("<h2>welcome to JavaScript written in external file</h2>");
```

---

---

```js
// external js file
// Write all JavaScript code here

// define function - block of code to show welcome message
function sayHello() {
  alert("Hello All! Welcome to JavaScript!!");
}

// define function - block of code to show total of two numbers
function showTotal() {
  var num1 = 10;
  var num2 = 20;
  var total = num1 + num2;
  alert("Total is : " + total);
}

// invoke / run  / call a function
sayHello();
showTotal();
```

---

---

```js
// external js file
// Write all JavaScript code here

// show alert box
alert("Welcome to JavaScript!");

var firstName = "Dinanath"; // variable to store firstName
var lastName = "Jayaswal"; // variable to store lastName

/* show alert box */
alert("Welcome to JavaScript!");

/* This is a multiline comment.
A code block can be commented. */

/* var firstName = 'Dinanath'; // variable to store firstName
var lastName = 'Jayaswal'; // variable to store lastName */
```

---

---

```js
// external js file
// Write all JavaScript code here

alert("I am Dinanath Jayaswal");
window.alert("We are learning JavaScript");
```

---

---

```js
// external js file
// Write all JavaScript code here

console.log("I am Dinanath Jayaswal");
console.log("We are learning JavaScript");
```

---

---

```js
// external js file
// Write all JavaScript code here

document.write("<hr/>");
document.write("I am Dinanath Jayaswal");
document.write("<h1>We are learning JavaScript</h1>");
```

---

---

```js
// external js file
// Write all JavaScript code here

// Writing text string inside an element
document.getElementById("mainHeadingText").innerHTML =
  "Heading Text change dynamically on run-time";

var paraText = document.getElementById("mainParaText");
paraText.innerHTML =
  "<strong>This Paragraphic text inserted dynamically through innerHTML method.</strong>";
```

---

---

```js
// external js file
// Write all JavaScript code here

// variables defined to hold different types of data
var techName = "JavaScript"; // String literal
var version = 6; // Number literal
var isDone = true; // Boolean literal

console.log("Learning " + techName + version);
```

---

---

```js
// Declaring Variable
var userName;

// Assigning value
userName = "Dinanath";

console.log("Welcome " + userName);
```

---

---

```js
// Declaring multiple variables
var firstName = "Dinanath",
  lastName = "Jayaswal",
  age = 35,
  isMarried = "true";

// Declaring multiple variables in multiple lines for readability
/* var firstName = 'Dinanath', 
lastName = 'Jayaswal', 
age = 35, 
isMarried = 'true'; */

console.log("I am " + firstName + " " + lastName);
```

---

---

```js
// external js file
// Write all JavaScript code here

// variables defined to hold different types of data
var _firstName = "JavaScript";
var $version = 6;
var $num_total1 = 10;

window.alert(
  "variables details: " + _firstName + " " + $version + " " + $num_total1
);

// wrong identifiers
// var #name;
```

---

---

```js
// external js file
// Write all JavaScript code here

// global variable
var globalName = "Global";

window.alert(globalName);

function showName() {
  // local variable
  var localName = "Local";

  window.alert(localName);
  window.alert(globalName); // recall global variable
}

// invoke/call/run function
showName();

// error - as local variable not exist/available outside of block { }
window.alert(localName);
```

---

---

```js
// external js file
// Write all JavaScript code here

// global variable
var globalName = "Global";

window.alert(globalName);

function showName() {
  // local variable
  var globalName = "Local";

  window.alert(globalName);

  // define global variable with window
  window.globalVersion = 29;
  window.alert("global variable from inside function: " + window.globalVersion);
}

// invoke/call/run function
showName();

// access global variable defined inside function
window.alert("global variable from outside function: " + window.globalVersion);
```

---

---

```js
// external js file
// Write all JavaScript code here

// traditional var syntax
var techName1 = "JavaScript";

for (var i = 1; i <= 5; i++) {
  console.log("i : " + i); // 1,2,3,4,5
  console.log("inside block:" + techName1);
  var version1 = 100;
}
console.log("outside: " + i);
console.log("outside: " + version1);
```

---

---

```js
// ES6 syntax
let techName2 = "LiveScript";

for (let n = 1; n <= 5; n++) {
  console.log("n : " + n); // 1,2,3,4,5
  console.log("inside block:" + techName2);
  let version2 = 100;
}

console.log(n); // undefined
console.log("outside: " + version2); // undefined
```

---

---

```js
// external js file
// Write all JavaScript code here

// traditional var syntax
var PI1 = 3.14;
console.log(PI1); // 3.14

PI1 = 100;
console.log(PI1); // 100
```

---

---

```js
// ES6 syntax
const PI2 = 6.28;
console.log("ES6 syntax const: " + PI2); // 6.28

PI2 = 100; // error
```

---

---

```js
// external js file
// Write all JavaScript code here

// string
var firstName = "Java";
var lastName = "Script";
var message1 = "Welcome! How's you doing?";
var message2 = 'Welcome! How"s you doing?';
```

---

---

```js
// number
let age = 35; // integer
var b = 29.03; // floating-point number
const PI = 3.14;
```

---

---

```js
// boolean
var isMale = true;
var isSenior = false;
var num1 = 10;
var num2 = 20;
var num3 = 10;

var isEqual = num1 == num2;
console.log("isEqual: " + isEqual);
console.log("num1 & num3 equal: " + (num1 == num3));
```

---

---

```js
// undefined
let dob;
alert("dob1: " + dob); // shows undefined

dob = undefined;
alert("dob2: " + dob); // shows undefined
```

---

---

```js
// null
let technology = null;
alert("technology: " + technology); // shows undefined
```

---

---

```js
// external js file
// Write all JavaScript code here

// same variable can hold any type of data
let name = "JavaScript"; // string
name = false; // boolean
name = 100; // number
alert(name);
alert(typeof name);
```

---

---

```js
// external js file
// Write all JavaScript code here

// use typeof to find data type of variables
// Strings
alert(typeof "Hello"); // "string"
alert(typeof "12"); // "string"

// Numbers
console.log(typeof 100); // "number"
console.log(typeof 100.29); // "number"

// Booleans
alert(typeof true); // "boolean"
alert(typeof (1 == 2)); // "boolean"

// Undefined
console.log(typeof undefined); // "undefined"

var x;
console.log("type of x: " + typeof x); // "undefined"

// Null
console.log(typeof null); // "object"
var x = null;
console.log("type of x: " + typeof x); // "object"

// Objects
alert(typeof { name: "Dinanath", age: 35 }); // "object"
alert(typeof document); // "object"
alert(typeof window); // "object"

// Arrays
var x = [];
console.log("type of x: " + typeof x); // "object"
console.log(typeof ["JavaScript", "jQuery", "Angular"]); // "object"
console.log(typeof ["Dinanath", 35, "India"]); // "object"

// Functions
console.log(typeof function () {}); // "function"
console.log(typeof alert); // "function"
console.log(typeof window.alert); // "function"

// Symbol
alert(typeof Symbol("dob")); // "symbol"
```

---

---

```js
// external js file
// Write all JavaScript code here

// Lets take a look on simple expression
var sum = 1 + 2;

// Here 1 and 2 are called `operands` and
// `=` & `+` are called the `operator`
// `= is the assignment` operator, `+ is the arithmetic` operator
```

---

---

```js
// external js file
// Write all JavaScript code here

// Arithmetic operators
var num1 = 10;
var num2 = 4;

alert("Addition " + (num1 + num2)); // 14
alert("Subtraction " + (num1 - num2)); // 6
alert("Multiplication " + num1 * num2); // 40
alert("Division " + num1 / num2); // 2.5
alert("Modulus reminder " + (num1 % num2)); // 2
num1++;
alert("after Increment " + num1); // 11
num2--;
alert("after Decrement " + num2); // 3

num1 = 10;
num2 = 4;
alert("Exponentiation " + num1 ** num2); // (10 ** 4) = 10* 10 * 10 * 10 = 10000
```

---

---

```js
// external js file
// Write all JavaScript code here

// Assignment operators
var num1 = 10;
var num2 = 20;

// old methodology
// num1 = num1 + num2;
// console.log(num1); // 30

// new techniques
num1 += num2;
console.log(num1); // 30

// num2 -= num1;
// console.log(num2); // 10

// num1 *= num2;
// console.log(num1); // 200

// num2 /= num1;
// console.log(num2); // 2
```

---

---

```js
// external js file
// Write all JavaScript code here

// Logical operators - basic examples

// && (Logical AND) - returns true if both operands are true
console.log("true && true: ", true && true);
console.log("true && false: ", true && false);
console.log("false && true: ", false && true);
```

---

---

```js
// || (Logical OR) - returns true if one of the operand is true
console.log("true || true: ", true || true);
console.log("true || false: ", true || false);
console.log("false || true: ", false || true);
```

---

---

```js
// ! (Logical NOT) True if operand is not true (means I will be true if other is false)
var isSeniorCitizen = true;

var isYoungGeneration = !isSeniorCitizen;
console.log("isYoungGeneration: ", isYoungGeneration);
```

---

---

```js
// external js file
// Write all JavaScript code here

// Logical operators - real world scenario/example

// check credit/loan eligibility - (if applicant have HIGH INCOME & GOOD CREDIT SCORE, he is eligible for credit/loan)
var isEarningHighIncome = true;
var isGoodCibilScore = false;
var isEligibleForLoan;

// check eligibility with && Logical AND operator
isEligibleForLoan = isEarningHighIncome && isGoodCibilScore;
alert("isEligibleForLoan: " + isEligibleForLoan);

// check eligibility with || Logical OR operator
isEligibleForLoan = isEarningHighIncome || isGoodCibilScore;
alert("isEligibleForLoan: " + isEligibleForLoan);

// ! Logical NOT
var isLoanRefused = !isEligibleForLoan;
alert("isLoanRefused: " + isLoanRefused);
```

---

---

```js
// external js file
// Write all JavaScript code here

// Comparison (or Relational) operators
var num1 = 25;
var num2 = 35;
var num3 = "25";

alert(num1 == num3); // true
alert(num1 === num3); // false
alert(num1 != num2); // true
alert(num1 !== num3); // true
alert(num1 < num2); // true
alert(num1 > num2); // false
alert(num1 <= num2); // true
alert(num1 >= num2); // false
```

---

---

```js
// external js file
// Write all JavaScript code here

// Conditional (? or ternary) Operator

// age category
var currentAge = 100;
var category;

category = currentAge < 18 ? "Minor" : "Major";
alert("AGE category: " + category);

// fees category
var isAuthorisedMember = true;
var fees;

fees = isAuthorisedMember == true ? 5 : 10;
alert("fees / charges: " + fees);
```

---

---

```js
// external js file
// Write all JavaScript code here

// String Operators
var message1 = "Hello";
var message2 = " World!";

alert(message1 + message2); // Outputs: Hello World!

message1 += message2;
alert(message1); // Outputs: Hello World!
```

---

---

```js
// external js file
// Write all JavaScript code here

// Operator precedence
var result1 = 10 + 2 * 5;
alert("10 + 2 * 5 =  " + result1); // answer is 20 NOT 60 (12 * 5 ), actually * or multiplication have higher precedence so the actual calculation is like 10 + ( 2*5 ) = 10 + 10 = 20

// change precedence with `parentheses ()`
var result2 = (10 + 2) * 5;
alert("(10 + 2) * 5 =  " + result2); // (12) * 5 = 60

// same precedence operators
var result3 = 10 + 5 - 2;
alert("10 + 5 - 2 =  " + result3); // 13 first addition than subtraction

var result4 = 10 + (5 - 2);
alert("10 + (5 - 2) =  " + result4); // 13 first subtraction ie. ( ) than addition
```

---

---

```js
// external js file
// Write all JavaScript code here

//1. define / declare / create function

function showMessage() {
  //Body of function
  //code to be executed
  console.log("welcome to JavaScript function");
  alert("welcome to JavaScript function");
}

//2. invoke / call the function
showMessage();

showMessage();
```

---

---

```js
// external js file
// Write all JavaScript code here

var name = "Dinanath";

// simple/normal function

//1. define / declare / create function
function sayHello() {
  //Body of function
  //code to be executed
  console.log("Hello " + name);
  alert("Hello " + name);
}

//2. invoke / call the function
sayHello();

name = "Dino";

sayHello();
```

---

---

```js
// external js file
// Write all JavaScript code here

// Parameterized function

//1. define / declare / create function
function sayHello(name) {
  //Body of function
  //code to be executed
  console.log("Hello " + name);
  alert("Hello " + name);
}

//2. invoke / call the function
sayHello("Dinanath");

sayHello("Dino");
```

---

---

```js
var total;

function calculateSum(num1, num2) {
  total = num1 + num2;
  console.log(total);
}

calculateSum(10, 20);
calculateSum(100, 200);
```

---

---

```js
// external js file
// Write all JavaScript code here

// Parameterized function with default parameters

//1. define / declare / create function
function sayHello(name = "User") {
  //Body of function
  //code to be executed
  console.log("Hello " + name);
  alert("Hello " + name);
}

//2. invoke / call the function
sayHello();

sayHello("Amber");
```

---

---

```js
var total;

function calculateSum(num1 = 1, num2 = 2) {
  total = num1 + num2;
  console.log(total);
}

calculateSum();
calculateSum(100, 200);
```

---

---

```js
// external js file
// Write all JavaScript code here

// Return type function

//1. define / declare / create function
function getSum(num1, num2) {
  //Body of function
  //code to be executed
  var sum = num1 + num2;
  return sum;
}

//2. invoke / call the function
console.log(getSum(10, 20));
console.log(getSum(100, 200));

var total = getSum(50, 50);
alert(total);
```

---

---

```js
// external js file
// Write all JavaScript code here

// function declaration (Regular / normal function)
function getSum1(num1, num2) {
  var total = num1 + num2;
  return total;
}
```

---

---

```js
// function expression - Anonymus
var getSum2 = function (num1, num2) {
  var total = num1 + num2;
  return total;
};

alert(getSum2(10, 20));
```

---

---

```js
// assign function to another variable
var sum1 = getSum2;
alert(sum1(100, 200));
```

---

---

```js
// external js file
// Write all JavaScript code here

// function declaration (Regular / normal function)
function getSum1(num1, num2) {
  var total = num1 + num2;
  return total;
}
```

---

---

```js
// function expression - named
var getSum2 = function getTotal(num1, num2) {
  var total = num1 + num2;
  return total;
};

alert(getSum2(10, 20));
```

---

---

```js
// assign function to another variable
var sum1 = getSum2;
alert(sum1(5, 10));
```

---

---

```js
// external js file
// Write all JavaScript code here

// Immediately invoked function expression (IIFE)
(function () {
  console.log("Welcome to Immediately invoked function expression (IIFE)");
})();
```

---

---

```js
// external js file
// Write all JavaScript code here

// for loop

/* for (statement 1; statement 2; statement 3) {
  // Code to be executed
} */

/* for(variable definition/initialization; condition checking; increment/decrement expression) {
  // Code to be executed
} */

for (let i = 1; i <= 5; i++) {
  alert("Hello, The current index/num is: " + i);
  document.write("<li>Hello, The current index/num is: " + i + "</li>");
  console.log("Hello, The current index/num is: " + i);
}
```

---

---

```js
// external js file
// Write all JavaScript code here

// for loop

/* for (statement 1; statement 2; statement 3) {
  // Code to be executed
} */

/* for(variable definition/initialization; condition checking; increment/decrement expression) {
  // Code to be executed
} */

// for loop - reverse order

for (let i = 5; i >= 1; i--) {
  alert("Hello, The current index/num is: " + i);
  document.write("<li>Hello, The current index/num is: " + i + "</li>");
  console.log("Hello, The current index/num is: " + i);
}
```

---

---

```js
// external js file
// Write all JavaScript code here

// while loop

/*while(condition) {
  // Code to be executed
}*/

let i = 1;

while (i <= 5) {
  alert("Hello, The current index/num is: " + i);
  document.write("<li>Hello, The current index/num is: " + i + "</li>");
  console.log("Hello, The current index/num is: " + i);
  i++;
}
```

---

---

```js
// external js file
// Write all JavaScript code here

// do...while loop

/*do {
    // Code to be executed
}
while(condition);*/

let i = 1;

do {
  alert("Hello, The current index/num is: " + i);
  document.write("<li>Hello, The current index/num is: " + i + "</li>");
  console.log("Hello, The current index/num is: " + i);
  i++;
} while (i <= 5);
```

---

---

```js
// external js file
// Write all JavaScript code here

// for...in loop

/*for(variable/key in array/object) {
    // Code to be executed
}*/

// An array with some elements
let arrColors = ["Red", "Green", "Blue", "Cyan", "Magenta", "Yellow", "Black"];

// Loop through all the elements in the array
for (let color in arrColors) {
  alert("Color is: " + arrColors[color]);
  document.write("<li>Color is: " + arrColors[color] + "</li>");
  console.log("Color is: " + arrColors[color]);
}
```

---

---

```js
// external js file
// Write all JavaScript code here

// for...in loop

/*for(variable/key in array/object) {
    // Code to be executed
}*/

// An object with some properties
let objEmployee = {
  emp_name: "Dinanath",
  emp_addres: "Mumbai",
  emp_id: "029",
  emp_age: 35,
};

// Loop through all the properties in the object
for (emp in objEmployee) {
  alert("Employee " + emp + " is: " + objEmployee[emp]);
  document.write("<li>Employee " + emp + " is: " + objEmployee[emp] + "</li>");
  console.log("Employee " + emp + " is: " + objEmployee[emp]);
}
```

---

---

```js
// external js file
// Write all JavaScript code here

// for...in loop

/*for(variable/key in array/object) {
    // Code to be executed
}*/

// Loop through all the properties in the ibuilt object - window, document, navigator
for (props in window) {
  // alert('document object properties ' + props);
  document.write("<li>document object properties " + props + "</li>");
  console.log("document object properties " + props);
}
```

---

---

```js
// external js file
// Write all JavaScript code here

// for...of loop

/*for(element in array/string) {
  // Code to be executed
} */

// Iterating over an array
let arrDays = [
  "Monday",
  "TuesDay",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

for (let day of arrDays) {
  console.log(day);
  document.write("<li>" + day + "</li>");
}

// Iterating over string
let name = "JavaScript";
for (let letter of name) {
  document.write(letter + ",");
  console.log(letter + ",");
}
```

---

---

```js
// external js file
// Write all JavaScript code here

// break continue statement

/* break */
let arrDays = [
  "Monday",
  "TuesDay",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

let i = 1;
while (i <= 10) {
  if (i == 5) {
    break;
  }
  console.log(i);
  i++;
}

console.log("

---
---


");

for (let i = 0; i <= arrDays.length; i++) {
  if (i == 3) {
    break;
  }
  console.log(arrDays[i]);
}

console.log("

---
---


");

/* continue */
i = 1;
while (i <= 20) {
  if (i % 2 == 0) {
    // console.log('Even Number ', i);
    i++;
    continue; // skip rest of the loop body

    i + 100; // non of use
    console.log("just in even num continue"); // non of use
  }
  console.log("Odd Number ", i);
  i++;
}

console.log("

---
---


");

for (i = 1; i <= 10; i++) {
  if (i === 5) {
    continue; // skip rest of the loop body
    console.log("just after 5 continue..."); // non of use
  }
  console.log(i);
}

console.log("

---
---


");
```

---

---

```js
// external js file
// Write all JavaScript code here

// if conditional statement

/*if(condition/expression) {
  // Code to be executed if condition/expression is true
}
*/

let user = "Dinanath";

if (user == "Dinanath") {
  console.log("Welcome Dinanath!");
  window.alert("Welcome Dinanath!");
}

if (user == "Dinanath") {
  console.log("Welcome Authorised User: " + user + "!");
  window.alert("Welcome Authorised User: " + user + "!");
}
```

---

---

```js
let age = 20;

if (age >= 18) {
  console.log("MAJOR! Eligible for Voting");
  window.alert("MAJOR! Eligible for Voting");
}
```

---

---

```js
// external js file
// Write all JavaScript code here

// if...else conditional statement

/*if(condition/expression){  
// content to be executed if condition is true - statements_1  
}  
else{  
// content to be executed if condition is false - statements_2
}*/

let user = "Ambar";

if (user == "Dinanath") {
  console.log("Welcome Dinanath!");
  window.alert("Welcome Dinanath!");
} else {
  console.log("Welcome Guest!");
  window.alert("Welcome Guest!");
}
```

---

---

```js
let age = 15;

if (age >= 18) {
  console.log("MAJOR! Eligible for Voting");
  window.alert("MAJOR! Eligible for Voting");
} else {
  console.log("MINOR! NOT Eligible for Voting");
  window.alert("MINOR! NOT Eligible for Voting");
}
```

---

---

```js
// external js file
// Write all JavaScript code here

// If...else if...else conditional statement

/*if(condition/expression 1) {
    // Code to be executed if condition1 is true statements_1
} else if(condition/expression 2) {
    // Code to be executed if the condition1 is false and condition2 is true statements_2
} else {
    // Code to be executed if both condition1 and condition2 are false statements_3
}*/

let num1 = 200;
let num2 = 100;

if (num1 == num2) {
  console.log("Both numbers are equal");
} else if (num1 < num2) {
  console.log("Number2 is greater!");
} else {
  console.log("Number1 is greater!");
}
```

---

---

```js
let age = 15;

if (age >= 60) {
  console.log("SINIOR CIRIZEN!");
} else if (age < 18) {
  console.log("MINOR!");
} else {
  console.log("MAJOR - Middle Age!");
}
```

---

---

```js
// external js file
// Write all JavaScript code here

// switch...case conditional statement

/* switch(variable/expression){
  case value1:
    // Code to be executed if variable/expression === value1
    break;
  case value2:
    // Code to be executed if variable/expression === value2
    break;
  default:
    // Code to be executed if variable/expression is different from all values
} */

let grade = "B"; // A.B,C, or something

switch (grade) {
  case "A":
    console.log("Great Job! - A Grade");
    break;
  case "B":
    console.log("Good! - B Grade");
    break;
  case "C":
    console.log("Congratulations! - Passed");
    break;
  default:
    console.log("Sorry! - Failed...Keep trying!");
    break;
}
```

---

---

```js
let sweets = ""; //cake, chocolates, biscuits

switch (sweets) {
  case "chocolates":
    console.log("Chubby Chocolates!");
    break;
  case "cake":
    console.log("Happy BirthDay Cake!");
    break;
  case "biscuits":
    console.log("Enjoy Biscuits!");
    break;
  default:
    console.log("No Sweets! Try some other sweets!");
    break;
}
```

---

---

```js
// external js file
// Write all JavaScript code here

// create array with array literal

// var myArray = [element0, element1, ..., elementN];

var arrColors = ["Red", "Green", "Blue", "Orange"];
console.log(arrColors); // show all elements
```

---

---

```js
var arrCities = ["Delhi", "Mumbai", "Kolkota", "Bengaluru", "Chennai"];
console.log(arrCities[1]); // show 1st index ie. 2nd positioned element
```

---

---

```js
var arrTechnologies = [];
arrTechnologies[0] = "Java";
arrTechnologies[1] = "Python";
arrTechnologies[2] = "C";
console.log(arrTechnologies);
console.log("Total Elements: " + arrTechnologies.length);
```

---

---

```js
// external js file
// Write all JavaScript code here

// create array with new keyword

// var myArray = new Array(); OR var myArray = Array();

var arrColors = new Array();

arrColors[0] = "Red";
arrColors[1] = "Green";
arrColors[2] = "Blue";
arrColors[3] = "Orange";
console.log(arrColors); // show all elements

// read/get array items/elements
for (let i = 0; i < arrColors.length; i++) {
  alert(arrColors[i]);
}
```

---

---

```js
var arrCities = Array();
arrCities[0] = "Delhi";
arrCities[1] = "Mumbai";
arrCities[2] = "DeKolkotalhi";
arrCities[3] = "Bengaluru";
arrCities[4] = "Chennai";
console.log(arrCities); // show all elements
```

---

---

```js
var arrTechnologies = new Array();

// add new array items/elements
for (let i = 0; i <= 5; i++) {
  arrTechnologies[i] = "JavaScript";
}

console.log(arrTechnologies); // show all elements
```

---

---

```js
// external js file
// Write all JavaScript code here

// create array with new keyword Array constructor passing parameter

// var myArray = new Array(element0, element1, ..., elementN);

var arrColors = new Array("Red", "Green", "Blue", "Orange");
console.log(arrColors); // show all elements
```

---

---

```js
var arrCities = new Array("Delhi", "Mumbai", "Kolkota", "Bengaluru", "Chennai");
console.log(arrCities); // show all elements
```

---

---

```js
var arrJsFrameworks = new Array(
  "jQuery",
  "Angular",
  "React",
  "Node",
  "Vue",
  "Express",
  "D3"
);
console.log(arrJsFrameworks); // show all elements
```

---

---

```js
// external js file
// Write all JavaScript code here

// get/retreive/find array length

// myarray.length

var arrColors = new Array("Red", "Green", "Blue", "Orange");
console.log(arrColors.length);
```

---

---

```js
var arrCities = new Array("Delhi", "Mumbai", "Kolkota", "Bengaluru", "Chennai");
console.log(arrCities.length);
```

---

---

```js
var arrJsFrameworks = new Array(
  "jQuery",
  "Angular",
  "React",
  "Node",
  "Vue",
  "Express",
  "D3"
);
console.log(arrJsFrameworks.length);
```

---

---

```js
// external js file
// Write all JavaScript code here

// access/loop thourgh array element

// myarray[indexNumber], myarray[0]

var arrColors = new Array("Red", "Green", "Blue", "Orange");
console.log(arrColors[0]); // Red
console.log(arrColors[2]); // Blue
```

---

---

```js
var arrCities = new Array("Delhi", "Mumbai", "Kolkota", "Bengaluru", "Chennai");
console.log(arrCities[1]); // Mumbai
console.log(arrCities[4]); // Chennai
```

---

---

```js
var arrJsFrameworks = new Array(
  "jQuery",
  "Angular",
  "React",
  "Node",
  "Vue",
  "Express",
  "D3"
);
console.log(arrJsFrameworks[3]); // Node
console.log(arrJsFrameworks[5]); // Express

// Loop through an Array Elements
for (let i = 0; i < arrJsFrameworks.length; i++) {
  document.write("<li>" + arrJsFrameworks[i] + "</li>");
}
```

---

---

```js
// external js file
// Write all JavaScript code here

// add/edit array element

// myarray[indexNumber]='value', myarray[2]='value', myarray.push('value'), myarray.unshift('value')

var arrColors = new Array("Red", "Green", "Blue", "Orange");
console.log(arrColors);
console.log("arrColors.length: " + arrColors.length);

// add an element at the end of the array
arrColors.push("Cyan");
console.log(arrColors);
console.log("arrColors.length: " + arrColors.length);

// add multiple elements at the end of the array
arrColors.push("Magenta", "Yellow");
console.log(arrColors);
console.log("arrColors.length: " + arrColors.length);
```

---

---

```js
// add multiple elements at the start of the array
arrColors.unshift("Black", "White");
console.log(arrColors);
console.log("arrColors.length: " + arrColors.length);
```

---

---

```js
// edit 1st index ie. 'white' to 'pink'
arrColors[1] = "pink";
console.log(arrColors);
console.log("arrColors.length: " + arrColors.length);
```

---

---

```js
// external js file
// Write all JavaScript code here

// remove/delete array element from start and end

// myarray.pop(), myarray.shift()

var arrColors = new Array("Red", "Green", "Blue", "Orange");
console.log(arrColors);
console.log("arrColors.length: " + arrColors.length);

// remove an element from the end of the array
arrColors.pop();
console.log(arrColors);
console.log("arrColors.length: " + arrColors.length);
```

---

---

```js
// remove an element from the start of the array
let startElement = arrColors.shift();
console.log(startElement);
console.log(arrColors);
console.log("arrColors.length: " + arrColors.length);
```

---

---

```js
// external js file
// Write all JavaScript code here

// create object with object literal

// var MyObject = { property1: value1, property2: value2.....propertyN: valueN }

// empty object
var HumanObj = {};

console.log(HumanObj);

console.log("

---
---


");

// object with properties
var TechnologyObj = {
  name: "JavaScript",
  version: 6,
  type: "script",
  isStable: true,
};

console.log(TechnologyObj.name);
console.log(TechnologyObj["isStable"]);

console.log("

---
---


");

// object properly alignment/arranged for redability - with quotes
var VehicleObj1 = {
  type: "LWM",
  brand: "Maruti",
  model: "Alto-100",
  color: "White",
  isHighEndModel: true,
  price: 400000,
  keyStart: function () {
    console.log(this.model + " started!");
  },
};

console.log(VehicleObj1.brand);
console.log(VehicleObj1["color"]);
VehicleObj1.keyStart();

console.log("

---
---


");

// object properly alignment/arranged for redability - without quotes
var VehicleObj2 = {
  type: "LWM",
  brand: "Maruti",
  model: "Alto-100",
  color: "White",
  isHighEndModel: true,
  price: 400000,
  keyStart: function () {
    alert(this.model + "started!");
  },
};

console.log(VehicleObj1.brand);
console.log(VehicleObj1["color"]);
VehicleObj1.keyStart();

console.log("

---
---


");
```

---

---

```js
// external js file
// Write all JavaScript code here

// create object with new keyword

// var MyObject = new Object(); OR var MyObject = Object();

// object with properties
var TechnologyObj = new Object();

TechnologyObj.name = "JavaScript";
TechnologyObj.version = 6;
TechnologyObj.type = "script";
TechnologyObj.isStable = true;

console.log(TechnologyObj.name);
console.log(TechnologyObj["type"]);

console.log("

---
---


");

// object properly alignment/arranged for redability - with quotes
var VehicleObj1 = new Object({
  type: "LWM",
  brand: "Maruti",
  model: "Alto-100",
  color: "White",
  isHighEndModel: true,
  price: 400000,
  keyStart: function () {
    console.log(this.model + " started!");
  },
});

console.log(VehicleObj1.brand);
console.log(VehicleObj1["color"]);
VehicleObj1.keyStart();

console.log("

---
---


");

// object properly alignment/arranged for redability - without quotes
var VehicleObj2 = Object({
  type: "LWM",
  brand: "Maruti",
  model: "Alto-100",
  color: "White",
  isHighEndModel: true,
  price: 400000,
  keyStart: function () {
    alert(this.model + "started!");
  },
});

console.log(VehicleObj1.brand);
console.log(VehicleObj1["color"]);
VehicleObj1.keyStart();

console.log("

---
---


");
```

---

---

```js
// external js file
// Write all JavaScript code here

// create object with new keyword - Object constructor with function

function Technology(name, version, type) {
  this.name = name;
  this.version = version;
  this.type = type;
  console.log(this.name);
  console.log(this.type);
}

let JavaScript = new Technology("JavaScript", 6, "Script Language");
console.log(JavaScript.version);

console.log("

---
---


");

function Vehicle(brand, model, color, price) {
  this.brand = brand;
  this.model = model;
  this.color = color;
  this.price = price;
  this.keyStart = function () {
    console.log(this.model + " started!");
  };
}

var Maruti = new Vehicle("Maruti", "Alto-100", "White", 400000);
Maruti.keyStart();

console.log("

---
---


");
```

---

---

```js
// external js file
// Write all JavaScript code here

// access/loop thourgh array element

// MyObject.propertyName; OR MyObject[propertyName]; OR MyObject['propertyName']

var Person = {
  name: "Dinanath",
  domain: "IT/Software",
  gender: "Male",
  city: "Mumbai",
  country: "India",
};

console.log(Person.name);
console.log(Person["domain"]);

console.log("

---
---


");

// Loop through an Array Elements
for (props in Person) {
  console.log(Person[props]);
}

console.log("

---
---


");
```

---

---

```js
// external js file
// Write all JavaScript code here

// remove/delete Object's Properties

// delete MyObject.propertyName;

var Person = {
  name: "Dinanath",
  domain: "IT/Software",
  gender: "Male",
  city: "Mumbai",
  country: "India",
};

delete Person.name;
console.log(Person.name);
console.log(Person["domain"]);
```

---

---

```js
// external js file
// Write all JavaScript code here

// event handler function

function fnShowMessage() {
  console.log("Welcome to fnShowMessage event handler!");
  alert("Welcome to fnShowMessage event handler!");
}
```

---

---

```js
// external js file
// Write all JavaScript code here

// DOM element properties

// method - 1
messageButton1.onclick = function () {
  console.log("Welcome to event handler!");
  alert("Welcome to event handler!");
};

// method - 2
document.getElementById("messageButton2").onclick = fnShowMessage;

function fnShowMessage() {
  alert("Hello World! Welcome to JavaScript events");
}
```

---

---

```js
// external js file
// Write all JavaScript code here

// Selecting element with id
let mainHeadingElement = document.getElementById("mainHeadingText");

// get html of selected element
let mainHeadingHtml = mainHeadingElement.innerHTML;

// get text of selected element
let mainHeadingText = mainHeadingElement.innerText;
console.log("mainHeadingHtml: " + mainHeadingHtml); // text with complete html tags
console.log("mainHeadingText: " + mainHeadingText); // only text

// console.log('

---
---


');

// set text of selected element
mainHeadingElement.innerHTML = "This text changed with DOM method...";

// console.log('

---
---


');

// set text of another element
let subHeadingElement = document.getElementById("subHeadingText");
subHeadingElement.innerHTML = mainHeadingElement.innerHTML;

// console.log('

---
---


');

// set css style
mainHeadingElement.style.backgroundColor = "pink";

// console.log('

---
---


');
```

---

---

```js
// external js file
// Write all JavaScript code here

// Selecting elements with class
let listItems = document.getElementsByClassName("list-item");
console.log(listItems);

// get text of 1st ie 0th element
let firstListItemText = listItems[0].innerHTML;
console.log("firstListItemText: " + firstListItemText);

// console.log('

---
---


');

// set color of last element
let lastListItem = listItems.length - 1;
listItems[lastListItem].style.color = "blue";

// console.log('

---
---


');

// highlighting all list items through loop
for (var listItem in listItems) {
  listItems[listItem].style.marginBottom = "10px";
  listItems[listItem].style.background = "#bbbbbb";
}

// console.log('

---
---


');
```

---

---

```js
// external js file
// Write all JavaScript code here

// Selecting all LI elements with tag name
let liElements = document.getElementsByTagName("li");
console.log(liElements);

// console.log('

---
---


');

// get total li tags/elements in page
let totalLiElements = liElements.length;
console.log(totalLiElements);

// console.log('

---
---


');

// get text of 1st ie 0th li element
let firstLiText = liElements[0].innerHTML;
console.log("firstLiText: " + firstLiText);

// console.log('

---
---


');

// set text of last element
let lastLi = liElements.length - 1;
liElements[lastLi].style.color = "blue";

// console.log('

---
---


');

// highlighting all li elements through loop
for (var li in liElements) {
  liElements[li].style.marginBottom = "10px";
  liElements[li].style.background = "#bbbbbb";
}

// console.log('

---
---


');
```

---

---

```js
// external js file
// Write all JavaScript code here

// Selecting all ul -> li elements
let ulLiElement = document.querySelectorAll("ul li");
console.log(ulLiElement);

let ulListItemClass = document.querySelectorAll("ul li.list-item");
console.log(ulListItemClass);

// set color of last li element
ulLiElement[ulLiElement.length - 1].style.color = "red";

// set text of last li element
ulLiElement[ulLiElement.length - 1].innerHTML =
  "Dynamic text change at run time";
```

---

---

```js
// external js file
// Write all JavaScript code here

// Selecting element with id
let mainHeadingElement = document.getElementById("mainHeadingText");

// set css style
mainHeadingElement.style.padding = "5px";
mainHeadingElement.style.backgroundColor = "pink";
mainHeadingElement.style.color = "blue";
mainHeadingElement.style.border = "5px solid #999999";

// console.log('

---
---


');
```

---

---

```js
// external js file
// Write all JavaScript code here

// Selecting element with id
let mainHeadingElement = document.getElementById("mainHeadingText");

// set css style
mainHeadingElement.style.padding = "5px";
mainHeadingElement.style.backgroundColor = "pink";

// console.log('

---
---


');

// get inline css styles
console.log(
  "mainHeadingElement.style.padding:",
  mainHeadingElement.style.padding
);
console.log(
  "mainHeadingElement.style.backgroundColor:",
  mainHeadingElement.style.backgroundColor
);

// console.log('

---
---


');

// get computed style information/ any type of css styles internal/embedded style sheets
var cssStyles = window.getComputedStyle(mainHeadingElement);
console.log("internal style - color:", cssStyles.color);
console.log("internal style - border:", cssStyles.border);
```

---

---

```js
// external js file
// Write all JavaScript code here

// Selecting element with id
let mainHeadingElement = document.getElementById("mainHeadingText");

// remove old classes and apply/set css class
mainHeadingElement.className = "bg-color";

// apply/set css class
mainHeadingElement.className += " border";
```

---

---

```js
// external js file
// Write all JavaScript code here

// Selecting element with id
let mainHeadingElement = document.getElementById("mainHeadingText");

// apply/set/add css class with classList
mainHeadingElement.classList.add("heading-text");

// apply/set/add css class with classList
mainHeadingElement.classList.add("border", "bg-color");

// remove classes with classList
mainHeadingElement.classList.remove("border", "bg-color");

// if class exists remove it, if not add it
mainHeadingElement.classList.toggle("heading-text");

// mainHeadingElement.classList.add('border');

// check if class exist and act accordingly
if (mainHeadingElement.classList.contains("border")) {
  alert("border class present");
} else {
  alert("NO border class present");
}
```

---

---

```js
// external js file
// Write all JavaScript code here

// Selecting element with id
let mainHeadingElement = document.getElementById("mainHeadingText");
let clickButtonElement = document.getElementById("clickButton");
let linkTextElement = document.getElementById("linkText");

// set attribute class named 'btn'
mainHeadingElement.setAttribute("class", "btn");

// set attribute disabled
clickButtonElement.setAttribute("disabled", "");

// set blank/empty attribute so that it will remove exisiting attribute value
linkTextElement.setAttribute("href", "");

// console.log('

---
---


');
```

---

---

```js
// external js file
// Write all JavaScript code here

// Selecting element with id
let mainHeadingElement = document.getElementById("mainHeadingText");
let clickButtonElement = document.getElementById("clickButton");
let linkTextElement = document.getElementById("linkText");

// getting the attributes values
let getAttrClass = mainHeadingElement.getAttribute("class");
console.log("getAttrClass:", getAttrClass);

let getAttrDisabled = clickButtonElement.getAttribute("disabled");
console.log("getAttrDisabled:", getAttrDisabled);

let getAttrHref = linkTextElement.getAttribute("href");
console.log("getAttrHref:", getAttrHref);

// console.log('

---
---


');
```

---

---

```js
// external js file
// Write all JavaScript code here

// Selecting element with id
let mainHeadingElement = document.getElementById("mainHeadingText");
let clickButtonElement = document.getElementById("clickButton");
let linkTextElement = document.getElementById("linkText");

// removing the attributes
mainHeadingElement.removeAttribute("class");

// verify/confirm class removed or not
console.log(
  "mainHeadingElement.getAttribute:",
  mainHeadingElement.getAttribute("class")
);
console.log(
  "mainHeadingElement.classList.contains:",
  mainHeadingElement.classList.contains("class")
);

// console.log('

---
---


');

clickButtonElement.removeAttribute("disabled");

linkTextElement.removeAttribute("href");

// console.log('

---
---


');
```

---

---

```js
/*
 * Very quick, very rough recreation of the JamHot 'Uncover Edinburgh' effect
 * https://www.thisisjamhot.com/work/uncover-edinburgh
 */

let wrappers, tl;

let config = {
  isDebug: false,
  speed: 10,
};

const gui = new dat.GUI();
const speedControl = gui.add(config, "speed", 0.1, 15);
const debugControl = gui.add(config, "isDebug");
gui.add(config, "credits");
speedControl.onChange(function (value) {
  anim(wrappers);
});

debugControl.onChange(function (value) {
  document.body.classList.toggle("debug");
});

function init() {
  const split = Splitting({
    target: ".featured-text",
    by: "chars",
  });

  split.forEach((splitInstance) => {
    wrappers = duplicateChars(splitInstance.chars);
    anim(wrappers);
  });
}

function randRange(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function duplicateChars(chars) {
  let wrappers = [];
  chars.forEach((el) => {
    const wrapper = document.createElement("span");
    wrapper.setAttribute("class", "char-wrapper");
    el.parentNode.insertBefore(wrapper, el);
    wrapper.appendChild(el);

    let clone = el.cloneNode(true);
    clone.setAttribute("class", "char char--clone");
    wrapper.appendChild(clone);
    wrappers.push(wrapper);
  });

  return wrappers;
}

function anim(letters) {
  if (tl) {
    tl.kill();
  }
  tl = new TimelineMax({
    paused: true,
    onComplete: anim,
    onCompleteParams: [letters],
  });

  letters.forEach((letter, index) => {
    const gotoY = `-${randRange(0, 5) * 2}0vw`;
    const speed = config.speed + Math.random();
    tl.to(
      letter,
      speed,
      {
        y: gotoY,
        ease: "power1.inOut",
        onComplete: () => {
          TweenMax.to(letter, 0, { y: "0" });
        },
      },
      0
    );
  });

  tl.play();
}

init();
```
