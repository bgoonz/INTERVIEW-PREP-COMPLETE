# ⁉ Interview Questions.

---

{% embed url="https://replit.com/@bgoonz/interview-2#index.js" %}

#### Q1. Change your browser width to a mobile (500px) setting. What were 2 things you did in your code to make it responsive to the change in width.

> Media queries are useful when you want to modify your site or app depending on a device's general type (such as print vs. screen) or specific characteristics and parameters (such as screen resolution or browser viewport width).A media query is composed of an optional media type and any number of media feature expressions. Multiple queries can be combined in various ways by using logical operators. Media queries are case-insensitive.

> Absolute Units Units that are “absolute” are the same size regardless of the parent element or window size. This means a property set with a value that has an absolute unit will be that size when looked at on a phone or on a large monitor (and everything in between!)

> Relative Units Relative units are useful for styling responsive sites because they scale relative to the parent or window size (depending on the unit).

As a general rule, relative units can be used as the default for responsive sites. This can help you avoid having to update styles for different screen sizes.

```css
@media (max-width: 500px) {
  /* title section style mobile */
  .title-container div,
  .title-container hr {
    width: 100%;
  }

  /* artists section style mobile */
  .artists-container {
    flex-direction: column;
    align-content: center;
  }
  .artist {
    width: 100%;
  }

  .artist img {
    object-fit: scale-down;
    height: auto;
    width: 60%;
  }
}
```

> 1.)

> 2.)

---

#### Q2. Explain the importance of accessibility and how you would integrate that into websites or applications.

**Student provides both examples (table) and non examples (div or span) of semantic html. Student can give examples of how semantic html tags are useful for any disadvantaged group (blind, low-connectivity areas).** **Student explains or attempts to explain how to make forms and images accessible and understands the importance of doing so. Student can explain why accessibility matters from both a business AND personal standpoint.**

Semantic HTML5 addresses this shortcoming by defining specific tags to indicate clearly what role is played by the content those tags contain. That explicit information helps robots/crawlers like Google and Bing to better understand which content is important, which is a subsidiary, which is for navigation, and so on.

List of new semantic elements The semantic elements added in HTML5 are:

Elements such as,,,,, andact more or less likeelements. They group other elements together into page sections. However where atag could contain any type of information, it is easy to identify what sort of information would go in a semanticregion.

An example of semantic element layout by w3schools

Why use semantic elements? To look at the benefits of semantic elements, here are two pieces of HTML code. This first block of code uses semantic elements:

Whilst this second block of code uses non-semantic elements:and“What’s the difference?”, you may ask. Both these elements are used for sectioning a content, and yes, they can definitely be used interchangeably. It’s a matter of in which situation. HTML4 offered only one type of container element, which is. While this is still used in HTML5, HTML5 provided us withandin a way to replace.

The

andelements are conceptually similar and interchangeable. To decide which of these you should choose, take note of the following:

An article is intended to be independently distributable or reusable. A section is a thematic grouping of content.

Top Stories

News

Story 1Story 2Story 3

Sport

Story 1Story 2Story 3

https://www.freecodecamp.org/news/semantic-html5-elements/

---

#### Q3. Find an example of a higher order function and a callback function in your project. Compare and contrast the two functions.

```
Code is logical and succinct.

Student defines higher order function, callback functions and explains similarities between the two in terms of functionality and returns.

Student can define callback as a function that can be passed into another function as a parameter and clearly distinguishes between an argument and a parameter.
```

### Interview Questions

#### (please edit this file and write your answer below each question. In addition, you may also review these questions with your mentor)

Demonstrate your understanding of this week's concepts by answering the following free-form questions.

Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read.

1. Briefly compare and contrast `.forEach` & `.map` (2-3 sentences max)

> forEach just loops through an array and executes a callback once for each element in the array... it's return value is undefined. Array.prototype.map() creates a new array populated with the results of calling a provided function on every element in the calling array. If you want to do something as a result of a forEach than you would need to create a new array or datastructure to store the results of the callback or mutate the original array using a method like .push.

1. Explain the difference between a callback and a higher order function.

> Higher order functions are functions that operate on other functions, either by taking them as arguments or by returning them. For example; Array.prototype.map, Array.prototype.filter and Array.prototype.reduce are some of the Higher-Order functions built into the JavaScript language. Callbacks on the other hand are functions that are passed into higher order functions as parameters.

1. What is closure?

