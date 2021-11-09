# Coding Questions ★ Front-end Job Interview Questions

> A list of helpful front-end related questions you can use to interview potential candidates, test yourself or completely ignore.

Question: What is the value of `foo`?

    var foo = 10 + '20';

Question: What will be the output of the code below?

    console.log(0.1 + 0.2 == 0.3);

Question: How would you make this work?

    add(2, 5); add(2)(5); 

Question: What value is returned from the following statement?

    "i'm a lasagna hog".split("").reverse().join("");

Question: What is the value of `window.foo`?

    ( window.foo || ( window.foo = "bar" ) );

Question: What is the outcome of the two alerts below?

    var foo = "Hello";(function() {  var bar = " World";  alert(foo + bar);})();alert(foo + bar);

Question: What is the value of `foo.length`?

    var foo = [];foo.push(1);foo.push(2);

Question: What is the value of `foo.x`?

    var foo = {n: 1};var bar = foo;foo.x = foo = {n: 2};

Question: What does the following code print?

    console.log('one');setTimeout(function() {  console.log('two');}, 0);Promise.resolve().then(function() {  console.log('three');})console.log('four');

Question: What is the difference between these four promises?

    doSomething().then(function () {  return doSomethingElse();});doSomething().then(function () {  doSomethingElse();});doSomething().then(doSomethingElse());doSomething().then(doSomethingElse);

Question: What will the code below output to the console and why?

    (function(){  var a = b = 3;})();console.log("a defined? " + (typeof a !== 'undefined'));console.log("b defined? " + (typeof b !== 'undefined'));

Question: Consider the two functions below. Will they both return the same thing? Why or why not?

    function foo1(){  return {      bar: "hello"  };}function foo2(){  return  {      bar: "hello"  };}


[Source](http://localhost:9090/questions/coding-questions/)