# promises

#### What are Promises? <a href="#what-are-promises" id="what-are-promises"></a>

**Answer**

The `Promise` object represents the eventual completion (or failure) of an asynchronous operation, and its resulting value. An example can be the following snippet, which after 100ms prints out the result string to the standard output. Also, note the catch, which can be used for error handling. `Promise`s are chainable.

```
new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("result")
  }, 100)
})
  .then(console.log)
  .catch(console.error)
```

**Good to hear**

* Take a look into the other questions regarding `Promise`s!

**Additional links**

* [Master the JavaScript Interview: What is a Promise?](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e772618)
