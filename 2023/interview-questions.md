1.  Functional vs Class Components
>a functional component is just a plain JavaScript function that returns JSX. 
>A class component is a JavaScript class that extends React.Component which has a render method.
```js
import React from "react";
 
const FunctionalComponent = () => {
 return <h1>Hello, world</h1>;
};
```
 - a functional component is a function that returns JSX

> <script src="https://gist.github.com/bgoonz/db79f9b772562a702642741c8e9f657d.js"></script>
 - 





1.  What is "conditional" rendering?
Conditional rendering is the practice of using a conditional to evaluate what to render on a component to the user. for instance a webite with a login feature may evaluate whether the visitor has logged in and what to display based on the state of their login status. 

2.  Understand two most important hooks for functional components: useState and useEffect.

<iframe src="https://codesandbox.io/embed/modest-swanson-15v4i7?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="use-state-counter"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>





4.  What are the multiple uses of useEffect? When does the useEffect hook get triggered?
5.  What are the common ways to pass data between components?

6.  pass as props
7.  use React context
8.  use Redux

9.  What is the difference between using Context and Redux
10. What is the global "store" ?
11. How can a child component invoke a function (or change state) of the parent component?
12. What is "middleware"? How is it used?
13. How do you provide styling to your components> (class vs className)
14. What is the purpose of bable transcompiler?
15. When does a component re-render?
16. What is the difference between using a function variable and using state?
