# 💸 React Tips

* React CheatSheet
  * Creating a new React App
    * Using Create React App
      * Using a minimal template
      * Doing CRA from scratch with react-scripts
  * Bootstrapping the React app
  * JSX
    * JSX is really React.createElement
    * Use curly braces to evaluate a javascript _expression_
      * You can't use `if`, or `for` loops inside JSX, they are not _expressions_
    * Use map with JSX to render collections
      * Tip: to avoid many nested parens and curlies, use a variable
      * Tip: Always remember to include a key property when rendering a collection
      * _IMPORTANT_: Your component will likely render without any state the first time
        * Use an empty array as initial state when using map
        * Use a guard clause to avoid rendering
  * useState Hook
    * Defining a piece of state
    * the _set_ function only QUEUES an update
    * the _set_ function can _optionally_ take a callback function
  * useEffect Hook
    * Components must be PURE functions
    * Don't call the `set` function of useState inside a component
    * useEffect takes a callback as it's first argument, and a dependency array as it's second argument
    * The dependency array
    * Do use useEffect for side effects
    * When to not use useEffect
  * Event Handling in React
    * Events are added to JSX and passed a callback
    * Don't call the function in the onClick attribute
  * useContext Hook
    * Creating a context
      * Providing data from a component to the context
      * using the useContext hook
  * Forms
    * Make your forms controlled components
    * Use an onSubmit event on the form tag and remember to prevent default behavior
  * Using CSS with React
    * Doing a plain import
    * Using a CSS Module
  * Importing Images

***

### Creating a new React App

#### Using Create React App

```shell
npx create-react-app --use-npm <name of project>
```

**Using a minimal template**

