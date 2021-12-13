# Redux

**1. The Single Immutable State Tree (**_**Principal #1**_**)**

> Video: https://egghead.io/lessons/javascript-redux-the-single-immutable-state-tree

The **first principal** to learn in Redux is that you are going to represent your whole application ("State") as a single JavaScript Object. All changes and mutations to the state in Redux are _explicit_ so it is possible to keep track of all of them.

In this video Dan shows how the state of a Todo app changes over time as data is added and filters applied; its a _glimpse_ of power of the single state tree.

\

**2. Describing State Changes with Actions (**_**Principal #2**_**)**

> Video: https://egghead.io/lessons/javascript-redux-describing-state-changes-with-actions

The **second principal** of Redux is that the **state tree** is _**read-only**_; you cannot modify or write to it, instead, any time you want to change the state you need to dispatch an action. (i.e. _you can only "update" the state using a function_...) An action is a _plain Javascript Object_ describing the change. Just like the state is the minimal representation of data in your app, the action is the minimal representation of the change to that data. The only requirement of an action is that it has a `type` property (_this more a description for your action_). The convention is to use a `String` because they are serializable (_i.e. easy to `JSON.stringify`_)

> "_Any data that gets into your Redux Application gets there by actions_"

\

**3. **_**Pure**_** and **_**Impure**_** Functions**

> Video: https://egghead.io/lessons/javascript-redux-pure-and-impure-functions

Pure functions depend solely on the values of the arguments. Pure functions do not have any (_observable_) side-effects such as network or database calls. Pure functions just calculate the new value \[of the state].

The functions you write in redux need to be pure.

**4. The Reducer Function (**_**Principal #3**_**)**

> Video: https://egghead.io/lessons/javascript-redux-the-reducer-function

The UI/View layer of an application is most predictable when it is described as a pure function of the application state. Pioneered by ~~React~~ [Ractive](https://github.com/ractivejs/ractive) and now adopted by several other frameworks, Redux compliments this approach with another idea: the state mutations in your app need to be described as a pure function that takes the previous state and the action being "dispatched" (_performed_) and returns the next state of your app.

Inside any Redux app there is one function that takes the state of the whole application and the action being dispatched and returns the next state of the whole application. It is important that it does not modify the state given to it; it has to be pure, so it has to `return` a new `Object` Even in _large_ applications there is still just a simple function that manages how the next state is calculated based on the previous state of the whole application and the action being dispatched. It does not have to be slow, for example: if I change the visibility filter I have to create the new object for the whole state, but I can keep the reference to the previous version of the Todo's array because the list of todos has not changed when we change the visibility filter; this is what makes Redux fast.

> this is the 3rd and final principal of Redux: to describe state changes you have to write a function that takes the previous state of the app and the action being dispatched and returns the next state. The function has to be pure and is called the "Reducer".

\

**5. Writing a Counter Reducer with Tests**

This video walks through creating a basic counter in Redux.

> Video: https://egghead.io/lessons/javascript-redux-writing-a-counter-reducer-with-tests

The first \[_and only_] function in this video is the Reducer for the counter example. A reducer accepts state and action as arguments and returns the next state.

Before writing any code, we write a few assertions (_tests_) using [**Michael Jackson**](https://github.com/mjackson)'s (_Yes, there's a_ _**developer**_ _with that name... and he's_ _**really good**_) _**Expect**_ (testing/assertion) **library**: https://github.com/mjackson/expect

We assert that when the state of the counter is zero and you pass an `INCREMENT` action, it should return 1.

```js
expect(counter(0, { type: "INCREMENT" })).toEqual(1);
```

And similarly when the counter is 1 and we `INCREMENT` it should return 2.

```js
expect(counter(1, { type: "INCREMENT" })).toEqual(2);

// We add a test that check how `DECREMENT` works; from 2 to 1 and from 1 to zero:

expect(counter(2, { type: "DECREMENT" })).toEqual(1);

expect(counter(1, { type: "DECREMENT" })).toEqual(0);
```

If we run these tests \[_in the browser_], they will fail because we have not even _begun_ to implement the reducer. We are going to start by checking the action type. If the action type is `INCREMENT` we are going to `return state + 1` (_state plus one_) If the type is `DECREMENT` we are going to `return state - 1` (_state minus one_)

```js
if (action.type === "INCREMENT") {
  return state + 1;
} else if (action.type === "DECREMENT") {
  return state - 1;
}
```

If you run the tests, you will find that that this is enough to get them to pass.

> _Code for_ [_**Video 5 @ 1:15**_](https://github.com/nelsonic/learn-redux/blob/8ded8853d5a789f94aff410eef0799bb66926a0d/index.html#L15)

However, there are still some flaws in our implementation of the counter reducer. If we dispatch an action that it \[_the reducer_] does not understand, it should return the current state of the application.

```js
expect(counter(1, { type: "SOMETHING_ELSE" })).toEqual(1);
```

However if we check for that, we will see that this test fails because we currently don't handle unknown actions. So I'm going to add an `else` clause that returns the current state and the tests pass now.

```js
if (action.type === "INCREMENT") {
  return state + 1;
} else if (action.type === "DECREMENT") {
  return state - 1;
} else {
  return state;
}
```

And the tests pass now.

> _Code for_ [_**Video 5 @ 1:49**_](https://github.com/nelsonic/learn-redux/blob/d6c9051922e288583d5f43c45dbf3a57f1113648/index.html#L15)

Another issue is that while the reducer is in control of the application state, _currently_ it does not specify the initial state; in the case of the counter example that would be zero.

The convention in Redux is that if the reducer receives `undefined` as the `state` argument, it _must_ `return` what it considers to be the initial `state` of the application. In this case it will be zero.

> _Code for_ [_**Video 5 @ 2:15**_](https://github.com/nelsonic/learn-redux/blob/36775c88bb9d236f4918b1721c4d72c3ac8820a1/index.html#L18)

"_Now come a few_ _**cosmetic tweaks**_" ... At the end of the video Dan replaces the `if/else` blocks with a `switch` statement\* - which we _agree_ is _neater_ (_and works in_ _**all browsers**_)

```js
switch (action.type) {
  case "INCREMENT":
    return state + 1;
  case "DECREMENT":
    return state - 1;
  default:
    return state;
}
```

_However_ Dan _also_ makes a couple of changes which are _not_ just "_cosmetic_": changing the reducer function to be an **ES6** [`Arrow Function`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/Arrow_functions) and also includes an **ES6** [`default parameter`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/default_parameters) syntax to specify what the state should be if its undefined.

The reducer function written in ES5 (_Works in_ _**ALL Browsers**_):

```js
function counter(state, action) {
  state = state || 0; // default parameter assignment before ES6
  /* reducer code here */
}
```

is re-written using ES6 features: (_**Only Chrome**_ _fully-supports both these new features_)

```js
const counter = (state = 0, action) => {
  /* reducer code here */
};
```

_**Arrow functions**_ can be fewer characters to type but are [_**not supported**_](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/Arrow_functions#Browser_compatibility) in **Safari** _or_ **Internet Explorer** \[_at the time of writing_] ... ![ES6-arrow-functions-not-supported-in-safari-or-internet-explorer](https://cloud.githubusercontent.com/assets/194400/12050430/5800888c-aeed-11e5-91fb-0bb8ff2ae4a4.png)

_**Default parameters**_ are a _nice_ addition to JavaScript (ECMAScript 2015) because they make it clear what the default value of the parameter should be if its unset, however they are [_**not supported**_](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/default_parameters#Browser_compatibility) in **Internet Explorer**, **Safari** _or_ **Opera** \[_at the time of writing_] ... ![es6-default_parameters-browser_compatibility](https://cloud.githubusercontent.com/assets/194400/12050412/095e590c-aeed-11e5-8dae-a8a4105715fb.png)

These browsers still account for between 30%-50% of people using the internet in December 2015 (_depending on the age/geography of the people using your app... see_: https://en.wikipedia.org/wiki/Usage\_share\_of\_web\_browsers ) And considering that _most_ people take _ages_ to upgrade to the latest browser Microsoft _**Internet Explorer 8**_ _still has_ [_**10%**_ _market share_!](https://www.netmarketshare.com/browser-market-share.aspx?qprid=2&qpcustomd=0) and is [still available](https://www.microsoft.com/en-us/download/internet-explorer-8-details.aspx) to be downloaded.

using ES6 features has two implications:

- If you want to run the code in a browser you need Google Chrome _**Canary**_.
- And/Or, You need to "_transpile_" (_convert_) your code using _**Babel**_ before running it in browsers.

We will come back to Babel later...

\

**6. Store Methods: getState(), dispatch(), and subscribe()**

> Video: https://egghead.io/lessons/javascript-redux-store-methods-getstate-dispatch-and-subscribe Code: [Video 6 Code Snapshot](https://github.com/nelsonic/learn-redux/blob/2430c6e95eacd61ebf7ff4a660cc64e80c9e883e/index.html)

Video #6 picks up from where #5 finished, so if you skipped video 5, go back and watch it, and try writing/running the code!

Dan starts off by showing how to include Redux (_from CDN JS_) in a client-side app so we can start using the methods. This is not the _recommended_ way of loading Redux, but works fine for this example/demo.

"_In real applications I suggest you use npm and a module bundler like webpack or browserify_".

In this tutorial we are using a single function from Redux called `createStore`.

Using **ES6** [**destructuring assignment**](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) syntax to extract the `createStore` method from Redux:

```js
const { createStore } = Redux; // 6 fewer characters to type. OMG! what will we do with all that extra free time?!
// this is equivalent to:
var createStore = Redux.createStore;
```

"The store binds together the **3 Principals** of Redux, it holds the current application state object, it lets you dispatch actions. When you create it \[the store] you need to specify the reducer that tells how to update the state with actions. In this example we are calling `createStore` with `counter` as the reducer that manages the state updates."

Redux Store has **3** (_important_) **methods**:

- `getState` - retrieves the current state of the Redux store. In the case of our counter the initial state is Zero.
- `dispatch` - lets you dispatch actions to change the state of your application. if we log the state of the application after dispatching an action (e.g: `INCREMENT`), we see that the state has changed to 1. (_the most commonly used method_)
- `subscribe` - lets you register a callback that the Redux store will call any time an action has been dispatched. so you can update the UI of your application to reflect the current application state.

The code at the end of video #6 looks like this: (_explanatory comments added_)

```js
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>Learn Redux</title>
    <link rel="shortcut icon" type="image/png" href="https://www.favicon.cc/logo3d/805435.png"/>
  </head>
  <body>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/redux/3.0.5/redux.min.js"></script>
    <script>
      // counter is the reducer (function) that manages state updates:
      const counter = (state = 0, action) => {
        switch (action.type) {
          case 'INCREMENT':
            return state + 1;
          case 'DECREMENT':
            return state - 1;
          default:
            return state;
        }
      }

      const { createStore } = Redux; // Redux is GLOBAL Object from redux.min.js
      // create the store for our mini-app using the counter reducer
      const store = createStore(counter);
      console.log(store.getState()); // counter should be 0 (zero)

      store.dispatch({type:'INCREMENT'}); // increment from zero to one
      console.log(store.getState()); // counter is 1 (one)

      const render = () => { // render function updates DOM with counter value
        document.body.innerText = store.getState();
      }
      store.subscribe(render); // all actions re-render the DOM
      render(); // render the initial state of the page/app

      // listen for click event on the whole document (click anywhere on the page)
      document.addEventListener('click', () => {
        store.dispatch({type:'INCREMENT'});
      });
    </script>
  </body>
</html>
```

Try viewing the [`index.html`](https://github.com/nelsonic/learn-redux/blob/2430c6e95eacd61ebf7ff4a660cc64e80c9e883e/index.html) file in [**Chrome** _**Canary**_](https://github.com/nelsonic/learn-redux/issues/5#issue-123923845)

> Download Chrome Canary: https://www.google.co.uk/chrome/browser/canary.html

**7. Implementing Store from Scratch**

> Video: https://egghead.io/lessons/javascript-redux-implementing-store-from-scratch Code: [Video #7 Code Snapshot](https://github.com/nelsonic/learn-redux/blob/17432aacb7e75702fe66338d9eacf27ffcca33c7/index.html#L15-L43)

In the 7th Video Dan shows how the Redux store is _implemented_ in _**20 lines of code**_:

```js
const createStore = (reducer) => {
  let state;
  let listeners = [];

  const getState = () => state; // return the current state (object)

  const dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach((listener) => listener());
  };
  const subscribe = (listener) => {
    listeners.push(listener);
    return () => {
      // removing the listener from the array to unsubscribe listener
      listeners = listeners.filter((l) => l !== listener);
    };
  };

  dispatch({});

  return { getState, dispatch, subscribe };
};
```

"Because the subscribe function can be called many times, we need to keep track of all the changed listeners. And any time it is called we want to push the new listener into the (`listeners`) array. Dispatching an action is the only way to change the internal state. in order to calculate the new state we call the reducer with the state and the action being dispatched. And after the state is updated we need to notify every change listener by calling it. 1:44 - There is an important missing piece here: we have not provided a way to unsubscribe a listener. But instead of adding a dedicated `unsubscribe` method, we will just return a function from the subscribe method that removes this listener from the `listeners` array. 2:03 - Finally by the time the store is returned we want it to have the initial state populated. so we are going to dispatch a dummy action just to get the reducer to return the initial value. 2:18 - this implementation of the Redux store is (_apart from a few minor details and edge cases_) is the `createStore` we ship with Redux."

> Once you have watched the video, checkout the source code for Redux.createStore on Github: https://github.com/rackt/redux/blob/master/src/createStore.js

\

**8. React Counter Example**

> Video: https://egghead.io/lessons/javascript-redux-react-counter-example

"In the simplest counter example I update the `document.body` _manually_ any time the store state changes, but of course this approach does not scale to complex applications. So instead of manually updating the DOM I'm going to use React."

I'm adding two scripts to the `<head>` corresponding to React and [React-DOM](https://facebook.github.io/react/docs/glossary.html) and a `root` div to render to:

```js
<script src="https://cdnjs.cloudflare.com/ajax/libs/react/0.14.5/react.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/react/0.14.5/react-dom.min.js"></script>
```

> These scripts are available on CDNJS: https://cdnjs.com/libraries/react/ You can opt to use `fb.me` as your React CDN if you _prefer_.

So now I can call `ReactDOM.render` with my root component. The render function is called any time the store state changes, so I can safely pass the sate of the store as a `prop` to my root component.

```js
const Counter = ({ value }) => <h1>{value}</h1>;

const render = () => {
  ReactDOM.render(
    <Counter value={store.getState()} />,
    document.getElementById("root")
  );
};
```

Since the state is held inside the Redux Store the counter component can be a simple function which is a supported way of declaring components since React version `0.14`.

Now I want to add increment and decrement buttons to the component, but I don't want to _hard-code_ the Redux dependency into the component, so I just add `onIncrement` and `onDecrement` props as callbacks.

In my render method I pass the callbacks that call `store.dispatch` with appropriate actions. Now the application state is updated when I click the buttons.

by the _end_ of Video 8 your code should look like this: [`index.html`](https://github.com/nelsonic/learn-redux/blob/a6cbc789e078d8c42a73066dbb94adf8bd5a7f3f/index.html#L19-L72)

_**Recap**_

\[1:20] Now let's recap how this application works.

The `counter` component is what I call a "_dumb component_", it does not contain _any_ business logic, it only specifies how the current application state transforms into renderable output and how the callback passed via props are bound to the event handlers.

When we render a counter we specify that its `value` should be taken from the Redux `store` _current_ state. And when the user presses `increment` \[button] or `decrement` \[button] we dispatch the corresponding action to the Redux store.

Our reducer specifies how the _next_ state is calculated based on the _current_ state and the `action` being dispatched.

And _finally_ we subscribe to the Redux store so our `render` function runs any time the state changes, so the `counter` \[component] gets the _current_ state.

**Notes on using JSX Syntax in React in Browsers**

_Most_ React.js Examples are written using [JSX](https://facebook.github.io/react/docs/jsx-in-depth.html) syntax. This is not _standard_ JavaScript so no browser can _understand_ it.

If you want the Counter _example_ to work in the browser (_without having to compile your counter component with babel_) you will need to include the `JSXTransformer`:

```js
<script src="https://fb.me/JSXTransformer-0.13.3.js"></script>
```

**note**: in-browser compilation of JSX is [not recommended](https://reactjs.org/blog/2015/06/12/deprecating-jstransform-and-react-tools.html#other-deprecations) for "_Production_" use. instead you will need to _compile_ your JSX to JS using Babel...

For more detail, read: https://facebook.github.io/react/docs/tooling-integration.html#jsx

Don't forget to add `type="text/jsx"` to your script tag in `index.html` to ensure that the JSX in the React Component is transformed. see: https://stackoverflow.com/questions/28100644/reactjs-uncaught-syntaxerror-unexpected-token

> _Final version_ of _working_ code for Video 8: [`index.html`](https://github.com/nelsonic/learn-redux/blob/a6cbc789e078d8c42a73066dbb94adf8bd5a7f3f/index.html#L19-L72) Run it by opening it in **Google Chrome Canary**:

![learn-redux-video-9-counter-example](https://cloud.githubusercontent.com/assets/194400/12079438/c0203cdc-b230-11e5-9338-00254dc9761a.png)

**9. Avoiding Array Mutations with concat(), slice(), and ...spread**

In this video we learn how to avoid mutating arrays using concat(), slice(), and the ES6 array spread operator.

> Video: https://egghead.io/lessons/javascript-redux-avoiding-array-mutations-with-concat-slice-and-spread

"In this lesson I use the _expect_ library to make assertions and [**deep-freeze**](https://github.com/substack/deep-freeze) to make sure my code is _**free**_ _of_ _**mutations**_."

```js
<script src="https://wzrd.in/standalone/expect@latest"></script>
<script src="https://wzrd.in/standalone/deep-freeze@latest"></script>
```

These are loaded from [@Substack](https://github.com/substack)'s CDN: https://wzrd.in

"Let's say that I want to implement a **counter** _**list**_ application. I would need to write a few function that operate on its state and its state is an `Array` of JavaScript _Numbers_ representing the individual counters."

The first function I want to write is called addCounter and all it should do is to _append_ a zero at the end of the passed `Array`.

```js
const addCounter = (list) => {
  // write the tests first then implement the function to make them pass.
};

const testAddCounter = () => {
  const listBefore = [];
  const listAfter = [0];

  deepFreeze(listBefore);

  expect(addCounter(listBefore)).toEqual(listAfter);
};

testAddCounter();
console.log("All tests passed.");
```

At first I use the [`Array.push()`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/push) method to add an item at the end of the `Array`, and it works.

> Snapshot of code for [Video 9 @ 0:36](https://github.com/nelsonic/learn-redux/blob/65fd87d59a91ca1b12fb8b3a3d1e5516ee520174/index.html#L17-L20)

_However_ we need to learn to _**avoid mutations**_ in Redux and I'm enforcing this by calling `deepFreeze` on the original array. Now my attempt to `.push` does not work; it cannot add a new property to a "frozen" object. Instead of `.push` I'm going to use the `concat` method which does not _modify_ the array.

```js
const addCounter = (list) => {
  return list.concat([0]);
};
```

Now the tests pass without _mutations_.

And I can also use the new **ES6** [_**spread operator**_](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator) to write the code in a more concise way:

```js
const addCounter = (list) => {
  return [...list, 0];
};
```

> **Note**: _Again_, (at the time of writing) You will need to be running [**Chrome**](https://www.google.co.uk/chrome/browser/canary.html) or [**Firefox**](https://www.mozilla.org/en-GB/firefox/developer/) for this example to work because the [_**spread operator**_](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator) is still [_**not**_ _(yet)_ _**supported**_](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator#Browser_compatibility) in _all_ browsers ... even though it is a _Standard_ ...

The next function is `removeCounter` and it accepts two arguments: `list` (_an `Array` of `Numbers`_) and `index` the `Number` to _skip_ from the `Array`.

So if I've got three numbers and I'm passing 1 as the second argument, I expect to receive an `Array` with _two_ items with the _second_ item _skipped_ in the `Array`:

```js
const testRemoveCounter = () => {
  const listBefore = [0, 10, 20];
  const listAfter = [0, 20];
  expect(removeCounter(listBefore, 1)).toEqual(listAfter);
};
```

_Usually_ to `delete` an item from an `Array` I would use the `splice` method. However `splice` is a mutating method, so you can't use it in Redux. I'm going to `deepFreeze` the (`listBefore`) `Array` object, and now I need to figure out a _different_ way of removing an item from the array _without mutating it_. I'm using a method called `slice` here and it does not have _anything_ to do with `splice`; it is _**not mutating**_ and it gives me a part of the `Array` from some beginning to some end index. So what I am doing is taking the parts before the index I want to skip and after the index I want to skip and I `concat` them to get a new array:

```js
const removeCounter = (list, index) => {
  return list.slice(0, index).concat(list.slice(index + 1));
};
```

Finally, instead of writing it as a method chain with `concat` calls, I can use the **ES6** [_**spread operator**_](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator) to write it more concisely:

```js
const removeCounter = (list, index) => {
  return [...list.slice(0, index), ...list.slice(index + 1)];
};
```

> **Note**: _make_ _**sure**_ _you_ _**understand**_ _how_ _**both**_ _of these work before proceeding ... Dan is a big fan of his ES6; he uses it_ _**everywhere**_!

Now that we have implemented adding and removing counters, lets implement _incrementing_ the counter:

```js
incrementCounter = (list, index) => {};

// write a test/assertion before implementing the function:
testIncrementCounter = () => {
  const listBefore = [0, 10, 20];
  const listAfter = [0, 11, 20];

  expect(incrementCounter(listBefore, 1)).toEqual(listAfter);
};
```

The `incrementCounter` function takes two arguments: `list` - the `Array` (_of all our counters_) and `index` - the counter that should be incremented. So the returned value (`Array`) has the same count of items but one of them is incremented.

Directly setting the value at the `index` _works_ but this a mutation. so if we add a `deepFreeze` call its _not_ going to work _anymore_.

So _how_ do we _replace_ a single value in the array _**without mutating**_ it? it turns out the _answer_ is _really similar_ to how we _remove_ an item.

```js
incrementCounter = (list, index) => {
  return list
    .slice(0, index)
    .concat(list[index] + 1)
    .concat(list.slice(index + 1));
};
```

We want to take a slice _before_ the `index` and `concat` it with a single item `Array` with a _new_ value and then `concat` it with the _rest_ of the original `Array`.

Finally with the **ES6** [_**spread operator**_](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator) we can spread over the left part of the `Array` _specify_ the _new_ item, and then _spread_ over the right part of the _original_ `Array` and this _looks_ much nicer ...

```js
incrementCounter = (list, index) => {
  return [...list.slice(0, index), list[index] + 1, ...list.slice(index + 1)];
};
```

In this lesson you learned how to use the `concat` method _or_ the _spread operator_ and the `slice` method to add, remove and change items in arrays _without mutating_ them and how to _protect_ yourself from _mutation_ with `deepFreeze` in your tests.

> Code snapshot at the end of Video 9: \[`index.html`(https://github.com/nelsonic/learn-redux/blob/f25da6293c26b9262c888219139830979c51633b/index.html#L16-L67)

\

**10. Avoiding Object Mutations with Object.assign() and ...spread**

> Video: https://egghead.io/lessons/javascript-redux-avoiding-object-mutations-with-object-assign-and-spread

Like in the previous example I use `expect` and `deepFreeze` libraries from NPM to make test assertions. And this time I'm testing a function called `toggleTodo` that takes a todo `Object` and _flips_ its "_completed_" field. So if `completed` was `false` it should be `true` in the returned value or if it was `true` it should be `false`

```js
const toggleTodo = (todo) => {};

const testToggleTodo = () => {
  const todoBefore = {
    id: 0,
    text: "Learn Redux",
    completed: false,
  };
  const todoAfter = {
    id: 0,
    text: "Learn Redux",
    completed: true,
  };
  expect(toggleTodo(todoBefore)).toEqual(todoAfter);
};

testToggleTodo(); // run the test
```

Just like in the last lesson, I'm going to start by writing a _mutating_ version that passes the current test. So a _mutating_ version just flips the `completed` field and re-assigns it on the passed `Object` (\*the `todo`):

```js
const toggleTodo = (todo) => {
  todo.completed = !todo.completed;
  return todo;
};
```

And while it works, we know that _mutations_ are _**not allowed**_ in Redux. So to _enforce_ this, I'm calling `deepFreeze` on my `todo` Object (_in the case of the test `todoBefore`_) and I'm _not allowed_ to change its `completed` field anymore.

One way out of this would be to create a new object with every field copied from the original object _except_ the `completed` field which would be flipped:

```js
const toggleTodo = (todo) => {
  return {
    id: todo.id,
    text: todo.text,
    completed: !todo.completed,
  };
};
```

However if we later add new properties to the `todo` object, we might _forget_ to update this piece of code to include them.

This is why I suggest that you use the **ES6** [`Object.assign`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/assign) method which is _new_ to **ES6** and it lets you `assign` properties of _several_ objects onto the target object. Note how the `Object.assign` order corresponds to that of the JavaScript assignment operator. The left (_first_) argument is the one who's properties are going to be assigned, so its going to be _mutated_. This is why we are passing an _empty_ `Object` as the _first_ argument so we don't _mutate_ any _existing_ data. Every further argument to `Object.assign` will be considered a "_source_" `Object` who's properties will be copied to the target object.

It is _**important**_ that if several _sources_ specify different values for the _same_ property, the _**last**_ one "_wins_". and this is what we use to _overwrite_ the `completed` field despite what the original object says.

```js
const toggleTodo = (todo) => {
  return Object.assign({}, todo, {
    completed: !todo.completed,
  });
};
```

_Finally_ you need to _remember_ that [`Object.assign`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/assign) is a _new_ method in **ES6** so it is _not natively available_ in all the Browsers (_specifically not supported in Internet Explorer_).

![object assign-browser-compatibility](https://cloud.githubusercontent.com/assets/194400/12080810/6fbc745c-b25f-11e5-9e58-ed860ea2872a.png)

You should use a "_polyfill_" either the one that ships with _**Babel**_ or a _standalone_ polyfill to use it (`Object.assign`) without risking crashing your website.

Another option that does not require a polyfill is use the new [`Object` _**spread**_ operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator) which is _**not part of ES6**_ however it is _proposed_ for **ES7** it is "_fairly popular_" and it is _enabled_ in Babel if you use the "_stage 2 preset_":

```js
const toggleTodo = (todo) => {
  return {
    ...todo,
    completed: !todo.completed,
  };
};
```

> Code at the _end_ of Video 10: [`index.html`](https://github.com/nelsonic/learn-redux/blob/63c9e49f7d3ff4611c3c9e91b131102a7729ff30/index.html#L16-L44)

> **Note**: we have _not_ used the `Object` spread operator in our code because it does not run in _any_ browser!!

\

**11. Writing a Todo List Reducer (Adding a Todo)**

> Video: https://egghead.io/lessons/javascript-redux-writing-a-todo-list-reducer-adding-a-todo

Just like in the previous two lessons, I'm using the **expect** library to make test assertions and **deep-freeze** library to _prevent accidental mutations_ in my code.

In this lesson I will create a reducer for a Todo-list application who's state is described as an array of Todos.

Just to remind you what a reducer is: its a "_pure function_" you write to implement the update logic of your application. That is how the next state is calculated given the current state and the action being dispatched.

Before writing a reducer I want a way of knowing whether its code is correct. So I'm starting by writing a test for it:

```js
const todos = (state = [], action) => {

};

const testAddTodo = () => {
  const stateBefore = [];
  const action = {
    type: 'ADD_TODO',
    id: 0,
    text: 'Learn Redux'
  }
  const stateAfter = [
    {
      id: 0,
      text: 'Learn Redux',
      completed: false
    }
  ];

  deepFreeze(stateBefore);
  deepFreeze(stateAfter);

  expect(
    todos(stateBefore, action);
  ).toEqual(stateAfter);
};

testAddTodo();

console.log('All tests passed.');
```

I'm declaring two variables:

- `stateBefore` - the state before, which is an _empty_ `Array`
- `action` - the action being dispatched - which is an action describing a user adding a new todo with some `id` and a `text` (_fields_).

I am also declaring the _state_ I `expect` _after_ calling the reducer. and like `stateBefore` it is an `Array`, but this time it has a _single element_ representing the Todo that was just added; so it has the same `id` and `text` as the action `Object`. and it _also_ has an _additional_ field called `completed` that I want to be _initialized_ to be `false`

We want to make sure that the reducer is a "_pure function_", so I am calling `deepFreeze` both on the `stateBefore` _and_ the `action`.

_Finally_ I'm ready to use the `expect` library to verify that if I call the todo reducer with the `stateBefore` and the `action` I'm going to get the result that is _**deeply**_ **equal** to the `stateAfter` I _just_ declared.

This concludes my _first_ test, now I can call it just like a regular JavaScript function: `testAddTodo();` And if it doesn't `throw` in the `expect` call I'm going to see a message that the tests have passed.

Of _course_ it fails because the reducer is not implemented yet; it's an _empty_ function, so it returns `undefined` instead of the `Array` with a single item that I `expect` in the test.

To fix this I will need my reducer to take a look at the `action.type` property which is a `String` when it matches the `ADD_TODO` string which I specify in my test to _satisfy_ the test I need to return a _new_ `Array` which includes all the items from the _original_ `Array` but _also_ a _new_ Todo item that has its `id` and `text` copied from the `action` Object and a `completed` field set to `false`

Finally I add a `default` case to my `switch` statement because _every_ reducer has to `return` the _current_ state for any _unknown_ `action`:

```js
const todos = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
        },
      ];
    default:
      return state;
  }
};
```

Now the tests run _successfully_!

Lets **recap** the _data flow_ in this example to see why first I create the state `Array` (`stateBefore`) which is an _empty_ `Array` and the `action` Object inside my test function. I'm passing them as arguments to my _reducer_ function called todos the `todos` reducer accepts the state and action as _arguments_ and takes a look at the `action.type` in this case the `action.type` is a `String` saying `ADD_TODO` so it matches the `switch` `case` inside the reducer the reducer returns a _new_ `Array` which contains the items from the _old_ `Array` (_in the case of our test, the empty `stateBefore` Array_...) and a _new_ item (`Object`) representing the added todo however the `state` we passed from the test was an _empty_ `Array` so at the end we are going to get an `Array` with a _single_ item which is the _new_ todo _finally_ we compare the returned value to an `Array` with a single todo item to make sure the reducer works as intended the equality check passes so this makes the test successful.

> Code snapshot for the end of Video 11: [`index.html`](https://github.com/nelsonic/learn-redux/blob/278a17be1fafe2e0f354aa431e0ad4fc776bbc41/index.html#L15-L56)

\

**12. Writing a Todo List Reducer (Toggling a Todo)**

This lesson picks up where we left off in Video 11, so make sure you watched that an tried writing/running the code!

> Video: https://egghead.io/lessons/javascript-redux-writing-a-todo-list-reducer-toggling-a-todo

In this lesson we will continue creating the reducer for the todo list application and the only action that this reducer _currently_ handles is called `ADD_TODO` we also created a _**test**_ that makes sure that when the reducer is called with an _empty_ `Array` and the `ADD_TODO` `action` it returns an `Array` with a _single_ todo element.

In this lesson we will follow the same approach to implement another action called `toggleTodo`

We're going to start with the _test_ again and _this_ time we are testing a different action and we have a different _initial_ `state` the `state` _before_ calling the reducer (`stateBefore`) now includes two different todos with `id` `0` and `1`. notice how _both_ of them have their `completed` field set to `false`

Next I declare the `action` and the action is as `Object` with the `type` property wich is `TOGGLE_TODO` `String` and the `id` of the todo that I want to be "_toggled_" I declare the state that I `expect` to receive _after_ calling the reducer (`stateAfter`) its pretty much the same as _before_ calling the reducer however I `expect` the todo with `id` specified in the `action` or `1` in this case to change its `completed` field

```js
const testToggleTodo = () => {
  const stateBefore = [
    {
      id: 0,
      text: "Learn Redux",
      completed: false,
    },
    {
      id: 1,
      text: "Go shopping",
      completed: false,
    },
  ];
  const action = {
    type: "TOGGLE_TODO",
    id: 1,
  };
  const stateAfter = [
    {
      id: 0,
      text: "Learn Redux",
      completed: false,
    },
    {
      id: 1,
      text: "Go shopping",
      completed: true,
    },
  ];

  deepFreeze(stateBefore);
  deepFreeze(action);

  expect(todos(stateBefore, action)).toEqual(stateAfter);
};

testToggleTodo();
console.log("All tests passed.");
```

the reducer _must_ be a "_pure function_" so at a matter of _precaution_ I call `deepFreeze` on the `state` and the `action`

_Finally_, just like in the previous lesson, I'm asserting that the result of calling our reducer with the `stateBefore` and the `action` is going to be "_deeply equal_" (`toEqual`) the `stateAfter`.

Now, my test is a function so I need to call it at the end of the file And if I run it, it fails because I have not _implemented_ handling this action yet.

I'm adding a new `switch case` to my reducer and I remember that I should not change the original `Array` so I'm using the [`Array.map`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) method to produce a _new_ `Array` the function I pass as an argument will be called for _every_ todo so if its _not_ the todo I'm looking for, I don't want to change it, so I just `return` it as is. _However_ if the todo _is_ the one we want to toggle I'm going to `return` a _new_ `Object` that _all_ the properties of the _original_ todo `Object` thanks to the `Object` spread operator but _also_ an _inverted_ value of the `completed` field:

```js
const todos = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
        },
      ];
    case "TOGGLE_TODO":
      return state.map((todo) => {
        if (todo.id !== action.id) {
          return todo;
        }
        return {
          ...todo,
          completed: !todo.completed,
        };
      });
    default:
      return state;
  }
};
```

Now both of our tests run successfully... And we have an implementation of the reducer that can add and toggle todos.

> Code at the end of Video 12: [`index.html`](https://github.com/nelsonic/learn-redux/blob/92b9a312678ba26ca90050f17d796b26f992de63/index.html#L31-L33) (_using `Object` spread_)

> _**Note**_: While the [_spread operator_](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator#Browser_compatibility) is an **ES6** _Standard_ for `Array`, its only a _**Draft**_ for `Object` proposed for **ES7** which means it is **not** yet **available** in _**any**_ **Browser**! As such I have modified Dan's code to use `Object.assign` (\*see Video #10) which (_at least_) works in Chrome...:

```js

case 'TOGGLE_TODO':
  return state.map(todo => {
    if(todo.id !== action.id){
      return todo;
    }
    return Object.assign({}, todo, {
      completed: !todo.completed
    });
  });
```

The _works_ in _**ALL Modern Browsers Today (Without Babel)**_ way of doing this is:

```js
case 'TOGGLE_TODO':
  return state.map(todo => {
    if(todo.id !== action.id){
      return todo;
    }
    var keys = Object.keys(todo); // IE9+
    var toggled = {};             // new object to avoid mutation
    keys.forEach(function(index) {
      toggled.index = todo.index; // copy all properties/values of todo
    });
    toggled.completed = !todo.completed
    return toggled;
  });
```

We can _probably_ _**all**_ agree that the code is more _elegant_ with the ES7 Object spread operator. But in the interest of having something that works _now_ (_without Babel for running this tutorial in a Chrome without a node.js "workflow"..._) I've opted to use the `Object.assign` method is an **ES6** _Standard_.

> Code at the end of Video 12: [`index.html`](https://github.com/nelsonic/learn-redux/blob/de238f6391dbaf85de9527932c48d7702e4e2336/index.html#L31-L33) (_using `Object.assign`_)

\

**13. Reducer Composition with Arrays**

> Video: https://egghead.io/lessons/javascript-redux-reducer-composition-with-arrays

In the _previous_ lesson we created a _reducer_ that can handle two actions: adding a _new_ todo and toggling an _existing_ todo. Right now the code to _update_ the todo item or to _create_ a new one is placed right inside the todos reducer this function is hard \[_difficult_] to understand because it mixes two different concerns: how the todos `Array` is updated _and_ how individual todos (`Objects`) are updated. This is not a problem _unique_ to Redux any time a function does _too many_ things you want to _extract_ other functions from it and call them so that every function only addresses a single concern

In this case I decided that creating and updating a todo in response to an `action` is a _separate_ operation and needs to be handled by a _separate_ function called `todo`

```js
const todo = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        id: action.id,
        text: action.text,
        completed: false,
      };
    case "TOGGLE_TODO":
      if (state.id !== action.id) {
        return state;
      }
      return Object.assign({}, state, {
        // see: https://git.io/vuBzV
        completed: !state.completed, // here state is the individual todo
      });
    default:
      return state;
  }
};

const todos = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, todo(undefined, action)];
    case "TOGGLE_TODO":
      return state.map((t) => todo(t, action));
    default:
      return state;
  }
};
```

As a matter of convention I decided that it should also accept two arguments: the _current_ `state` and the `action` being dispatched and it should `return` the _next_ `state`. But in this case the `state` refers to the _individual_ todo and _not_ to the _list_ (`Array`) of todos.

_Finally_ there is no "_magic_" in Redux to make it work. We extracted the todo reducer from the todos reducer. So now we need to call it for every todo and assemble the results into an `Array`. While this is not required in this particular example I suggest that you _always_ have the `default` case where you `return` the _current_ `state` to avoid "_odd bugs_" in the future.

The _**Pattern**_ described in this lesson is _pervasive_ in Redux development and is called "[_**Reducer Composition**_](https://redux.js.org/tutorials/fundamentals/part-3-state-actions-reducers)".

Different reducers specify how different parts of the `state` tree are updated in response to different actions. Reducers are also "_normal_" JavaScript functions so they can call _other_ reducers to delegate and abstract away handling of updates of some parts of the `state` they manage this pattern can be applied _many_ times and while there is still a _single_ top-level reducer managing the `state` of your app you will find it convenient to express it as _many_ reducers calling each other each contributing to a _part_ of the application `state` tree.

> Recap: this video/lesson was simply to show how to extract a method from inside the _main_ ("_top-level_") reducer and have a _separate_ reducer which handles updates on the _individual_ todo items. While there are _**more lines of code**_, the _separate_ reducers are _**more maintainable**_

> Note that the tests from the _previous_ video still pass after we have created the `todo` reducer, because the _functionality_ has not changed, its merely been separated to simplify the _main_ reducer.

> Code at the end of Video 13: [`index.html`](https://github.com/nelsonic/learn-redux/blob/89572d3b8e751c2fe11d8a1750ea4f82d64d5e3c/index.html#L15-L47)

\

**14. Reducer Composition with Objects**

Tip: This tutorial builds upon the code written in Video/Lesson 13. If you skipped it, or left a break between watching the videos, go back and re-acquaint yourself before proceeding.

> Video: https://egghead.io/lessons/javascript-redux-reducer-composition-with-objects

In the _previous_ lesson we established the _pattern_ of "\*Reducer Composition" where one reducer can be called by another reducer to update items inside an array. If we create a `store` with this reducer and log its `state` we will find that the _initial_ `state` of it is an _empty_ `Array` of todos and if we _dispatch_ an `ADD_TODO` `action` we will find that the _corresponding_ todo has been added to the `state` `Array` if we _dispatch_ _another_ `ADD_TODO` `action` the _corresponding_ todo will _also_ be added at the end of the `Array`. And dispatching a `TOGGLE_TODO` `action` with `id` (_set to_) `0` will flip the `completed` field of the todo with `id` _zero_ (`0`).

> The new code not in the previous tutorial is:

```js
const { createStore } = Redux;
const store = createStore(todos);

console.log("Initial state:");
console.log(store.getState());
console.log("--------------");

console.log("Dispatching ADD_TODO."); // first todo
store.dispatch({
  type: "ADD_TODO",
  id: 0,
  text: "Learn Redux",
});

console.log("Current state:");
console.log(store.getState());
console.log("--------------");

console.log("Dispatching ADD_TODO."); // second todo
store.dispatch({
  type: "ADD_TODO",
  id: 1,
  text: "Go shopping",
});

console.log("Current state:");
console.log(store.getState());
console.log("--------------");

console.log("Dispatching TOGGLE_TODO."); // toggle first todo
store.dispatch({
  type: "TOGGLE_TODO",
  id: 0,
});

console.log("Current state:");
console.log(store.getState());
console.log("--------------");
```

> or you can run: [`index.html`](https://github.com/nelsonic/learn-redux/blob/33a46dbc0eb733f6494fdb8de89d91dde58c1731/index.html#L50-L87) (Code Snapshot for Video 14 @ 0:40) which has the following developer console _output_:

![learn-redux-output-of-video-14-console logs](https://cloud.githubusercontent.com/assets/194400/12122835/6dc1bc44-b3d5-11e5-8e4d-691bdd86f910.png)

Representing the _whole_ `state` of the application as an `Array` of todos works for a _simple_ example but what if we want to store _more_ information? For _example_ we may want to let the user choose which todos are _currently_ _visible_ with a `visibilityFilter` such as `SHOW_COMPLETED`, `SHOW_ALL` or `SHOW_ACTIVE`.

```js
const visibilityFilter = (
  state = "SHOW_ALL", // default state
  action
) => {
  switch (action.type) {
    case "SET_VISIBILITY_FILTER":
      return action.filter;
    default:
      return state;
  }
};
```

The `state` of the `visibilityFilter` is a _simple_ `String` representing the _current_ filter and it is _changed_ by the `SET_VISIBILITY_FILTER` `action`.

```js
const todoApp = (state = {}, action) => {
  return {
    todos: todos(state.todos, action),
    visibilityFilter: visibilityFilter(state.visibilityFilter, action),
  };
};
```

To _store_ this _new_ information, I don't need to _change_ the _existing_ reducers, I will use the Reducer Composition Pattern and create a _new_ reducer that _calls_ the existing reducers to manage parts of its state and combines the results in a _single_ `state` `Object` _**note**_ that the first time it runs, it will pass `undefined` as the `state` to the "_child_" reducers because the _initial_ state of the _combined_ reducer is an _empty_ `Object` so all its fields are `undefined` this gets the "_child_" reducers to return their _initial_ `state` and populates the `state` `Object` for the first time.

> Code Snapshot for Video 14 @ 1:45 [`index.html`](https://github.com/nelsonic/learn-redux/blob/7fef9d1ede97b48a03a4e55c6b8f10bdcc0b5a89/index.html#L62-L73)

When an `action` comes in, it calls the reducers with the parts of the `state` that they manage and the `action` and combines the result into the _new_ `State` object. This is _another_ example of the Reducer Composition Pattern but this time we use it to _combine_ _several_ reducers into a single reducer that we will now use to create our `store`.

The _initial_ `state` of the _combined_ reducer now contains the _initial_ `state` of the _independent_ reducers and any time an `action` comes in those reducers handle the action _independently_ this pattern helps _scale_ Redux development because different people on the team can work on different reducers handling the _same_ actions without running into each other and causing merge conflicts.

```js
console.log("Dispatching SET_VISIBILITY_FILTER");
store.dispatch({
  type: "SET_VISIBILITY_FILTER",
  filter: "SHOW_COMPLETED",
});

console.log("Current state:");
console.log(store.getState());
console.log("--------------");
```

> Note: This `action` is merely setting the `visibilityFilter` _property_ of the `store` `Object`

![console-log-output-for-set_visibility_filter](https://cloud.githubusercontent.com/assets/194400/12123718/753f2a92-b3da-11e5-982a-17be0a075f1b.png)

> _**NOTE**_: this code does not actually do anything to the \***UI** _yet_. (_be patient that's next..._)

_Finally_ I'm dispatching the `SET_VISIBILITY_FILTER` `action` and you can see that it does not affect the todos but the `visibilityFilter` field has been updated.

> Code Snapshot for _End_ of Video 14: [`index.html`](https://github.com/nelsonic/learn-redux/blob/9702c1c858b4a22fff85339c55cf914ae3969666/index.html#L115-L123)

\

**15. Reducer Composition with `combineReducers`()**

> Video: https://egghead.io/lessons/javascript-redux-reducer-composition-with-combinereducers

In the previous lesson we learned how to use the "_Reducer Composition_" Pattern to let different reducers handle different parts of the `state` tree and then _combine_ their results. In fact this pattern is _so_ common that it's present in _most_ Redux applications. And this is why Redux provides a function called `combineReducers` that lets you avoid writing this code by _hand_ and instead it _generates_ the top-level reducer _for_ you.

The _only_ argument to `combineReducers` is an `Object` and this `Object` lets me specify the _mapping_ between the `state` field names and the reducers managing them:

```js
const { combineReducers } = Redux;
const todoApp = combineReducers({
  todos: todos,
  visibilityFilter: visibilityFilter,
});
```

The returned value of the `combineReducers` call is a reducer function which is pretty much equivalent to the reducer function I wrote by hand previously \[_See: Video 14 above_]

The keys of the `Object` that I configure `combineReducers` with correspond to the fields of the `state` `Object` its going to manage.

The _values_ of the `Object` I pass to combine reducers are the reducers it should call to update the corresponding `state` fields this _combined_ reducer call says that the todos field inside the state object manages will be updated by the `todos` reducer and the `visibilityFilter` field inside the the `state` `Object` will be will be updated by calling the `visibilityFilter` reducer and the results will be assembled into a _single_ `Object` in other words it behaves pretty much exactly as the function commented out below:

```js
// const todoApp = (state = {}, action) => {
//   return {
//     todos: todos(
//       state.todos,
//       action
//     ),
//     visibilityFilter: visibilityFilter(
//       state.visibilityFilter,
//       action
//     )
//   };
// };
```

_Finally_ I will establish a _useful_ convention: I will _always_ name my reducers after the `state` keys they manage since the _key_ names and the _value_ names are now the _same_ I can _omit_ the _values_ thanks to the **ES6** Object Literal _**Shorthand Notation**_:

```js
const { combineReducers } = Redux;
const todoApp = combineReducers({
  todos,
  visibilityFilter,
});
```

In this lesson you learned how to _generate_ a single reducer that calls many reducers to manage parts of its state by using the `combineReducers` utility function.

> Code Snapshot for _End_ of Video 15 [`index.html`](https://github.com/nelsonic/learn-redux/blob/128196f61fe5d0e752b16625e8676961f74858ff/index.html#L62-L66)

**Read more about ES6 Object Literal **_**Shorthand**_** Notation**

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object\_initializer#New\_notations\_in\_ECMAScript\_2015
- Good examples: https://eslint.org/docs/rules/object-shorthand.html (_by Nicholas C. Zakas_)

> _**NOTE**_: as _usual_, while **ES6** Object Literal _Shorthand_ Notation is a _Standard_ it is _still_ not implemented in the _majority_ of web browsers:

![es6-object-literal-shorthand-notation](https://cloud.githubusercontent.com/assets/194400/12127256/0d4190d8-b3ee-11e5-9191-8c4a532ad59f.png)

> _I have a_ _**strong bias**_ _towards_ _**explicitly**_ _typing the_ _**Values**_ _in an `Object` literal for clarity_. _But given the_ _**naming convention**_ _in Redux_, _its pretty safe to omit them in this case_.

\

**16. Implementing combineReducers() from Scratch**

> Video: https://egghead.io/lessons/javascript-redux-implementing-combinereducers-from-scratch

In the previous lesson we learned to use the `combineReducers` function which comes with Redux and generates one reducer from several other reducers delegating to them parts of the `state` tree.

To gain a _deeper_ understanding of how _exactly_ `combineReducers` works we will _implement_ it _**from scratch**_ in this lesson.

`combineReducers` is a function so I'm writing a function declaration and its only argument is the _mapping_ between `state` keys and the reducers, so I'm just going to call it `reducers`.

```js
// const { combineReducers } = Redux;
const combineReducers = (reducers) => {
  return (state = {}, action) => {
    return Object.keys(reducers).reduce(
      (nextState, key) => {
        nextState[key] = reducers[key](state[key], action);
        return nextState;
      },
      {} // empty initial nextState
    );
  };
};
```

The returned value is supposed to be a reducer itself so this is a function that returns another function and the signature of the returned function is a reducer signature it has the `state` and the `action` now I'm calling the [`Object.keys` method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys) (_IE9+_) which gives me all the `keys` of the `reducers` `Object` in our example this is `todos` and `visibilityFilter` next I am calling the (Array) `reduce` method on the `keys` because I want to produce a _single_ value such as the `nextState` by _accumulating_ over every reducer `key` and calling the _corresponding_ reducer each reducer passed to the combined reducers function is only responsible for updating a _part_ of the `state` this is why I'm saying that the `nextState` by the given `key` can be calculated by calling the _corresponding_ reducer by the _given_ `key` with the _current_ `state` by the _given_ `key` and the `action` the `Array.reduce` wants me to `return` the _next_ accumulated value from the callback so I am returning the `nextState` and I'm also specifying an _empty_ `Object` as the _initial_ `nextState` _before_ all the `keys` are processed. And there we have it this is a _working_ re-implementation of `combineReducers` utility from Redux

Lets briefly _recap_ how it works. I'm calling `combineReducers` with an `Object` who's values are the reducer functions and keys are the `state` fields they manage inside the _generated_ reducer I'm retrieving all the keys of the reducers I passed to `combineReducers` which is an `Array` of `Strings` (_specifically_) `todos` and `visibilityFilter` (_in our example_). I'm starting with an _empty_ `Object` for my `nextState` and I'm using the `Reduce` operation over these `keys` to fill it _gradually_. Notice that I am _mutating_ the `nextState` `Object` on every iteration this is not a problem because it is an `Object` I created _inside_ the reducer it is not something passed from _outside_ so reducer stays a "_pure_" function. To calculate the `nextState` for a given `key` it calls the corresponding reducer function such as `todos` or `visibilityFilter` the _generated_ reducer will pass to the _child_ reducer only a _part_ of its `state` by the `key` so if its `state` is a _single_ `Object` its only going to pass the _relevant_ part such as `todos` or `visibilityFilter` depending on the _current_ `key` and save the result in the `nextState` by the same `key`

_Finally_ we use the `Array.reduce` operation (_method_) with the _empty_ `Object` as the _initial_ `nextState` that is being filled on every iteration until it is the return value of the whole `.reduce` operation

In this lesson you learned how to implement the `combineReducers` utility that comes with Redux from _scratch_ it is not _essential_ to use in Redux so it is _fine_ if you don't fully understand how it works _yet_ however it is a _good_ \[_great_!] idea to _practice_ functional programming and _understand_ that functions can take other functions and `return` other functions because knowing this will help you get more productive in Redux in the long term.

\

**17. React Todo List Example (Adding a Todo)**

> Video: https://egghead.io/lessons/javascript-redux-react-todo-list-example-adding-a-todo

In the _previous_ lesson we learned how to split the "_root_" reducer into _many_ smaller reducers that manage _parts_ of the `state` tree and now we have a ready `todoApp` reducer that handles all the `actions` of our simple todo application.

So now it's time to _implement_ the _**view layer**_ and I'm going to use React in this example

I'm adding **React** and [React-DOM](https://facebook.github.io/react/docs/glossary.html) packages from the Facebook CDN and I'm also adding a div with `id='root'` which is where I'm going to `render` my React application

```js
<script src="https://cdnjs.cloudflare.com/ajax/libs/react/0.14.5/react.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/react/0.14.5/react-dom.min.js"></script>
```

Similar to the React _Counter_ example from the 8th Lesson I declare a `render` function that is going to update the DOM in response to the _current_ application `state` and I'm going to `subscribe` to the `store` changes and call `render` when ever the `store` changes and _once_ to `render` the _initial_ state:

```js
const { createStore } = Redux;
const store = createStore(todoApp);

const render = () => {
  // gets expanded below ...
};

store.subscribe(render);
render();
```

And the _implementation_ of the `render` method is going to use React so its calling `ReactDOM.render` for some `TodoApp` _component_ I haven't written _yet_ and it renders it into the `div` I created inside the `html` called `root`.

React provides a "_base_" `Class` for all components so I'm grabbing it from the React `Object` its called `React.Component` and I'm declaring my own `TodoApp` component that `extends` the React "_base_" `Component`

```js
const { Component } = React;

class TodoAPP extends Component {
  // filled out below ...
}

const render = () => {
  ReactDOM.render(<TodoApp />, document.getElementById("root"));
};
```

This `Component` is only going to have a `render` function and is going to return a `<div>` and _inside_ the `<div>` I'm going to place a `<button>` saying "Add Todo" but I don't want to add an `input` field _yet_ to keep the example _simple_ at first so I'm dispatching the `ADD_TODO` `action` and I'm going to put `Test` as my `text` for the `action` so it's going to keep adding todos with the `text` "Test". and the `id` I need to specify a sequential `id` so this is why I'm declaring a _global_ variable called `nextTodoId` and I'm going to keep incrementing it. so every time its going to emit (_dispatch an `action` with_) a _new_ `id` and _finally_ I also want to display a _list_ of the todos so, _assuming_ that I have the todos injected as a `todos` prop I will call `.map` and for every `todo` item I'm going to show a `<li>` showing the text of that particular todo.

_Finally_ because I need the `todos` as a `prop` I'm going to pass it to the `TodoApp` by reading the the _current_ `store` `state` and reading its `todos` field:

```js
const { Component } = React;

let nextTodoId = 0;

class TodoApp extends Component {
  render() {
    return (
      <div>
        <button
          onClick={() => {
            store.dispatch({
              type: "ADD_TODO",
              text: "Test",
              id: nextTodoId++,
            });
          }}
        >
          Add Todo
        </button>
        <ul>
          {this.props.todos.map((todo) => (
            <li key={todo.id}>{todo.text}</li>
          ))}
        </ul>
      </div>
    );
  }
}

const render = () => {
  ReactDOM.render(
    <TodoApp todos={store.getState().todos} />,
    document.getElementById("root")
  );
};
```

> Code snapshot for Video 17 @ 02:56: [`index.html`](https://github.com/nelsonic/learn-redux/blob/c44025b2ea3ed7f8cd4b1120c4aad7f98cce2c97/index.html#L81-L104)

If you open the file in your browser, you should expect to see:

![learn-redux-video-17-example](https://cloud.githubusercontent.com/assets/194400/12147411/a1bb3974-b490-11e5-8ab0-b011dfecc959.png)

You can see that there is a `<button>` "Add todo" and any time I press it I see a _new_ todo with the "Test" `text`.

Now I'm going to add an `input` inside my render function and I'm using the React callback `ref` API where `ref` is a function it gets the `node` corresponding to the `ref` and I'm saving that `node` in this case `this.input` so I'm able to _read_ the `value` of the `input` inside my event handler, I'm reading `this.input.value` and I'm also able to _reset_ that value _after_ dispatching the `action` so that the field is cleared.

Now if I try to write something in the `input` field and press "Add Todo" the `ADD_TODO` `action` is dispatched and the field is _cleared_.

Lets take a moment to recap how this application works.

It starts with the TodoApp React Component and this Component is not aware _exactly_ how todos are being added however it can express its desire to mutate the `state` by dispatching an `action` with the `type` `ADD_TODO` for the `text` field it uses the _current_ `input` value (`this.input.value`) and it passes an _incrementing_ `id` as the `id` of todo every todo needs its own `id` and in this approach we are just going to increment the counter so it always gives us the next integer as `id` it is common for React Components to dispatch `actions` in Redux apps however it is _equally_ important to be able to `render` the _current_ `state` my `TodoApp` Component assumes that it is going to receive todos as a `prop` and it _maps_ over the todos to display a _list_ of them. using the `id` as a `key`. This Component is being rendered in the `render` function that runs any time the `store` `state` changes, and _initially_. The `render` function reads the _current_ `state` of the `store` and passes the todos `Array` that it gets from the _current_ `state` of the `store` to the `TodoApp` Component as a `prop` the `render` function is called on every `store` change so the `todos` prop is always up-to-date this was the _rendering_ part of the Redux flow.

Lets recap how _mutations_ work in Redux: any `state` change is caused by a `store.dispatch` call somewhere in the Component. When an `action` is dispatched the `store` calls the _reducer_ it was created with with the _current_ `state` and the `action` being dispatched and in our case, this is the `todoApp` reducer which we obtained by combining the `visibilityFilter` and the `todos` reducer. It matches the `action` `type` in a `switch` statement and if the `action` `type` is `ADD_TODO` and indeed it is equal to `ADD_TODO` `String` in this case it will call the "_child_" `todo` reducer, passing it `undefined` because there is no `state` for a _new_ todo and the `action`. We have a _similar_ `switch` statement inside the `todo` reducer and the `action` `type` is `ADD_TODO` which returns the _initial_ `state` of the todo with the `id` and `text` from the `action` and `completed` field set to `false` the todos reducer that _called_ it will return a _new_ `Array` with all _existing_ items and the _new_ item added at the very end as a _new_ todo to the _current_ `state`

_Finally_ the combined reducer called `todoApp` will use this _new_ `Array` as the new value for the todos field in the _global_ `state` `Object` so its going to return a _new_ `state` `Object` where the todos field corresponds to the `Array` with the newly added Todo item. The `todoApp` reducer is the "_root_" reducer in this application it is the one the `store` was created with. so its next state is the _next_ `state` of the Redux `store` and all the _listeners_ are notified the `render` function is _subscribed_ to the `store` changes so it is called _again_ and it gets the _fresh_ `state` by calling `getState` and it passes the _fresh_ todos to the Component re-rending it with the _new_ data.

> Code at the _end_ of Video 17: [`index.html`](https://github.com/nelsonic/learn-redux/blob/c7715af33d93b499d8e607b3bbd0d82505d941fd/index.html)

Which should look like this: (_when you open it in Chrome Canary_)

![learn-redux-video17-end-screenshot](https://cloud.githubusercontent.com/assets/194400/12149102/c2e4c7e2-b499-11e5-9c4a-0b61619addc4.png)

\

**18. React Todo List Example (Toggling a Todo)**

> https://egghead.io/lessons/javascript-redux-react-todo-list-example-toggling-a-todo

In the last lesson we implemented a simple UI for the Todo List application that is able to add _new_ todos and view the _existing_ todos in a list to _add_ the todos we dispatched the `ADD_TODO` `action` and in _this_ lesson we are going to the `TOGGLE_TODO` `action` to _toggle_ the _completed_ `state` of the todos by clicking on them.

I'm scrolling down to my React Component and I've got a `<li>` here corresponding to the todo so I'm adding the `onClick` handler so when the user clicks on the list item I want to dispatch an `action` to my `store` with the `type` `TOGGLE_TODO` and the `id` of the todo being _toggled_ which I get from the todo `Object`

The event handler _knows_ which todo it corresponds to so it is able to pass its `id` in the `action`. In the user interface I want the completed todos to appear crossed out. so I'm adding the `style` attribute to the `<li>` and I'm going to use the `textDecoration` property which is going to be "line-through" (_strike-through_) when `completed` is `true` and _none_ when `todo.compleded` is `false` so I get a "normal" looking todo. And now if I add a couple of todos I can click on them and they are going to appear toggled:

```js
<ul>
  {this.props.todos.map((todo) => (
    <li
      key={todo.id}
      onClick={() => {
        store.dispatch({
          type: "TOGGLE_TODO",
          id: todo.id,
        });
      }}
      style={{
        textDecoration: todo.completed ? "line-through" : "none",
      }}
    >
      {todo.text}
    </li>
  ))}
</ul>
```

> Code snapshot for Video 18 @ 1:25: [`index.html`](https://github.com/nelsonic/learn-redux/blob/fbc9a10538f513d21e9b06a9db13f33af79f938f/index.html#L104-L116)

When you run it (_in Google Chrome Canary_) you should expect to see:

![video-18-at-1min25sec-screenshot](https://cloud.githubusercontent.com/assets/194400/12149808/a7565b22-b49d-11e5-87b5-a66dec698686.png)

... And I can _toggle_ them back. Isn't that _satisfying_...?

Lets recap how _toggling_ the todo actually _works_. it starts with me dispatching the `TOGGLE_TODO` `action` inside my `onClick` handler with the `type` `TOGGLE_TODO` and the `id` which is the `id` of the todo being rendered I get the `todo` `Object` as an _argument_ to the `Array.map` callback inside my `render` method where I render all the todos when an `action` is dispatched the `store` will call the "_root_" reducer which will call the todos reducer with the `Array` of todos and the `action` and in _this_ case the `action` `type` is `TOGGLE_TODO` so the todos reducer delegates the handling of _every_ todo to the `todo` reducer with a `.map` function to call it for _every_ todo item. So the `todo` reducer receives the todo as `state` and the `action` again we `switch` on the `action.type` and it matches `TOGGLE_TODO` `String` and now for _every_ todo who's `id` does not match the `id` specified in the `action` we just `return` the _previous_ `state` that is the todo `Object` as it was _however_ if the `id` of the todo matches the one _specified_ in the `action` we are going to `return` a _new_ `Object` with all the properties of the _original_ todo but with the `completed` field equal to the _opposite_ value of what it was; e.g: `completed: !state.completed`

The updated todo item will be will be included in the todos field under the _new_ application `state` and because we `subscribe` the `render` function its going to get the _next_ `state` of the application in `store.getState()` and pass the _new_ version of the todos to the `TodoApp` Component. Which is going to render the _updated_ todos.

_Finally_ the (CSS) `style` of the `<li>` depends on the `todo.completed` field which we just updated which is why it re-renders in a crossed-out `state`.

> Code at the _end_ of Video 18: [`index.html`](https://github.com/nelsonic/learn-redux/blob/2c731d6b76fe74684968aa6153131354805a9568/index.html)

\

**19. React Todo List Example (Filtering Todos)**

> Video: https://egghead.io/lessons/javascript-redux-react-todo-list-example-filtering-todos

In the previous two lessons we were working on creating the user-interface for the Todo List Application that displays the todos lets us add new todos and "toggle" them `onClick` we _implemented_ that by dispatching `ADD_TODO` and `TOGGLE_TODO` `actions` that we already know how to handle in our reducers.

In _this_ lesson we are going to dispatch `SET_VISIBILITY_FILTER` `action` and use the `visibilityFilter` _field_ to _only_ show the todos the _user_ wants to see; either the _completed_ todos, _active_ todos or _all_ the todos in the _current_ `state`.

I'm starting by creating a _new_ Component, a _functional_ Component called `FilterLink` that user needs to click to switch the _current_ visible todos. and the `FilterLink` accepts `filter` prop which is just a `String` and the `children` which is the content of the link. and its going to be a simple `<a>` ("_anchor_") tag that doesn't really _link_ anywhere, its going to `prevent` the navigation when clicked and its going to dispatch and `action` with a `type` `SET_VISIBILITY_FILTER` and passing the `filter` prop so that the reducer knows which filter is being clicked. I will pass the `children` down to the `<a>` tag so the "consumer" can specify the `text` of the link Now I can use it in my `TodoApp` Component.

Just below the todo list I'm adding a paragraph where I'm going to offer the user the choice as to which todos should be _currently_ visible by using the `FilterLink` Component I just created. The `filter` prop is one of these possible values such as `SHOW_ALL` which corresponds to showing _every_ todo in the `state` `SHOW_ACTIVE` which means just show the todos that are _not_ completed yet, and `SHOW_COMPLETED` which means show the _completed_ todos.

```js
<p>
  Show: <FilterLink filter="SHOW_ALL">All</FilterLink>{" "}
  <FilterLink filter="SHOW_ACTIVE">Active</FilterLink>{" "}
  <FilterLink filter="SHOW_COMPLETED">Completed</FilterLink>
</p>
```

So I'm _copy-pasting_ the `FilterLink` and I'm changing the labels and the filters corresponding to it running this code will give me 3 different things under the list of todos. Clicking on them will change the `state.visibilityFilter` field _however_ it doesn't have _any_ effect yet. because we don't interpret the value of the `visibilityFilter`

I'm creating a _new_ function that is going to help me filter the todos according to the the filter value, its called `getVisibleTodos` it accepts two arguments: the `todos` and the `filter` and it _switches_ on the _current_ `filter` value so if the `filter` is `SHOW_ALL` its going to `return` all of the todos but if the `filter` is `SHOW_COMPLETED` its going to call `todos.filter()` (_that is the `Array.filter` method_) to only return those todos that have `completed` set to `true` and `SHOW_ACTIVE` is going to be the _opposite_ of that its going to `return` _only_ those todos that where `completed` field is `false`.

```js
const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case "SHOW_ALL":
      return todos;
    case "SHOW_COMPLETED":
      return todos.filter((t) => t.completed);
    case "SHOW_ACTIVE":
      return todos.filter((t) => !t.completed);
  }
};
```

Now I need to _call_ this function to `filter` the todos _before_ rendering them so in the `render` function of the `TodoApp` Component I get the `visibleTodos` by calling the `getVisibleTodos` with the `todos` and the `visibilityFilter` _values_ from my props and I'm going to _use_ the `visibleTodos` _instead_ of `this.props.todos` when I enumerate them for rendering.

> Code snapshot for Video 19 @ 03:45: [`index.html`](https://github.com/nelsonic/learn-redux/blob/5e0622c277a37a478c887ba27e521474a5d480ad/index.html#L83-L128)

_Finally_ I now use the `visibilityFilter` inside my `TodoApp` Component so I need to pass it as a prop and I can do this _explicitly_ but its _easier_ just to "spread" over _all_ the `state` fields so _every_ property of the `state` `Object` is passed as a prop to the `TodoApp` Component this way it receives the `visibilityFilter` and if I _add_ some todo items and then click on them so I change their `completed` fields and then click on the `visibilityFilter` links the _currently_ visible todos are rendered according to the _chosen_ `visibilityFilter`.

The links look all the same right now but we want to highlight the _chosen_ one. To _implement_ this, we're going to need the `visibilityFilter` prop which says which is the _current_ one. I'm changing the _beginning_ of the `render` method to "_destructure_" the `todos` and `visibilityFilter` from the props so I can access them _directly_ without typing `this.props` every time.

> _**NOTE**_: [**ES6** _**Destructuring assignment**_](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) is _**not supported**_ in Chrome yet, so I'm not using this in the code example. so Instead of:

```js
const { todos, visibilityFilter } = this.props; // destructuring assignment
```

I'm using:

```js
const todos = this.props.tods,
  visibilityFilter = this.props.visibilityFilter;
```

and I'm going to pass the `visibilityFilter` to every `FilterLink` so it can _know_ which `filter` is the _current_ one and _apply_ different styling if the `currentFilter` matches the `FilterLink`'s _own_ filter.

After passing the `currentFilter` prop to every `FilterLink` I go back to the `FilterLink` declaration and I'm adding `currentFilter` as a prop to it and I'm adding a _condition_ that says that when the `filter` is the `currentFilter` that is when the link is _active_ I want to `return` a `<span>` instead of a link because I don't want it to be _clickable_, I want it to be _static_ text this completes the user-interface of our Todo List example it lets us _add_ items, it lets us _view_ items, toggle them as _completed_ and when we `switch` the `visibilityFilter` it displays only _relevant_ todos and it _also_ updates the link _appearance_ so we see which link is _active_.

Lets recap how changing the `visibilityFilter` _works_ it starts with a dispatch call with an `action` of the `type: 'SET_VISIBILITY_FILTER'` and it passes `filter` which is a prop to the `FilterLink` Component so every one of those 3 links is going to have a different `filter` prop it passes in the `action`. The `store.dispatch` function will call our _root_ reducer with the `state` and the `action` which in turn will call the `visibilityFilter` reducer with the _part_ of the `state` and the `action`. Note that when the `action.type` is `SET_VISIBILITY_FILTER` it doesn't _care_ for the _previous_ `state` it just returns the `action.filter` as the _next_ value, the next `state` of the `visibilityFilter` reducer the root reducer will _use_ this new field as part of its _new_ `state` `Object` and because the `render` function is _subscribed_ to the `store` changes ( `store.subscribe(render);` ) its going to get this _new_ `state` `Object` and pass all its keys as props to the `TodoApp` Component so the `TodoApp` Component will receive the todos and the _updated_ `visibilityFilter` as its props both its props are passed to the `getVisibleTodos` function which calculates the _currently_ `visibleTodos` according to a list of _all_ `todos` and the `visibilityFilter` and the `filter` is just a `String` saying `SHOW_ALL`, `SHOW_COMPLETED` or `SHOW_ACTIVE` and the returned value is a _new_ `Array` of todos that in some cases filters them and in some cases returns as is and the `SHOW_COMPLETED` and `SHOW_ACTIVE` are only different in their _predicates_.

The `return` value is the `Array` of `visibleTodos` and it is used in the `render` function to actually enumerate every `todo` and _render_ it and the `visibilityFilter` field is also used by the `FilterLink` as the `currentFilter` because the `FilterLink` wants to know whether its `filter` is the _current_ one in order to `render` a `<span>` instead of a link (`<a>` tag). This is how clicking a link makes it appear selected and changes the _currently_ displayed items in the list.

> Code at the _end_ of Video 19: [`index.html`](https://github.com/nelsonic/learn-redux/blob/bebd3844c144ceb072365b4a4bf7b816124e9626/index.html)

\

**20. Extracting Presentational Components (Todo, TodoList)**

> Video: https://egghead.io/lessons/javascript-redux-extracting-presentational-components-todo-todolist

In the last few lessons we created the user interface for a simple React and Redux Todo List where I can add items, toggle them as completed and change the _currently_ visible Todos and we do that by having a _single_ `TodoApp` Component that the `<input>`, the `<button>` for _adding_ todos the _list_ of _currently_ visible todos with `onClick` handler and it has these 3 links that let us change the _currently_ visible todos. The _single_ Component approach worked so far, however we really want to have _many_ components that can be used tested and changed by different people separately so we are going to re-factor our application in this lesson.

The first Component I want to _extract_ from the `TodoApp` Component is the `Todo` Component that renders a _single_ `<li>` I'm declaring the `Todo` Component as a function which React 0.14 allows me to do. I'm not _sure_ which props its going to have so I will leave them blank for now and I will just _paste_ the `<li>` I copied before.

The first thing I am doing is _removing_ the special `key` property because it's only needed when I am enumerating an `Array` and I will use it _later_ when enumerating _many_ todos. One of my goals with this refactoring is to make every Component as flexible as it is _reasonable_. Right now I have _hard-coded_ that _clicking_ a todo always causes the `TOGGLE_TODO` `action` and this is perfectly fine to do in your app however I prefer to have a bunch of Components that don't specify any _behaviors_ and that are _only_ concerned with how things _look_ or how they `render` and I call such Components the "_presentational_" Components I would like to keep `Todo` a "_Presentational_" Component so I _remove_ the `onClick` handler and I promote it to be a prop so that anyone who uses the `Todo` Component can specify what happens on the _click_ and you don't _have_ to do this in your Redux apps but I find it to be a very _convenient_ pattern. _Finally_ while it does not make a lot of difference, I prefer to keep it explicit what is the `data` that the Component needs to `render` so instead of passing a `todo` `Object` I pass `completed` and `text` fields as _separate_ props. note: how the `Todo` Component is now a _purely_ "_Presentational_" Component and does not specify _any_ behavior but it _knows_ how to `render` a todo.

```js
const Todo = ({ onClick, completed, text }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? "line-through" : "none",
    }}
  >
    {text}
  </li>
);
```

The _next_ Component I create is called `TodoList` and it's _also_ a "_Presentational_" Component its _only_ concerned with how things _look_ and it accepts an `Array` of todos and is going to `render` an `<ul>` (_unordered list_) of them by calling the todos `map` function (`Array.map`) and rendering a Todo component for every todo. it tells React to use `todo.id` as the unique `key` for the elements and it _spreads_ over the `todo` `Object` properties so that `text` and `completed` end up as props on `Todo` Component now I need to _specify_ what happens when a `Todo` is clicked and I _could_ have dispatched an `action` here and again, that would be _fine_ but I want it to be a "_Presentational_" Component so I'm going to call _another_ function called `onTodoClick` and pass the `id` of the `todo` and let it decide what should happen so `onTodoClick` is another prop for the `TodoList` both `Todo` and `TodoList` are "_Presentational_" Components so we need something I call "_Container_" Components to actually pass the data from the `store` and to specify the behavior

```js
const TodoList = ({
  todos,
  onTodoClick
}) => (
  <ul>
    {todos.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
        onClick={() => onTodoClick(todo.id)}
      />
    )}
  </ul>
```

In this case the top-level `TodoApp` Component acts as a "_Container_" Components and we will see more examples of "_Container_" Components in the future lessons. In this case you just render the `TodoList` with `visibleTodos` as the `todos` and with a callback that says that when `onTodoClick` is called with a `todo.id` we should dispatch an `action` on the `store` with the `type` `TOGGLE_TODO` and the `id` of the `todo`.

```js
<TodoList
  todos={visibleTodos}
  onTodoClick={(id) =>
    store.dispatch({
      type: "TOGGLE_TODO",
      id,
    })
  }
/>
```

Let's recap again how this works: The `TodoApp` Component renders a `TodoList` and it passes a function to it that can dispatch an `action` the `TodoList` Component renders the `Todo` Component and passes `onClick` prop which calls `onTodoClick` the `Todo` Component uses the `onClick` prop it receives and binds it to the `<li>` `onClick` this way when its called the `onTodoClick` is called and this dispatches the `action` and updates the `visibleTodos` because the `action` updates the `store`.

> Complete Code at the _end_ of Video 20: [`index.html`](https://github.com/nelsonic/learn-redux/blob/3014d077563b3a7a195596d17bf2040d49a06ddb/index.html)

\

**21. Extracting Presentational Components (AddTodo, Footer, FilterLink)**

> Video: https://egghead.io/lessons/javascript-redux-extracting-presentational-components-addtodo-footer-filterlink

In the previous lesson I extracted the `Todo` and `TodoList` Components from the `TodoApp` Component. In this lesson I will continue extracting other "_Presentational_" Components to separate the _looks_ from the _behavior_. Now I want to extract the `<input>` and the `<button>` into a separate Component called `AddTodo`. I'm declaring `AddTodo` as a "_Functional_ Component" that does not accept any props and I'm going to `return` these _cut-pasted_ `<input>` and `<button>` but I'm wrapping them in a `<div>` because a (React) Component needs to have a _single_ root element.

```js
const AddTodo = () => {
  return (
    <div>
      <input
        ref={(node) => {
          this.input = node;
        }}
      />
      <button
        onClick={() => {
          store.dispatch({
            type: "ADD_TODO",
            text: this.input.value,
            id: nextTodoId++,
          });
          this.input.value = "";
        }}
      >
        Add Todo
      </button>
    </div>
  );
};
```

The _Functional_ Components don't have instances however instead of using `this`, I can use a _local_ variable called `input` that I'm going to "_close over_" so that I can write to it in the callback ref and I can read from it in the event handler. Like previously I want it to be a "_Presentational_" Component and not specify behavior so I'm just calling a function called `onAddClick` passing the _current_ `input` value and I make `onAddClick` a prop so that the Component that _uses_ `AddTodo` can specify what happens when `Add` button is clicked.

Again, the `TodoApp` Component acts as a "_Container_" Component for the `AddTodo` and it specifies that when the _add_ `<button>` is clicked we should dispatch an action with the `type: 'ADD_TODO'` the corresponding `text` and the `nextTodoId`.

The _last_ Component I want to extract is the _footer_ which contains all these three `FilterLink`. I'm creating a _new_ "_Functional_" Component called `footer` and I'm not sure which props it needs so I skip them and I _paste_ the markup. It seems that the `FilterLink` need the `visbilityFilter` so I add it as a prop. I would like the `Footer` and the `FilterLink` to be "_Presentational_" Components however the `FilterLink` currently includes a `store.dispatch` call. I'm replacing it with an `onClick` call and I pass the `filter` as the single parameter for the calling Component's convenience I add `onClick` to the props and now I need to specify it every time `FilterLink` is used so I add `onFilterClick` to the `Footer` and I pass `onClick={onFilterClick}` for every link in the `Footer` so what ever we pass to the `Footer` as `onFilterClick` prop is going to end up in the `FilterLink` as `onClick`.

```js
const Footer = ({ visibilityFilter, onFilterClick }) => (
  <p>
    Show:{" "}
    <FilterLink
      filter="SHOW_ALL"
      currentFilter={visibilityFilter}
      onClick={onFilterClick}
    >
      All
    </FilterLink>{" "}
    <FilterLink
      filter="SHOW_ACTIVE"
      currentFilter={visibilityFilter}
      onClick={onFilterClick}
    >
      Active
    </FilterLink>{" "}
    <FilterLink
      filter="SHOW_COMPLETED"
      currentFilter={visibilityFilter}
      onClick={onFilterClick}
    >
      Completed
    </FilterLink>
  </p>
);
```

Now I can use the `Footer` Component I just defined inside my `TodoApp` Component and I need to pass _two_ props one of them is the `visibilityFilter` so it can highlight the _active_ link and another prop is `onFilterClick` where I say that whenever a `Filter` is clicked I want to dispatch an `action` with the `type: 'SET_VISIBILITY_FILTER'` and the `filter` being clicked.

```js
// inside the TodoApp Component:

<Footer
  visibilityFilter={visibilityFilter}
  onFilterClick={(filter) =>
    store.dispatch({
      type: "SET_VISIBILITY_FILTER",
      filter,
    })
  }
/>

// see index.html for full TodoApp
```

_Finally_ I just noticed that the `TodoApp` Component doesn't actually _have_ to be a `Class`, I can turn it into a `function` and I prefer to do that when possible. Instead of `destructuring` the props inside the `render` method I am now doing it inside the arguments. I can remove now the `destructuring` and I can also remove the `render` method declaration the `visibleTodos` are only used in a _single_ place so I'm moving the `getVisibleTodos` call to the `TodoList` `todos` prop declaration.

Now the body of my function is just a _single_ expression so I can get rid of the `return` statement and _un-indent_ the code to make it look nicer.

> Full code snapshot for Video 21 @ 04:12: [`index.html`](https://github.com/nelsonic/learn-redux/blob/6577aa2eb0256fca4aba7bf1694d998e9f128100/index.html)

> \*This version of `TodoApp` is _so_ _**much cleaner**_... **IMO**.

This concludes the _initial_ refactoring of the Todo List Application into a single "_Container_" Component called `TodoApp` and many "_Presentational_" Components that are only concerned with how things _look_.

Lets re-cap the _data_ flow in this example: We have a _single_ "_Container_" Component called `TodoApp` and we re-render it any time the `store` changes it receives the `keys` of the _global_ `state` `Object` as the props so it receives the `todos` and the `visibilityFilter` values the _first_ Component it renders is called `AddTodo`. `AddTodo` is a "_Presentational_" Component that renders an `<input>` and a `<button>` and when the `<button>` is _clicked_ it passes the _current_ `<input>` value to the `onAddClick` function. `onAddClick` function is a prop for the `AddTodo` Component in this case it is _specified_ by the `TodoApp` which says that when the `<button>` is clicked it should dispatch an `action` containing the _current_ `text` in the `action` `Object`. Dispatching the `ADD_TODO` `action` will call our reducer update the `store` `state` with the new todos and re-render the `TodoApp` Component with the new todos. The todos themselves are rendered by the `TodoList` "_Presentational_" Component that receives two props: the _currently_ visible todos and the `onTodoClick` callback the `TodoList` Component receives an `Array` of todos and it _maps_ over them rendering individual `Todo` Components it uses the _spread_ operator to pass every property of the todo `Object` as a prop to `Todo` Component and it specifies the `onClick` handler as calling `onTodoClick` with the `id` of the particular todo the `Todo` Component is defined above and it is also a "_Presentational_" Component so it doesn't specify the behavior it says that when a `<li>` is _clicked_ it should call the `onClick` handler being a "_Presentational_" Component it specifies how the Component _looks_ in different circumstances and in this case it uses the `completed` prop to chose between two different styles of the todo item the `TodoList` is also a "_Presentational_" Component so it delegates actually _handling_ the _click_ to `onTodoClick` prop and it pass the `id` of the todo being _clicked_.

_Finally_ the `TodoApp` reacts to it by dispatching an `action` containing the `id` of the todo clicked and the `type: 'TOGGLE_TODO'` the `store` will call our reducer and update the `state` of the application re-rendering the `TodoApp` Component with the _new_ todos.

The `Footer` Component receives the _current_ `visibilityFilter` as a prop and also receives the `onFilterClick` callback that sets the _current_ `visibilityFilter`. The `Footer` Component renders _three_ `FilterLink` passing down their respective `filter` values the `onClick` handler and the _current_ `visibilityFilter` the `FilterLink` Component being a "_Presentational_" Component doesn't know _what_ to do when it is _clicked_. so it calls the `onClick` callback passing the `filter` which is different for each of those links as an _argument_ the `Footer` delegates handling the _click_ of the `FilterLink` to its own prop called `onFilterClick`.

_Finally_ the `TodoApp` Component being the "_Container_" Component in our application specifies the _behavior_ which in this case means that when the `FilterLink` is _clicked_ it should dispatch and `action` with the `action` `type: 'SET_VISIBILITY_FILTER` and the _new_ `filter`.

Separation of the "_Presentational_" Components is _not required_ in Redux. But I _recommend_ this pattern because it de-couples your rendering from Redux. So if you later chose to move your project to another framework such as Relay you will not have to _change_ all your components because you can keep all your "_Presentational_" Component exactly the same.

This approach also has _downsides_ such as that you have to thread a lot of props through the Components to get them to the "_leaf_" Components including the callbacks this problem can be _easily_ solved by introducing many intermediate "_Container_" Components as we will see in the next lesson.

> Code at the _end_ of Video 21: [`index.html`](https://github.com/nelsonic/learn-redux/blob/9a791dbc032e0c945a4c82a0c8b9fd8bd027a2be/index.html)

\

**22. Extracting Container Components (FilterLink)**

> Video: https://egghead.io/lessons/javascript-redux-extracting-container-components-filterlink

In the previous lesson we separated the "_Presentational_" Components from the the main "_Container_" Component the `TodoApp` specifies the _behaviors_ such as what happens when the **Add** `<button>` is clicked how the todos are selected what happens when a _single_ `Todo` has been clicked and what happens when a `Footer` Link is clicked. And the components such as `AddTodo`, the `TodoList`, the `Todo` itself the `Footer` and the `FilterLink` they don't dispatch actions they call their callbacks \[passed] in the props so they are _only_ responsible for the _looks_ but not for the behavior. The downside of this approach is that I have to pass a lot of props down the "tree" even when the _intermediate_ Components don't really _use_ them for example: the `FilterLink` needs to know the `currentFilter` so that it can chose a different appearance when it is _active_ however, in order to _receive_ the `currentFilter` it has to be passed down from the top, so this is why the `Footer` has to accept `visibilityFilter` as a prop so it can pass it down as a `currentFilter` to the `FilterLink`.

In a way this _breaks_ encapsulation because the "_Parent_" Components need to _know_ too much about what data the _Child_ Components need so to solve this we are going to _extract_ a few more "_Container_" Components just like we extracted the "_Presentational_" Components in the previous lesson.

The _first_ Component I'm going to re-factor is the `Footer` Component and _currently_ it accepts two props the `visibilityFilter` and the `onFilterClick` callback, but it doesn't actually _use_ either of them, it just passes them down to the `Filterlink` so this seems like a _good_ opportunity for _simplification_. We can only do this because we _know_ that the `Footer` Component doesn't _care_ about the values of these props they only exist to be passed down to the `Filterlink` that cares about them.

```js
const Footer = () => (
  <p>
    Show: <FilterLink filter="SHOW_ALL">All</FilterLink>{" "}
    <FilterLink filter="SHOW_ACTIVE">Active</FilterLink>{" "}
    <FilterLink filter="SHOW_COMPLETED">Completed</FilterLink>
  </p>
);
```

I'm removing the props definition and I'm removing these props from the `FilterLink` usage and it might start to seem a lot like the code _before_ separating the "_Presentational_" Components however what I want to do here is a little bit different.

The `FilterLink` does not _currently_ specify the behavior for clicking on the link it also needs the `currentFilter` to tell whether it should be rendered as _active_ therefore its a bit "_dishonest_" to say that `FilterLink` is a "_Presentational_" Component because it is inseparable from its _behavior_ the only _reasonable_ reaction to clicking on it is setting the `visibilityFilter` by dispatching an `action` this is why I am changing it to a _different_ "_Presentational_" Component I'm going to call `Link` and I will create another `FilterLink` Component as a Container that uses it for rendering.

```js
const Link = ({ active, children, onClick }) => {
  if (active) {
    return <span>{children}</span>;
  }

  return (
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
    >
      {children}
    </a>
  );
};
```

The `Link` Component doesn't know _anything_ about the `Filter` it only accepts the `active` prop and calls its `onClick` handler it is _only_ concerned with rendering however I am _also_ creating another Component called `FilterLink` and its going to be a `Class` this time. It's going to `render` the `Link` with the _current_ data from the `store`. It's going to read the props, the Component props and it's going to read the `state` but I don't mean the _React_ `state` I mean the Redux `store` state it gets by calling `store.getState()`. As a "_Container_" Component the `FilterLink` doesn't have its _own_ markup and it delegates rendering to the `Link` "_Presentational_" Component. In this case it _calculates_ its `active` prop by comparing its _own_ `filter` prop with the `visibilityFilter` in the Redux `store` `state`. The `filter` prop is the one that is passed to the `FilterLink` from the `Footer` and the `visibilityFilter` corresponds to the _currently_ chosen `visibilityFilter` that is held in the Redux `store` `state`. and if they _match_ we want the `Link` to appear _active_ (_un-clickable_). The "_Container_" Component also needs to specify the _behavior_ so in this case the `FilterLink` specifies that when this particular link is _clicked_ we should dispatch the `action` with the `type: 'SET_VISIBILITY_FILTER'` and the `filter` value that we take from the props the `FilterLink` may accept "_Children_" which are used as the _contents_ of the `Link` so we are going to pass the _children_ down to the `Link` Component which is going to `render` them inside the `<a>` tag.

```js
class FilterLink extends Component {
  render() {
    const props = this.props;
    const state = store.getState();

    return (
      <Link
        active={props.filter === state.visibilityFilter}
        onClick={() =>
          store.dispatch({
            type: "SET_VISIBILITY_FILTER",
            filter: props.filter,
          })
        }
      >
        {props.children}
      </Link>
    );
  }
}
```

There is a _small problem_ with this implementation of `FilterLink` inside the `render` method it reads the _current_ `state` of the Redux `store` however it is not _subscribed_ to this `store`. So if the _Parent_ Component does not update when the `store` is updated its going to render the "_stale_" value.

Currently we re-render the _whole_ application when the `state` changes however this is _not_ very efficient so in future we will instead move the _subscription_ to the `store` to the lifecycle methods of the "_Container_" Components. React provides a _special_ `forceUpdate` method on the Component instances to _force_ their re-rendering and we're going to use it together with `store.subscribe` method so that any time the `store` `state` changes we `forceUpdate` the "_Container_" Components. We perform the subscription inside the `componentDidMount` lifecycle method so its important to to _unsubscribe_ inside the `componentWillUnmount` method.

```js
class FilterLink extends Component {
  componentDidMount() {
    this.unsubscribe = store.subscribe(() => this.forceUpdate());
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const props = this.props;
    const state = store.getState();

    return (
      <Link
        active={props.filter === state.visibilityFilter}
        onClick={() =>
          store.dispatch({
            type: "SET_VISIBILITY_FILTER",
            filter: props.filter,
          })
        }
      >
        {props.children}
      </Link>
    );
  }
}
```

Note that we don't actually have the `unsubscribe` method, but this is the returned value of the `store.subscribe` method so we can keep it and then _call_ it in `componentWillUnmount`.

Let's re-cap this part: the `FilterLink` Component subscribes to the `store` calling `forceUpdate` any time the `store` changes so it can `render` the _current_ `state` of the `store`. it saves the _reference_ to the `unsubscribe` function returned by `store.subscribe` and it _invokes_ it when the Component is about to _Unmount_ to clean up the subscription.

Let's re-cap the relationship between the `FilterLink` "_Container_" Component and the `Link` "_Presentational_" Component: The `Link` Component only specifies the _appearance_ of a link when it is _active_ or _inactive_ but it doesn't know about the behavior. The `FilterLink` Component is a _Container_ so it provides the _data_ and the _behavior_ for the "_Presentational_" Component. When it mounts it subscribes to the `store` so it _independently_ re-renders when the `store` `state` changes because it needs to use the `store` _current_ `state` inside its `render` method. Instead of specifying the DOM tree it delegates all the rendering to the `Link` "_Presentational_" Component and its only job is to calculate the props base on its _own_ props and the _current_ `state` of the Redux `store` and it also specifies the callbacks that are going to dispatch the `actions` on the `store`.

After the `action` is dispatched the `store` will remember the _new_ `state` returned by the reducer and will call _every_ subscriber to the `store` and this case every `FilterLink` Component instance is subscribed to the `store` so they will all have their `forceUpdate` methods called on them and they will re-render according to the _current_ `store` `state`.

The `FilterLink` is a "_Container_" Component so it is completely self-sufficient and can be used inside the "_Presentational_" Components such as `Footer` without passing additional props to get the data from the `store` and specify the behavior this lets us keep the `Footer` Component simple and de-coupled from the behavior and data that its child Components need.

> Code at the _end_ of Video 22: [`index.html`](https://github.com/nelsonic/learn-redux/blob/4572cb33f575567687b2683dfe20b22cfda8b16e/index.html)

\

**23. Extracting Container Components (VisibleTodoList, AddTodo)**

> Video: https://egghead.io/lessons/javascript-redux-extracting-container-components-visibletodolist-addtodo

In the previous lesson I separated the `Link` "_Presentational_" Component from the `FilterLink` "_Container_" Component that is subscribed to the Redux `store` and that provides the _data_ and the _behavior_ for the `Link` Component it renders. While it makes the data flow a little bit _less_ explicit it makes it easier to use `FilterLink` in _any_ Component without worrying about passing additional data to the `FilterLink` or to the Component that _contains_ it.

In _this_ lesson we will continue extracting the "_Container_" Components from the top-level "_Container_" Component and the _first_ candidate is the `TodoList` Component.

I actually want to _keep_ the `TodoList` a "_Presentational_" Component however I want to _encapsulate_ within the _currently_ visible Todos into a _separate_ "_Container_" Component that connects the `TodoList` to the Redux `store` so I'm going to call this Component the `VisibleTodoList`. Just like when declaring the `FilterLink` Component in the _previous_ lesson, I calculate the data for the _current_ Component by using the _current_ `state` which is the `state` from the Redux `store` and I'm using the `getVisibleTodos` function to calculate the _currently_ visible todos based on all the todos from the Redux `store` and the _current_ `visibilityFilter` from the Redux `store` `state` and I'm specifying the _behavior_ as well I'm saying that when the todo is _clicked_ we should dispatch an `action` with `type: 'TOGGLE_TODO'` and the `id` of the todo being clicked. All "_Container_" Components are similar their job is to _connect_ a "_Presentational_" Component to the Redux `store` and specify the data and the behavior that it needs.

```js
class VisibleTodoList extends Component {
  render() {
    const props = this.props;
    const state = store.getState();
    return (
      <TodoList
        todos={
          getVisibleTodos(
            state.todos,
            state.visibilityFilter
          )
        }
        onTodoClick={id =>
          store.dispatch({
            type: 'TOGGLE_TODO',
            id
          })
        }
    )
  }
}
```

I'm scrolling up to the `FilterLink` _Container_ Component I wrote in the _previous_ lesson to _cut-paste_ the `store` _subscription_ logic:

```js
componentDidMount() {
  this.unsubscribe = store.subscribe(() =>
    this.forceUpdate()
  );
}

componentWillUnmount() {
  this.unsubscribe();
}
```

Just like the `FilterLink` the `VisibleTodoList` is going to _subscribe_ to the `store` and _force_ an update any time the `store` `state` changes because it uses the `state` in its `render` method. Now that the `VisibleTodoList` is connected to the Redux `store` we can use it _instead_ of the `TodoList` and we no longer have to pass all the props from the top.

_Finally_ in the _previous_ lesson I made `AddTodo` a _Presentational_ Component but I'm going to _**back-track**_ on this now. I will _cut-paste_ the `dispatch` call back inline into the `onClick` handler inside the Component because there isn't really a lot of presentation or _behavior_ here and its _easier_ to keep them together until we figure out how to split the _presentation_. For example if in the _future_ we're going to have something like a `<form>` Component we may split it but for now we'll keep them together.

I'm scrolling down to my `TodoApp` Component and I'm removing the `onAddClick` prop and I just noticed that _none_ of the _Containers_ actually need props from the `state` so I can _remove_ the props of the `TodoApp` Component and I can _remove_ the `render` function that renders the `TodoApp` Component with the _current_ `state` of the `store` because I can just call it _once_ remove all the props that are related to the `state` and just `render` it _as is_ because the _Container_ Components that I render are going to `subscribe` to the `store` _themselves_ and are going to _update_ themselves when the `store` `state` changes.

```js
const TodoApp = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
);

ReactDOM.render(<TodoApp />, document.getElementById("root"));
```

Lets re-cap the data flow after separating the _Presentational_ and the _Container_ Components.

There is just _one_ `ReactDOM.render` call at the very end and we don't `render` again when the `store` `state` changes because the _Container_ Components take care of that! The _first_ Component I'm looking at is called `AddTodo` and frankly I can't classify it either as a _Presentational_ Component _or_ as a _Container_ Component because it doesn't fit either category. The `<input>` and the `<button>` are the _Presentational_ part but dispatching an `action` `onClick` is the _behavior_ which is _usually_ specified by the _Container_ however in _this_ case I'd rather keep them together because there isn't any `state`, the **UI** is _very simple_ and its hard to imagine any _other_ behavior other than dispatching the `ADD_TODO` `action`.

The _second_ Component I render inside the `TodoApp` is `VisibleTodoList`, and this time it is a "proper" _Container_ Component that subscribes to the `store` and re-renders the `TodoList` any time the `store` `state` changes and it _calculates_ the `visibleTodos` from the _current_ Redux `store` `state`, the todos and `visibilityFilter` fields and it passes them as the `todos` (prop) and when the `todos` are _clicked_ its going to `dispatch` an `action` with the `type:'TOGGLE_TODO'` and the `id` of the _respective_ `todo` the _actual_ rendering here is performed by the `TodoList` Component that just renders the Todos passed through as prop and binds their clicks to the `onTodoClick` prop.

_Finally_ the _last_ Component the `TodoApp` renders is the `Footer` and the `Footer` is just a _Presentational_ Component rendering **3** different `FilterLink`s. The `FilterLink` is a _Container_ Component so it _subscribes_ to the `store` and it renders the _Presentational_ Component called `Link` calculating weather it should be _active_ based on its props the _current_ Redux `store` `state` and it specifies the _behavior_ (_what happens when it's clicked_). _Finally_ the `Link` Component is just a _Presentational_ Component that renders an `<a>` tag.

Separating the _Container_ and the _Presentational_ Components is often a good idea, but you shouldn't take it as a "[_dogma_](https://en.wikipedia.org/wiki/Dogma)"; Only do this when it _truly_ reduces the _complexity_ of your codebase. In general I suggest _first_ trying to extract the _Presentational_ Components, and if there is _too much_ boilerplate passing the props to them then you can create the _Containers_ around them that load the data and specify the _behavior_.

> Code at the _end_ of **Video 23**: [`index.html`](https://github.com/nelsonic/learn-redux/blob/0966f4c5177bcd6430e2b7a963517cf88658623c/index.html)

\

**24. Passing the Store Down Explicitly via Props**

> Video: https://egghead.io/lessons/javascript-redux-passing-the-store-down-explicitly-via-props

In the _previous_ lessons we used the `store` top level variable to refer to the Redux `store`. The Components that _access_ the `store` such as the _Container_ Components read the `state` from it, `subscribe` to the `store` and dispatch _actions_ on the `store` using the `store` top level variable. This approach works fine for a "_JS Bin_" example where everything is in a _single_ file however it doesn't _scale_ to "_real_" applications for _several_ reasons. _First_ of all it makes your _Container_ Components harder to _test_ because they reference a _specific_ `store` but you might want to supply a _different_ "_Mock_" `store` in the _Tests_. _Secondly_ it makes it very hard to implement "_Universal Applications_" that are rendered on the _server_ because on the _server_ you want to supply a different `store` instance for every `request` because different requests have different _data_.

I'm going to _start_ by moving the `store` creation code to the _bottom_ of the file where I `render` my React Components. I'm going to change it _slightly_ and _instead_ of creating the `store` top level variable I will pass the `store` I create as a prop to the top level Component so it is completely "_injectable_" to it. Every _Container_ Component needs a reference to the `store` so _unfortunately_ we have to pass it down to every Component as a prop. Its _less effort_ than passing different _data_ to every Component but its still _inconvenient_ so don't worry, we'll find a _better_ solution later. But for _now_ we need to see the problem.

```js
const TodoApp = ({ store }) => (
  <div>
    <AddTodo store={store} />
    <VisibleTodoList store={store} />
    <Footer store={store} />
  </div>
);

const { createStore } = Redux;

ReactDOM.render(
  <TodoApp store={createStore(todoApp)} />,
  document.getElementById("root")
);
```

The _problem_ is that the _Container_ Components need to have the `store` instance to get the `state` from it, dispatch _actions_ and get the changes. So this time I'm changing the _Container_ Component to take the `store` from the `props` using the **ES6** _**Destructuring Syntax**_ which just means `const { store } = props.store;` ...

> **Note**: destructuring **Objects** is not yet available in _any_ browser, so I'm using "traditional" variable assignment: `const store = props.store;` (_almost identical_!)

And I'm doing the _same_ here, just taking the `store` from the `props` so I can call `dispatch` on it.

I need to make similar changes to other _Container_ Components and in this case I have this `AddTodo` Component, which is not _exactly_ a _Container_ Component but it still needs the `store` to `dispatch` the `ADD_TODO` `action` so I add it as a `prop`. And I'm also going to add the `store` to the `Footer` Component because _unfortunately_ `FilterLink` needs it and the `Footer` Component renders `FilterLink`. So this is not _convenient_ but as I said, we'll figure out a way to avoid this _later_ but for _now_ we need to pass the `store` down so that _every_ _Container_ Component such as `FilterLink` can use it to `subscribe` to the changes, to _read_ the `state` and to `dispatch` actions without relying on a top-level variable being available. I'm changing the `render` method to read the `store` from the `props` and now all _Containers_ read the `store` instance from the `props` and don't rely on a top-level variable that I removed.

Note that this change did not change the behavior or _data_ flow of this application. The _Container_ Components `subscribe` to the `store` just like _before_ and update their `state` in response to its changes, however what changed is how they _access_ the `store`. Previously they would _access_ a top-level variable but this approach does not _scale_ to "_real world_" applications and this is why right now I'm passing down the `store` as a `prop` so the _Container_ Components can `subscribe` to it.

In the _future_ lessons we will see how to pass the `store` down to the _Container_ Components _implicitly_ but without introducing the top level variable.

> Code at the _end_ of **Video 24**: [`index.html`](https://github.com/nelsonic/learn-redux/blob/c1379e656bd213573136611fc9307bb56918f38b/index.html)

\

**25. Passing the Store Down Implicitly via Context**

> Video: https://egghead.io/lessons/javascript-redux-passing-the-store-down-implicitly-via-context

In the previous lesson we got rid of the top-level `store` variable and instead started passing the `store` as a `prop` to the `TodoApp` Component so _every_ Component below received the `store` as a `prop`. And we even have to do this for _Presentational_ Components because sometimes they contain _Container_ Components that need the `store` to `subscribe` to the changes. We have to write a lot of "_boilerplate_" code to pass the `store` down as a `prop` but there is _another_ way using the "_advanced_" React feature called "_**Context**_".

I'm creating a _new_ Component called `Provider` and from its `render` method it just returns what ever its _child_ is. So we can _wrap_ any Component in a `Provider` and it's going to `render` that Component.

```js
class Provider extends Component {
  render() {
    return this.props.children;
  }
}
```

I'm changing the `render` call to render a `TodoApp` inside the `Provider` and I'm moving the `store` `prop` from the `TodoApp` to the `Provider` Component.

```js
ReactDOM.render(
  <Provider store={createStore(todoApp)}>
  <TodoApp />,
  </Provider>
  document.getElementById('root')
);
```

The `Provider` Component will use the React _advanced_ _**Context**_ Feature to make the `store` available to _any_ Component inside it including "_Grand Children_". To do this it has to define a special method called `getChildContext` that will be _called_ by React. We are using `this.props.store` which corresponds to `store` passed to the `Provider` as a `prop` just _once_. _this_ `store` will be part of the _Context_ that the `Provider` specifies for any "_Children_" and "_Grand Children_" so the `TodoApp` is going to receive this _Context_ and any Component inside `TodoApp` is going to receive this _Context_ `Object` with the `store` inside it. However there is an _important condition_ for the _Context_ to work, and this _condition_ is that you have to specify `childContextTypes` on the Component that defines `getChildContext` these are just `React.PropTypes` definitions but _unlike_ `PropTypes`, the `ChildContext` Types are _**essential**_ for the _Context_ to be turned on. If you don't specify them, no _Child_ Components will receive this _Context_.

The _Container_ Components _currently_ access `store` by `props` but we are going to change this to read the `store` from React _Context_ and to do that we just refer to `this.context` similarly in the `render` method I'm also going to _read_ the `store` from the _Context_ instead of the `props`:

```js
const store = this.context.store; // no ES6 required.
```

_Finally_ the _Context_ is "_Opt In_" for the _receiving_ Components _too_ so you _have_ to _specify_ a special field called `contextTypes` which are _similar_ to `childContextTypes` but in this case we are specifying which Context we want to _receive_ and not pass down.

```js
VisibleTodoList.contextTypes = {
  store: React.PropTypes.object,
};
```

If you _forget_ to declare the `contextTypes` the Component will _not_ receive the relevant Context so it is _**essential**_ to remember to declare them.

What about the _functional_ Components that don't have [`this`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this) (_JavaScript context_). It turns out that they _also_ receive the Context but as a _second_ argument _after_ the `props` so I'm destructuring the _second argument_ and getting the `store` from there and the _second argument_ is the Context. Just like with the `class` Components I still have to add a property called `contextTypes` that specifies which _Context_ I want to receive and in this case I want to receive the `store` from the `Provider`. If I _forget_ to declare the `contextTypes` my _functional_ Component will not receive the relevant _Context_ as the _second argument_.

```js
AddTodo.contextTypes = {
  store: React.PropTypes.object,
};
```

So, its _important_ to _remember_ to declare them any time you _use_ the _Context_. _Finally_ I'm replacing the `props` with the `context` when getting the `store` for the `FilterLink` and I'm adding the `contextTypes` declaration to the `FilterLink` so it receives the relevant _Context_ from the `Provider`. Now that the `FilterLink` receives the `store` by `context` I no longer need to pass it as a `prop` so I'm removing its usage (_from the `Footer` Component_) and I'm also removing the `store` prop from the `Footer` because it doesn't need to pass it down anymore.

I'm also removing the `store` prop from the `TodoApp` Component because I no longer need to pass it down to the _Containers_. Now instead of _explicitly_ passing the `store` down by `props`, we pass it _implicitly_ by `context`.

Lets recap how we use the `context` to pass the `store` down: We _start_ by _rendering_ the `TodoApp` inside the `Provider` Component we defined above. The `Provider` Component just _renders_ what ever you pass to it so in this case it renders its "_Children_" or \[_more specifically_] the `TodoApp` component however it also provides the `context` to _any_ Components inside it, including "_Grand Children_" the `context` contains just _one_ key called the `store` and it corresponds to the `store` we passed as a `prop` to the `Provider` Component. We pass the `store` to the `Provider` Component in our `render` call and make it available to "_Child Components_" by defining the `getChildContext` with the `store` key pointing to that `prop`. It is _**essential**_ that the `getChildContext` is matched by `childContextTypes` where we specify that the `store` key has `PropTypes` of `object`.

> Note: that the `childContextTypes` definition is _**absolutely required**_ if you want to pass the `context` down the tree.

The benefit is that we don't need to pass the `store` through the _intermediate_ components and instead we can declare the `contextTypes` on the _Container_ Components that need access to the `store` so that they can retrieve it from the `context` instead of retrieving it from the `props`. The `context` creates something like a "_worm hole_" between the `VisibleTodoList` Component that reads the `context` and the `Provider` that _provides_ the `context` and this "_worm hole_" is only _enabled_ because the `contextTypes` declared on the `VisibleTodoList` include the `store` that is defined in `childContextTypes` of the `Provider` Component.

The `AddTodo` is another Component that needs _access_ to the `store` so it also _opts-in_ to receiving it in the `context` by specifying the `contextTypes` this is why in _addition_ to `props`, it receives a _second argument_ which is the `context` I'm using the _destructuring_ syntax here so instead of:

```js
const AddTodo = (props, context) => {
const store = context.store; // need to manually assign the store from context
// rest of code ...
```

we get a simplified version:

```js
const AddTodo = (props, { store }) => {
// rest of code ...
```

The `context` works at _any_ depth so it is not necessary to put `contextTypes` on the `Footer` the `FilterLink` is the Component that _directly_ uses the `context` so this is the component that has to _specify_ the `contextTypes` so that it can use the `store` by reading it from the `context`.

Context is a _powerful feature_ but in a way it contradicts the React philosophy of the _**explicit data flow**_. The `context` essentially allows _**Global Variables**_ across the Component Tree but _**Global Variables**_ are _usually_ a _**Bad Idea**_ ... and unless you're using it for dependency injection like here where we need to make a _single_ `Object` available to all Components, then probably you _shouldn't_ use `context` ...

_Finally_ the Context API is _**NOT Stable**_ in React! It has changed before and it is likely to change again so try your best not to rely on it too much.

> Code at the _end_ of **Video 25**: [`index.html`](https://github.com/nelsonic/learn-redux/blob/45789c3333b17adee09c9f011292bfaa7269c40a/index.html)

\

**26. Passing the Store Down with \<Provider> from React Redux**

> Video: https://egghead.io/lessons/javascript-redux-passing-the-store-down-with-provider-from-react-redux

In the _previous_ lesson we implemented the `Provider` Component that uses the React "_Advanced_" Context Feature to make the `store` from the `props` available to _every_ Component in our App. So if we pass it to the `Provider` we can read it in _any_ other Component from the `context` which is _really_ convenient for the _Container_ Components. In fact this is _so_ convenient that you don't actually _need_ to write the `Provider` _yourself_ because it is included in a "_special library_" called _**React-Redux**_

```js
<script src="https://cdnjs.cloudflare.com/ajax/libs/react-redux/4.0.5/react-redux.js"></script>
```

And note that this is _not_ the same a Redux, this is a _different_ library these are _React bindings_ to the Redux Library.

You can import the `Provider` by _destructuring_ the `ReactRedux` _**Global**_ `Object` in JSBin:

```js
const { Provider } = ReactRedux;
```

_**or**_ if you use `Babel` and something like `npm` you can:

```js
import { Provider } from "react-redux";
```

with the braces because it is a _named_ `export` from the `react-redux` package. Or if you write **ES5** code, you can write:

```js
var Provider = require("react-redux").Provider;
```

Just like the `Provider` we wrote _before_, the `Provider` that comes with `ReactRedux` exposes the `store` you pass to it as a `prop` on the `context` so the Components can specify the `contextTypes` and then use `this.context.store` to `subscribe` to the `store` updates and `dispatch` _actions_.

> Code at the _end_ of **Video 26**: [`index.html`](https://github.com/nelsonic/learn-redux/blob/bbc303a0a689d0c99daa71c6b0a8ead5ccc5484e/index.html)

\

**27. Generating Containers with `connect()` from React Redux (VisibleTodoList)**

> Video: https://egghead.io/lessons/javascript-redux-generating-containers-with-connect-from-react-redux-visibletodolist

In the previous lesson I added `ReactRedux` bindings to the project and I used the `Provider` Component from `ReactRedux` to pass the `store` down the `context` so that the _Container_ Components can _read_ the `store` from the `context` and `subscribe` to its changes. All _Container_ Components are _very similar_, they need to _re-render_ when the `store` `state` changes they need to `unsubscribe` from the `store` when they `Unmount`. and they take the _current_ `state` of the Redux `store` and use it to `render` the _Presentational_ Components with some `props` that they _calculate_ from the `state` of the `store` and they _also_ need to _specify_ the `contextTypes` to get the `store` from the `context`.

I'm going to write this Component in a _different_ way now: and I'll declare a function called `mapStateToProps` which takes the Redux `store` `state` and returns the `props` that I need to pass to the _Presentational_ `TodoList` Component to `render` it with the _current_ `state`. In this case there is just a _single_ `prop` called `todos` so I _cut-paste_ this expression:

```js
const mapStateToProps = (state) => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter),
  };
};
```

It returns the `props` that _depend_ on the _current_ `state` of the Redux `store` so in _this_ case this is just the `todos` prop.

I'm creating another function that I call `mapDispatchToProps` and it accepts the `dispatch` method from the `store` as the _only_ argument and returns the `props` that should be passed to the `TodoList` Component and that _depend_ on the `dispatch` method. The _only_ `prop` that uses `store.dispatch` is called `onTodoClick` so I'm _copy-pasting_ \[_cut-and-pasting_] `onTodoClick` into `mapDispatchToProps`. Note that I don't have the reference to the `store` here _anymore_ so instead I'm changing it to use _just_ the `dispatch` which is provided as an _argument_ to `mapDispatchToProps` "I will add some _punctuation_ to make it _appear_ easier on my eyes" \[_parenthesis around the `id` argument & curly-braces around the function block_] `onTodoClick` is a function that accepts the `id` of the `todo` and dispatches an `action`.

```js
const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch({
        type: "TOGGLE_TODO",
        id,
      });
    },
  };
};
```

Now I've got two different functions: The _first_ one _maps_ the Redux `store` `state` to the `props` of the `TodoList` Component that are _related_ to the _data_ from the Redux `store` the _second_ function maps the `dispatch` method of the `store` to the callback `props` of the `TodoList` Component it specifies the _behavior_ that is which callback `prop` dispatches which `action`.

Together these two functions describe the a _Container_ Component _so_ well that instead of _writing_ it I can _generate_ it by using the `connect` function provided by the `ReactRedux` Library:

```js
const { connect } = ReactRedux;
```

If you use `npm` and `Babel` you will likely _import_ it like _this_ instead:

```js
import { connect } from "react-redux";
```

"_and don't forget the curly braces_..." \[_destructuring assignment of the `connect` method from the `react-redux` package_]

Now, instead of declaring a `class` I'm going to declare a `variable` and I will call the `connect` method to _obtain_ it. I'm passing `mapStateToProps` as the _first_ argument, and `mapDispatchToProps` as the _second_ argument. And notice that this is a ["_curried_"](https://github.com/iteles/Javascript-the-Good-Parts-notes#curry) function so I have to call it once _again_ and this time I pass the _Presentational_ Component that I want it to _wrap_ and pass the `props` to.

```js
const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList);
```

The `connect` function will _generate_ the Component will _generate_ the Component just like the one I _previously_ wrote by _hand_ so I don't want you to write the _code_ to `subscribe` to the `store` or to _specify_ the `contextTypes` because the `connect` function takes care of that.

> At 03:27 Dan _deletes_ the "old" `VisibleTodoList` Component and its `contextTypes` definition which are _both_ now being _generated_ by the `connect` call.

Now lets re-cap how to _generate_ the _Container_ Component using the `connect` function:

_First_ I write a `function` called `mapStateToProps` that takes the `state` of the Redux `store` and returns the `props` for the _Presentational_ Component calculated from it. These `props` will be _updated_ any time the `state` changes _Next_ I write a `function` that I call `mapDispatchToProps` it takes the `store.dispatch` method as it's _first_ argument and it returns the `props` that _use_ the `dispatch` method to `dispatch` _actions_, so it _returns_ the callback `props` needed for the _Presentational_ Component.

To create a _Container_ Component from them, I _import_ `connect` from the `ReactRedux` library and I _call_ it passing `mapStateToProps` as the _first_ argument and `mapDispatchToProps` as the _second_ argument. _Finally_, I close the function call parens, and I _open_ another \[_pair of_] parentheses because this is a _curried_ function and it needs to be _called_ _**twice**_ and the last argument is the _Presentational_ Component that I want to _connect_ to the Redux `store`. The _result_ of the `connect` call is the _Container_ Component that is going to `render` my _Presentational_ Component it will calculate the `props` to pass to the _Presentational_ Component by merging the objects returned from `mapStateToProps`, `mapDispatchToProps` and its _own_ `props`.

> Complete Code at the _end_ of **Video 27**: [`index.html`](https://github.com/nelsonic/learn-redux/blob/182bde8b227fd2746838f57e89bc97f049ef5370/index.html)

\

**28. Generating Containers with connect() from React Redux (AddTodo)**

> Video: https://egghead.io/lessons/javascript-redux-generating-containers-with-connect-from-react-redux-addtodo

In the _previous_ lesson we used the `connect` function from `ReactRedux` bindings library to _generate_ the _Container_ Component that _renders_ a _Presentational_ Component. I _specify_ how to calculate the `props` to "_inject_" from the _current_ Redux `store` `state` and the callback `props` to _inject_ from the `dispatch` function on the Redux `store`.

_Normally_ I would keep these functions called `mapStateToProps` and `mapDispatchToProps`, but I'm working in a _single_ file right now and I need to write these functions for a few _other_ _Container_ Components so I'm going to _re-name_ them to something more _specific_:

- `mapStateToProps` becomes `mapStateToTodoListProps`
- `mapDispatchToProps` becomes `mapDispatchToTodoListProps`

Which you don't _have_ to do in your code, if you keep each Component in its _own_ file (which is considered to be a best practise).

I will also remove the line-breaks here to make it _clear_ that these functions are only relevant for generating this particular _Container_ Component.

Final Code (_after re-naming_):

```js
const mapStateToTodoListProps = (state) => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter),
  };
};
const mapDispatchToTodoListProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch({
        type: "TOGGLE_TODO",
        id,
      });
    },
  };
};
const { connect } = ReactRedux;
const VisibleTodoList = connect(
  mapStateToTodoListProps,
  mapDispatchToProps
)(TodoList);
```

Now I'm _scrolling_ up to the `AddTodo` Component which is not clearly a _Container_ or a _Presentational_ Component. However it uses the `store`, it _reads_ the `store` from the `context` to `dispatch` an `action` when the `<button>` is _clicked_ and it _has_ to declare the `contextTypes` to be able to grab the `store` from the `context`. \[React] Context is a an _**unstable API**_ so it's best to _**avoid using**_ it _**in application code**_.

Instead of reading the `store` from the `context`, I will read the `dispatch` function from the `props`, because I only need the `dispatch` here. I don't _need_ the whole `store`, and I will create a _Container_ Component with `connect` that will _inject_ the `dispatch` function as a `prop`. I will _remove_ the `contextTypes` \[_from the `AddTodo` Component_] because the Component generated by `connect` function will take care of reading the `store` from the `context`.

Because I changed the `AddTodo` declaration from the `const` to the `let` binding, I can re-assign it now, so that the _consuming_ Component does not need to _specify_ the `dispatch` prop because it will be _injected_ by the Component _generated_ by the `connect` call. The _first_ argument to the `connect` function is `mapStateToProps`, but there aren't any `props` for `AddTodo` Component that _depend_ on the _current_ `state`, so I `return` an _empty_ `Object`. The _second_ argument to `connect` is `mapDispatchToProps`, but `AddTodo` Component doesn't _need_ any callback `props`. It just accepts the `dispatch` function itself, so I'm returning it as a `prop` with the _same name_. _Finally_ I'm calling the function for a _second_ time to specify the Component I want to _wrap_, in this case `AddTodo` itself:

`AddTodo` with the re-assignment as a call to `connect`:

```js
let AddTodo = ({ dispatch }) => {
  let input;

  return (
    <div>
      <input
        ref={(node) => {
          input = node;
        }}
      />
      <button
        onClick={() => {
          dispatch({
            type: "ADD_TODO",
            id: nextTodoId++,
            text: input.value,
          });
          input.value = "";
        }}
      >
        Add Todo
      </button>
    </div>
  );
};
AddTodo = connect(
  (state) => {
    return {};
  },
  (dispatch) => {
    return { dispatch };
  }
)(AddTodo);
```

The _generated_ _Container_ Component will not pass any `props` dependent on the `state`, but it will pass `dispatch` itself as a `function` so that the Component can read it from the `props` and use it without worrying about _context_ or specifying `contextTypes`. However it is _wasteful_ to even `subscribe` to the `store` if we don't calculate any `props` from its `state`, so I'm _replacing_ the `mapStateToProps` function with a `null`, which tells `connect` that there is _no need_ to `subscribe` to the `store`. Additionally its a pretty _common pattern_ to _inject just the `dispatch` function_, so this is why if you specify `null` or any "_falsy_" value in `connect` as the _second_ argument you're going to get `dispatch` injected as a `prop`.

So in fact I can just _**remove all arguments**_ here and the _default_ behavior will be to _not_ `subscribe` to the `store` and to _inject_ just the `dispatch` function as a `prop`.

```js
AddTodo = connect()(AddTodo);
```

03:44 - Let's re-cap what happens to the Components here: The `AddTodo` Component that I declare accepts `dispatch` as a `prop`, but it doesn't know how to _get_ the `store`. It just "_hopes_" that "_someone_" is going to _pass_ `dispatch` to it. The `connect` call without any arguments is going to _generate_ a _Container_ Component that does _not_ `subscribe` to the `store`. However that will pass `dispatch` to the Component that it _wraps_ and in this case it _wraps_ my `AddTodo` Component

The _second_ `connect` call returns the _generated_ _Container_ Component and I'm assigning it to `AddTodo`, so I'm re-assigning the `let` binding the second time, and when the further code references `AddTodo` it's going to reference the _Container_ Component that does not need the `dispatch` prop and that will pass the `dispatch` prop to my _inner_ `AddTodo` Component that I don't have a reference to anymore.

> If you did not fully understand _why_ Dan did this re-factoring, read the docs: https://redux.js.org/tutorials/fundamentals/part-5-ui-react

> Complete code for the _end_ of **Video 28**: [`index.html`](https://github.com/nelsonic/learn-redux/blob/c76e0f0efb7ac1f8883d0727bd244224ee9c6741/index.html)

\

**29. Generating Containers with connect() from React Redux (FooterLink)**

> Video: https://egghead.io/lessons/javascript-redux-generating-containers-with-connect-from-react-redux-footerlink

_Finally_ let's take a look at the `FilterLink` _Container_ Component that renders a `Link` with an `active` property and a _click_ handler. _First_ I will write the `mapStateToProps` function which I will call `mapStateToLinkProp` because I have everything in a _single_ file. And it's going to accept the `state` of the Redux `store` and `return` the `props` that should be passed to the `Link` and we only have a _single_ such `prop` called `active` that determines whether the link displays the _current_ `visiblityFilter`. When I _paste_ this _expression_ from the `render` method I see that it references the `filter` prop of the `FilterLink` Component. To tell whether a link is _active_ we need to compare this `prop` with with the `visibilityFilter` from the Redux `store` `state` it is fairly common to use the _Container_ `props` when calculating the _Child_ `props` so this is why `props` are passed as a _second_ argument to `mapStateToProps` \[_or in this example `mapStateToLinkProps`_] I will re-name it \[_the `mapStateToLinkProps` second argument_] to `ownProps` to make it clear that we are talking about the _Container_ Component's _own_ `props` and not the `props` that are _passed_ to the _Child_ which is the `return` value of `mapStateToLinkProps`

```js
const mapStateToLinkProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.visibilityFilter,
  };
};
```

The second function I'm writing here is `mapDispatchToProps` or to avoid name clashes in the JSBin \[_single file app_] `mapDispatchToLinkProps`. The only argument so far is the `dispatch` function and I'm going to need to look at the _Container_ Component I wrote by hand to see what `props` depend on the `dispatch` function. In this case this is just the `onClick` handler where I `dispatch` the `SET_VISIBILITY_FILTER` `action`. the only `prop` I'm passing down is called `onClick` and I declare it as an **ES6** _**Arrow Function**_ with no arguments and I _paste_ the `dispatch` call.

```js
const mapDispatchToLinkProps = (dispatch) => {
  return {
    onClick: () => {
      dispatch({
        type: "SET_VISIBILITY_FILTER",
        filter: props.filter,
      });
    },
  };
};
```

But it references the `props` _again_, so I need to add `ownProps` as an _argument_ the _second_ argument to `mapDispatchToLinkProps` function thus:

```js
const mapDispatchToLinkProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch({
        type: "SET_VISIBILITY_FILTER",
        filter: ownProps.filter,
      });
    },
  };
};
```

_Finally_ I will call the `connect` function from `ReactRedux` Library to generate the `FilterLink` _Container_ Component I pass the relevant `mapStateToProps` function as the _first_ argument \[_in our case `mapStateToLinkProps`_] the `mapDispatchToProps` as the _second_ argument \[_or `mapDispatchToLinkProps` in our case_] and I call the function _again_ with the `Link` Component which should be _rendered_:

```js
const FilterLink = connect(mapStateToLinkProps, mapDispatchToLinkProps)(Link);
```

Now I can _remove_ the "_old_" `FilterLink` implementation.

Let's re-cap the _data flow_ in this example: the `Footer` Component renders **3** `FilterLink` and each of them has a different `filter` prop that specifies which `filter` it corresponds to this `prop` will be available on the `ownProps` `Object` that _both_ `mapDispatchToProps` and `mapStateToProps` will receive as the _second_ argument. we pass these two functions to the `connect` call which will return a _Container_ Component called `FilterLink`. The `FilterLink` will take the `props` that we `return` from the `mapDispatchToProps` and `mapStateToProps` \[_or the "Link" versions of these in our case..._] and pass them as `props` the `Link` Component that it _wraps_ we can now use the `FilterLink` _Container_ Component and specify _just_ the `filter` but the _underlying_ `Link` Component will receive the _calculated_ `active` and `onClick` values.

> Complete Code at the _end_ of **Video 29**: [`index.html`](https://github.com/nelsonic/learn-redux/blob/f3c0a045b0694714e0ac7060cb1c77efae7d7baa/index.html)

\

**30. Extracting Action Creators**

> Video: https://egghead.io/lessons/javascript-redux-extracting-action-creators

So far we have covered the _Container_ Components the _Presentational_ Components, the Reducers and the `store`, but we have not covered the concept of `action` _Creators_ which you might see in the Redux _talks_ and _examples_.

Let's consider the following example: I `dispatch` the `ADD_TODO` `action` from inside the `<button>` `onClick` handler and this is "_fine_", however it references the `nextTodoId` variable which I declare along side the `AddTodo` Component _normally_ it would be _local_ however what if another component wants to `dispatch` the `ADD_TODO` `action` ? It would need to have access to the `nextTodoId` somehow and while I _could_ make this variable _GLOBAL_ it's _not_ a very good idea ... instead it would be _best_ if the Components dispatching the `ADD_TODO` `action` did not have to _worry_ about specifying the `id` because the only information they _really_ pass is the `text` of the `todo` being added I don't _want_ to generate the `id` inside the _reducer_ because that would make it _non-deterministic_ however I can extract this code generating the `action` `Object` into a function I will call `addTodo` I pass the `input.value` to `addTodo` and `addTodo` is just a function that takes the `text` of the `todo` and constructs an `action` `Object` representing `ADD_TODO` `action`. So it has the `type: 'ADD_TODO'`, it takes care of _generating_ the `id` and it includes the `text`.

```js
let nextTodoId = 0;
const addTodo = (text) => {
  return {
    type: "ADD_TODO",
    id: nextTodoId++,
    text, // implied value from function argument
  };
};
```

Although extracting such function is not required it is a very common pattern in Redux applications to keep them _maintainable_ so we call these functions `action` _Creators_ and we usually place them separately from Components or from _Reducers_.

I will now _extract_ other `action` _Creators_ from the Components and I see that I have a `SET_VISIBILITY_FILTER` in a `dispatch` here \[_in the `mapDispatchToLinkProps` method_] so I will change this to call the `setVisiblityFilter` `action` _Creator_ with the `ownProps.filter` as the argument and it's going to `return` the `action` that needs to be `dispatched` so I'm declaring the `setVisibilityFilter` function this is what I call an `action` _Creator_ because it takes the arguments _about_ the `action` and it returns the `action` `Object` with the `type: 'SET_VISIBILITY_FILTER'` and the `filter` itself.

```js
const setVisibilityFilter = (filter) => {
  return {
    type: "SET_VISIBILITY_FILTER",
    filter, // implied value from argument
  };
};
```

You might think that this kind of code is "_boiler plate_" and you would rather `dispatch` the `action` in-line inside the Component however don't _underestimate_ how `action` _Creators_ _document_ your software because they tell your _team_ what kinds of _actions_ the Components can `dispatch` and this kind of information can be _invaluable_ in _large_ applications.

I will now scroll down to the _last_ place where I call `dispatch` with an _in-line_ `action` `Object` \[_the `mapDispatchToTodoListProps` function_] and I will _extract_ that to add `toggleTodo` `action` _Creator_ to which I pass the `id` of the `todo` as the argument.

I'm now scrolling up to my `action` _Creators_ and I will add a new one that I call `toggleTodo` it accepts the `id` as the argument and it returns the `action` with the `type: 'TOGGLE_TODO'` and this `id`:

```js
const toggleTodo = (id) => {
  return {
    type: "TOGGLE_TODO",
    id, // inferred value from argument
  };
};
```

Lets take a moment to consider how _convenient_ it is to have all the `action` Creators in a single place so that I can use them from Components and Tests without worrying about the _actions_ internal structure.

Note that whether you use `action` Creators or _not_ the _data flow_ is _exactly_ the same because I just called the `action` Creator to get the `action` `Object` and then I call `dispatch` just like I did _before_ passing the `action`.
