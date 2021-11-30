# Most Common Javascript Errors

Written in quiz format

***

### Most Common Javascript Errors

#### Written in quiz format

![](https://cdn-images-1.medium.com/max/1200/0\*Z3bZOpQH9SFYpYZh.jpg)

### Javascript Errors

**1. How do you halt program execution with an instance of an error object in JavaScript?**

* Using the keyword throw you can throw your own runtime errors that will stop program execution.

**2. What kind of error is thrown when a variable or parameter is not of a valid type?**

* A TypeError is thrown when an operation cannot be performed because the operand is a value of the wrong type.

**3. What kind of error will be thrown when the below code is executed?**

```
function callPuppy() {
  const puppy = "puppy";
  console.log(pupy);
}

callPuppy();
```

* ReferenceError: pupy is not defined

**4. What kind of error will be thrown when the below code is run?**

```
function broken () {
  console.log("I'm broke")
}}
```

* SyntaxError: Unexpected token ‘}’

**5. What kind of error will the below code throw when executed?**

```
const puppy = "puppy";

puppy = "apple";
```

* TypeError: Assignment to constant variable.

**6. What kind of error will the below code throw when executed?**

```
let dog;

dog();
```

* TypeError: dog is not a function

**7. What type of block will allow you to run an erroring function then continue the execution of code after that function is run?**

* We can use try…catch blocks with functions that might throw an error to catch that error and continue code execution after that error was thrown

**8. What type of error is thrown when a non-existent variable is referenced?**

* The ReferenceError object represents an error when a non-existent variable is referenced.

**9. When is a JavaScript Error Object thrown?**

* The Error object is how JavaScript deals with runtime errors — so at code runtime!

**10. When kind of error is thrown when the JavaScript engine attempts to parse code that does not conform to the syntax of the JavaScript language?**

* A SyntaxError is thrown when there is an error in the syntax of the executed code.

![](https://cdn-images-1.medium.com/max/800/0\*NV9Oo1MMTGfTlHWs.jpeg)### My Blog:

[**Web-Dev-Hub**\
_Memoization, Tabulation, and Sorting Algorithms by Example Why is looking at runtime not a reliable method of…_master--bgoonz-blog.netlify.app](https://master--bgoonz-blog.netlify.app)

By [Bryan Guner](https://medium.com/@bryanguner) on [August 22, 2021](https://medium.com/p/311ea1356a3d).

[Canonical link](https://medium.com/@bryanguner/most-common-javascript-errors-311ea1356a3d)

Exported from [Medium](https://medium.com) on August 31, 2021.