This uses a [minimal template by iansu on github](https://github.com/iansu/cra-minimal-templates)

```shell
npx create-react-app --use-npm --template minimal <name of project>
```

**Doing CRA from scratch with react-scripts**

```shell
mkdir <name of project>
cd <name of project>
npm init -y
npm install -D react-scripts
npm install react react-dom
```

Then edit `package.json` and add the following lines:

```json
"scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
```

***

### Bootstrapping the React app

```jsx
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById("app")
);
```

***

### JSX

#### JSX is really React.createElement

```jsx
<div id="my-div">Hello World</div>
// React.createElement('div', { id: "my-div" }, "Hello World");
```

#### Use curly braces to evaluate a javascript _expression_

```jsx
const myId = 'my-div';
const content = 'Hello World'

<div id={myId}>{content}</div>
```

**You can't use `if`, or `for` loops inside JSX, they are not \_expressions**\_

```jsx
<div>{ if (true) "Hello World" }</div>
```

```jsx
<div>
    {
        for (const item of items) {
            ...
        }
    }
</div>
```

#### Use map with JSX to render collections

```jsx
<div id="items">
  {items.map((item) => (
    <Item key={item.id} item={item} />
  ))}
</div>
```

**Tip: to avoid many nested parens and curlies, use a variable**

```jsx
const itemComponents = items.map(item =>
    <Item key={item.id} item={item}>
);

<div>{itemComponents}</div>
```

**Tip: Always remember to include a key property when rendering a collection**

```jsx
// Remember the key should be a unique value
const itemComponents = items.map(item =>
    <Item key={item.id} item={item}>
);
```

_**IMPORTANT**_**: Your component will likely render without any state the first time**

This is the most common problem new React developers run into. When you are fetching remote data, your component will first render with no data. So write your code in your component _defensively_ to avoid this.

**Use an empty array as initial state when using map**

```jsx
const [items, setItem] = useState(); 
// Whoops, we have undefined state ^^^
// We really should use an empty array:
// useState([])

// This generates an error because we can't
// call map on an undefined value of items.
const itemComponents = items.map(item => {
    <Item key={item.id} item={item}/>
});
```

**Use a guard clause to avoid rendering**

Sometimes if you have no data, it's better to just render nothing, or a message to the user that the component is "loading".

```jsx
const MyComponent = () => {
    const [items, setItems] = useState([]);

    // This is a guard clause, it returns from our
    // component early if our items array is empty.
    if (items.length === 0) {
        return null;
        // or you might return a loading message
        // return <div>Loading...</div>
    }

    return (
        // Return our normal JSX here.
    )
}
```

***

### useState Hook

#### Defining a piece of state

useState returns an array with two elements, the state itself, and a function to update the state. It accepts the initial value for the state as an argument

```jsx
const [thing, setThing] = useState(initialState)
```

#### the _set_ function only QUEUES an update

If you try to access the state after you've changed it, it won't have changed yet. This is because the set function only queues up a change, it doesn't happen right away.

```jsx
const [count, setCount] = useState(0)

// ...later in the component
setCount(count + 1)
console.log(count) // this will still be 0.
// On the next render, count will be 1.
```

#### the _set_ function can _optionally_ take a callback function

Whatever we return from the callback will be the new state. It gets passed the previous state value as the first argument.

```jsx
const [count, setCount] = useState(0)

setCount((prevState) => {
  return count + 1
})
```

***

### useEffect Hook

#### Components must be PURE functions

They must return JSX or null and not interact with anything outside of the function.

```jsx
const MyComponent = () => {
  const [data, setData] = useState()
  // You can't do this! It's a side effect!
  fetch(url)
    .then((response) => response.json())
    .then((data) => setData(data))
}
```

#### Don't call the `set` function of useState inside a component

It should always be called in a useEffect or in an event handler.

```jsx
const MyComponent = () => {
  const [message, setMessage] = useState()

  setData("Hello World") // This is a side effect!
  // It will actually trigger an endless loop of rendering!
}
```

#### useEffect takes a callback as it's first argument, and a dependency array as it's second argument

```jsx
useEffect(() => {
  // side effect code goes here
}, []) // This is the dependency array
```

#### The dependency array

The dependency array decides WHEN the useEffect callback will run.

* `undefined` - The callback will run everytime
* `[]` - The callback will run only on the first render.
* `[somevariable]` - The callback will run on the first render and anytime `somevariable` changes.

#### Do use useEffect for side effects

Common side effects we should put in a useEffect Hook:

* Fetch Calls
* Reading or writing to localStorage
* Reading or writing Cookies
* Accessing a global variable (you should avoid this anyway)

#### When to not use useEffect

* When you are just doing rendering logic or calculating a value
* When you have an event listener like a click or submit

***

### Event Handling in React

#### Events are added to JSX and passed a callback

In DOM you might do this:

```js
button.addEventListener("click", (event) => {
  // Do something with the event.target
})
```

In React you add them using attributes on the JSX

```jsx
return (
  <button
    onClick={(event) => {
      // Do something with the event.target
    }}
  >
    Click Me!
  </button>
)
```

It's cleaner to define your event callback externally to the JSX

```jsx
const handleClick = (event) => {
  // Do something with the event.target
}

return <button onClick={handleClick}>Click Me!</button>
```

#### Don't call the function in the onClick attribute

```jsx
// This will run the handleClick right away, instead of waiting
// for the click to happen.
return <button onClick={handleClick()}>Click Me!</button>
```

***

### useContext Hook

The use context hook is used along with a context to pass data deeply into a React component tree.

![context\_diagram](https://beta.reactjs.org/images/docs/sketches/s\_providing-context.png)

#### Creating a context

```jsx
import { createContext } from 'react'

const myContext = createContext();

export default myContext;
```

**Providing data from a component to the context**

```jsx
import myContext from './myContext.js';

const AncestorComponent = () => {
  // Often we'll use useState or useReducer to store the actual state here
  const [message, setMessage] = useState('Hello World');

  // Then make an object to assign to the provider's value attribute
  const contextValue = {
    message,
    setMessage
  };

  // We are wrapping this around <App> but contexts could
  // live at any point in the tree.
  return (
    <myContext.Provider value={contextValue}>
      <App/> 
    </myContext.Provider>  
  )
}
```

**using the useContext hook**

This lets us access whatever we stored in the context's provider's value attribute

```jsx
import { useContext } from 'react';
import myContext from './myContext.js';

const SomeDescendantComponent = () => {
  const contextValue = useContext(myContext);

  const { message, setMessage } = contextValue;

  return (
    <p>{message}</p>
  );
}
```

***

### Forms

#### Make your forms controlled components

This means adding an onChange listener to each form control and storing state locally for each control.

```jsx
const [name, setName] = useState("")

return (
  <form>
    <input 
        name="name" 
        value={name} 
        onChange={(e) => setName(e.target.value)} />
    <button>Submit</button>
  </form>
)
```

#### Use an onSubmit event on the form tag and remember to prevent default behavior

```jsx
const handleSubmit = e => {
    e.preventDefault();
    // Do something with the data 
    // from the form
}

return (
    <form onSubmit={handleSubmit}>
    ...
    </form>
)
```

### Using CSS with React

#### Doing a plain import

This will just add the css file in a `<style>` tag in the `<head>` of your HTML.

```jsx
import "styles.css";
```

#### Using a CSS Module

`styles` will be an object full of css class names.

```css
.heading { 
  font-size: 12pt;
}
```

```jsx
import styles from 'styles.css';
```

You can then use then on your JSX markup as the className.

```jsx
<h1 className={styles.heading}>Heading 1</h1>
```

React will generate random CSS classnames guaranteed to not conflict with styles from other components.

### Importing Images

You can import any image file supported on the web: `jpg`, `png`, or `svg`. Then just use it on the `src` attribute of an image tag.

```jsx
import image from 'imageFile.jpg';

// Then in your JSX
<img src={image}/>
```
