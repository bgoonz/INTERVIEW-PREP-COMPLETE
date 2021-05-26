        ###   <span style="color:red;"> Given an array of words, write a method to output matching sets of anagrams.

```js
const words = [
  "rates",
  "rat",
  "stare",
  "taser",
  "tears",
  "art",
  "tabs",
  "tar",
  "bats",
  "state",
];
```

### <span style="color:red;"> Answer

```js
const words = [
  "rates",
  "rat",
  "stare",
  "taser",
  "tears",
  "art",
  "tabs",
  "tar",
  "bats",
  "state",
];
function anagramGroups(wordAry) {
  const groupedWords = {};
  // iterate over each word in the array
  wordAry.map((word) => {
    // alphabetize the word and a separate variable
    alphaWord = word.split("").sort().join("");
    // if the alphabetize word is already a key, push the actual word value (this is an anagram)
    if (groupedWords[alphaWord]) {
      return groupedWords[alphaWord].push(word);
    }
    // otherwise add the alphabetize word key and actual word value (may not turn out to be an anagram)
    groupedWords[alphaWord] = [word];
  });
  return groupedWords;
}
// call the function and store results in a variable called collectedAnagrams
const collectedAnagrams = anagramGroups(words);
// iterate over groupedAnagrams, printing out group of values
for (const sortedWord in collectedAnagrams) {
  if (collectedAnagrams[sortedWord].length > 1) {
    console.log(collectedAnagrams[sortedWord].toString());
  }
}
```

### <span style="color:red;"> Don't forget:

- Iterate the array
- Alphabetize each word
- Store alphabetize word as the key value in a groupedWords object with the original word as the value
- Compare alphabetize words to object keys and add additional original words when matches are found
- Iterate over the return object and output the values, when there is more then one. (single values mean no anagram )

### <span style="color:red;"> Additional links