> Closure is really just when a nested function has access to or even changes the value of a variable declared in the scope of the outer function which contains both the variable in question and the inner function inside that is using it within the more deeply nested scope. The reason it's an interview question is because we can use it to create private state.

```js
const bankAccount = (initialBalance) => {
  const balance = initialBalance;
  return {
    getBalance: function () {
      return balance;
    },
    deposit: function (amount) {
      balance += amount;
      return balance;
    },
  };
};
const account = bankAccount(100);
account.getBalance(); // 100
account.deposit(10); // 110
```

> Since we're not able to access balance from anywhere outside of the bankAccount function, we've just created a private variable. bankAccount() is returning an Object with a bunch of functions inside it, and yet when we call account.getBalance(), the function is able to "remember" its initial reference to balance. A more technical definition of closure is when a function "remembers" its lexical scope (scope at compile time ... or whatever the JavaScript equivalent is... when the code is evaluated and an error might be thrown as a result), even when the function is invoked outside that lexical scope.

1. Describe the four rules of the 'this' keyword.

```
-  Global Object Binding: When "this" is in the global scope, it is referring to the window/console.
-  Implicit Binding: When a function/method is used on an object and "this" is used inside of it, "this" is referring to the object that precedes the dot notation.
-  New Binding: When a new object is being created, "this" refers to the new object that was created.
-  Explicit Binding: When using "call or "apply," "this" is explicitly defined.
```

1. Why do we need super() in an extended class?

> In essence the super keyword tells us to use the parent's properties and methods with a this context that belongs to the extended child class. In a child class, you use super() to call its parent's constructor and super. to access its parent's methods.

---

#### Q4. Show me in your Client-side App where you made an API call and how you retrieved the data from that call.