- [Find The Anagrams Gist](https://gist.github.com/tinabme/fe6878f5cff42f60a537262503f9b765)
- [isAnagram function implementation](https://www.30secondsofcode.org/snippet/isAnagram)

### <span style="color:red;"> Using flexbox, create a 3-column layout where each column takes up a `col-{n} / 12` ratio of the container.

```{.sourceCode .html}
<div class="row">
  <div class="col-2"></div>
  <div class="col-7"></div>
  <div class="col-3"></div>
</div>
```

### <span style="color:red;"> Answer

Set the `.row` parent to `display: flex;` and use the `flex` shorthand property to give the column classes a `flex-grow` value that corresponds to its ratio value.

```{.sourceCode .css}
.row {
  display: flex;
}
.col-2 {
  flex: 2;
}
.col-7 {
  flex: 7;
}
.col-3 {
  flex: 3;
}
```

### <span style="color:red;"> Don't forget:

### <span style="color:red;"> Additional links

- [MDN docs for basic concepts of flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)
- [A complete guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

### <span style="color:red;"> What does `0.1 + 0.2 === 0.3` evaluate to?

### <span style="color:red;"> Answer

It evaluates to `false` because JavaScript uses the IEEE 754 standard for Math and it makes use of 64-bit floating numbers. This causes precision errors when doing decimal calculations, in short, due to computers working in Base 2 while decimal is Base 10.

```js
0.1 + 0.2; // 0.30000000000000004
```

A solution to this problem would be to use a function that determines if two numbers are approximately equal by defining an error margin (epsilon) value that the difference between two values should be less than.

```js
const approxEqual = (n1, n2, epsilon = 0.0001) => Math.abs(n1 - n2) < epsilon;
approxEqual(0.1 + 0.2, 0.3); // true
```

### <span style="color:red;"> Don't forget:

- A simple solution to this problem

### <span style="color:red;"> Additional links

- [A simple helper function to check equality](https://github.com/Chalarangelo/30-seconds-of-code#approximatelyequal)
- [Fix "0.1 + 0.2 = 0.300000004" in JavaScript](http://blog.blakesimpson.co.uk/read/61-fix-0-1-0-2-0-300000004-in-javascript)

### <span style="color:red;"> What is a focus ring? What is the correct solution to handle them?

### <span style="color:red;"> Answer

A focus ring is a visible outline given to focusable elements such as buttons and anchor tags. It varies depending on the vendor, but generally it appears as a blue outline around the element to indicate it is currently focused.
In the past, many people specified `outline: 0;` on the element to remove the focus ring. However, this causes accessibility issues for keyboard users because the focus state may not be clear. When not specified though, it causes an unappealing blue ring to appear around an element.
In recent times, frameworks like Bootstrap have opted to use a more appealing `box-shadow` outline to replace the default focus ring. However, this is still not ideal for mouse users.
The best solution is an upcoming pseudo-selector `:focus-visible` which can be polyfilled today with JavaScript. It will only show a focus ring if the user is using a keyboard and leave it hidden for mouse users. This keeps both aesthetics for mouse use and accessibility for keyboard use.

### <span style="color:red;"> Don't forget:

### <span style="color:red;"> Additional links

- [:focus-visible](https://css-tricks.com/focus-visible-and-backwards-compatibility/)

### <span style="color:red;"> What is the difference between the array methods `map()` and `forEach()`?

### <span style="color:red;"> Answer

Both methods iterate through the elements of an array. `map()` maps each element to a new element by invoking the callback function on each element and returning a new array. On the other hand, `forEach()` invokes the callback function for each element but does not return a new array. `forEach()` is generally used when causing a side effect on each iteration, whereas `map()` is a common functional programming technique.

### <span style="color:red;"> Don't forget:

- Use `forEach()` if you need to iterate over an array and cause mutations to the elements without needing to return values to generate a new array.
- `map()` is the right choice to keep data immutable where each value of the original array is mapped to a new array.

### <span style="color:red;"> Additional links

- [MDN docs for forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
- [MDN docs for map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [JavaScript — Map vs. ForEach](https://codeburst.io/javascript-map-vs-foreach-f38111822c0f)

### <span style="color:red;"> What are fragments?

### <span style="color:red;"> Answer

Fragments allow a React component to return multiple elements without a wrapper, by grouping the children without adding extra elements to the DOM. Fragments offer better performance, lower memory usage, a cleaner DOM and can help in dealing with certain CSS mechanisms (e.g. tables, Flexbox and Grid).

```js
render() {
  return (
    <React.Fragment>
      <ChildA />
      <ChildB />
      <ChildC />
    </React.Fragment>
  );
}
// Short syntax supported by Babel 7
render() {
  return (
    <>
      <ChildA />
      <ChildB />
      <ChildC />
    </>
  );
}
```

### <span style="color:red;"> Don't forget:

- Fragments group multiple elements returned from a component, without adding a DOM element around them.

### <span style="color:red;"> Additional links

- [React docs on Fragments](https://reactjs.org/docs/fragments.html)

### <span style="color:red;"> What is functional programming?

### <span style="color:red;"> Answer

Functional programming is a paradigm in which programs are built in a declarative manner using pure functions that avoid shared state and mutable data. Functions that always return the same value for the same input and don't produce side effects are the pillar of functional programming. Many programmers consider this to be the best approach to software development as it reduces bugs and cognitive load.

### <span style="color:red;"> Don't forget:

- Cleaner, more concise development experience
- Simple function composition
- Features of JavaScript that enable functional programming (`.map`, `.reduce` etc.)
- JavaScript is multi-paradigm programming language (Object-Oriented Programming and Functional Programming live in harmony)

### <span style="color:red;"> Additional links

- [Javascript and Functional Programming: An Introduction](https://hackernoon.com/javascript-and-functional-programming-an-introduction-286aa625e26d)
- [Master the JavaScript Interview: What is Functional Programming?](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0)

### <span style="color:red;"> Describe your thoughts on how a single page web app should handle focus when changing routes

### <span style="color:red;"> Answer

Single page applications make use of client-side rendering. This means that 'examplesite.com' and 'examplesite.com/page2' are actually the same HTML web page, but the client app decides what content to drop into that single page at runtime. Your user never actually "leaves" the page, and this causes some accessibility issues in terms of focus.
Unless focus is explicitly managed in the app, a scenario like this may happen:

1.  User visits 'examplesite.com'
2.  User clicks a link to go to another route: 'examplesite.com/product1'
3.  Client app changes the visible content to show the details for this new route (e.g. some info about Product 1)
4.  Focus is still on the link that was clicked in step 2
5.  If a user uses the keyboard or screen reader to now try and read the content, the focused starting point is in the middle of the page on an element no longer visible
    Many strategies have been proposed in handling this situation, all involving explicitly managing the focus when the new page content is rendered. [Recent research by GatsbyJS](https://www.gatsbyjs.org/blog/2019-07-11-user-testing-accessible-client-routing/) suggests the best approach is:
6.  User visits 'examplesite.com'
7.  User clicks a link to go to another route: 'examplesite.com/product1'
8.  Client app changes the visible content to show the details for this new route (e.g. some info about Product 1)
9.  Client app manually places focus on the main header at the top of the page (almost always this will be the H1 element)
    By doing so, focus is reset to the top of the page, ready for the user to begin exploring the new content. This solution requires inserting the main heading into the start of tabbing order with `tabindex="-1"`.

### <span style="color:red;"> Don't forget:

- Focus issues caused by client-side rendering, instead of server-side
- Focus should not be left on elements no longer visible on the page
- Challenges faced by screen reader users and users utilising keyboard navigation
- Careful manual focus management required

### <span style="color:red;"> Additional links

- [Handling Focus on Route Change: Up Your A11y](https://www.upyoura11y.com/handling-focus/)

### <span style="color:red;"> What are higher-order components?

### <span style="color:red;"> Answer

A higher-order component (HOC) is a function that takes a component as an argument and returns a new component. It is a pattern that is derived from React's compositional nature. Higher-order components are like **pure components** because they accept any dynamically provided child component, but they won't modify or copy any behavior from their input components.

```js
const EnhancedComponent = higherOrderComponent(WrappedComponent);
```

### <span style="color:red;"> Don't forget:

- They can be used for state abstraction and manipulation, props manipulation, render high jacking, etc.

### <span style="color:red;"> Additional links

### <span style="color:red;"> What will the console log in this example?

```js
var foo = 1;
var foobar = function () {
  console.log(foo);
  var foo = 2;
};
foobar();
```

### <span style="color:red;"> Answer

Due to hoisting, the local variable `foo` is declared before the `console.log` method is called. This means the local variable `foo` is passed as an argument to `console.log()` instead of the global one declared outside of the function. However, since the value is not hoisted with the variable declaration, the output will be `undefined`, not `2`.

### <span style="color:red;"> Don't forget:

- Hoisting is JavaScript's default behavior of moving declarations to the top
- Mention of `strict` mode

### <span style="color:red;"> Additional links

- [MDN docs for hoisting](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting)

### <span style="color:red;"> How does hoisting work in JavaScript?

### <span style="color:red;"> Answer

Hoisting is a JavaScript mechanism where variable and function declarations are put into memory during the compile phase. This means that no matter where functions and variables are declared, they are moved to the top of their scope regardless of whether their scope is global or local.
However, the value is not hoisted with the declaration.
The following snippet:

```js
console.log(hoist);
var hoist = "value";
```

is equivalent to:

```js
var hoist;
console.log(hoist);
hoist = "value";
```

Therefore logging `hoist` outputs `undefined` to the console, not `"value"`.
Hoisting also allows you to invoke a function declaration before it appears to be declared in a program.

```js
myFunction(); // No error; logs "hello"
function myFunction() {
  console.log("hello");
}
```

But be wary of function expressions that are assigned to a variable:

```js
myFunction(); // Error: `myFunction` is not a function
var myFunction = function () {
  console.log("hello");
};
```

### <span style="color:red;"> Don't forget:

- Hoisting is JavaScript's default behavior of moving declarations to the top
- Functions declarations are hoisted before variable declarations

### <span style="color:red;"> Additional links

- [MDN docs for hoisting](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting)
- [Understanding Hoisting in JavaScript](https://scotch.io/tutorials/understanding-hoisting-in-javascript)

### <span style="color:red;"> Can a web page contain multiple `<header>` elements? What about `<footer>` elements?

### <span style="color:red;"> Answer

Yes to both. The W3 documents state that the tags represent the header(`<header>`) and footer(`<footer>`) areas of their nearest ancestor "section". So not only can the page `<body>` contain a header and a footer, but so can every `<article>` and `<section>` element.

### <span style="color:red;"> Don't forget:

- W3 recommends having as many as you want, but only 1 of each for each "section" of your page, i.e. body, section etc.

### <span style="color:red;"> Additional links

- [StackOverflow - Using header or footer tag twice](https://stackoverflow.com/questions/4837269/html5-using-header-or-footer-tag-twice?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa)

### <span style="color:red;"> Discuss the differences between an HTML specification and a browser's implementation thereof.

### <span style="color:red;"> Answer

HTML specifications such as `HTML5` define a set of rules that a document must adhere to in order to be "valid" according to that specification. In addition, a specification provides instructions on how a browser must interpret and render such a document.
A browser is said to "support" a specification if it handles valid documents according to the rules of the specification. As of yet, no browser supports all aspects of the `HTML5` specification (although all of the major browser support most of it), and as a result, it is necessary for the developer to confirm whether the aspect they are making use of will be supported by all of the browsers on which they hope to display their content. This is why cross-browser support continues to be a headache for developers, despite the improved specificiations.

### <span style="color:red;"> Don't forget:

- `HTML5` defines some rules to follow for an invalid `HTML5` document (i.e., one that contains syntactical errors)
- However, invalid documents may contain anything, so it's impossible for the specification to handle all possibilities comprehensively.
- Thus, many decisions about how to handle malformed documents are left up to the browser.

### <span style="color:red;"> Additional links

- [HTML 5.2 WWW Specifications](https://www.w3.org/TR/html52/)

### <span style="color:red;"> What is the difference between HTML and React event handling?

### <span style="color:red;"> Answer

In HTML, the attribute name is in all lowercase and is given a string invoking a function defined somewhere:

```{.sourceCode .html}
<button onclick="handleClick()"></button>
```

In React, the attribute name is camelCase and are passed the function reference inside curly braces:

```js
<button onClick={handleClick} />
```

In HTML, `false` can be returned to prevent default behavior, whereas in React `preventDefault` has to be called explicitly.

```{.sourceCode .html}
<a href="#" onclick="console.log('The link was clicked.'); return false" />
```

```js
function handleClick(e) {
  e.preventDefault();
  console.log("The link was clicked.");
}
```

### <span style="color:red;"> Don't forget:

- HTML uses lowercase, React uses camelCase.

### <span style="color:red;"> Additional links

- [React docs on Handling Events](https://reactjs.org/docs/handling-events.html)

### <span style="color:red;"> What are some differences that XHTML has compared to HTML?

### <span style="color:red;"> Answer

Some of the key differences are:

- An XHTML element must have an XHTML `<DOCTYPE>`
- Attributes values must be enclosed in quotes
- Attribute minimization is forbidden (e.g. one has to use `checked="checked"` instead of `checked`)
- Elements must always be properly nested
- Elements must always be closed
- Special characters must be escaped

### <span style="color:red;"> Don't forget:

                                                                                                                 Files: 219

Size of all files: 461594 K

### <span style="color:red;"> Are semicolons required in JavaScript?

### <span style="color:red;"> Answer

Sometimes. Due to JavaScript's automatic semicolon insertion, the interpreter places semicolons after most statements. This means semicolons can be omitted in most cases.
However, there are some cases where they are required. They are not required at the beginning of a block, but are if they follow a line and:

1.  The line starts with `[`

```js
const previousLine = 3;
[1, 2, previousLine].map((n) => n * 2);
```

1.  The line starts with `(`

```js
const previousLine = 3;
(function () {
  // ...
})();
```

In the above cases, the interpreter does not insert a semicolon after `3`, and therefore it will see the `3` as attempting object property access or being invoked as a function, which will throw errors.

### <span style="color:red;"> Don't forget:

- Semicolons are usually optional in JavaScript but have edge cases where they are required.
- If you don't use semicolons, tools like Prettier will insert semicolons for you in the places where they are required on save in a text editor to prevent errors.

### <span style="color:red;"> Additional links

### <span style="color:red;"> What is short-circuit evaluation in JavaScript?

### <span style="color:red;"> Answer

Short-circuit evaluation involves logical operations evaluating from left-to-right and stopping early.

```js
true || false;
```

In the above sample using logical OR, JavaScript won't look at the second operand `false`, because the expression evaluates to `true` regardless. This is known as short-circuit evaluation.
This also works for logical AND.

```js
false && true;
```

This means you can have an expression that throws an error if evaluated, and it won't cause issues.

```js
true || nonexistentFunction();
false && nonexistentFunction();
```

This remains true for multiple operations because of left-to-right evaluation.

```js
true || nonexistentFunction() || window.nothing.wouldThrowError;
true || window.nothing.wouldThrowError;
true;
```

A common use case for this behavior is setting default values. If the first operand is falsy the second operand will be evaluated.

```js
const options = {};
const setting = options.setting || "default";
setting; // "default"
```

Another common use case is only evaluating an expression if the first operand is truthy.

```js
// Instead of:
addEventListener("click", (e) => {
  if (e.target.closest("button")) {
    handleButtonClick(e);
  }
});
// You can take advantage of short-circuit evaluation:
addEventListener(
  "click",
  (e) => e.target.closest("button") && handleButtonClick(e)
);
```

In the above case, if `e.target` is not or does not contain an element matching the `"button"` selector, the function will not be called. This is because the first operand will be falsy, causing the second operand to not be evaluated.

### <span style="color:red;"> Don't forget:

- Logical operations do not produce a boolean unless the operand(s) evaluate to a boolean.

### <span style="color:red;"> Additional links

- [JavaScript: What is short-circuit evaluation?](https://codeburst.io/javascript-what-is-short-circuit-evaluation-ff22b2f5608c)

### <span style="color:red;"> What are the advantages of using CSS sprites and how are they utilized?

### <span style="color:red;"> Answer

CSS sprites combine multiple images into one image, limiting the number of HTTP requests a browser has to make, thus improving load times. Even under the new HTTP/2 protocol, this remains true.
Under HTTP/1.1, at most one request is allowed per TCP connection. With HTTP/1.1, modern browsers open multiple parallel connections (between 2 to 8) but it is limited. With HTTP/2, all requests between the browser and the server are multiplexed on a single TCP connection. This means the cost of opening and closing multiple connections is mitigated, resulting in a better usage of the TCP connection and limits the impact of latency between the client and server. It could then become possible to load tens of images in parallel on the same TCP connection.
However, according to [benchmark results](https://blog.octo.com/en/http2-arrives-but-sprite-sets-aint-no-dead/), although HTTP/2 offers 50% improvement over HTTP/1.1, in most cases the sprite set is still faster to load than individual images.
To utilize a spritesheet in CSS, one would use certain properties, such as `background-image`, `background-position` and `background-size` to ultimately alter the `background` of an element.

### <span style="color:red;"> Don't forget:

- `background-image`, `background-position` and `background-size` can be used to utilize a spritesheet.

### <span style="color:red;"> Additional links

- [CSS Sprites explained by CSS Tricks](https://css-tricks.com/css-sprites/)

### <span style="color:red;"> What is a stateful component in React?

### <span style="color:red;"> Answer

A stateful component is a component whose behavior depends on its state. This means that two separate instances of the component if given the same props will not necessarily render the same output, unlike pure function components.

```js
// Stateful class component
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  render() {
    // ...
  }
}
// Stateful function component
function App() {
  const [count, setCount] = useState(0);
  return; // ...
}
```

### <span style="color:red;"> Don't forget:

- Stateful components have internal state that they depend on.
- Stateful components are class components or function components that use stateful Hooks.
- Stateful components have their state initialized in the constructor or with `useState()`.

### <span style="color:red;"> Additional links

- [React docs on State and Lifecycle](https://reactjs.org/docs/state-and-lifecycle.html)

### <span style="color:red;"> What is a stateless component?

### <span style="color:red;"> Answer

A stateless component is a component whose behavior does not depend on its state. Stateless components can be either functional or class components. Stateless functional components are easier to maintain and test since they are guaranteed to produce the same output given the same props. Stateless functional components should be preferred when lifecycle hooks don't need to be used.

### <span style="color:red;"> Don't forget:

- Stateless components are independent of their state.
- Stateless components can be either class or functional components.
- Stateless functional components avoid the `this` keyword altogether.

### <span style="color:red;"> Additional links

- [React docs on State and Lifecycle](https://reactjs.org/docs/state-and-lifecycle.html)

### <span style="color:red;"> Explain the difference between a static method and an instance method.

### <span style="color:red;"> Answer

Static methods belong to a class and don't act on instances, while instance methods belong to the class prototype which is inherited by all instances of the class and acts on them.

```js
Array.isArray; // static method of Array
Array.prototype.push; // instance method of Array
```

In this case, the `Array.isArray` method does not make sense as an instance method of arrays because we already know the value is an array when working with it.
Instance methods could technically work as static methods, but provide terser syntax:

```js
const arr = [1, 2, 3];
arr.push(4);
Array.push(arr, 4);
```

### <span style="color:red;"> Don't forget:

- How to create static and instance methods with ES2015 class syntax

### <span style="color:red;"> Additional links

- [Classes on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)

### <span style="color:red;"> What is the difference between synchronous and asynchronous code in JavaScript?

### <span style="color:red;"> Answer

Synchronous means each operation must wait for the previous one to complete.
Asynchronous means an operation can occur while another operation is still being processed.
In JavaScript, all code is synchronous due to the single-threaded nature of it. However, asynchronous operations not part of the program (such as `XMLHttpRequest` or `setTimeout`) are processed outside of the main thread because they are controlled by native code (browser APIs), but callbacks part of the program will still be executed synchronously.

### <span style="color:red;"> Don't forget:

- JavaScript has a concurrency model based on an "event loop".
- Functions like `alert` block the main thread so that no user input is registered until the user closes it.

### <span style="color:red;"> Additional links

### <span style="color:red;"> What is the `this` keyword and how does it work?

### <span style="color:red;"> Answer

The `this` keyword is an object that represents the context of an executing function. Regular functions can have their `this` value changed with the methods `call()`, `apply()` and `bind()`. Arrow functions implicitly bind `this` so that it refers to the context of its lexical environment, regardless of whether or not its context is set explicitly with `call()`.
Here are some common examples of how `this` works:

### <span style="color:red;"> Object literals

`this` refers to the object itself inside regular functions if the object precedes the invocation of the function.
Properties set as `this` do not refer to the object.

```js
var myObject = {
  property: this,
  regularFunction: function () {
    return this;
  },
  arrowFunction: () => {
    return this;
  },
  iife: (function () {
    return this;
  })(),
};
myObject.regularFunction(); // myObject
myObject["regularFunction"](); // my Object
myObject.property; // NOT myObject; lexical `this`
myObject.arrowFunction(); // NOT myObject; lexical `this`
myObject.iife; // NOT myObject; lexical `this`
const regularFunction = myObject.regularFunction;
regularFunction(); // NOT myObject; lexical `this`
```

### <span style="color:red;"> Event listeners

`this` refers to the element listening to the event.

```js
document.body.addEventListener("click", function () {
  console.log(this); // document.body
});
```

### <span style="color:red;"> Constructors

`this` refers to the newly created object.

```js
class Example {
  constructor() {
    console.log(this); // myExample
  }
}
const myExample = new Example();
```

### <span style="color:red;"> Manual

With `call()` and `apply()`, `this` refers to the object passed as the first argument.

```js
var myFunction = function () {
  return this;
};
myFunction.call({ customThis: true }); // { customThis: true }
```

### <span style="color:red;"> Unwanted `this`

Because `this` can change depending on the scope, it can have unexpected values when using regular functions.

```js
var obj = {
  arr: [1, 2, 3],
  doubleArr() {
    return this.arr.map(function (value) {
      // this is now this.arr
      return this.double(value);
    });
  },
  double() {
    return value * 2;
  },
};
obj.doubleArr(); // Uncaught TypeError: this.double is not a function
```

### <span style="color:red;"> Don't forget:

- In non-strict mode, global `this` is the global object (`window` in browsers), while in strict mode global `this` is `undefined`.
- `Function.prototype.call` and `Function.prototype.apply` set the `this` context of an executing function as the first argument, with `call` accepting a variadic number of arguments thereafter, and `apply` accepting an array as the second argument which are fed to the function in a variadic manner.
- `Function.prototype.bind` returns a new function that enforces the `this` context as the first argument which cannot be changed by other functions.
- If a function requires its `this` context to be changed based on how it is called, you must use the `function` keyword. Use arrow functions when you want `this` to be the surrounding (lexical) context.

### <span style="color:red;"> Additional links

- [`this` on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)

### <span style="color:red;"> What does the following code evaluate to?

```js
typeof typeof 0;
```

### <span style="color:red;"> Answer

It evaluates to `"string"`.
`typeof 0` evaluates to the string `"number"` and therefore `typeof "number"` evaluates to `"string"`.

### <span style="color:red;"> Don't forget:

### <span style="color:red;"> Additional links

- [MDN docs for typeof](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)

### <span style="color:red;"> What are JavaScript data types?

### <span style="color:red;"> Answer

The latest ECMAScript standard defines seven data types, six of them being primitive: `Boolean`, `Null`, `Undefined`, `Number`, `String`, `Symbol` and one non-primitive data type: `Object`.

### <span style="color:red;"> Don't forget:

- Mention of newly added `Symbol` data type
- `Array`, `Date` and `function` are all of type `object`
- Functions in JavaScript are objects with the capability of being callable

### <span style="color:red;"> Additional links

- [MDN docs for data types and data structures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)
- [Understanding Data Types in JavaScript](https://www.digitalocean.com/community/tutorials/understanding-data-types-in-javascript)

### <span style="color:red;"> What is the purpose of JavaScript UI libraries/frameworks like React, Vue, Angular, Hyperapp, etc?

### <span style="color:red;"> Answer

The main purpose is to avoid manipulating the DOM directly and keep the state of an application in sync with the UI easily. Additionally, they provide the ability to create components that can be reused when they have similar functionality with minor differences, avoiding duplication which would require multiple changes whenever the structure of a component which is reused in multiple places needs to be updated.
When working with DOM manipulation libraries like jQuery, the data of an application is generally kept in the DOM itself, often as class names or `data` attributes. Manipulating the DOM to update the UI involves many extra steps and can introduce subtle bugs over time. Keeping the state separate and letting a framework handle the UI updates when the state changes reduces cognitive load. Saying you want the UI to look a certain way when the state is a certain value is the declarative way of creating an application, instead of the imperative way of manually updating the UI to reflect the new state.

### <span style="color:red;"> Don't forget:

- The virtual DOM is a representation of the real DOM tree in the form of plain objects, which allows a library to write code as if the entire document is thrown away and rebuilt on each change, while the real DOM only updates what needs to be changed. Comparing the new virtual DOM against the previous one leads to high efficiency as changing real DOM nodes is costly compared to recalculating the virtual DOM.
- JSX is an extension to JavaScript that provides XML-like syntax to create virtual DOM objects which is transformed to function calls by a transpiler. It simplifies control flow (if statements/ternary expressions) compared to tagged template literals.

### <span style="color:red;"> Additional links

- [Virtual DOM in Hyperapp](https://github.com/hyperapp/hyperapp#view)

### <span style="color:red;"> What does `'use strict'` do and what are some of the key benefits to using it?

### <span style="color:red;"> Answer

Including `'use strict'` at the beginning of your JavaScript source file enables strict mode, which enforces more strict parsing and error handling of JavaScript code. It is considered a good practice and offers a lot of benefits, such as:

- Easier debugging due to eliminating silent errors.
- Disallows variable redefinition.
- Prevents accidental global variables.
- Oftentimes provides increased performance over identical code that is not running in strict mode.
- Simplifies `eval()` and `arguments`.
- Helps make JavaScript more secure.

### <span style="color:red;"> Don't forget:

- Eliminates `this` coercion, throwing an error when `this` references a value of `null` or `undefined`.
- Throws an error on invalid usage of `delete`.
- Prohibits some syntax likely to be defined in future versions of ECMAScript

### <span style="color:red;"> Additional links

- [MDN docs for strict mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode)

### <span style="color:red;"> What are the differences between `var`, `let`, `const` and no keyword statements?

### <span style="color:red;"> Answer

### <span style="color:red;"> No keyword

When no keyword exists before a variable assignment, it is either assigning a global variable if one does not exist, or reassigns an already declared variable. In non-strict mode, if the variable has not yet been declared, it will assign the variable as a property of the global object (`window` in browsers). In strict mode, it will throw an error to prevent unwanted global variables from being created.

### <span style="color:red;"> var

`var` was the default statement to declare a variable until ES2015. It creates a function-scoped variable that can be reassigned and redeclared. However, due to its lack of block scoping, it can cause issues if the variable is being reused in a loop that contains an asynchronous callback because the variable will continue to exist outside of the block scope.
Below, by the time the the `setTimeout` callback executes, the loop has already finished and the `i` variable is `10`, so all ten callbacks reference the same variable available in the function scope.

```js
for (var i = 0; i < 10; i++) {
  setTimeout(() => {
    // logs `10` ten times
    console.log(i);
  });
}
/* Solutions with `var` */
for (var i = 0; i < 10; i++) {
  // Passed as an argument will use the value as-is in
  // that point in time
  setTimeout(console.log, 0, i);
}
for (var i = 0; i < 10; i++) {
  // Create a new function scope that will use the value
  // as-is in that point in time
  ((i) => {
    setTimeout(() => {
      console.log(i);
    });
  })(i);
}
```

### <span style="color:red;"> let

`let` was introduced in ES2015 and is the new preferred way to declare variables that will be reassigned later. Trying to redeclare a variable again will throw an error. It is block-scoped so that using it in a loop will keep it scoped to the iteration.

```js
for (let i = 0; i < 10; i++) {
  setTimeout(() => {
    // logs 0, 1, 2, 3, ...
    console.log(i);
  });
}
```

### <span style="color:red;"> const

`const` was introduced in ES2015 and is the new preferred default way to declare all variables if they won't be reassigned later, even for objects that will be mutated (as long as the reference to the object does not change). It is block-scoped and cannot be reassigned.

```js
const myObject = {};
myObject.prop = "hello!"; // No error
myObject = "hello"; // Error
```

### <span style="color:red;"> Don't forget:

- All declarations are hoisted to the top of their scope.
- However, with `let` and `const` there is a concept called the temporal dead zone (TDZ). While the declarations are still hoisted, there is a period between entering scope and being declared where they cannot be accessed.
- Show a common issue with using `var` and how `let` can solve it, as well as a solution that keeps `var`.
- `var` should be avoided whenever possible and prefer `const` as the default declaration statement for all variables unless they will be reassigned later, then use `let` if so.

### <span style="color:red;"> Additional links

- [`let` vs `const`](https://wesbos.com/let-vs-const/)

### <span style="color:red;"> What is a virtual DOM and why is it used in libraries/frameworks?

### <span style="color:red;"> Answer

The virtual DOM (VDOM) is a representation of the real DOM in the form of plain JavaScript objects. These objects have properties to describe the real DOM nodes they represent: the node name, its attributes, and child nodes.

```{.sourceCode .html}
<div class="counter">
  <h1>0</h1>
  <button>-</button>
  <button>+</button>
</div>
```

The above markup's virtual DOM representation might look like this:

```js
{
  nodeName: "div",
  attributes: { class: "counter" },
  children: [
    {
      nodeName: "h1",
      attributes: {},
      children: [0]
    },
    {
      nodeName: "button",
      attributes: {},
      children: ["-"]
    },
    {
      nodeName: "button",
      attributes: {},
      children: ["+"]
    }
  ]
}
```

The library/framework uses the virtual DOM as a means to improve performance. When the state of an application changes, the real DOM needs to be updated to reflect it. However, changing real DOM nodes is costly compared to recalculating the virtual DOM. The previous virtual DOM can be compared to the new virtual DOM very quickly in comparison.
Once the changes between the old VDOM and new VDOM have been calculated by the diffing engine of the framework, the real DOM can be patched efficiently in the least time possible to match the new state of the application.

### <span style="color:red;"> Don't forget:

- Why accessing the DOM can be so costly.

### <span style="color:red;"> Additional links

- [The difference between Virtual DOM and DOM](http://reactkungfu.com/2015/10/the-difference-between-virtual-dom-and-dom/)

### <span style="color:red;"> What is WCAG? What are the differences between A, AA, and AAA compliance?

### <span style="color:red;"> Answer

WCAG stands for "Web Content Accessibility Guidelines". It is a standard describing how to make web content more accessible to people with disabilities They have 12-13 guidelines and for each one, there are testable success criteria, which are at three levels: A, AA, and AAA. The higher the level, the higher the impact on the design of the web content. The higher the level, the web content is essentially more accessible by more users. Depending on where you live/work, there may be regulations requiring websites to meet certain levels of compliance. For instance, in Ontario, Canada, beginning January 1, 2021 all public websites and web content posted after January 1, 2012 must meet AA compliance.

### <span style="color:red;"> Don't forget:

- A guideline for making web content more accessible
- 3 different levels (A, AA, and AAA) of compliance for each guideline
- Governments are starting to require web content to meet a certain level of compliance by law

### <span style="color:red;"> Additional links

- [Web Content Accessibility Guidelines (WCAG) Overview](https://www.w3.org/WAI/standards-guidelines/wcag/)
- [How to Meet WCAG](https://www.w3.org/WAI/WCAG21/quickref/)

### <span style="color:red;"> What is a cross-site scripting attack (XSS) and how do you prevent it?

### <span style="color:red;"> Answer

XSS refers to client-side code injection where the attacker injects malicious scripts into a legitimate website or web application. This is often achieved when the application does not validate user input and freely injects dynamic HTML content.
For example, a comment system will be at risk if it does not validate or escape user input. If the comment contains unescaped HTML, the comment can inject a `<script>` tag into the website that other users will execute against their knowledge.

- The malicious script has access to cookies which are often used to store session tokens. If an attacker can obtain a user's session cookie, they can impersonate the user.
- The script can arbitrarily manipulate the DOM of the page the script is executing in, allowing the attacker to insert pieces of content that appear to be a real part of the website.
- The script can use AJAX to send HTTP requests with arbitrary content to arbitrary destinations.

### <span style="color:red;"> Don't forget:

- On the client, using `textContent` instead of `innerHTML` prevents the browser from running the string through the HTML parser which would execute scripts in it.
- On the server, escaping HTML tags will prevent the browser from parsing the user input as actual HTML and therefore won't execute the script.

### <span style="color:red;"> Additional links

- [Cross-Site Scripting Attack (XSS)](https://www.acunetix.com/websitesecurity/cross-site-scripting/)

---

# ALL Prior Code:

```js
// Normal promises in regular function:
function foo() {
  promiseCall()
    .then(result => {
      // do something with the result
    })
}
// async functions
async function foo() {
  const result = await promiseCall()
  // do something with the result
}
/**
It accepts two objects as arguments: the first object is the recipe
for the food, while the second object is the available ingredients.
Each ingredient's value is a number representing how many units there are.
`batches(recipe, available)`
*/
// 0 batches can be made
batches(
  { milk: 100, butter: 50, flour: 5 },
  { milk: 132, butter: 48, flour: 51 }
)
batches(
  { milk: 100, flour: 4, sugar: 10, butter: 5 },
  { milk: 1288, flour: 9, sugar: 95 }
)
// 1 batch can be made
batches(
  { milk: 100, butter: 50, cheese: 10 },
  { milk: 198, butter: 52, cheese: 10 }
)
// 2 batches can be made
batches(
  { milk: 2, sugar: 40, butter: 20 },
  { milk: 5, sugar: 120, butter: 500 }
)
const batches = (recipe, available) =>
  Math.floor(
    Math.min(...Object.keys(recipe).map(k => available[k] / recipe[k] || 0))
  )
arr[arr.length - 1]
arr.filter(fn)
arr.some(fn)
arr.sort(fn)
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length; j++) {
    // ...
  }
}
const permutations = arr => {
  if (arr.length <= 2) return arr.length === 2 ? [arr, [arr[1], arr[0]]] : arr
  return arr.reduce(
    (acc, item, i) =>
      acc.concat(
        permutations([...arr.slice(0, i), ...arr.slice(i + 1)]).map(val => [
          item,
          ...val
        ])
      ),
    []
  )
}
function example() {
  console.log(this)
}
const boundExample = bind(example, { a: true })
boundExample.call({ b: true }) // logs { a: true }
const bind = (fn, context) => (...args) => fn.apply(context, args)
getData(function(a) {
  getMoreData(a, function(b) {
    getMoreData(b, function(c) {
      getMoreData(c, function(d) {
        getMoreData(d, function(e) {
          // ...
        })
      })
    })
  })
})
async function asyncAwaitVersion() {
  const a = await getData()
  const b = await getMoreData(a)
  const c = await getMoreData(b)
  const d = await getMoreData(c)
  const e = await getMoreData(d)
  // ...
}
setState({ name: "sudheer" }, () => {
  console.log("The name has updated and component re-rendered")
})
// Legacy approach using findDOMNode()
class MyComponent extends Component {
  componentDidMount() {
    findDOMNode(this).scrollIntoView()
  }
  render() {
    return <div />
  }
}
// Recommended approach using callback refs
class MyComponent extends Component {
  componentDidMount() {
    this.node.scrollIntoView()
  }
  render() {
    return <div ref={node => (this.node = node)} />
  }
}
function onClick() {
  console.log("The user clicked on the page.")
}
document.addEventListener("click",
    onClick)
const map = (arr, callback) => {
  const result = []
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i], i))
  }
  return result
}
map([1, 2, 3, 4, 5], n => n * 2) // [2, 4, 6, 8, 10]
function GenericBox({ children }) {
  return <div className="container">{children}</div>
}
function App() {
  return (
    <GenericBox>
      <span>Hello</span> <span>World</span>
    </GenericBox>
  )
}
const element = document.createElement("div")
element.className = "hello"
const element = {
  attributes: {
    class: "hello"
  }
}
const { class } = this.props // Error
const { className } = this.props // All good
const { class: className } =
    this.props // All good, but
const obj = { a: 1, b: 2 }
const shallowClone = { ...obj }
function isDeepEqual(obj1, obj2, testPrototypes = false) {
  if (obj1 === obj2) {
    return true
  }
  if (typeof obj1 === "function" && typeof obj2 === "function") {
    return obj1.toString() === obj2.toString()
  }
  if (obj1 instanceof Date && obj2 instanceof Date) {
    return obj1.getTime() === obj2.getTime()
  }
  if (
    Object.prototype.toString.call(obj1) !==
      Object.prototype.toString.call(obj2) ||
    typeof obj1 !== "object"
  ) {
    return false
  }
  const prototypesAreEqual = testPrototypes
    ? isDeepEqual(
        Object.getPrototypeOf(obj1),
        Object.getPrototypeOf(obj2),
        true
      )
    : true
  const obj1Props = Object.getOwnPropertyNames(obj1)
  const obj2Props = Object.getOwnPropertyNames(obj2)
  return (
    obj1Props.length === obj2Props.length &&
    prototypesAreEqual &&
    obj1Props.every(prop => isDeepEqual(obj1[prop], obj2[prop]))
  )
}
const { Provider, Consumer } = React.createContext(defaultValue)
const debounce = (func, delay) => {
  let debounceTimer;
  return function() {
    const context = this;
    const args = arguments;
      clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => func.apply(context, args), delay);
  }
}
window.addEventListere('scroll', debounce(function() {
  // Do stuff, this function will be called after a delay of 1 second
}, 1000));
const Component = () => "Hello"
const componentElement = <Component />
const domNodeElement = <div />
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }
  // Use componentDidCatch to log the error
  componentDidCatch(error, info) {
    // You can also log the error to an error reporting service
    logErrorToMyService(error, info)
  }
  // use getDerivedStateFromError to update state
  static getDerivedStateFromError(error) {
    // Display fallback UI
     return { hasError: true };
  }
  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>
    }
    return this.props.children
  }
}
document.querySelectorAll("button").forEach(button => {
  button.addEventListener("click", handleButtonClick)
})
document.addEventListener("click", e => {
  if (e.target.closest("button")) {
    handleButtonClick()
  }
})
document.addEventListener("click", function(event) {
  // This callback function is run when the user
  // clicks on the document.
})
const hub = createEventHub()
hub.on("message", function(data) {
  console.log(`${data.username} said ${data.text}`)
})
hub.emit("message", {
  username: "John",
  text: "Hello?"
})
let x = 0
function declaration() {}
if (true) {
}
// Assign `x` to the absolute value of `y`.
var x
if (y >= 0) {
  x = y
} else {
  x = -y
}
5 + 5 // => 10
lastCharacter("input") // => "t"
true === true // => true
// Assign `x` as the absolute value of `y`.
var x = y >= 0 ? y : -y
Boolean("") // false
Boolean([]) // true
!!"" // false
!![] // true
const fibonacci = n =>
  [...Array(n)].reduce(
    (acc, val, i) => acc.concat(i > 1 ? acc[i - 1] + acc[i - 2] : i),
    []
  )
const words = ['rates', 'rat', 'stare', 'taser', 'tears', 'art', 'tabs', 'tar', 'bats', 'state'];
const words = ['rates', 'rat', 'stare', 'taser', 'tears', 'art', 'tabs', 'tar', 'bats', 'state'];
function anagramGroups(wordAry){
    const groupedWords = {};
    // iterate over each word in the array
    wordAry.map(word => {
      // alphabetize the word and a separate variable
      alphaWord = word.split('').sort().join('');
      // if the alphabetize word is already a key, push the actual word value (this is an anagram)
      if(groupedWords[alphaWord]) {
        return groupedWords[alphaWord].push(word);
      }
      // otherwise add the alphabetize word key and actual word value (may not turn out to be an anagram)
      groupedWords[alphaWord] = [word];
    })
    return groupedWords;
}
// call the function and store results in a variable called collectedAnagrams
const collectedAnagrams = anagramGroups(words);
// iterate over groupedAnagrams, printing out group of values
for(const sortedWord in collectedAnagrams) {
  if(collectedAnagrams[sortedWord].length > 1) {
    console.log(collectedAnagrams[sortedWord].toString());
  }
}
0.1 + 0.2 // 0.30000000000000004
const approxEqual = (n1, n2, epsilon = 0.0001) => Math.abs(n1 - n2) < epsilon
approxEqual(0.1 + 0.2, 0.3) // true
render() {
  return (
    <React.Fragment>
      <ChildA />
      <ChildB />
      <ChildC />
    </React.Fragment>
  )
};
// Short syntax supported by Babel 7
render() {
 return (
    <>
      <ChildA />
      <ChildB />
      <ChildC />
    </>
  );
};
const EnhancedComponent = higherOrderComponent(WrappedComponent)
var foo = 1
var foobar = function() {
  console.log(foo)
  var foo = 2
}
foobar()
console.log(hoist)
var hoist = "value"
var hoist
console.log(hoist)
hoist = "value"
myFunction() // No error; logs "hello"
function myFunction() {
  console.log("hello")
}
myFunction() // Error: `myFunction` is not a function
var myFunction = function() {
  console.log("hello")
}
const myLibrary = (function() {
  var privateVariable = 2
  return {
    publicMethod: () => privateVariable
  }
})()
privateVariable // ReferenceError
myLibrary.publicMethod() // 2
const numbers = [1, 2, 3, 4, 5]
const numbersDoubled = []
for (let i = 0; i < numbers.length; i++) {
  numbersDoubled[i] = numbers[i] * 2
}
const numbers = [1, 2, 3, 4, 5]
const numbersDoubled = numbers.map(n => n * 2)
function App({ messages, isVisible }) {
  return (
    <div>
      if (messages.length > 0) {
        <h2>You have {messages.length} unread messages.</h2>
      } else {
        <h2>You have no unread messages.</h2>
      }
      if (isVisible) {
        <p>I am visible.</p>
      }
    </div>
  )
}
function App({ messages, isVisible }) {
  return (
    <div>
      {messages.length > 0 ? (
        <h2>You have {messages.length} unread messages.</h2>
      ) : (
        <h2>You have no unread messages.</h2>
      )}
      {isVisible && <p>I am visible.</p>}
    </div>
  )
}
const todoItems = todos.map(todo => <li key={todo.id}>{todo.text}</li>)
const mask = (str, maskChar = "#") =>
  str.slice(-4).padStart(str.length, maskChar)
const memoize = fn => {
  const cache = new Map()
  return value => {
    const cachedResult = cache.get(value)
    if (cachedResult !== undefined) return cachedResult
    const result = fn(value)
    cache.set(value, result)
    return result
  }
}
constructor(props) {
  super(props);
  this.handleClick = this.handleClick.bind(this);
}
handleClick() {
  // Perform some logic
}
handleClick = () => {
  console.log('this is:', this);
}
render() {
  return (
    <button onClick={this.handleClick}>
      Click me
    </button>
  );
}
<button onClick={e => this.handleClick(e)}>Click me</button>
const myString = "hello!"
myString.replace("!", "") // returns a new string, cannot mutate the original value
const originalArray = [1, 2, 3]
originalArray.push(4) // mutates originalArray, now [1, 2, 3, 4]
originalArray.concat(4) // returns a new array, does not mutate the original
fs.readFile(filePath, function(err, data) {
  if (err) {
    // handle the error, the return is important here
    // so execution stops here
    return console.log(err)
  }
  // use the data object
  console.log(data)
})
var isTrue = function(value, callback) {
  if (value === true) {
    callback(null, "Value was true.")
  } else {
    callback(new Error("Value is not true!"))
  }
}
var callback = function(error, retval) {
  if (error) {
    console.log(error)
    return
  }
  console.log(retval)
}
isTrue(false, callback)
isTrue(true, callback)
/*
  { stack: [Getter/Setter],
    arguments: undefined,
    type: undefined,
    message: 'Value is not true!' }
  Value was true.
*/
const person = {
  name: "John",
  age: 50,
  birthday() {
    this.age++
  }
}
person.birthday() // person.age === 51
function Person(name, age) {
  this.name = name
  this.age = age
}
Person.prototype.birthday = function() {
  this.age++
}
const person1 = new Person("John", 50)
const person2 = new Person("Sally", 20)
person1.birthday() // person1.age === 51
person2.birthday() // person2.age === 21
const createPerson = (name, age) => {
  const birthday = () => person.age++
  const person = { name, age, birthday }
  return person
}
const person = createPerson("John", 50)
person.birthday() // person.age === 51
const personProto = {
  birthday() {
    this.age++
  }
}
const person = Object.create(personProto)
person.age = 50
person.birthday() // person.age === 51
Object.create(personProto, {
  age: {
    value: 50,
    writable: true,
    enumerable: true
  }
})
function myFunction(parameter1, parameter2) {
  console.log(arguments[0]) // "argument1"
}
myFunction("argument1", "argument2")
<button onClick={() => this.handleClick(id)} />
<button onClick={this.handleClick.bind(this, id)} />
const square = v => v * v
const double = v => v * 2
const addOne = v => v + 1
const res = pipe(square, double, addOne)
res(3) // 19; addOne(double(square(3)))
const pipe = (...fns) => x => fns.reduce((v, fn) => fn(v), x)
ReactDOM.createPortal(child, container)
let i = 0
i++ // 0
// i === 1
let i = 0
++i // 1
// i === 1
new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("result")
  }, 100)
})
  .then(console.log)
  .catch(console.error)
import PropTypes from "prop-types"
class User extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired
  }
//
//   render() {
//     return (
//       <h1>Welcome, {this.props.name}</h1>
//       <h2>Age, {this.props.age}
//     )
//   }
// }
const a = (x, y) => x + y
const b = (arr, value) => arr.concat(value)
const c = arr => [...arr].sort((a, b) => a - b)
const a = (x, y) => x + y + Math.random()
const b = (arr, value) => (arr.push(value), arr)
const c = arr => arr.sort((a, b) => a - b)
const nest = (items, id = null, link = "parent_id") =>
  items
    .filter(item => item[link] === id)
    .map(item => ({ ...item, children: nest(items, item.id) }))
const comments = [
  { id: 1, parent_id: null, text: "First reply to post." },
  { id: 2, parent_id: 1, text: "First reply to comment #1." },
  { id: 3, parent_id: 1, text: "Second reply to comment #1." },
  { id: 4, parent_id: 3, text: "First reply to comment #3." },
  { id: 5, parent_id: 4, text: "First reply to comment #4." },
  { id: 6, parent_id: null, text: "Second reply to post." }
]
nest(comments)
/*
[
  { id: 1, parent_id: null, text: "First reply to post.", children: [...] },
  { id: 6, parent_id: null, text: "Second reply to post.", children: [] }
]
*/
const a = [1, 2, 3]
const b = [1, 2, 3]
const c = "1,2,3"
console.log(a == c)
console.log(a == b)
class MyComponent extends React.Component {
  constructor(props) {
    super(props)
    this.myRef = React.createRef()
  }
  render() {
    return <div ref={this.myRef} />
  }
}
>>>>function greet() {
  return
  {
    message: "hello"
  }
}
const previousLine = 3
;[1, 2, previousLine].map(n => n * 2)
const previousLine = 3
;(function() {
  // ...
})()
true || false
false && true
true || nonexistentFunction()
false && nonexistentFunction()
true || nonexistentFunction() || window.nothing.wouldThrowError
true || window.nothing.wouldThrowError
true
const options = {}
const setting = options.setting || "default"
setting // "default"
// Instead of:
addEventListener("click", e => {
  if (e.target.closest("button")) {
    handleButtonClick(e)
  }
})
// You can take advantage of short-circuit evaluation:
addEventListener(
  "click",
  e => e.target.closest("button") && handleButtonClick(e)
)
// Stateful class component
class App extends Component {
  constructor(props) {
    super(props)
    this.state = { count: 0 }
  }
  render() {
    // ...
  }
}
// Stateful function component
function App() {
  const [count, setCount] = useState(0)
  return // ...
}
Array.isArray // static method of Array
Array.prototype.push // instance method of Array
const arr = [1, 2, 3]
arr.push(4)
Array.push(arr, 4)
var myObject = {
  property: this,
  regularFunction: function() {
    return this
  },
  arrowFunction: () => {
    return this
  },
  iife: (function() {
    return this
  })()
}
myObject.regularFunction() // myObject
myObject["regularFunction"]() // my Object
myObject.property // NOT myObject; lexical `this`
myObject.arrowFunction() // NOT myObject; lexical `this`
myObject.iife // NOT myObject; lexical `this`
const regularFunction = myObject.regularFunction
regularFunction() // NOT myObject; lexical `this`
document.body.addEventListener("click", function() {
  console.log(this) // document.body
})
class Example {
  constructor() {
    console.log(this) // myExample
  }
}
const myExample = new Example()
var myFunction = function() {
  return this
}
myFunction.call({ customThis: true }) // { customThis: true }
var obj = {
  arr: [1, 2, 3],
  doubleArr() {
    return this.arr.map(function(value) {
      // this is now this.arr
      return this.double(value)
    })
  },
  double() {
    return value * 2
  }
}
obj.doubleArr() // Uncaught TypeError: this.double is not a function
typeof typeof 0
for (var i = 0; i < 10; i++) {
  setTimeout(() => {
    // logs `10` ten times
    console.log(i)
  })
}
/* Solutions with `var` */
for (var i = 0; i < 10; i++) {
  // Passed as an argument will use the value as-is in
  // that point in time
  setTimeout(console.log, 0, i)
}
for (var i = 0; i < 10; i++) {
  // Create a new function scope that will use the value
  // as-is in that point in time
  ;(i => {
    setTimeout(() => {
      console.log(i)
    })
  })(i)
}
for (let i = 0; i < 10; i++) {
  setTimeout(() => {
    // logs 0, 1, 2, 3, ...
    console.log(i)
  })
}
const myObject = {}
myObject.prop = "hello!" // No error
myObject = "hello" // Error
```

</details><details> <summary>notes-n-resources/</summary>

### [notes-n-resources/awesome-interview-questions.md](notes-n-resources/awesome-interview-questions.md)

# Awesome Competitive Programming [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

A curated list of awesome `Competitive Programming`, `Algorithm` and `Data Structure` resources.

Created with a view to connecting people to information, this list below contains a complete collection of all the fantastic resources I've collected over the course of my 11-year competitive programming career. I hope you'll find it useful :)

   </details><details> <summary>Practice/ES6/</summary>

### [Practice/ES6/Destructuring_Geneal.md](Practice/ES6/Destructuring_Geneal.md)

### General Object Destructuring Example

```js
let myObj = {
  name: "Luke",
  age: 25,
  hobbies: "music",
};

let { name, age, hobbies } = myObj;

console.log(name, age, hobbies); // => Luke 25 music
```

Now the variables listed in between the curly braces are assigned the value of their respective properties in myObj.

### The order in which the variables are listed in the curly braces doesn't matter. Additionally, we don't have to list all the properties of an object if we only need one or two.

```js
console.log(age, name, hobbies); // => 25 'Luke' 'music'

console.log(hobbies, name, age); // => music Luke 25

console.log(hobbies, name); // => music Luke
```

### General Array Destructuring Example

```js
let arr = ["Jim", "Bob", "Sarah", "Cassie"];

let [jim, bob, sarah, cassie] = arr;

console.log(jim, bob, sarah, cassie); //outputs: Jim Bob Sarah Cassie
```

## Unlike objects, the name we give the variables doesn't matter. Let's change the above example: So, each of the variable names will ONLY count for the index-positions I fetch.

```js
let arr = ["Jim", "Bob", "Sarah", "Cassie"];

let [var1, var2, var3, var4] = arr;

console.log(var1, var2, var3, var4); //outputs: Jim Bob Sarah Cassie
```

### If I include less variables then there are indexes in the arrays, then just like in Object-destructuring, only that many array element will be included in the returned array, starting from zero-index position and AGAIN without giving any meaning to the the name I give to the variables. So, each of the variable names will ONLY count for the index-positions I fetch.

let arr = ['Jim', 'Bob', 'Sarah', 'Cassie'];

let [ jim, bob, cassie ] = arr;

console.log(jim, bob, cassie); //outputs: Jim Bob Sarah

## Using Spread operator - It is often used for splitting out a part of an object, but keeping the remaining properties in another object.

```js
let myObj = {
  name: "Luke",
  age: 25,
  hobbies: "music",
};

let { hobbies, ...rest } = myObj; // => Luke 25 music

console.log(hobbies, rest); // => music { name: 'Luke', age: 25 }

console.log(hobbies, rest.age); // => music 25
```

</details><details> <summary>Practice/Promise-Notes/</summary>

### [Practice/Promise-Notes/then-in-Promise-Future-Reference-GOOD.md](Practice/Promise-Notes/then-in-Promise-Future-Reference-GOOD.md)

# How .then() actually makes few asynchronous calls happen in particular order one after another

A> https://spring.io/understanding/javascript-promises

A function passed to then can also return another promise. This allows asynchronous operations to be chained together, so that they are guaranteed to happen in the correct order.

B> https://medium.com/codebuddies/getting-to-know-asynchronous-javascript-callbacks-promises-and-async-await-17e0673281ee

The true power of promises is shown when you have several asynchronous operations that depend on each other. So let's take the case where we have to make a request that depends on the result of another request.

## Callback Hell Example

Callbacks are a good way to declare what will happen once an I/O operation has a result, but what if you want to use that data in order to make another request? You can only handle the result of the request (if we use the example above) within the callback function provided.

```js
let request = require("request");

let result;

request("http://www.google.com", (error, response, body) => {
  if (error) {
    // Handle error
  } else {
    result = body;
    console.log("Request successful");
  }
});

console.log(result);

/* OUTPUT

undefined
Request successful
*/
```

In this example above, the variable “result" will not have a value when printed to the console at the last line. And will output “undefined" to the console because at the time that line is being executed, the callback has not been called. Even if the request were somehow to complete before the result variable is printed to the console (which is almost impossible as though, as inside the callback I am making a network request to google.com server), this code will still run to completion before the callback is executed anyway because that is the nature of the non-blocking I/O model in JavaScript.

## Because, by the non-blocking architecture, of JS / Node, while the callback is being executed ( making a request to google.com in this case) - the rest of the code after the callback function's block will continue to get executed.

`( See my explanation in - Asynchronous-Non-blocking-Mechanism-in-Node.md)`

So if we want to do a second request based on the result of a first one we have to do it inside the callback function of the first request because that is where the result will be available:

```js
let request = require("request");

let result;

request(
  "http://www.google.com",
  function (firstError, firstResponse, firstBody) {
    if (firstError) {
      // Handle error.
    } else {
      request(
        `https://www.facebook.com`,
        function (secondError, secondResponse, secondBody) {
          if (secondError) {
            // Handle error.
          } else {
            result = secondBody;
            console.log("successfully hit facebook server");
          }
        }
      );
    }
  }
);

console.log(result);

/* OUTPUT

undefined
successfully hit facebook server
*/
```

One thing to note here is the first argument in every callback function will contain an error if something went wrong, or will be empty if all went well. This pattern is called “error first callbacks" and is very common. It is the standard pattern for callback-based APIs in NodeJs. This means that for every callback declared we need to check if there is an error and that just adds to the mess when dealing with nested callbacks.

This is the anti-pattern that has been named “callback hell".

### A promise is an object that wraps an asynchronous operation and notifies when it's done. This sounds exactly like callbacks, but the important differences are in the usage of Promises. Instead of providing a callback, a promise has its own methods (.then) which you call to tell the promise what will happen when it is successful or when it fails. The methods a promise provides are “then(…)" for when a successful result is available and “catch(…)" for when something went wrong.

Below is general syntax

```js
someAsyncOperation(someParams)
  .then(function (result) {
    // Do something with the result
  })
  .catch(function (error) {
    // Handle error
  });
```

So, handle the above case with Promise I am using “axios" that is similar to “request" package but it uses promises instead of callbacks.

```js
const axios = require('axios');

axios.get('http://www.somepage.com')
.then(function (response) {
    // response being the result of the first request
    // Returns another promise to the next .then(..) in the chain
    return axios.get(`http://www.somepage.com/${response.someValue}`);
})
.then(function response {
    // response being the result of the second request
    // Handle response
})
.catch(function (error) {
    // Handle error.
});

```

Instead of nesting callbacks inside callbacks inside callbacks, you chain .then() calls together making it more readable and easier to follow. Every .then() should either return a new Promise or just a value or object which will be passed to the next .then() in the chain. Another important thing to notice is that even though we are doing two different asynchronous requests we only have one .catch() where we handle our errors. That's because any error that occurs in the Promise chain will stop further execution and an error will end up in the next .catch() in the chain.

A friendly reminder: just like with callback based APIs, this is still asynchronous operations. The code that is executed when the request has finished — that is, the subsequent .then() calls — is put on the event loop just like a callback function would be. This means you cannot access any variables passed to or declared in the Promise chain outside the Promise. The same goes for errors thrown in the Promise chain.

### As a side note, remember the general syntax of chaining together axios calls

````JS
axios.get('http://google.com')
    .then((response) => {
        // do something with Google res
        return axios.get('http://apple.com')
        // response being the result of the first request
        // do something with Apple res
    })
    .catch((err) => {
        // handle err
    })





</details><details> <summary>Resume-CV-Portfolio/general/2021-portfolio/bgoonz.github.io-master/bgoonz.github.io-master/feedbackform/live-form/node_modules/jquery/</summary>

### [Resume-CV-Portfolio/general/2021-portfolio/bgoonz.github.io-master/bgoonz.github.io-master/feedbackform/live-form/node_modules/jquery/README.md](Resume-CV-Portfolio/general/2021-portfolio/bgoonz.github.io-master/bgoonz.github.io-master/feedbackform/live-form/node_modules/jquery/README.md)
# jQuery

> jQuery is a fast, small, and feature-rich JavaScript library.

For information on how to get started and how to use jQuery, please see [jQuery's documentation](https://api.jquery.com/).
For source files and issues, please visit the [jQuery repo](https://github.com/jquery/jquery).

If upgrading, please see the [blog post for 3.5.1](https://blog.jquery.com/2020/05/04/jquery-3-5-1-released-fixing-a-regression/). This includes notable differences from the previous version and a more readable changelog.

## Including jQuery

Below are some of the most common ways to include jQuery.

### Browser

#### Script tag

```html
<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
````

#### Babel

[Babel](https://babeljs.io/) is a next generation JavaScript compiler. One of the features is the ability to use ES6/ES2015 modules now, even though browsers do not yet support this feature natively.

```js
import $ from "jquery";
```

#### Browserify/Webpack

There are several ways to use [Browserify](http://browserify.org/) and [Webpack](https://webpack.github.io/). For more information on using these tools, please refer to the corresponding project's documentation. In the script, including jQuery will usually look like this...

```js
var $ = require("jquery");
```

#### AMD (Asynchronous Module Definition)

AMD is a module format built for the browser. For more information, we recommend [require.js' documentation](https://requirejs.org/docs/whyamd.html).

```js
define(["jquery"], function ($) {});
```

### Node

To include jQuery in [Node](https://nodejs.org/), first install with npm.

```sh
npm install jquery
```

For jQuery to work in Node, a window with a document is required. Since no such window exists natively in Node, one can be mocked by tools such as [jsdom](https://github.com/jsdom/jsdom). This can be useful for testing purposes.

```js
const { JSDOM } = require("jsdom");
const { window } = new JSDOM("");
const $ = require("jquery")(window);
```

</details><details> <summary>Resume-CV-Portfolio/general/2021-portfolio/bgoonz.github.io-master/bgoonz.github.io-master/</summary>

### [Resume-CV-Portfolio/general/2021-portfolio/bgoonz.github.io-master/bgoonz.github.io-master/README.md](Resume-CV-Portfolio/general/2021-portfolio/bgoonz.github.io-master/bgoonz.github.io-master/README.md)

[https://bgoonz.github.io/](https://bgoonz.github.io/)

```
\___________________________________________________
bryan_dir:bgoonz.github.io-master_exitstatus:0 ====>

tree -d -L 4
.
├── assets
│   ├── css
│   │   └── images
│   ├── js
│   ├── sass
│   │   ├── base
│   │   ├── components
│   │   ├── layout
│   │   └── libs
│   └── webfonts
└── images

11 directories

```

</details><details> <summary>Resume-CV-Portfolio/general/cv-letter-samples/bgoonz-master/</summary>

### [Resume-CV-Portfolio/general/cv-letter-samples/bgoonz-master/README.md](Resume-CV-Portfolio/general/cv-letter-samples/bgoonz-master/README.md)

![](https://tender-bartik-074feb.netlify.app/assets/images/profile-image.jpg)

- [GitHub](https://github.com/bgoonz)
- [Instagram](https://www.instagram.com/bgoonz/)
- [LinkedIn](https://www.linkedin.com/in/bryan-guner-046199128/)

# Hi I'm Bryan!

![resume](./bryan-guner-resume-2021.jpeg)

[github-resume](https://resume.github.io/?bgoonz)

---

Before I deleted some repositories to clean out my github account I had over 1000 commits in my personal repository in just a few months, I have a lot to learn... but I live and breathe code.

<table><tr><td><img src='./2020-contributions.JPG'></td><td><img src='./2021.JPG'></td></tr></table>

---

## Web Dev Resource Hub

### My personal Web Development blog and resource sharing site

- [Live Site](https://goofy-euclid-1cd736.netlify.app/)
- [Main Page](https://goofy-euclid-1cd736.netlify.app/core-site/index.html)

## Mihir_Beg.com

### Created a dynamic web page for a local musician using the Bootsrtap framework.

-Talk about App Features & Design Process Here-

- [Live Site](https://eloquent-sammet-ba1810.netlify.app/)

## Interview Prep Static Site

### Data Structures Repository

-Hope this helps someone other than me!-

- [Live Site](https://gracious-raman-474030.netlify.app)

- ### Email

  [bryan.guner@gmail.com](#)

- ### Phone

  551-254-5505

- ### Social

  - [GitHub](https://github.com/bgoonz)
  - [Instagram](https://www.instagram.com/bgoonz/)
  - [LinkedIn](https://www.linkedin.com/in/bryan-guner-046199128/)

</details><details> <summary>Resume-CV-Portfolio/html-resume/</summary>

### [Resume-CV-Portfolio/html-resume/README.md](Resume-CV-Portfolio/html-resume/README.md)

# html-resume

![resume](./screencapture-bg-resume-netlify-app-2021-04-11-22_04_50.png)