```
  axios.get( `https://lambda-times-api.herokuapp.com/articles` )
    .then( response => {
      console.log( response )
      response.data.articles.bootstrap.forEach( ( article, i ) => {
        let articleCards = Card( article )
        el.appendChild( articleCards )
      } );

      response.data.articles.javascript.forEach( ( article, i ) => {
        let articleCards = Card( article )
        el.appendChild( articleCards )
      } );

      response.data.articles.jquery.forEach( ( article, i ) => {
        let articleCards = Card( article )
        el.appendChild( articleCards )
      } );

      response.data.articles.node.forEach( ( article, i ) => {
        let articleCards = Card( article )
        el.appendChild( articleCards )
      } );

      response.data.articles.technology.forEach( ( article, i ) => {
        let articleCards = Card( article )
        el.appendChild( articleCards )
      } );

    } )
    .catch( ( e ) => console.error( "failed to get profile info:", e ) )
}
export { Card, cardAppender }
```

---

#### Q5. Where in your Client-side application did you implement route management? Explain the logic.

Student's code is strategically organized at the component level with foresight to further development, proper usage of state and props are demonstrated throughout the project.

Student can use and explain switch tags as important to force page to render one route at a time

Not only are standard network request techniques employed, the code is organized in such a fashion that the student demonstrated proper use of container vs presentational components or other industry standards, conventions or patterns.

---

#### Q6. In your client-side app, can you show a form component and explain how the state for the form is managed? Do you have form validation in place?

single page aapps

Student showed great insight in setting up the state management for the app's forms. Form validation is in place for all fields, and covers all use cases. Loading states and success/error notifications are in place and add to the overall UX of the app

Student performs CRUD operations on components in any capacity

Open/save/exit/edit/cancel work how they should

---

#### Q7. Explain your state management system and why you decided to use this system for state management.

What Does State Mean in React? The UI is the visual representation of the state of an application. As described above, state represents the state of an application at a given point in time. In React, the state is a data structure that reflects the current state of the UI. The state can consist of different kinds of data: A Boolean that decides whether a sidebar is open or not. The text content of a form. Server data pulled via an API.

### Local component state in React

The simplest way to implement the counter is to use local component state with the `useState` Hook.

import { useState } from 'react' const Counter = () => { const \[count, setCount] = useState(0) const increaseCount = () => { setCount(count + 1) } const decreaseCount = () => { if (count > 0) { setCount(count - 1) } } return (

## {count}

\- +) } export default Counter

So we are done, right? Article over? Not quite.

If this was a real project, it is likely that in the future, we would need more buttons and headers elsewhere in our app. And it is a good idea to make sure they all look and behave consistently, which is why we should probably turn them into reusable React components.

### Component props in React

Turning our `Button` and `Header` into separate components reveals a new challenge. We need some way to communicate between them and the main `Counter` component.

This is where component props come into play. For our `Header` component, we add a `text` prop. For our `Button`, we need both a `label` prop and an `onClick` callback. Our code now looks like this:

import { useState } from 'react' const Header = ({ text }) =>

## {text}

const Button = ({ label, onClick }) => ( {label} ) const Counter = () => { const \[count, setCount] = useState(0) const increaseCount = () => { setCount(count + 1) } const decreaseCount = () => { if (count > 0) { setCount(count - 1) } } return () } export default Counter

This looks great! But imagine the following scenario: what if we need to only display the count on our home route and have a separate route `/controls` where we display both the count and the control buttons? How should we go about this?

### Routing in React

Given that we are building a single page application, there is now a second piece of state we need to handle --- the route we are on. Let's see how this can be done with [React Router](https://reactrouter.com), for example.

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom' import { useState } from 'react' const Header = ({ text }) =>

## {text}

const Button = ({ label, onClick }) => ( {label} ) const Home = ({ count }) => { return} const Controls = ({ count, decreaseCount, increaseCount }) => { return ( <> \</> ) } const App = () => { const \[count, setCount] = useState(0) const increaseCount = () => { setCount(count + 1) } const decreaseCount = () => { if (count > 0) { setCount(count - 1) } } return (Home Controls) } export default App

Nice! We now have our separate routes and everything works as expected. However, you may notice a problem. We are keeping our count state in `App` and using props to pass it down the component tree. But it appears that we pass down the same prop over and over again until we reach the component that needs to use it. Of course, as our app grows, it will only get worse. This is known as prop drilling.

Let's fix it!

### Using Context + `useReducer`

Wouldn't it be great if there is a way for our components to access the `count` state without having to receive it via a props? A combination of the React Context API and the `useReducer` Hook does just that:

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom' import { createContext, useContext, useReducer } from 'react' const initialState = 0 const reducer = (state, action) => { switch (action.type) { case 'INCREMENT': return state + 1 case 'DECREMENT': return state - 1 >= 0 ? state - 1 : 0 default: return state } } const CountContext = createContext(null) const useCount = () => { const value = useContext(CountContext) if (value === null) throw new Error('CountProvider missing') return value } const CountProvider = ({ children }) => ( \<CountContext.Provider value={useReducer(reducer, initialState)}> {children} \</CountContext.Provider> ) const Header = ({ text }) =>

## {text}

const Button = ({ label, onClick }) => ( {label} ) const Home = () => { const \[state] = useCount() return} const Controls = () => { const \[state, dispatch] = useCount() return ( <>\<Button onClick={() => dispatch({ type: 'DECREMENT' })} label="-" /> \<Button onClick={() => dispatch({ type: 'INCREMENT' })} label="+" /> \</> ) } const App = () => { return (Home Controls) } export default App

Awesome! We have solved the problem of prop drilling. We get additional points for having made our code more declarative by creating a descriptive reducer.

We are happy with our implementation, and, for many use cases, it is really all we need. But wouldn't it be great if we could persist the count so it does not get reset to 0 every time we refresh the page? And to have a log of the application state? What about crash reports?

It would be very helpful to know the exact state that our app was in when it crashed, as well as how to take advantage of amazing dev tools while we are at it. Well, we can do exactly just that using Redux!

### Using Redux for state management

We can do all of the above and much more by using [Redux](https://redux.js.org) to manage the state of our app. The tool has a strong community behind it and a [rich ecosystem](https://redux.js.org/introduction/ecosystem) that can be leveraged with ease.

Let's set up our counter with [Redux Toolkit](https://redux-toolkit.js.org).

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom' import { configureStore, createSlice } from '@reduxjs/toolkit' import { useSelector, useDispatch, Provider } from 'react-redux' const counterSlice = createSlice({ name: 'counter', initialState: { value: 0, }, reducers: { increment: state => { state.value += 1 }, decrement: state => { if (state.value > 0) { state.value -= 1 } }, }, }) const store = configureStore({ reducer: { counter: counterSlice.reducer }, }) const { increment, decrement } = counterSlice.actions const Header = ({ text }) =>

## {text}

const Button = ({ label, onClick }) => ( {label} ) const Home = () => { const count = useSelector(state => state.counter.value) return} const Controls = () => { const count = useSelector(state => state.counter.value) const dispatch = useDispatch() return ( <>\<Button onClick={() => dispatch(decrement())} label="-" /> \<Button onClick={() => dispatch(increment())} label="+" /> \</> ) } const App = () => { return (Home Controls) } export default App

This looks really neat! Our state is now stored in the global Redux store and managed with pure functions (Redux Toolkit uses [Immer](https://github.com/immerjs/immer) under the hood to guarantee immutability). We can already take advantage of the awesome [Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en).

But what about things like handling side-effects, or making the state persistent, or implementing logging and/or crash reporting? This is where the Redux ecosystem we mentioned earlier comes into play.

There are multiple options to handle side-effects, including [redux-thunk](https://github.com/reduxjs/redux-thunk) and [redux-saga](https://redux-saga.js.org). Libraries like [redux-persist](https://github.com/rt2zz/redux-persist) are great for saving the data from the redux store in local or session storage to make it persistent.

In short, Redux is great! It's used widely in the React world and for a good reason.

But what if we prefer a more decentralized approach to state management? Maybe we are worried about performance or have frequent data updates in different branches of the React tree, so we want to avoid unnecessary re-renders while keeping everything in sync.

Or, maybe we need a good way to derive data from our state and compute if efficiently and robustly on the client. And what if we want to achieve all of this without sacrificing the ability to have app-wide state observation? Enter Recoil.

---

#### Q8. Explain how you interact with an external data source/ service/ API and point to an example in your code.

---

#### Q9. Can you show me an example where you defined unique routes for API resources? Why was it necessary to build your API this way?

---

#### Q10. Describe your database organization in plain language. Include details about table schema, datatypes, constraints, and relationships between tables.

Student designs a highly detailed, scalable database. Student can relate design decisions to the "Normal Forms".

Student migrated from SQLite3 to use a server RDBMS, like Postgres or MySQL and migrations and data access code continues to work without changes.

---

#### Q11.

Student demonstrates tokens stored in cookies or explains why this would be a better strategy.

Student explains client side treats token minimally and synchronization with server side.

Student's app can clear tokens on logout but not close as to keep access channels open.

said earlier that cookie seems to be the most secured options. I'd like to further clarify the point here.

The reason I think browser `localStorage` and `sessionStorage` do not provide enough security for storing auth tokens are as follows:

1. If XSS occurs, the malicious script can easily read the tokens from there and send them to a remote server. There on-wards the remote server or attacker would have no problem in impersonating the victim user.
2. `localStorage` and `sessionStorage` are not shared across sub-domains. So, if we have two SPA running on different sub-domains, we won't get the SSO functionality because the token stored by one app won't be available to the other app within the organization. There are some solutions using `iframe`, but those look more like workarounds rather than a good solution. And when the response header `X-Frame-Options` is used to avoid clickjacking attacks with `iframe`, any solution with `iframe` is out of question.

These risks can, however, be mitigated by using a fingerprint (as mentioned in [OWASP JWT Cheat Sheet](https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/JSON_Web_Token_for_Java_Cheat_Sheet.md#token-sidejacking)) which again in turn requires a cookie.

The idea of fingerprint is, generate a cryptographically strong random string of bytes. The Base64 string of the raw string will then be stored in a `HttpOnly`, `Secure`, `SameSite` cookie with name prefix `__Secure-`. Proper values for Domain and Path attributes should be used as per business requirement. A SHA256 hash of the string will also be passed in a claim of JWT. Thus even if an XSS attack sends the JWT access token to an attacker controlled remote server, it cannot send the original string in cookie and as a result the server can reject the request based on the absence of the cookie. The cookie being `HttpOnly` cannot be read by XSS scripts.

Therefore, even when we use `localStorage` and `sessionStorage`, we have to use a cookie to make it secured. On top of that, we add the sub-domain restriction as mentioned above.

Now, the only concern about using a cookie to store JWT is, CSRF attack. Since we use `SameSite` cookie, CSRF is mitigated because cross-site requests (AJAX or just through hyperlinks) are not possible. If the site is used in any old browser or some other not so popular browsers that do not support `SameSite` cookie, we can still mitigate CSRF by additionally using a CSRF cookie with a cryptographically strong random value such that every AJAX request reads the cookie value and add the cookie value in a custom HTTP header (except GET and HEAD requests which are not supposed to do any state modifications). Since CSRF cannot read anything due to same origin policy and it is based on exploiting the unsafe HTTP methods like POST, PUT and DELETE, this CSRF cookie will mitigate the CSRF risk. This approach of using CSRF cookie is used by all modern SPA frameworks. The Angular approach is mentioned [here](https://angular.io/guide/http#security-xsrf-protection).

Also, since the cookie is `httpOnly` and `Secured`, XSS script cannot read it. Thus XSS is also mitigated.

It may be also worth mentioning that XSS and script injection can be further mitigated by using appropriate `content-security-policy` response header.

### Other CSRF mitigation approaches

1. State Variable (Auth0 uses it) - The client will generate and pass with every request a cryptographically strong random nonce which the server will echo back along with its response allowing the client to validate the nonce. It's explained in [Auth0 doc](https://auth0.com/docs/protocols/oauth2/oauth-state#csrf-attacks).
2. Always check the referer header and accept requests only when referer is a trusted domain. If referer header is absent or a non-whitelisted domain, simply reject the request. When using SSL/TLS referrer is usually present. Landing pages (that is mostly informational and not containing login form or any secured content) may be little relaxed ​and allow requests with missing referer header.
3. TRACE HTTP method should be blocked in the server as this can be used to read the `httpOnly` cookie.
4. Also, set the header Strict-Transport-Security: max-age=; includeSubDomains​ to allow only secured connections to prevent any man-in-the-middle overwrite the CSRF cookies from a sub-domain.

---

#### Q12. How did you handle token authentication in your client-side App?

Student demonstrates tokens stored in cookies or explains why this would be a better strategy.

Student explains client side treats token minimally and synchronization with server side.

Student's app can clear tokens on logout but not close as to keep access channels open.

- Explain event delegation.
- Explain how `this` works in JavaScript.
- Can you give an example of one of the ways that working with `this` has changed in ES6?
- Explain how prototypal inheritance works.
- What's the difference between a variable that is: `null`, `undefined` or undeclared?
  - How would you go about checking for any of these states?
- What is a closure, and how/why would you use one?
- What language constructions do you use for iterating over object properties and array items?
- Can you describe the main difference between the `Array.forEach()` loop and `Array.map()` methods and why you would pick one versus the other?
- What's a typical use case for anonymous functions?
- What's the difference between host objects and native objects?
- Explain the difference between: `function Person(){}`, `var person = Person()`, and `var person = new Person()`?
- Explain the differences on the usage of `foo` between `function foo() {}` and `var foo = function() {}`
- Can you explain what `Function.call` and `Function.apply` do? What's the notable difference between the two?
- Explain `Function.prototype.bind`.
- What's the difference between feature detection, feature inference, and using the UA string?
- Explain "hoisting".
- Describe event bubbling.
- Describe event capturing.
- What's the difference between an "attribute" and a "property"?
- What are the pros and cons of extending built-in JavaScript objects?
- What is the difference between `==` and `===`?
- Explain the same-origin policy with regards to JavaScript.
- Why is it called a Ternary operator, what does the word "Ternary" indicate?
- What is strict mode? What are some of the advantages/disadvantages of using it?
- What are some of the advantages/disadvantages of writing JavaScript code in a language that compiles to JavaScript?
- What tools and techniques do you use debugging JavaScript code?
- Explain the difference between mutable and immutable objects.
  - What is an example of an immutable object in JavaScript?
  - What are the pros and cons of immutability?
  - How can you achieve immutability in your own code?
- Explain the difference between synchronous and asynchronous functions.
- What is event loop?
  - What is the difference between call stack and task queue?
- What are the differences between variables created using `let`, `var` or `const`?
- What are the differences between ES6 class and ES5 function constructors?
- Can you offer a use case for the new arrow `=>` function syntax? How does this new syntax differ from other functions?
- What advantage is there for using the arrow syntax for a method in a constructor?
- What is the definition of a higher-order function?
- Can you give an example for destructuring an object or an array?
- Can you give an example of generating a string with ES6 Template Literals?
- Can you give an example of a curry function and why this syntax offers an advantage?
- What are the benefits of using `spread syntax` and how is it different from `rest syntax`?
- How can you share code between files?
- Why you might want to create static class members?
- What is the difference between `while` and `do-while` loops in JavaScript?
- What is a promise? Where and how would you use promise?

### Coding questions

- Make this work:

```
duplicate([1,2,3,4,5]); // [1,2,3,4,5,1,2,3,4,5]
```

- Create a for loop that iterates up to `100` while outputting **"fizz"** at multiples of `3`, **"buzz"** at multiples of `5` and **"fizzbuzz"** at multiples of `3` and `5`
- What will be returned by each of these?

```
console.log("hello" || "world")
console.log("foo" && "bar")
```

- Write an immediately invoked function expression (IIFE)
