# Tech Interview

- [Tech Interview](#tech-interview)
- [](#asymptotic-notation)<span id="asymptotic-notation"></span>Asymptotic Notation
  - [Definition:](#span-stylecolorred-definition)
  - [Complexities](#span-stylecolorred-complexities)
  - [Big-O notation](#span-stylecolorred-big-o-notation)
  - [Big-Ω (Big-Omega) notation](#span-stylecolorred-big-ω-big-omega-notation)
  - [Big-θ (Big-Theta) notation](#span-stylecolorred-big-θ-big-theta-notation)
  - [What you need to know](#span-stylecolorred-what-you-need-to-know)
- [](#data-structures)<span id="data-structures"></span>Data Structures
  - [](#span-stylecolorred--array) <span id="array"></span> Array
  - [Definition](#span-stylecolorred-definition-1)
  - [What you need to know](#span-stylecolorred-what-you-need-to-know-1)
  - [Time Complexity](#span-stylecolorred-time-complexity)
  - [](#span-stylecolorred--linked-list) <span id="linked-list"></span> Linked List
  - [Definition](#span-stylecolorred-definition-2)
  - [What you need to know](#span-stylecolorred-what-you-need-to-know-2)
  - [Time Complexity](#span-stylecolorred-time-complexity-1)
  - [](#span-stylecolorred--hash-table-or-hash-map) <span id="hash"></span> Hash Table or Hash Map
  - [Definition](#span-stylecolorred-definition-3)
  - [What you need to know](#span-stylecolorred-what-you-need-to-know-3)
  - [Time Complexity](#span-stylecolorred-time-complexity-2)
  - [](#span-stylecolorred--binary-tree) <span id="binary-tree"></span> Binary Tree
  - [Definition](#span-stylecolorred-definition-4)
  - [What you need to know](#span-stylecolorred-what-you-need-to-know-4)
  - [Time Complexity](#span-stylecolorred-time-complexity-3)
- [](#-algorithms)<span id="algorithms"></span> Algorithms
  - [](#-algorithm-basics)<span id="algorithm-basics"></span> Algorithm Basics
    - [Recursive Algorithms](#span-stylecolorred-recursive-algorithms)
    - [Definition](#span-stylecolorred-definition-5)
    - [What you need to know](#span-stylecolorred-what-you-need-to-know-5)
    - [Iterative Algorithms](#span-stylecolorred-iterative-algorithms)
    - [Definition](#span-stylecolorred-definition-6)
    - [What you need to know](#span-stylecolorred-what-you-need-to-know-6)
    - [Recursion Vs. Iteration](#span-stylecolorred-recursion-vs-iteration)
    - [Pseudo Code of Moving Through an Array](#span-stylecolorred-pseudo-code-of-moving-through-an-array)
    - [Greedy Algorithms](#span-stylecolorred-greedy-algorithms)
    - [Definition](#span-stylecolorred-definition-7)
    - [What you need to know](#span-stylecolorred-what-you-need-to-know-7)
    - [Pseudo Code of a Greedy Algorithm to Find Largest Difference of any Two Numbers in an Array.](#span-stylecolorred-pseudo-code-of-a-greedy-algorithm-to-find-largest-difference-of-any-two-numbers-in-an-array)
  - [](#search-algorithms)<span id="search-algorithms"></span>Search Algorithms
    - [](#span-stylecolorred-breadth-first-search) <span id="breadth-first-search"></span>Breadth First Search
    - [Definition](#span-stylecolorred-definition-8)
    - [What you need to know](#span-stylecolorred-what-you-need-to-know-8)
    - [Time Complexity](#span-stylecolorred-time-complexity-4)
    - [](#span-stylecolorred-depth-first-search) <span id="depth-first-search"></span>Depth First Search
    - [Definition](#span-stylecolorred-definition-9)
    - [What you need to know](#span-stylecolorred-what-you-need-to-know-9)
    - [Time Complexity](#span-stylecolorred-time-complexity-5)
    - [Breadth First Search Vs. Depth First Search](#span-stylecolorred-breadth-first-search-vs-depth-first-search)
    - [Nuances](#span-stylecolorred-nuances)
  - [](#sorting-algorithms)<span id="sorting-algorithms"></span>Sorting Algorithms
    - [](#span-stylecolorred-selection-sort) <span id="selection-sort"></span>Selection Sort
    - [Definition](#span-stylecolorred-definition-10)
    - [What you need to know](#span-stylecolorred-what-you-need-to-know-10)
    - [Time Complexity](#span-stylecolorred-time-complexity-6)
    - [Space Complexity](#span-stylecolorred-space-complexity)
    - [Visualization](#span-stylecolorred-visualization)
    - [](#span-stylecolorred-insertion-sort) <span id="insertion-sort"></span>Insertion Sort
    - [Definition](#span-stylecolorred-definition-11)
    - [What you need to know](#span-stylecolorred-what-you-need-to-know-11)
    - [Time Complexity](#span-stylecolorred-time-complexity-7)
    - [Space Complexity](#span-stylecolorred-space-complexity-1)
    - [Visualization](#span-stylecolorred-visualization-1)
    - [](#span-stylecolorred-merge-sort) <span id="merge-sort"></span>Merge Sort
    - [Definition](#span-stylecolorred-definition-12)
    - [What you need to know](#span-stylecolorred-what-you-need-to-know-12)
    - [Time Complexity](#span-stylecolorred-time-complexity-8)
    - [Space Complexity](#span-stylecolorred-space-complexity-2)
    - [Visualization](#span-stylecolorred-visualization-2)
    - [](#span-stylecolorred-quicksort) <span id="quick-sort"></span>Quicksort
    - [Definition](#span-stylecolorred-definition-13)
    - [What you need to know](#span-stylecolorred-what-you-need-to-know-13)
    - [Time Complexity](#span-stylecolorred-time-complexity-9)
    - [Space Complexity](#span-stylecolorred-space-complexity-3)
    - [Visualization](#span-stylecolorred-visualization-3)
    - [Merge Sort Vs. Quicksort](#span-stylecolorred-merge-sort-vs-quicksort)
  - [](#additional-resources)<span id="additional-resources"></span>Additional Resources
    - [What is ARIA and when should you use it?](#span-stylecolorred-what-is-aria-and-when-should-you-use-it)
    - [Answer](#span-stylecolorred-answer)
    - [Don’t forget:](#span-stylecolorred-dont-forget)
    - [Additional links](#span-stylecolorred-additional-links)
    - [What is the minimum recommended ratio of contrast between foreground text and background to comply with WCAG? Why does this matter?](#span-stylecolorred-what-is-the-minimum-recommended-ratio-of-contrast-between-foreground-text-and-background-to-comply-with-wcag-why-does-this-matter)
    - [Answer](#span-stylecolorred-answer-1)
    - [Don’t forget:](#span-stylecolorred-dont-forget-1)
    - [Additional links](#span-stylecolorred-additional-links-1)
    - [What are some of the tools available to test the accessibility of a website or web application?](#span-stylecolorred-what-are-some-of-the-tools-available-to-test-the-accessibility-of-a-website-or-web-application)
    - [Answer](#span-stylecolorred-answer-2)
    - [Don’t forget:](#span-stylecolorred-dont-forget-2)
    - [Additional links](#span-stylecolorred-additional-links-2)
    - [What is the Accessibility Tree?](#span-stylecolorred-what-is-the-accessibility-tree)
    - [Answer](#span-stylecolorred-answer-3)
    - [Don’t forget:](#span-stylecolorred-dont-forget-3)
    - [Additional links](#span-stylecolorred-additional-links-3)
    - [What is the purpose of the `alt` attribute on images?](#span-stylecolorred-what-is-the-purpose-of-the-alt-attribute-on-images)
    - [Answer](#span-stylecolorred-answer-4)
    - [Don’t forget:](#span-stylecolorred-dont-forget-4)
    - [Additional links](#span-stylecolorred-additional-links-4)
    - [What are `defer` and `async` attributes on a `<script>` tag?](#span-stylecolorred-what-are-defer-and-async-attributes-on-a-script-tag)
    - [Answer](#span-stylecolorred-answer-5)
    - [Don’t forget:](#span-stylecolorred-dont-forget-5)
    - [Additional links](#span-stylecolorred-additional-links-5)
    - [What is an `async` function?](#span-stylecolorred-what-is-an-async-function)
    - [Answer](#span-stylecolorred-answer-6)
    - [Don’t forget:](#span-stylecolorred-dont-forget-6)
    - [Additional links](#span-stylecolorred-additional-links-6)
    - [Create a function `batches` that returns the maximum number of whole batches that can be cooked from a recipe.](#span-stylecolorred-create-a-function-batches-that-returns-the-maximum-number-of-whole-batches-that-can-be-cooked-from-a-recipe)
    - [Answer](#span-stylecolorred-answer-7)
    - [Don’t forget:](#span-stylecolorred-dont-forget-7)
    - [Additional links](#span-stylecolorred-additional-links-7)
    - [What is CSS BEM?](#span-stylecolorred-what-is-css-bem)
    - [Answer](#span-stylecolorred-answer-8)
    - [Don’t forget:](#span-stylecolorred-dont-forget-8)
    - [Additional links](#span-stylecolorred-additional-links-8)
    - [What is Big O Notation?](#span-stylecolorred-what-is-big-o-notation)
    - [Answer](#span-stylecolorred-answer-9)
    - [O(1)](#span-stylecolorred-o1)
    - [O(N)](#span-stylecolorred-on)
    - [O(\[1, N\])](#span-stylecolorred-o1-n)
    - [O(NlogN)](#span-stylecolorred-onlogn)
    - [O(N^2)](#span-stylecolorred-on2)
    - [O(N!)](#span-stylecolorred-on-1)
    - [Don’t forget:](#span-stylecolorred-dont-forget-9)
    - [Additional links](#span-stylecolorred-additional-links-9)
    - [Create a standalone function `bind` that is functionally equivalent to the method `Function.prototype.bind`.](#span-stylecolorred-create-a-standalone-function-bind-that-is-functionally-equivalent-to-the-method-functionprototypebind)
    - [Answer](#span-stylecolorred-answer-10)
    - [Don’t forget:](#span-stylecolorred-dont-forget-10)
    - [Additional links](#span-stylecolorred-additional-links-10)
    - [What is the purpose of cache busting and how can you achieve it?](#span-stylecolorred-what-is-the-purpose-of-cache-busting-and-how-can-you-achieve-it)
    - [Answer](#span-stylecolorred-answer-11)
    - [Don’t forget:](#span-stylecolorred-dont-forget-11)
    - [Additional links](#span-stylecolorred-additional-links-11)
    - [How can you avoid callback hells?](#span-stylecolorred-how-can-you-avoid-callback-hells)
    - [Answer](#span-stylecolorred-answer-12)
    - [Don’t forget:](#span-stylecolorred-dont-forget-12)
    - [Additional links](#span-stylecolorred-additional-links-12)
    - [What is the purpose of callback function as an argument of `setState`?](#span-stylecolorred-what-is-the-purpose-of-callback-function-as-an-argument-of-setstate)
    - [Answer](#span-stylecolorred-answer-13)
    - [Don’t forget:](#span-stylecolorred-dont-forget-13)
    - [Additional links](#span-stylecolorred-additional-links-13)
    - [Which is the preferred option between callback refs and findDOMNode()?](#span-stylecolorred-which-is-the-preferred-option-between-callback-refs-and-finddomnode)
    - [Answer](#span-stylecolorred-answer-14)
    - [Don’t forget:](#span-stylecolorred-dont-forget-14)
    - [Additional links](#span-stylecolorred-additional-links-14)
    - [What is a callback? Can you show an example using one?](#span-stylecolorred-what-is-a-callback-can-you-show-an-example-using-one)
    - [Answer](#span-stylecolorred-answer-15)
    - [Don’t forget:](#span-stylecolorred-dont-forget-15)
    - [Additional links](#span-stylecolorred-additional-links-15)
    - [What is the `children` prop?](#span-stylecolorred-what-is-the-children-prop)
    - [Answer](#span-stylecolorred-answer-16)
    - [Don’t forget:](#span-stylecolorred-dont-forget-16)
    - [Additional links](#span-stylecolorred-additional-links-16)
    - [Why does React use `className` instead of `class` like in HTML?](#span-stylecolorred-why-does-react-use-classname-instead-of-class-like-in-html)
    - [Answer](#span-stylecolorred-answer-17)
    - [Don’t forget:](#span-stylecolorred-dont-forget-17)
    - [Additional links](#span-stylecolorred-additional-links-17)
    - [How do you clone an object in JavaScript?](#span-stylecolorred-how-do-you-clone-an-object-in-javascript)
    - [Answer](#span-stylecolorred-answer-18)
    - [Don’t forget:](#span-stylecolorred-dont-forget-18)
    - [Additional links](#span-stylecolorred-additional-links-18)
    - [What is a closure? Can you give a useful example of one?](#span-stylecolorred-what-is-a-closure-can-you-give-a-useful-example-of-one)
    - [Answer](#span-stylecolorred-answer-19)
    - [Don’t forget:](#span-stylecolorred-dont-forget-19)
    - [Additional links](#span-stylecolorred-additional-links-19)
    - [How do you compare two objects in JavaScript?](#span-stylecolorred-how-do-you-compare-two-objects-in-javascript)
    - [Answer](#span-stylecolorred-answer-20)
    - [Don’t forget:](#span-stylecolorred-dont-forget-20)
    - [Additional links](#span-stylecolorred-additional-links-20)
    - [What is context?](#span-stylecolorred-what-is-context)
    - [Answer](#span-stylecolorred-answer-21)
    - [Don’t forget:](#span-stylecolorred-dont-forget-21)
    - [Additional links](#span-stylecolorred-additional-links-21)
    - [What is CORS?](#span-stylecolorred-what-is-cors)
    - [Answer](#span-stylecolorred-answer-22)
    - [Don’t forget:](#span-stylecolorred-dont-forget-22)
    - [Additional links](#span-stylecolorred-additional-links-22)
    - [Describe the layout of the CSS Box Model and briefly describe each component.](#span-stylecolorred-describe-the-layout-of-the-css-box-model-and-briefly-describe-each-component)
    - [Answer](#span-stylecolorred-answer-23)
    - [Don’t forget:](#span-stylecolorred-dont-forget-23)
    - [Additional links](#span-stylecolorred-additional-links-23)
    - [What are the advantages of using CSS preprocessors?](#span-stylecolorred-what-are-the-advantages-of-using-css-preprocessors)
    - [Answer](#span-stylecolorred-answer-24)
    - [Don’t forget:](#span-stylecolorred-dont-forget-24)
    - [Additional links](#span-stylecolorred-additional-links-24)
    - [What is the difference between ‘+’ and ‘~’ sibling selectors?.](#span-stylecolorred-what-is-the-difference-between--and--sibling-selectors)
    - [Answer](#span-stylecolorred-answer-25)
    - [Don’t forget:](#span-stylecolorred-dont-forget-25)
    - [Additional links](#span-stylecolorred-additional-links-25)
    - [Can you describe how CSS specificity works?](#span-stylecolorred-can-you-describe-how-css-specificity-works)
    - [Answer](#span-stylecolorred-answer-26)
    - [Don’t forget:](#span-stylecolorred-dont-forget-26)
    - [Additional links](#span-stylecolorred-additional-links-26)
    - [What is debouncing?](#span-stylecolorred-what-is-debouncing)
    - [Answer](#span-stylecolorred-answer-27)
    - [Don’t forget:](#span-stylecolorred-dont-forget-27)
    - [Additional links](#span-stylecolorred-additional-links-27)
    - [What is the DOM?](#span-stylecolorred-what-is-the-dom)
    - [Answer](#span-stylecolorred-answer-28)
    - [Don’t forget:](#span-stylecolorred-dont-forget-28)
    - [Additional links](#span-stylecolorred-additional-links-28)
    - [What is the difference between the equality operators `==` and `===`?](#span-stylecolorred-what-is-the-difference-between-the-equality-operators--and-)
    - [Answer](#span-stylecolorred-answer-29)
    - [Don’t forget:](#span-stylecolorred-dont-forget-29)
    - [Additional links](#span-stylecolorred-additional-links-29)
    - [What is the difference between an element and a component in React?](#span-stylecolorred-what-is-the-difference-between-an-element-and-a-component-in-react)
    - [Answer](#span-stylecolorred-answer-30)
    - [Don’t forget:](#span-stylecolorred-dont-forget-30)
    - [Additional links](#span-stylecolorred-additional-links-30)
    - [What is the difference between `em` and `rem` units?](#span-stylecolorred-what-is-the-difference-between-em-and-rem-units)
    - [Answer](#span-stylecolorred-answer-31)
    - [Don’t forget:](#span-stylecolorred-dont-forget-31)
    - [Additional links](#span-stylecolorred-additional-links-31)
    - [What are error boundaries in React?](#span-stylecolorred-what-are-error-boundaries-in-react)
    - [Answer](#span-stylecolorred-answer-32)
    - [Don’t forget:](#span-stylecolorred-dont-forget-32)
    - [Additional links](#span-stylecolorred-additional-links-32)
    - [What is event delegation and why is it useful? Can you show an example of how to use it?](#span-stylecolorred-what-is-event-delegation-and-why-is-it-useful-can-you-show-an-example-of-how-to-use-it)
    - [Answer](#span-stylecolorred-answer-33)
    - [Don’t forget:](#span-stylecolorred-dont-forget-33)
    - [Additional links](#span-stylecolorred-additional-links-33)
    - [What is event-driven programming?](#span-stylecolorred-what-is-event-driven-programming)
    - [Answer](#span-stylecolorred-answer-34)
    - [Don’t forget:](#span-stylecolorred-dont-forget-34)
    - [Additional links](#span-stylecolorred-additional-links-34)
    - [What is the difference between an expression and a statement in JavaScript?](#span-stylecolorred-what-is-the-difference-between-an-expression-and-a-statement-in-javascript)
    - [Answer](#span-stylecolorred-answer-35)
    - [Statements](#span-stylecolorred-statements)
    - [Expressions](#span-stylecolorred-expressions)
    - [Expression statements](#span-stylecolorred-expression-statements)
    - [Don’t forget:](#span-stylecolorred-dont-forget-35)
    - [Additional links](#span-stylecolorred-additional-links-35)
    - [What are truthy and falsy values in JavaScript?](#span-stylecolorred-what-are-truthy-and-falsy-values-in-javascript)
    - [Answer](#span-stylecolorred-answer-36)
    - [Don’t forget:](#span-stylecolorred-dont-forget-36)
    - [Additional links](#span-stylecolorred-additional-links-36)
    - [Generate an array, containing the Fibonacci sequence, up until the nth term.](#span-stylecolorred-generate-an-array-containing-the-fibonacci-sequence-up-until-the-nth-term)
    - [Answer](#span-stylecolorred-answer-37)
    - [Don’t forget:](#span-stylecolorred-dont-forget-37)
    - [Additional links](#span-stylecolorred-additional-links-37)
    - [Given an array of words, write a method to output matching sets of anagrams.](#span-stylecolorred-given-an-array-of-words-write-a-method-to-output-matching-sets-of-anagrams)
    - [Answer](#span-stylecolorred-answer-38)
    - [Don’t forget:](#span-stylecolorred-dont-forget-38)
    - [Additional links](#span-stylecolorred-additional-links-38)
    - [Using flexbox, create a 3-column layout where each column takes up a `col-{n} / 12` ratio of the container.](#span-stylecolorred-using-flexbox-create-a-3-column-layout-where-each-column-takes-up-a-col-n--12-ratio-of-the-container)
    - [Answer](#span-stylecolorred-answer-39)
    - [Don’t forget:](#span-stylecolorred-dont-forget-39)
    - [Additional links](#span-stylecolorred-additional-links-39)
    - [What does `0.1 + 0.2 === 0.3` evaluate to?](#span-stylecolorred-what-does-01--02--03-evaluate-to)
    - [Answer](#span-stylecolorred-answer-40)
    - [Don’t forget:](#span-stylecolorred-dont-forget-40)
    - [Additional links](#span-stylecolorred-additional-links-40)
    - [What is a focus ring? What is the correct solution to handle them?](#span-stylecolorred-what-is-a-focus-ring-what-is-the-correct-solution-to-handle-them)
    - [Answer](#span-stylecolorred-answer-41)
    - [Don’t forget:](#span-stylecolorred-dont-forget-41)
    - [Additional links](#span-stylecolorred-additional-links-41)
    - [What is the difference between the array methods `map()` and `forEach()`?](#span-stylecolorred-what-is-the-difference-between-the-array-methods-map-and-foreach)
    - [Answer](#span-stylecolorred-answer-42)
    - [Don’t forget:](#span-stylecolorred-dont-forget-42)
    - [Additional links](#span-stylecolorred-additional-links-42)
    - [What are fragments?](#span-stylecolorred-what-are-fragments)
    - [Answer](#span-stylecolorred-answer-43)
    - [Don’t forget:](#span-stylecolorred-dont-forget-43)
    - [Additional links](#span-stylecolorred-additional-links-43)
    - [What is functional programming?](#span-stylecolorred-what-is-functional-programming)
    - [Answer](#span-stylecolorred-answer-44)
    - [Don’t forget:](#span-stylecolorred-dont-forget-44)
    - [Additional links](#span-stylecolorred-additional-links-44)
    - [Describe your thoughts on how a single page web app should handle focus when changing routes](#span-stylecolorred-describe-your-thoughts-on-how-a-single-page-web-app-should-handle-focus-when-changing-routes)
    - [Answer](#span-stylecolorred-answer-45)
    - [Don’t forget:](#span-stylecolorred-dont-forget-45)
    - [Additional links](#span-stylecolorred-additional-links-45)
    - [What are higher-order components?](#span-stylecolorred-what-are-higher-order-components)
    - [Answer](#span-stylecolorred-answer-46)
    - [Don’t forget:](#span-stylecolorred-dont-forget-46)
    - [Additional links](#span-stylecolorred-additional-links-46)
    - [What will the console log in this example?](#span-stylecolorred-what-will-the-console-log-in-this-example)
    - [Answer](#span-stylecolorred-answer-47)
    - [Don’t forget:](#span-stylecolorred-dont-forget-47)
    - [Additional links](#span-stylecolorred-additional-links-47)
    - [How does hoisting work in JavaScript?](#span-stylecolorred-how-does-hoisting-work-in-javascript)
    - [Answer](#span-stylecolorred-answer-48)
    - [Don’t forget:](#span-stylecolorred-dont-forget-48)
    - [Additional links](#span-stylecolorred-additional-links-48)
    - [Can a web page contain multiple `<header>` elements? What about `<footer>` elements?](#span-stylecolorred-can-a-web-page-contain-multiple-header-elements-what-about-footer-elements)
    - [Answer](#span-stylecolorred-answer-49)
    - [Don’t forget:](#span-stylecolorred-dont-forget-49)
    - [Additional links](#span-stylecolorred-additional-links-49)
    - [Discuss the differences between an HTML specification and a browser’s implementation thereof.](#span-stylecolorred-discuss-the-differences-between-an-html-specification-and-a-browsers-implementation-thereof)
    - [Answer](#span-stylecolorred-answer-50)
    - [Don’t forget:](#span-stylecolorred-dont-forget-50)
    - [Additional links](#span-stylecolorred-additional-links-50)
    - [What is the difference between HTML and React event handling?](#span-stylecolorred-what-is-the-difference-between-html-and-react-event-handling)
    - [Answer](#span-stylecolorred-answer-51)
    - [Don’t forget:](#span-stylecolorred-dont-forget-51)
    - [Additional links](#span-stylecolorred-additional-links-51)
    - [What are some differences that XHTML has compared to HTML?](#span-stylecolorred-what-are-some-differences-that-xhtml-has-compared-to-html)
    - [Answer](#span-stylecolorred-answer-52)
    - [Don’t forget:](#span-stylecolorred-dont-forget-52)
    - [Additional links](#span-stylecolorred-additional-links-52)
    - [Briefly describe the correct usage of the following HTML5 semantic elements: `<header>`, `<article>`,`<section>`, `<footer>`](#span-stylecolorred-briefly-describe-the-correct-usage-of-the-following-html5-semantic-elements-header-articlesection-footer)
    - [Answer](#span-stylecolorred-answer-53)
    - [Don’t forget:](#span-stylecolorred-dont-forget-53)
    - [Additional links](#span-stylecolorred-additional-links-53)
    - [What is HTML5 Web Storage? Explain `localStorage` and `sessionStorage`.](#span-stylecolorred-what-is-html5-web-storage-explain-localstorage-and-sessionstorage)
    - [Answer](#span-stylecolorred-answer-54)
    - [Don’t forget:](#span-stylecolorred-dont-forget-54)
    - [Additional links](#span-stylecolorred-additional-links-54)
    - [What is the reason for wrapping the entire contents of a JavaScript source file in a function that is immediately invoked?](#span-stylecolorred-what-is-the-reason-for-wrapping-the-entire-contents-of-a-javascript-source-file-in-a-function-that-is-immediately-invoked)
    - [Answer](#span-stylecolorred-answer-55)
    - [Don’t forget:](#span-stylecolorred-dont-forget-55)
    - [Additional links](#span-stylecolorred-additional-links-55)
    - [Explain the differences between imperative and declarative programming.](#span-stylecolorred-explain-the-differences-between-imperative-and-declarative-programming)
    - [Answer](#span-stylecolorred-answer-56)
    - [Imperative](#span-stylecolorred-imperative)
    - [Declarative](#span-stylecolorred-declarative)
    - [Don’t forget:](#span-stylecolorred-dont-forget-56)
    - [Additional links](#span-stylecolorred-additional-links-56)
    - [What are inline conditional expressions?](#span-stylecolorred-what-are-inline-conditional-expressions)
    - [Answer](#span-stylecolorred-answer-57)
    - [Don’t forget:](#span-stylecolorred-dont-forget-57)
    - [Additional links](#span-stylecolorred-additional-links-57)
    - [What is a key? What are the benefits of using it in lists?](#span-stylecolorred-what-is-a-key-what-are-the-benefits-of-using-it-in-lists)
    - [Answer](#span-stylecolorred-answer-58)
    - [Don’t forget:](#span-stylecolorred-dont-forget-58)
    - [Additional links](#span-stylecolorred-additional-links-58)
    - [What are landmark roles and how can they be useful?](#span-stylecolorred-what-are-landmark-roles-and-how-can-they-be-useful)
    - [Answer](#span-stylecolorred-answer-59)
    - [Don’t forget:](#span-stylecolorred-dont-forget-59)
    - [Additional links](#span-stylecolorred-additional-links-59)
    - [What is the difference between lexical scoping and dynamic scoping?](#span-stylecolorred-what-is-the-difference-between-lexical-scoping-and-dynamic-scoping)
    - [Answer](#span-stylecolorred-answer-60)
    - [Don’t forget:](#span-stylecolorred-dont-forget-60)
    - [Additional links](#span-stylecolorred-additional-links-60)
    - [What are the lifecycle methods in React?](#span-stylecolorred-what-are-the-lifecycle-methods-in-react)
    - [Answer](#span-stylecolorred-answer-61)
    - [Don’t forget:](#span-stylecolorred-dont-forget-61)
    - [Additional links](#span-stylecolorred-additional-links-61)
    - [What are the different phases of the component lifecycle in React?](#span-stylecolorred-what-are-the-different-phases-of-the-component-lifecycle-in-react)
    - [Answer](#span-stylecolorred-answer-62)
    - [Don’t forget:](#span-stylecolorred-dont-forget-62)
    - [Additional links](#span-stylecolorred-additional-links-62)
    - [What does lifting state up in React mean?](#span-stylecolorred-what-does-lifting-state-up-in-react-mean)
    - [Answer](#span-stylecolorred-answer-63)
    - [Don’t forget:](#span-stylecolorred-dont-forget-63)
    - [Additional links](#span-stylecolorred-additional-links-63)
    - [Create a function that masks a string of characters with `#` except for the last four (4) characters.](#span-stylecolorred-create-a-function-that-masks-a-string-of-characters-with--except-for-the-last-four-4-characters)
    - [Answer](#span-stylecolorred-answer-64)
    - [Don’t forget:](#span-stylecolorred-dont-forget-64)
    - [Additional links](#span-stylecolorred-additional-links-64)
    - [Can you name the four types of `@media` properties?](#span-stylecolorred-can-you-name-the-four-types-of-media-properties)
    - [Answer](#span-stylecolorred-answer-65)
    - [Don’t forget:](#span-stylecolorred-dont-forget-65)
    - [Additional links](#span-stylecolorred-additional-links-65)
    - [What is memoization?](#span-stylecolorred-what-is-memoization)
    - [Answer](#span-stylecolorred-answer-66)
    - [Don’t forget:](#span-stylecolorred-dont-forget-66)
    - [Additional links](#span-stylecolorred-additional-links-66)
    - [How do you ensure methods have the correct `this` context in React component classes?](#span-stylecolorred-how-do-you-ensure-methods-have-the-correct-this-context-in-react-component-classes)
    - [Answer](#span-stylecolorred-answer-67)
    - [Don’t forget:](#span-stylecolorred-dont-forget-67)
    - [Additional links](#span-stylecolorred-additional-links-67)
    - [What is a MIME type and what is it used for?](#span-stylecolorred-what-is-a-mime-type-and-what-is-it-used-for)
    - [Answer](#span-stylecolorred-answer-68)
    - [Don’t forget:](#span-stylecolorred-dont-forget-68)
    - [Additional links](#span-stylecolorred-additional-links-68)
    - [Contrast mutable and immutable values, and mutating vs non-mutating methods.](#span-stylecolorred-contrast-mutable-and-immutable-values-and-mutating-vs-non-mutating-methods)
    - [Answer](#span-stylecolorred-answer-69)
    - [Don’t forget:](#span-stylecolorred-dont-forget-69)
    - [Additional links](#span-stylecolorred-additional-links-69)
    - [What is the only value not equal to itself in JavaScript?](#span-stylecolorred-what-is-the-only-value-not-equal-to-itself-in-javascript)
    - [Answer](#span-stylecolorred-answer-70)
    - [Don’t forget:](#span-stylecolorred-dont-forget-70)
    - [Additional links](#span-stylecolorred-additional-links-70)
    - [NodeJS often uses a callback pattern where if an error is encountered during execution, this error is passed as the first argument to the callback. What are the advantages of this pattern?](#span-stylecolorred-nodejs-often-uses-a-callback-pattern-where-if-an-error-is-encountered-during-execution-this-error-is-passed-as-the-first-argument-to-the-callback-what-are-the-advantages-of-this-pattern)
    - [Answer](#span-stylecolorred-answer-71)
    - [Don’t forget:](#span-stylecolorred-dont-forget-71)
    - [Additional links](#span-stylecolorred-additional-links-71)
    - [What is the event loop in Node.js?](#span-stylecolorred-what-is-the-event-loop-in-nodejs)
    - [Answer](#span-stylecolorred-answer-72)
    - [Don’t forget:](#span-stylecolorred-dont-forget-72)
    - [Additional links](#span-stylecolorred-additional-links-72)
    - [What is the difference between `null` and `undefined`?](#span-stylecolorred-what-is-the-difference-between-null-and-undefined)
    - [Answer](#span-stylecolorred-answer-73)
    - [Don’t forget:](#span-stylecolorred-dont-forget-73)
    - [Additional links](#span-stylecolorred-additional-links-73)
    - [Describe the different ways to create an object. When should certain ways be preferred over others?](#span-stylecolorred-describe-the-different-ways-to-create-an-object-when-should-certain-ways-be-preferred-over-others)
    - [Answer](#span-stylecolorred-answer-74)
    - [Object literal](#span-stylecolorred-object-literal)
    - [Constructor](#span-stylecolorred-constructor)
    - [Factory function](#span-stylecolorred-factory-function)
    - [`Object.create()`](#span-stylecolorred-objectcreate)
    - [Don’t forget:](#span-stylecolorred-dont-forget-74)
    - [Additional links](#span-stylecolorred-additional-links-74)
    - [What is the difference between a parameter and an argument?](#span-stylecolorred-what-is-the-difference-between-a-parameter-and-an-argument)
    - [Answer](#span-stylecolorred-answer-75)
    - [Don’t forget:](#span-stylecolorred-dont-forget-75)
    - [Additional links](#span-stylecolorred-additional-links-75)
    - [Does JavaScript pass by value or by reference?](#span-stylecolorred-does-javascript-pass-by-value-or-by-reference)
    - [Answer](#span-stylecolorred-answer-76)
    - [Don’t forget:](#span-stylecolorred-dont-forget-76)
    - [Additional links](#span-stylecolorred-additional-links-76)
    - [How do you pass an argument to an event handler or callback?](#span-stylecolorred-how-do-you-pass-an-argument-to-an-event-handler-or-callback)
    - [Answer](#span-stylecolorred-answer-77)
    - [Don’t forget:](#span-stylecolorred-dont-forget-77)
    - [Additional links](#span-stylecolorred-additional-links-77)
    - [Create a function `pipe` that performs left-to-right function composition by returning a function that accepts one argument.](#span-stylecolorred-create-a-function-pipe-that-performs-left-to-right-function-composition-by-returning-a-function-that-accepts-one-argument)
    - [Answer](#span-stylecolorred-answer-78)
    - [Don’t forget:](#span-stylecolorred-dont-forget-78)
    - [Additional links](#span-stylecolorred-additional-links-78)
    - [What are portals in React?](#span-stylecolorred-what-are-portals-in-react)
    - [Answer](#span-stylecolorred-answer-79)
    - [Don’t forget:](#span-stylecolorred-dont-forget-79)
    - [Additional links](#span-stylecolorred-additional-links-79)
    - [What is the difference between the postfix `i++` and prefix `++i` increment operators?](#span-stylecolorred-what-is-the-difference-between-the-postfix-i-and-prefix-i-increment-operators)
    - [Answer](#span-stylecolorred-answer-80)
    - [Don’t forget:](#span-stylecolorred-dont-forget-80)
    - [Additional links](#span-stylecolorred-additional-links-80)
    - [In which states can a Promise be?](#span-stylecolorred-in-which-states-can-a-promise-be)
    - [Answer](#span-stylecolorred-answer-81)
    - [Don’t forget:](#span-stylecolorred-dont-forget-81)
    - [Additional links](#span-stylecolorred-additional-links-81)
    - [What are Promises?](#span-stylecolorred-what-are-promises)
    - [Answer](#span-stylecolorred-answer-82)
    - [Don’t forget:](#span-stylecolorred-dont-forget-82)
    - [Additional links](#span-stylecolorred-additional-links-82)
    - [How to apply prop validation in React?](#span-stylecolorred-how-to-apply-prop-validation-in-react)
    - [Answer](#span-stylecolorred-answer-83)
    - [Don’t forget:](#span-stylecolorred-dont-forget-83)
    - [Additional links](#span-stylecolorred-additional-links-83)
    - [How does prototypal inheritance differ from classical inheritance?](#span-stylecolorred-how-does-prototypal-inheritance-differ-from-classical-inheritance)
    - [Answer](#span-stylecolorred-answer-84)
    - [Don’t forget:](#span-stylecolorred-dont-forget-84)
    - [Additional links](#span-stylecolorred-additional-links-84)
    - [What is a pure function?](#span-stylecolorred-what-is-a-pure-function)
    - [Answer](#span-stylecolorred-answer-85)
    - [Pure](#span-stylecolorred-pure)
    - [Impure](#span-stylecolorred-impure)
    - [Don’t forget:](#span-stylecolorred-dont-forget-85)
    - [Additional links](#span-stylecolorred-additional-links-85)
    - [How do you write comments inside a JSX tree in React?](#span-stylecolorred-how-do-you-write-comments-inside-a-jsx-tree-in-react)
    - [Answer](#span-stylecolorred-answer-86)
    - [What is recursion and when is it useful?](#span-stylecolorred-what-is-recursion-and-when-is-it-useful)
    - [Answer](#span-stylecolorred-answer-87)
    - [Don’t forget:](#span-stylecolorred-dont-forget-86)
    - [Additional links](#span-stylecolorred-additional-links-86)
    - [What is the output of the following code?](#span-stylecolorred-what-is-the-output-of-the-following-code)
    - [Answer](#span-stylecolorred-answer-88)
    - [Don’t forget:](#span-stylecolorred-dont-forget-87)
    - [Additional links](#span-stylecolorred-additional-links-87)
    - [What are refs in React? When should they be used?](#span-stylecolorred-what-are-refs-in-react-when-should-they-be-used)
    - [Answer](#span-stylecolorred-answer-89)
    - [Don’t forget:](#span-stylecolorred-dont-forget-88)
    - [Additional links](#span-stylecolorred-additional-links-88)
    - [Where and why is the `rel="noopener"` attribute used?](#span-stylecolorred-where-and-why-is-the-relnoopener-attribute-used)
    - [Answer](#span-stylecolorred-answer-90)
    - [Don’t forget:](#span-stylecolorred-dont-forget-89)
    - [Additional links](#span-stylecolorred-additional-links-89)
    - [What is REST?](#span-stylecolorred-what-is-rest)
    - [Answer](#span-stylecolorred-answer-91)
    - [Don’t forget:](#span-stylecolorred-dont-forget-90)
    - [Additional links](#span-stylecolorred-additional-links-90)
    - [What does the following function return?](#span-stylecolorred-what-does-the-following-function-return)
    - [Answer](#span-stylecolorred-answer-92)
    - [Don’t forget:](#span-stylecolorred-dont-forget-91)
    - [Additional links](#span-stylecolorred-additional-links-91)
    - [Are semicolons required in JavaScript?](#span-stylecolorred-are-semicolons-required-in-javascript)
    - [Answer](#span-stylecolorred-answer-93)
    - [Don’t forget:](#span-stylecolorred-dont-forget-92)
    - [Additional links](#span-stylecolorred-additional-links-92)
    - [What is short-circuit evaluation in JavaScript?](#span-stylecolorred-what-is-short-circuit-evaluation-in-javascript)
    - [Answer](#span-stylecolorred-answer-94)
    - [Don’t forget:](#span-stylecolorred-dont-forget-93)
    - [Additional links](#span-stylecolorred-additional-links-93)
    - [What are the advantages of using CSS sprites and how are they utilized?](#span-stylecolorred-what-are-the-advantages-of-using-css-sprites-and-how-are-they-utilized)
    - [Answer](#span-stylecolorred-answer-95)
    - [Don’t forget:](#span-stylecolorred-dont-forget-94)
    - [Additional links](#span-stylecolorred-additional-links-94)
    - [What is a stateful component in React?](#span-stylecolorred-what-is-a-stateful-component-in-react)
    - [Answer](#span-stylecolorred-answer-96)
    - [Don’t forget:](#span-stylecolorred-dont-forget-95)
    - [Additional links](#span-stylecolorred-additional-links-95)
    - [What is a stateless component?](#span-stylecolorred-what-is-a-stateless-component)
    - [Answer](#span-stylecolorred-answer-97)
    - [Don’t forget:](#span-stylecolorred-dont-forget-96)
    - [Additional links](#span-stylecolorred-additional-links-96)
    - [Explain the difference between a static method and an instance method.](#span-stylecolorred-explain-the-difference-between-a-static-method-and-an-instance-method)
    - [Answer](#span-stylecolorred-answer-98)
    - [Don’t forget:](#span-stylecolorred-dont-forget-97)
    - [Additional links](#span-stylecolorred-additional-links-97)
    - [What is the difference between synchronous and asynchronous code in JavaScript?](#span-stylecolorred-what-is-the-difference-between-synchronous-and-asynchronous-code-in-javascript)
    - [Answer](#span-stylecolorred-answer-99)
    - [Don’t forget:](#span-stylecolorred-dont-forget-98)
    - [Additional links](#span-stylecolorred-additional-links-98)
    - [What is the `this` keyword and how does it work?](#span-stylecolorred-what-is-the-this-keyword-and-how-does-it-work)
    - [Answer](#span-stylecolorred-answer-100)
    - [Object literals](#span-stylecolorred-object-literals)
    - [Event listeners](#span-stylecolorred-event-listeners)
    - [Constructors](#span-stylecolorred-constructors)
    - [Manual](#span-stylecolorred-manual)
    - [Unwanted `this`](#span-stylecolorred-unwanted-this)
    - [Don’t forget:](#span-stylecolorred-dont-forget-99)
    - [Additional links](#span-stylecolorred-additional-links-99)
    - [What does the following code evaluate to?](#span-stylecolorred-what-does-the-following-code-evaluate-to)
    - [Answer](#span-stylecolorred-answer-101)
    - [Don’t forget:](#span-stylecolorred-dont-forget-100)
    - [Additional links](#span-stylecolorred-additional-links-100)
    - [What are JavaScript data types?](#span-stylecolorred-what-are-javascript-data-types)
    - [Answer](#span-stylecolorred-answer-102)
    - [Don’t forget:](#span-stylecolorred-dont-forget-101)
    - [Additional links](#span-stylecolorred-additional-links-101)
    - [What is the purpose of JavaScript UI libraries/frameworks like React, Vue, Angular, Hyperapp, etc?](#span-stylecolorred-what-is-the-purpose-of-javascript-ui-librariesframeworks-like-react-vue-angular-hyperapp-etc)
    - [Answer](#span-stylecolorred-answer-103)
    - [Don’t forget:](#span-stylecolorred-dont-forget-102)
    - [Additional links](#span-stylecolorred-additional-links-102)
    - [What does `'use strict'` do and what are some of the key benefits to using it?](#span-stylecolorred-what-does-use-strict-do-and-what-are-some-of-the-key-benefits-to-using-it)
    - [Answer](#span-stylecolorred-answer-104)
    - [Don’t forget:](#span-stylecolorred-dont-forget-103)
    - [Additional links](#span-stylecolorred-additional-links-103)
    - [What are the differences between `var`, `let`, `const` and no keyword statements?](#span-stylecolorred-what-are-the-differences-between-var-let-const-and-no-keyword-statements)
    - [Answer](#span-stylecolorred-answer-105)
    - [No keyword](#span-stylecolorred-no-keyword)
    - [var](#span-stylecolorred-var)
    - [let](#span-stylecolorred-let)
    - [const](#span-stylecolorred-const)
    - [Don’t forget:](#span-stylecolorred-dont-forget-104)
    - [Additional links](#span-stylecolorred-additional-links-104)
    - [What is a virtual DOM and why is it used in libraries/frameworks?](#span-stylecolorred-what-is-a-virtual-dom-and-why-is-it-used-in-librariesframeworks)
    - [Answer](#span-stylecolorred-answer-106)
    - [Don’t forget:](#span-stylecolorred-dont-forget-105)
    - [Additional links](#span-stylecolorred-additional-links-105)
    - [What is WCAG? What are the differences between A, AA, and AAA compliance?](#span-stylecolorred-what-is-wcag-what-are-the-differences-between-a-aa-and-aaa-compliance)
    - [Answer](#span-stylecolorred-answer-107)
    - [Don’t forget:](#span-stylecolorred-dont-forget-106)
    - [Additional links](#span-stylecolorred-additional-links-106)
    - [What is a cross-site scripting attack (XSS) and how do you prevent it?](#span-stylecolorred-what-is-a-cross-site-scripting-attack-xss-and-how-do-you-prevent-it)
    - [Answer](#span-stylecolorred-answer-108)
    - [Don’t forget:](#span-stylecolorred-dont-forget-107)
    - [Additional links](#span-stylecolorred-additional-links-107)
  - [- Cross-Site Scripting Attack (XSS)](#----cross-site-scripting-attack-xss)
- [ALL Prior Code:](#all-prior-code)#### LeetCode Solutions in JavaScript

---

---

##### Easy

- [7. Reverse Integer](https://oj.leetcode.com/problems/reverse-integer/) - [Solution](./Easy/7-reverseInteger.js)
- [8. String to Integer (atoi)](https://leetcode.com/problems/string-to-integer-atoi/) - [Solution](./Easy/8-stringToInteger.js)
- [9. Palindrome Number](https://leetcode.com/problems/palindrome-number/) - [Solution](./Easy/9-palindromeNumber.js)
- [13. Roman to Integer](https://leetcode.com/problems/roman-to-integer/) - [Solution](./Easy/13-romanToInteger.js)
- [14. Longest Common Prefix](https://leetcode.com/problems/longest-common-prefix/) - [Solution](./Easy/14-longestCommonPrefix.js)
- [19. Remove Nth Node From End of List](https://leetcode.com/problems/remove-nth-node-from-end-of-list/) - [Solution](./Easy/19-removeNthNodeFromEndofList.js)
- [20. Valid Parentheses](https://leetcode.com/problems/valid-parentheses/) - [Solution](./Easy/20-validParentheses.js)
- [21. Merge Two Sorted Lists](https://leetcode.com/problems/merge-two-sorted-lists/) - [Solution](./Easy/21-mergeSortedLists.js)
- [24. Swap Nodes in Pairs](https://leetcode.com/problems/swap-nodes-in-pairs/) - [Solution](./Easy/24-swapNodesPairs.js)
- [28. Implement strStr()](https://leetcode.com/problems/implement-strstr/) - [Solution](./Easy/28-implementstrStr.js)
- [26. Remove Duplicates from Sorted Array](https://leetcode.com/problems/remove-duplicates-from-sorted-array/) - [Solution](./Easy/26-removeDuplicatesSortedArray.js)
- [27. Remove Element](https://leetcode.com/problems/remove-element/) - [Solution](./Easy/27-removeElement.js)
- [36. Valid Sudoku](https://leetcode.com/problems/valid-sudoku/) - [Solution](./Easy/36-validSudoku.js)
- [38. Count and Say](https://leetcode.com/problems/count-and-say/) - [Solution](./Easy/38-countandSay.js)
- [53. Maximum Subarray](https://leetcode.com/problems/maximum-subarray/) - [Solution](./Easy/53-maximumSubarray.js)
- [66. Plus One](https://leetcode.com/problems/plus-one/) - [Solution](./Easy/66-plusOne.js)
- [67. Add Binary](https://leetcode.com/problems/add-binary/) - [Solution](./Easy/67-addBinary.js)
- [70. Climbing Stairs](https://leetcode.com/problems/climbing-stairs/) - [Solution](./Easy/70-climbChairs.js)
- [83. Remove Duplicates from Sorted List](https://leetcode.com/problems/remove-duplicates-from-sorted-list/) - [Solution](./Easy/83-removeDuplicatesFromSortedList.js)
- [88. Merge Sorted Array](https://leetcode.com/problems/merge-sorted-array/) - [Solution](./Easy/88-mergeSortedArray.js)
- [100. Same Tree](https://leetcode.com/problems/same-tree/) - [Solution](./Easy/100-sameTree.js)
- [101. Symmetric Tree](https://leetcode.com/problems/symmetric-tree/) - [Solution](./Easy/101-symmetricTree.js)
- [102. Binary Tree Level Order Traversal ](https://leetcode.com/problems/binary-tree-level-order-traversal/) - [Solution](./Easy/102-binaryTreeLevelOrder.js)
- [104. Maximum Depth of Binary Tree](https://leetcode.com/problems/maximum-depth-of-binary-tree/) - [Solution](./Easy/104-maxDepth.js)
- [107. Binary Tree Level Order Traversal II](https://leetcode.com/problems/binary-tree-level-order-traversal-ii/) - [Solution](./Easy/107-binaryTreeLevelTraversalII.js)
- [110. Balanced Binary Tree](https://leetcode.com/problems/balanced-binary-tree/) - [Solution](./Easy/110-balancedBinaryTree.js)
- [111. Minimum Depth of Binary Tree](https://leetcode.com/problems/minimum-depth-of-binary-tree/) - [Solution](./Easy/111-minimumDepthBinaryTree.js)
- [112. Path Sum](https://leetcode.com/problems/path-sum/) - [Solution](./Easy/112-pathSum.js)
- [118. Pascal's Triangle](https://leetcode.com/problems/pascals-triangle/) - [Solution](./Easy/118-pascalTriangle.js)
- [119. Pascal's Triangle II](https://leetcode.com/problems/pascals-triangle-ii/) - [Solution](./Easy/119-pascalTriangleII.js)
- [125. Valid Palindrome](https://leetcode.com/problems/valid-palindrome/) - [Solution](./Easy/125-validPalindrome.js)
- [160. Intersection of Two Linked Lists](https://leetcode.com/problems/intersection-of-two-linked-lists/) - [Solution](./Easy/160-IntersectionofTwoLinkedLists.js)
- [165. Compare Version Numbers](https://leetcode.com/problems/compare-version-numbers/) - [Solution](./Easy/165-compareVersionNumbers.js)
- [167. Two Sum II - Input array is sorted](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted) - [Solution](./Easy/167-twoSummII.js)
- [169. Majority Element](https://leetcode.com/problems/majority-element/) - [Solution](./Easy/169-majorityElement.js)
- [172. Factorial Trailing Zeroes](https://leetcode.com/problems/factorial-trailing-zeroes/) - [Solution](./Easy/172-factorialTrailingZeroes.js)
- [190. Reverse Bits](https://leetcode.com/problems/reverse-bits/) - [Solution](./Easy/190-reverseBits.js)
- [191. Number of 1 Bits](https://leetcode.com/problems/number-of-1-bits/) - [Solution](./Easy/191-numerOneBits.js)
- [198. House Robber](https://leetcode.com/problems/house-robber/) - [Solution](./Easy/198-houseRobber.js)
- [202. Happy Number](https://leetcode.com/problems/happy-number/) - [Solution](./Easy/202-happyNumber.js)
- [203. Remove Linked List Elements](https://leetcode.com/problems/remove-linked-list-elements/) - [Solution](./Easy/203-removeLinkedListElements.js)
- [204. Count Primes](https://leetcode.com/problems/count-primes/) - [Solution](./Easy/204-countPrimes.js)
- [205. Isomorphic Strings](https://leetcode.com/problems/isomorphic-strings/) - [Solution](./Easy/205-isomorphicStrings.js)
- [206. Reverse Linked List](https://leetcode.com/problems/reverse-linked-list/) - [Solution](./Easy/206-reversedLinkedList.js)
- [217. Contains Duplicate](https://leetcode.com/problems/contains-duplicate/) - [Solution](./Easy/217-containsDuplicate.js)
- [219. Contains Duplicate II](https://leetcode.com/problems/contains-duplicate-ii/) - [Solution](./Easy/219-containsDuplicateII.js)
- [223. Rectangle Area](https://leetcode.com/problems/rectangle-area/) - [Solution](./Easy/223-rectangleArea.js)
- [225. Implement Stack using Queues](https://leetcode.com/problems/implement-stack-using-queues/) - [Solution](./Easy/225-stackUsingQueues.js)
- [226. Invert Binary Tree](https://leetcode.com/problems/invert-binary-tree/) - [Solution](./Easy/226-invertBinaryTree.js)
- [228. Summary Ranges](https://leetcode.com/problems/summary-ranges/) - [Solution](./Easy/228-summaryRanges.js)
- [231. Power of Two](https://leetcode.com/problems/power-of-two/) - [Solution](./Easy/231-powerOfTwo.js)
- [232. Implement Queue using Stacks](https://leetcode.com/problems/implement-queue-using-stacks/) - [Solution](./Easy/232-implementQueueUsingStack.js)
- [234. Palindrome Linked List](https://leetcode.com/problems/palindrome-linked-list/) - [Solution](./Easy/234-palindromeLinkedList.js)
- [235. Lowest Common Ancestor of a Binary Search Tree](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/) - [Solution](./Easy/235-lcaBST.js)
- [237. Delete Node in a Linked List](https://leetcode.com/problems/delete-node-in-a-linked-list/) - [Solution](./Easy/237-deleteLinkedListNode.js)
- [242. Valid Anagram](https://leetcode.com/problems/valid-anagram/) - [Solution](./Easy/242-anagram.js)
- [243. Shortest Word Distance](https://leetcode.com/problems/shortest-word-distance) - [Solution](./Medium/245-shortestWordDist.js)
- [258. Add Digits](https://leetcode.com/problems/add-digits/) - [Solution](./Easy/258-addDigits.js)
- [263. Ugly Number](https://leetcode.com/problems/ugly-number/) - [Solution](./Easy/263-uglyNumber.js)
- [278. First Bad Version](https://leetcode.com/problems/first-bad-version/) - [Solution](./Easy/278-firstBadVersion.js)
- [283. Move Zeroes](https://leetcode.com/problems/move-zeroes/) - [Solution](./Easy/283-moveZeros.js)
- [290. Word Pattern](https://leetcode.com/problems/word-pattern/) - [Solution](./Easy/290-wordPattern.js)
- [299. Bulls and Cows](https://leetcode.com/problems/bulls-and-cows/) - [Solution](./Easy/299-bullsandCows.js)
- [303. Range Sum Query - Immutable](https://leetcode.com/problems/range-sum-query-immutable/) - [Solution](./Easy/303-rangeSumQuery.js)
- [326. Power of Three](https://leetcode.com/problems/power-of-three/) - [Solution](./Easy/326-powerOfThree.js)
- [328. Odd Even Linked List](https://leetcode.com/problems/odd-even-linked-list/) - [Solution](./Easy/328-oddevenLinkedList.js)
- [342. Power of Four](https://leetcode.com/problems/power-of-four/) - [Solution](./Easy/342-powerOfFour.js)
- [344. Reverse String](https://leetcode.com/problems/reverse-string/) - [Solution](./Easy/344-reverseString.js)
- [349. Intersection of Two Arrays](https://leetcode.com/problems/intersection-of-two-arrays/) - [Solution](./Easy/349-intersectionTwoArrays.js)
- [350. Intersection of Two Arrays II](https://leetcode.com/problems/intersection-of-two-arrays-ii/) - [Solution](./Easy/349-intersectionTwoArraysII.js)
- [367. Valid Perfect Square](https://leetcode.com/problems/valid-perfect-square/) - [Solution](./Easy/367-perfectSquare.js)
- [412. Fizz Buzz](https://leetcode.com/problems/fizz-buzz/?tab=Solutions) - [Solution](./Easy/412-fizzBuzz.js)

##### Medium

- [1. Two Sum](https://leetcode.com/problems/two-sum/) - [Solution](./Medium/1-twoSum.js)
- [2. Add Two Numbers](https://leetcode.com/problems/add-two-numbers/) - [Solution](./Medium/2-addTwoNumbers.js)
- [3. Longest Substring Without Repeating Characters](https://oj.leetcode.com/problems/longest-substring-without-repeating-characters/) - [Solution](./Medium/3-lengthOfLongestSubstring.js)
- [5. Longest Palindromic Substring](https://leetcode.com/problems/longest-palindromic-substring/) - [Solution](./Medium/5-longestPalindromicSubstring.js)
- [11. Container With Most Water](https://leetcode.com/problems/container-with-most-water/) - [Solution](./Medium/11-containerMostWater.js)
- [12. Integer to Roman](https://leetcode.com/problems/integer-to-roman/) - [Solution](./Medium/12-integerToRoman.js)
- [15. 3Sum](https://leetcode.com/problems/3sum/) - [Solution](./Medium/15-3sum.js)
- [16. 3Sum Closest](https://leetcode.com/problems/3sum-closest/) - [Solution](./Medium/16-3sumClosest.js)
- [17. Letter Combinations of a Phone Number](https://leetcode.com/problems/letter-combinations-of-a-phone-number/) - [Solution](./Medium/17-LetterCombinationsPhoneNumber.js)
- [22. Generate Parentheses](https://leetcode.com/problems/generate-parentheses/) - [Solution](./Medium/22-generateParentheses.js)
- [29. Divide Two Integers](https://leetcode.com/problems/divide-two-integers/) - [Solution](./Medium/29-DivideTwoIntegers.js)
- [31. Next Permutation](https://leetcode.com/problems/next-permutation/) - [Solution](./Medium/31-nextPermutation.js)
- [31. Next Permutation](https://leetcode.com/problems/next-permutation/) - [Solution](./Medium/31-nextPermutation.js)
- [33. Search in Rotated Sorted Array](https://leetcode.com/problems/search-in-rotated-sorted-array/) - [Solution](./Medium/33-searchRotatedSortedArray.js)
- [34. Search for a Range](https://leetcode.com/problems/search-for-a-range/) - [Solution](./Medium/34-searchforRange.js)
- [39. Combination Sum](https://oj.leetcode.com/problems/combination-sum/) - [Solution](./Medium/39-combinationSum.js)
- [40. Combination Sum II](https://oj.leetcode.com/problems/combination-sum-ii/) - [Solution](./Medium/40-combinationSumII.js)
- [43. Multiply Strings](https://leetcode.com/problems/multiply-strings/) - [Solution](./Medium/43-multiplyStrings.js)
- [46. Permutations](https://leetcode.com/problems/permutations/) - [Solution](./Medium/46-permutations.js)
- [47. Permutations II](https://leetcode.com/problems/permutations-ii/) - [Solution](./Medium/47-permutationsII.js)
- [48. Rotate Image](https://leetcode.com/problems/rotate-image/) - [Solution](./Medium/48-rotateImage.js)
- [49. Group Anagrams](https://leetcode.com/problems/anagrams/) - [Solution](./Medium/49-groupAnagrams.js)
- [50. Pow(x, n)](https://leetcode.com/problems/powx-n/) - [Solution](./Medium/50-powerxn.js)
- [54. Spiral Matrix](https://leetcode.com/problems/spiral-matrix/) - [Solution](./Medium/54-spiralMatrix.js)
- [55. Jump Game](https://leetcode.com/problems/jump-game/) - [Solution](./Medium/55-jumpGame.js)
- [59. Spiral Matrix II](https://leetcode.com/problems/spiral-matrix-ii/) - [Solution](./Medium/59-spiralMatrixII.js)
- [60. Permutation Sequence](https://leetcode.com/problems/permutation-sequence/) - [Solution](./Medium/60-permutationSequence.js)
- [61. Rotate List](https://leetcode.com/problems/rotate-list/) - [Solution](./Medium/61-rotateList.js)
- [62. Unique Paths](https://leetcode.com/problems/unique-paths/) - [Solution](./Medium/62-uniquePaths.js)
- [63. Unique Paths II](https://leetcode.com/problems/unique-paths-ii/) - [Solution](./Medium/63-uniquePathsII.js)
- [64. Minimum Path Sum](https://leetcode.com/problems/minimum-path-sum/) - [Solution](./Medium/64-minimumPathSum.js)
- [69. Sqrt(x)](https://leetcode.com/problems/sqrtx/) - [Solution](./Medium/69-sqrtx.js)
- [71. Simplify Path](https://leetcode.com/problems/simplify-path/) - [Solution](./Medium/71-simplifyPath.js)
- [73. Set Matrix Zeroes](https://leetcode.com/problems/set-matrix-zeroes/) - [Solution](./Medium/73-setMatrixZeroes.js)
- [74. Search a 2D Matrix](https://leetcode.com/problems/search-a-2d-matrix/) - [Solution](./Medium/74-search2DMatrix.js)
- [75. Sort Colors](https://leetcode.com/problems/sort-colors/) - [Solution](./Medium/75-sortColors.js)
- [77. Combinations](https://leetcode.com/problems/combinations/) - [Solution](./Medium/77-combinations.js)
- [78. Subsets](https://leetcode.com/problems/subsets/) - [Solution](./Medium/78-subsets.js)
- [79. Word Search](https://leetcode.com/problems/word-search/) - [Solution](./Medium/79-wordSearch.js)
- [80. Remove Duplicates from Sorted Array II](https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/) - [Solution](./Medium/80-removeDuplicatesII.js)
- [81. Search in Rotated Sorted Array II](https://leetcode.com/problems/search-in-rotated-sorted-array-ii/) - [Solution](./Medium/81-searchRotatedSortedArrayII.js)
- [82. Remove Duplicates from Sorted List II](https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/) - [Solution](./Medium/82-removeDuplicatesListII.js)
- [86. Partition List](https://leetcode.com/problems/partition-list/) - [Solution](./Medium/86-partition-List.js)
- [89. Gray Code](https://leetcode.com/problems/gray-code/) - [Solution](./Medium/89-grayCode.js)
- [90. Subsets II ](https://leetcode.com/problems/subsets-ii/) - [Solution](./Medium/90-subsetsII.js)
- [91. Decode Ways ](https://leetcode.com/problems/decode-ways/) - [Solution](./Medium/91-decodeways.js)
- [92. Reverse Linked List II](https://leetcode.com/problems/reverse-linked-list-ii/) - [Solution](./Medium/92-reverseLinkedListII.js)
- [93. Restore IP Addresses](https://leetcode.com/problems/restore-ip-addresses/) - [Solution](./Medium/93-restoreIPAddresses.js)
- [94. Binary Tree Inorder Traversal](https://leetcode.com/problems/binary-tree-inorder-traversal/) - [Solution](./Medium/94-binaryTreeInorder.js)
- [96. Unique Binary Search Trees](https://leetcode.com/problems/unique-binary-search-trees/) - [Solution](./Medium/96-uniqueBinarySearchTrees.js)
- [98. Validate Binary Search Tree](https://leetcode.com/problems/validate-binary-search-tree/) - [Solution](./Medium/98-validateBST.js)
- [103. Binary Tree Zigzag Level Order Traversal](https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/) - [Solution](./Medium/103-BSTZigzagLevelTraversal.js)
- [105. Construct Binary Tree from Preorder and Inorder Traversal](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/) - [Solution](./Medium/105-constructBinaryTree.js)
- [106. Construct Binary Tree from Inorder and Postorder Traversal](https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/) - [Solution](./Medium/106-constructBinaryTree.js)
- [108. Convert Sorted Array to Binary Search Tree](https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/) - [Solution](./Medium/108-convertSortedArraytoBST.js)
- [109. Convert Sorted List to Binary Search Tree](https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree/) - [Solution](./Medium/109-convertSortedListToBST.js)
- [113. Path Sum II](https://leetcode.com/problems/path-sum-ii/) - [Solution](./Medium/113-pathSumII.js)
- [114. Flatten Binary Tree to Linked List](https://leetcode.com/problems/flatten-binary-tree-to-linked-list/) - [Solution](./Medium/114-flattenTree.js)
- [116. Populating Next Right Pointers in Each Node](https://leetcode.com/problems/populating-next-right-pointers-in-each-node/) - [Solution](./Medium/116-PopulatingNextRightPointersinEachNode.js)
- [120. Triangle](https://leetcode.com/problems/triangle/) - [Solution](./Medium/120-triangle.js)
- [121. Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/) - [Solution](./Medium/121-bestTimeToBuySellStock.js)
- [122. Best Time to Buy and Sell Stock II](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/) - [Solution](./Medium/122-bestTimeToBuySellStockII.js)
- [129. Sum Root to Leaf Numbers](https://leetcode.com/problems/sum-root-to-leaf-numbers/) - [Solution](./Medium/129-sumRootToLeafNumbers.js)
- [127. Word Ladder](https://leetcode.com/problems/word-ladder/) - [Solution](./Medium/127-wordLadder.js)
- [130. Surrounded Regions](https://leetcode.com/problems/surrounded-regions/) - [Solution](./Medium/130-surroundedRegions.js)
- [131. Palindrome Partitioning](https://leetcode.com/problems/palindrome-partitioning/) - [Solution](./Medium/131-palindromePartitioning.js)
- [134. Gas Station](https://leetcode.com/problems/gas-station/) - [Solution](./Medium/134-gasStation.js)
- [136. Single Number](https://leetcode.com/problems/single-number/) - [Solution](./Medium/136-singleNumber.js)
- [139. Word Break](https://leetcode.com/problems/word-break/) - [Solution](./Medium/139-wordBreak.js)
- [141. Linked List Cycle](https://leetcode.com/problems/linked-list-cycle/) - [Solution](./Medium/141-linkedListCycle.js)
- [142. Linked List Cycle II](https://leetcode.com/problems/linked-list-cycle-ii/) - [Solution](./Medium/142-linkedListCycleII.js)
- [143. Reorder List](https://leetcode.com/problems/reorder-list/) - [Solution](./Medium/143-reorderList.js)
- [144. Binary Tree Preorder Traversal](https://leetcode.com/problems/binary-tree-preorder-traversal/) - [Solution](./Medium/144-binaryTreePreorder.js)
- [147. Insertion Sort List](https://leetcode.com/problems/insertion-sort-list/) - [Solution](./Medium/147-insertionSortList.js)
- [148. Sort List](https://leetcode.com/problems/sort-list/) - [Solution](./Medium/148-sortList.js)
- [150. Evaluate Reverse Polish Notation](https://leetcode.com/problems/evaluate-reverse-polish-notation/) - [Solution](./Medium/150-reversePolishNotation.js)
- [151. Reverse Words in a String](https://leetcode.com/problems/reverse-words-in-a-string/) - [Solution](./Medium/151-reverseWordsInAString.js)
- [152. Maximum Product Subarray](https://leetcode.com/problems/maximum-product-subarray/) - [Solution](./Medium/152-MaxProductSubarray.js)
- [153. Find Minimum in Rotated Sorted Array](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/) - [Solution](./Medium/153-findMinimumInRotatedSortedArray.js)
- [162. Find Peak Element](https://leetcode.com/problems/find-peak-element/) - [Solution](./Medium/162-findPeakElement.js)
- [173. Binary Search Tree Iterator](https://leetcode.com/problems/binary-search-tree-iterator/) - [Solution](./Medium/173-binarySearchTreeIterator.js)
- [179. Largest Number](https://leetcode.com/problems/largest-number/) - [Solution](./Medium/179-largestNumber.js)
- [199. Binary Tree Right Side View](https://leetcode.com/problems/binary-tree-right-side-view/) - [Solution](./Medium/199-binaryTreeRightSideView.js)
- [213. House Robber II](https://leetcode.com/problems/house-robber-ii/) - [Solution](./Medium/213-houseRobberII.js)
- [215. Kth Largest Element in an Array](https://leetcode.com/problems/kth-largest-element-in-an-array/) - [Solution](./Medium/215-KthLargestElementInArray.js)
- [216. Combination Sum III](https://leetcode.com/problems/combination-sum-iii/) - [Solution](./Medium/216-CombinationSumIII.js)
- [221. Maximal Square](https://leetcode.com/problems/maximal-square/) - [Solution](./Medium/221-maximalSquare.js)
- [227. Basic Calculator II](https://leetcode.com/problems/basic-calculator-ii/) - [Solution](./Medium/227-calculatorII.js)
- [229. Majority Element II](https://leetcode.com/problems/majority-element-ii/) - [Solution](./Medium/229-majorityElementII.js)
- [230. Kth Smallest Element in a BST](https://leetcode.com/problems/kth-smallest-element-in-a-bst/) - [Solution](./Medium/230-kthSmallestElementinBST.js)
- [236. Lowest Common Ancestor of a Binary Tree](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/) - [Solution](./Medium/236-lcaBinaryTree.js)
- [238. Product of Array Except Self](https://leetcode.com/problems/product-of-array-except-self/) - [Solution](./Medium/238-productExceptSelf.js)
- [240. Search a 2D Matrix II](https://leetcode.com/problems/search-a-2d-matrix-ii/) - [Solution](./Medium/240-Search2DMatrixII.js)
- [241. Different Ways to Add Parentheses](https://leetcode.com/problems/different-ways-to-add-parentheses/) - [Solution](./Medium/241-differentWaysAddParentheses.js)
- [244. Shortest Word Distance II](https://leetcode.com/problems/shortest-word-distance-ii) - [Solution](./Medium/245-shortestWordDistII.js)
- [245. Shortest Word Distance III](https://leetcode.com/problems/shortest-word-distance-iii) - [Solution](./Medium/245-shortestWordDistIII.js)
- [260. Single Number III](https://leetcode.com/problems/single-number-iii/) - [Solution](./Medium/260-singleNumberIII.js)
- [268. Missing Number](https://leetcode.com/problems/missing-number/) - [Solution](./Medium/268-missingNumber.js)
- [274. H-Index](https://leetcode.com/problems/h-index/) - [Solution](./Medium/274-hIndex.js)
- [284. Peeking Iterator](https://leetcode.com/problems/peeking-iterator/) - [Solution](./Medium/284-peekingIterator.java)
- [300. Longest Increasing Subsequence](https://leetcode.com/problems/longest-increasing-subsequence/) - [Solution](./Medium/300-longestIncreasingSubsequence.js)
- [309. Best Time to Buy and Sell Stock with Cooldown](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/) - [Solution](./Medium/309-bestTimeStockCooldown.js)
- [318. Maximum Product of Word Lengths](https://leetcode.com/problems/maximum-product-of-word-lengths/) - [Solution](./Medium/318-maximumProductWordLengths.js)
- [319. Bulb Switcher](https://leetcode.com/problems/bulb-switcher/) - [Solution](./Medium/319-bulbSwitcher.js)
- [331. Verify Preorder Serialization of a Binary Tree](https://leetcode.com/problems/verify-preorder-serialization-of-a-binary-tree/) - [Solution](./Medium/331-verifyBinaryTree.js)
- [337. House Robber III](https://leetcode.com/problems/house-robber-iii/) - [Solution](./Medium/337-houseRobberIII.js)
- [338. Counting Bits](https://leetcode.com/problems/counting-bits/) - [Solution](./Medium/338-countingBits.js)
- [347. Top K Frequent Elements](https://leetcode.com/problems/top-k-frequent-elements/) - [Solution](./Medium/247-topKFrequentElements.js)
- [515. Find Largest Value in Each Tree Row](https://leetcode.com/problems/find-largest-value-in-each-tree-row/) - [Solution](./Medium/515-largestValEachTree.js)

##### Hard

- [23. Merge k Sorted Lists](https://leetcode.com/problems/merge-k-sorted-lists/) - [Solution](./Hard/23-MergeKSortedLists.js)
- [25. Reverse Nodes in k-Group](https://leetcode.com/problems/reverse-nodes-in-k-group/) - [Solution](./Hard/25-reverseNodesInKGroup.js)
- [32. Longest Valid Parentheses](https://leetcode.com/problems/longest-valid-parentheses/) - [Solution](./Hard/32-longestValidParentheses.js)
- [41. First Missing Positive](https://leetcode.com/problems/first-missing-positive/) - [Solution](./Hard/41-firstMissingPositive.js)
- [45. Jump Game II](https://leetcode.com/problems/jump-game-ii/) - [Solution](./Hard/45-jumpGameII.js)
- [56. Merge Intervals](https://leetcode.com/problems/merge-intervals/) - [Solution](./Hard/56-MergeIntervals.js)
- [57. Insert Interval](https://leetcode.com/problems/insert-interval/) - [Solution](./Hard/57-insertInterval.js)
- [65. Valid Number](https://leetcode.com/problems/valid-number/) - [Solution](./Hard/65-validNumber.js)
- [115. Distinct Subsequences](https://leetcode.com/problems/distinct-subsequences/) - [Solution](./Hard/115-distinctSubsequences.js)
- [117. Populating Next Right Pointers in Each Node II](https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii/) - [Solution](./Hard/117-populatingNextRightII.js)
- [123. Best Time to Buy and Sell Stock III](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/) - [Solution](./Hard/123-bestTimeBuySellStockIII.js)
- [132. Palindrome Partitioning II](https://leetcode.com/problems/palindrome-partitioning-ii/) - [Solution](./Hard/132-palindromePartitioningII.js)
- [145. Binary Tree Postorder Traversal](https://leetcode.com/problems/binary-tree-postorder-traversal/) - [Solution](./Hard/145-binaryTreePostorder.js)
- [154. Find Minimum in Rotated Sorted Array II](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array-ii/) - [Solution](./Hard/154-findMinimumInRotatedSortedArray-II.js)
- [273. Integer to English Words](https://leetcode.com/problems/integer-to-english-words/) - [Solution](./Hard/273-integerToEnglish.js)
- [287. Find the Duplicate Number](https://leetcode.com/problems/find-the-duplicate-number/) - [Solution](./Hard/287-findDuplicateNumber.js)

# <span id="asymptotic-notation"></span>Asymptotic Notation

### Definition:

Asymptotic Notation is the hardware independent notation used to tell the time and space complexity of an algorithm. Meaning it’s a standardized way of measuring how much memory an algorithm uses or how long it runs for given an input.

### Complexities

The following are the Asymptotic rates of growth from best to worst:

- constant growth - `O(1)` Runtime is constant and does not grow with `n`
- logarithmic growth – `O(log n)` Runtime grows logarithmically in proportion to `n`
- linear growth – `O(n)` Runtime grows directly in proportion to `n`
- superlinear growth – `O(n log n)` Runtime grows in proportion _and_ logarithmically to `n`
- polynomial growth – `O(n^c)` Runtime grows quicker than previous all based on `n`
- exponential growth – `O(c^n)` Runtime grows even faster than polynomial growth based on `n`
- factorial growth – `O(n!)` Runtime grows the fastest and becomes quickly unusable for even small values of `n` [(source: Soumyadeep Debnath, _Analysis of Algorithms | Big-O analysis_)](https://www.geeksforgeeks.org/analysis-algorithms-big-o-analysis/) Visualized below; the x-axis representing input size and the y-axis representing complexity: ![#](https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Comparison_computational_complexity.svg/400px-Comparison_computational_complexity.svg.png) [(source: Wikipedia, _Computational Complexity of Mathematical Operations_)](https://en.wikipedia.org/wiki/Computational_complexity_of_mathematical_operations)

### Big-O notation

Big-O refers to the upper bound of time or space complexity of an algorithm, meaning it worst case runtime scenario. An easy way to think of it is that runtime could be better than Big-O but it will never be worse.

### Big-Ω (Big-Omega) notation

Big-Omega refers to the lower bound of time or space complexity of an algorithm, meaning it is the best runtime scenario. Or runtime could worse than Big-Omega, but it will never be better.

### Big-θ (Big-Theta) notation

Big-Theta refers to the tight bound of time or space complexity of an algorithm. Another way to think of it is the intersection of Big-O and Big-Omega, or more simply runtime is guaranteed to be a given complexity, such as `n log n`.

### What you need to know

- Big-O and Big-Theta are the most common and helpful notations
- Big-O does _not_ mean Worst Case Scenario, Big-Theta does _not_ mean average case, and Big-Omega does _not_ mean Best Case Scenario. They only connote the algorithm’s performance for a particular scenario, and all three can be used for any scenario.
- Worst Case means given an unideal input, Average Case means given a typical input, Best case means a ideal input. Ex. Worst case means given an input the algorithm performs particularly bad, or best case an already sorted array for a sorting algorithm.
- Best Case and Big Omega are generally not helpful since Best Cases are rare in the real world and lower bound might be very different than an upper bound.
- Big-O isn’t everything. On paper merge sort is faster than quick sort, but in practice quick sort is superior.

# <span id="data-structures"></span>Data Structures

### <span id="array"></span> Array

### Definition

- Stores data elements based on an sequential, most commonly 0 based, index.
- Based on [tuples](http://en.wikipedia.org/wiki/Tuple) from set theory.
- They are one of the oldest, most commonly used data structures.

### What you need to know

- Optimal for indexing; bad at searching, inserting, and deleting (except at the end).
- **Linear arrays**, or one dimensional arrays, are the most basic.
  - Are static in size, meaning that they are declared with a fixed size.
- **Dynamic arrays** are like one dimensional arrays, but have reserved space for additional elements.
  - If a dynamic array is full, it copies its contents to a larger array.
- **Multi dimensional arrays** nested arrays that allow for multiple dimensions such as an array of arrays providing a 2 dimensional spacial representation via x, y coordinates.

### Time Complexity

- Indexing: Linear array: `O(1)`, Dynamic array: `O(1)`
- Search: Linear array: `O(n)`, Dynamic array: `O(n)`
- Optimized Search: Linear array: `O(log n)`, Dynamic array: `O(log n)`
- Insertion: Linear array: n/a, Dynamic array: `O(n)`

### <span id="linked-list"></span> Linked List

### Definition

- Stores data with **nodes** that point to other nodes.
  - Nodes, at its most basic it has one datum and one reference (another node).
  - A linked list _chains_ nodes together by pointing one node’s reference towards another node.

### What you need to know

- Designed to optimize insertion and deletion, slow at indexing and searching.
- **Doubly linked list** has nodes that also reference the previous node.
- **Circularly linked list** is simple linked list whose **tail**, the last node, references the **head**, the first node.
- **Stack**, commonly implemented with linked lists but can be made from arrays too.
  - Stacks are **last in, first out** (LIFO) data structures.
  - Made with a linked list by having the head be the only place for insertion and removal.
- **Queues**, too can be implemented with a linked list or an array.
  - Queues are a **first in, first out** (FIFO) data structure.
  - Made with a doubly linked list that only removes from head and adds to tail.

### Time Complexity

- Indexing: Linked Lists: `O(n)`
- Search: Linked Lists: `O(n)`
- Optimized Search: Linked Lists: `O(n)`
- Append: Linked Lists: `O(1)`
- Prepend: Linked Lists: `O(1)`
- Insertion: Linked Lists: `O(n)`

### <span id="hash"></span> Hash Table or Hash Map

### Definition

- Stores data with key value pairs.
- **Hash functions** accept a key and return an output unique only to that specific key.
  - This is known as **hashing**, which is the concept that an input and an output have a one-to-one correspondence to map information.
  - Hash functions return a unique address in memory for that data.

### What you need to know

- Designed to optimize searching, insertion, and deletion.
- **Hash collisions** are when a hash function returns the same output for two distinct inputs.
  - All hash functions have this problem.
  - This is often accommodated for by having the hash tables be very large.
- Hashes are important for associative arrays and database indexing.

### Time Complexity

- Indexing: Hash Tables: `O(1)`
- Search: Hash Tables: `O(1)`
- Insertion: Hash Tables: `O(1)`

### <span id="binary-tree"></span> Binary Tree

### Definition

- Is a tree like data structure where every node has at most two children.
  - There is one left and right child node.

### What you need to know

- Designed to optimize searching and sorting.
- A **degenerate tree** is an unbalanced tree, which if entirely one-sided, is essentially a linked list.
- They are comparably simple to implement than other data structures.
- Used to make **binary search trees**.
  - A binary tree that uses comparable keys to assign which direction a child is.
  - Left child has a key smaller than its parent node.
  - Right child has a key greater than its parent node.
  - There can be no duplicate node.
  - Because of the above it is more likely to be used as a data structure than a binary tree.

### Time Complexity

- Indexing: Binary Search Tree: `O(log n)`
- Search: Binary Search Tree: `O(log n)`
- Insertion: Binary Search Tree: `O(log n)`

# <span id="algorithms"></span> Algorithms

## <span id="algorithm-basics"></span> Algorithm Basics

### Recursive Algorithms

### Definition

- An algorithm that calls itself in its definition.
  - **Recursive case** a conditional statement that is used to trigger the recursion.
  - **Base case** a conditional statement that is used to break the recursion.

### What you need to know

- **Stack level too deep** and **stack overflow**.
  - If you’ve seen either of these from a recursive algorithm, you messed up.
  - It means that your base case was never triggered because it was faulty or the problem was so massive you ran out of alloted memory.
  - Knowing whether or not you will reach a base case is integral to correctly using recursion.
  - Often used in Depth First Search

### Iterative Algorithms

### Definition

- An algorithm that is called repeatedly but for a finite number of times, each time being a single iteration.
  - Often used to move incrementally through a data set.

### What you need to know

- Generally you will see iteration as loops, for, while, and until statements.
- Think of iteration as moving one at a time through a set.
- Often used to move through an array.

### Recursion Vs. Iteration

- The differences between recursion and iteration can be confusing to distinguish since both can be used to implement the other. But know that,
  - Recursion is, usually, more expressive and easier to implement.
  - Iteration uses less memory.
- **Functional languages** tend to use recursion. (i.e. Haskell)
- **Imperative languages** tend to use iteration. (i.e. Ruby)
- Check out this [Stack Overflow post](http://stackoverflow.com/questions/19794739/what-is-the-difference-between-iteration-and-recursion) for more info.

### Pseudo Code of Moving Through an Array

    | Recursion                    | Iteration                     |
    | ---------------------------- | ----------------------------- |
    | recursive method (array, n)  | iterative method (array)      |
    | if array[n] is not nil       | for n from 0 to size of array |
    | print array[n]               | print(array[n])               |
    | recursive method(array, n+1) |
    | else                         |
    | exit loop                    |

### Greedy Algorithms

### Definition

- An algorithm that, while executing, selects only the information that meets a certain criteria.
- The general five components, taken from [Wikipedia](http://en.wikipedia.org/wiki/Greedy_algorithm#Specifics):
  - A candidate set, from which a solution is created.
  - A selection function, which chooses the best candidate to be added to the solution.
  - A feasibility function, that is used to determine if a candidate can be used to contribute to a solution.
  - An objective function, which assigns a value to a solution, or a partial solution.
  - A solution function, which will indicate when we have discovered a complete solution.

### What you need to know

- Used to find the expedient, though non-optimal, solution for a given problem.
- Generally used on sets of data where only a small proportion of the information evaluated meets the desired result.
- Often a greedy algorithm can help reduce the Big O of an algorithm.

### Pseudo Code of a Greedy Algorithm to Find Largest Difference of any Two Numbers in an Array.

    greedy algorithm (array)
      let largest difference = 0
      let new difference = find next difference (array[n], array[n+1])
      largest difference = new difference if new difference is > largest difference
      repeat above two steps until all differences have been found
      return largest difference

This algorithm never needed to compare all the differences to one another, saving it an entire iteration.

## <span id="search-algorithms"></span>Search Algorithms

### <span id="breadth-first-search"></span>Breadth First Search

### Definition

- An algorithm that searches a tree (or graph) by searching levels of the tree first, starting at the root.
  - It finds every node on the same level, most often moving left to right.
  - While doing this it tracks the children nodes of the nodes on the current level.
  - When finished examining a level it moves to the left most node on the next level.
  - The bottom-right most node is evaluated last (the node that is deepest and is farthest right of it’s level).

### What you need to know

- Optimal for searching a tree that is wider than it is deep.
- Uses a queue to store information about the tree while it traverses a tree.
  - Because it uses a queue it is more memory intensive than **depth first search**.
  - The queue uses more memory because it needs to stores pointers

### Time Complexity

- Search: Breadth First Search: O(V + E)
- E is number of edges
- V is number of vertices

### <span id="depth-first-search"></span>Depth First Search

### Definition

- An algorithm that searches a tree (or graph) by searching depth of the tree first, starting at the root.
  - It traverses left down a tree until it cannot go further.
  - Once it reaches the end of a branch it traverses back up trying the right child of nodes on that branch, and if possible left from the right children.
  - When finished examining a branch it moves to the node right of the root then tries to go left on all it’s children until it reaches the bottom.
  - The right most node is evaluated last (the node that is right of all it’s ancestors).

### What you need to know

- Optimal for searching a tree that is deeper than it is wide.
- Uses a stack to push nodes onto.
  - Because a stack is LIFO it does not need to keep track of the nodes pointers and is therefore less memory intensive than breadth first search.
  - Once it cannot go further left it begins evaluating the stack.

### Time Complexity

- Search: Depth First Search: O(|E| + |V|)
- E is number of edges
- V is number of vertices

### Breadth First Search Vs. Depth First Search

- The simple answer to this question is that it depends on the size and shape of the tree.
  - For wide, shallow trees use Breadth First Search
  - For deep, narrow trees use Depth First Search

### Nuances

- Because BFS uses queues to store information about the nodes and its children, it could use more memory than is available on your computer. (But you probably won’t have to worry about this.)
- If using a DFS on a tree that is very deep you might go unnecessarily deep in the search. See [xkcd](http://xkcd.com/761/) for more information.
- Breadth First Search tends to be a looping algorithm.
- Depth First Search tends to be a recursive algorithm.

## <span id="sorting-algorithms"></span>Sorting Algorithms

### <span id="selection-sort"></span>Selection Sort

### Definition

- A comparison based sorting algorithm.
  - Starts with the cursor on the left, iterating left to right
  - Compares the left side to the right, looking for the smallest known item
    - If the left is smaller than the item to the right it continues iterating
    - If the left is bigger than the item to the right, the item on the right becomes the known smallest number
    - Once it has checked all items, it moves the known smallest to the cursor and advances the cursor to the right and starts over
  - As the algorithm processes the data set, it builds a fully sorted left side of the data until the entire data set is sorted
- Changes the array in place.

### What you need to know

- Inefficient for large data sets.
- Very simple to implement.

### Time Complexity

- Best Case Sort: Merge Sort: `O(n^2)`
- Average Case Sort: Merge Sort: `O(n^2)`
- Worst Case Sort: Merge Sort: `O(n^2)`

### Space Complexity

- Worst Case: `O(1)`

### Visualization

![#](https://upload.wikimedia.org/wikipedia/commons/9/94/Selection-Sort-Animation.gif) [(source: Wikipedia, _Insertion Sort_)](https://en.wikipedia.org/wiki/Selection_sort)

### <span id="insertion-sort"></span>Insertion Sort

### Definition

- A comparison based sorting algorithm.
  - Iterates left to right comparing the current cursor to the previous item.
  - If the cursor is smaller than the item on the left it swaps positions and the cursor compares itself again to the left hand side until it is put in its sorted position.
  - As the algorithm processes the data set, the left side becomes increasingly sorted until it is fully sorted.
- Changes the array in place.

### What you need to know

- Inefficient for large data sets, but can be faster for than other algorithms for small ones.
- Although it has an `O(n^2)`, in practice it slightly less since its comparison scheme only requires checking place if its smaller than its neighbor.

### Time Complexity

- Best Case: `O(n)`
- Average Case: `O(n^2)`
- Worst Case: `O(n^2)`

### Space Complexity

- Worst Case: `O(n)`

### Visualization

![#](https://upload.wikimedia.org/wikipedia/commons/0/0f/Insertion-sort-example-300px.gif) [(source: Wikipedia, _Insertion Sort_)](https://en.wikipedia.org/wiki/Insertion_sort)

### <span id="merge-sort"></span>Merge Sort

### Definition

- A divide and conquer algorithm.
  - Recursively divides entire array by half into subsets until the subset is one, the base case.
  - Once the base case is reached results are returned and sorted ascending left to right.
  - Recursive calls are returned and the sorts double in size until the entire array is sorted.

### What you need to know

- This is one of the fundamental sorting algorithms.
- Know that it divides all the data into as small possible sets then compares them.

### Time Complexity

- Worst Case: `O(n log n)`
- Average Case: `O(n log n)`
- Best Case: `O(n)`

### Space Complexity

- Worst Case: `O(1)`

### Visualization

![#](https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Merge_sort_algorithm_diagram.svg/400px-Merge_sort_algorithm_diagram.svg.png) [(source: Wikipedia, _Merge Sort_)](https://en.wikipedia.org/wiki/Merge_sort)

### <span id="quick-sort"></span>Quicksort

### Definition

- A divide and conquer algorithm
  - Partitions entire data set in half by selecting a random pivot element and putting all smaller elements to the left of the element and larger ones to the right.
  - It repeats this process on the left side until it is comparing only two elements at which point the left side is sorted.
  - When the left side is finished sorting it performs the same operation on the right side.
- Computer architecture favors the quicksort process.
- Changes the array in place.

### What you need to know

- While it has the same Big O as (or worse in some cases) many other sorting algorithms it is often faster in practice than many other sorting algorithms, such as merge sort.

### Time Complexity

- Worst Case: `O(n^2)`
- Average Case: `O(n log n)`
- Best Case: `O(n log n)`

### Space Complexity

- Worst Case: `O(log n)`

### Visualization

![#](https://upload.wikimedia.org/wikipedia/commons/6/6a/Sorting_quicksort_anim.gif) [(source: Wikipedia, _Quicksort_)](https://en.wikipedia.org/wiki/Quicksort)

### Merge Sort Vs. Quicksort

- Quicksort is likely faster in practice, but merge sort is faster on paper.
- Merge Sort divides the set into the smallest possible groups immediately then reconstructs the incrementally as it sorts the groupings.
- Quicksort continually partitions the data set by a pivot, until the set is recursively sorted.

## <span id="additional-resources"></span>Additional Resources

[Khan Academy’s Algorithm Course](https://www.khanacademy.org/computing/computer-science/algorithms)

### What is ARIA and when should you use it?

### Answer

ARIA stands for “Accessible Rich Internet Applications”, and is a technical specification created by the World Wide Web Consortium (W3C). Better known as WAI-ARIA, it provides additional HTML attributes in the development of web applications to offer people who use assistive technologies (AT) a more robust and interoperable experience with dynamic components. By providing the component’s role, name, and state, AT users can better understand how to interact with the component. WAI-ARIA should only be used when an HTML element equivalent is not available or lacks full browser or AT support. WAI-ARIA’s semantic markup coupled with JavaScript works to provide an understandable and interactive experience for people who use AT. An example using ARIA:

…

Credit: W3C’s [ARIA 1.1 Combobox with Grid Popup Example](https://w3c.github.io/aria-practices/examples/combobox/aria1.1pattern/grid-combo.html)

### Don’t forget:

- Accessible Rich Internet Applications
- Benefits people who use assistive technologies (AT)
- Provides role, name, and state
- Semantic HTML coupled with JavaScript

### Additional links

- [WAI-ARIA Overview](https://www.w3.org/WAI/standards-guidelines/aria/)
- [WAI-ARIA Spec](https://www.w3.org/TR/wai-aria/)
- [ARIA Serious? Eric Eggert presentation](https://youtu.be/4bH57rWPnYo)

### What is the minimum recommended ratio of contrast between foreground text and background to comply with WCAG? Why does this matter?

### Answer

4.5:1 is the calculated contrast ratio between foreground text and background that is recommended by the Web Content Accessibiity Guidelines (WCAG) success criteria (SC) 1.4.3: Contrast (Minimum). This SC was written by the World Wide Web Consortium (W3C) to ensure that people with low vision or color deficiencies are able to read (perceive) important content on a web page. It goes beyond color choices to ensure text stands out on the background it’s placed on.

### Don’t forget:

- At least 4.5:1 contrast ratio between foreground text and background
- Benefits people with low vision or color deficiencies

### Additional links

- [Understanding SC 1.4.3](https://www.alaskawebdev.com/contact)
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Contrast Ratio checker](https://contrast-ratio.com/#)

### What are some of the tools available to test the accessibility of a website or web application?

### Answer

There are multiple tools that can help you to find for accessibility issues in your website or application. Check for issues in your website:

- Lighthouse from Google, it provides an option for accessibility testing, it will check for the compliance of different accessibility standards and give you an score with details on the different issues
- Axe Coconut from DequeLabs, it is a Chrome extension that adds a tab in the Developer tools, it will check for accessibility issues and it will classify them by severity and suggest possible solutions Check for issues in your code: \* Jest Axe, you can add unit tests for accessibility \* React Axe, test your React application with the axe-core accessibility testing library. Results will show in the Chrome DevTools console. \* eslint-plugin-jsx-a11y, pairing this plugin with an editor lint plugin, you can bake accessibility standards into your application in real-time. Check for individual issues: \* Color Contrast checkers \* Use a screen reader \* Use only keyboard to navigate your site

### Don’t forget:

- None of the tools will replace manual testing
- Mention of different ways to test accessibility

### Additional links

- [Jest Axe](https://github.com/nickcolley/jest-axe)
- [eslint-plugin-jsx-a11y](https://www.w3.org/TR/wai-aria/)
- [React axe](https://github.com/dequelabs/react-axe)
- [Accessibility Checklist](http://romeo.elsevier.com/accessibility_checklist/)

### What is the Accessibility Tree?

### Answer

The Accessibility Tree is a structure produced by the browser’s Accessibility APIs which provides accessibility information to assistive technologies such as screen readers. It runs parallel to the DOM and is similar to the DOM API, but with much fewer nodes, because a lot of that information is only useful for visual presentation. By writing semantic HTML we can take advantage of this process in creating an accessible experience for our users.

### Don’t forget:

- Tree structure exposing information to assistive technologies
- Runs parallel to the DOM
- Semantic HTML is essential in creating accessible experiences

### Additional links

- [Accessibility APIs](https://www.smashingmagazine.com/2015/03/web-accessibility-with-accessibility-api/)

### What is the purpose of the `alt` attribute on images?

### Answer

The `alt` attribute provides alternative information for an image if a user cannot view it. The `alt` attribute should be used to describe any images except those which only serve a decorative purpose, in which case it should be left empty.

### Don’t forget:

- Decorative images should have an empty `alt` attribute.
- Web crawlers use `alt` tags to understand image content, so they are considered important for Search Engine Optimization (SEO).
- Put the `.` at the end of `alt` tag to improve accessibility.

### Additional links

- [A good basis for accessibility](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/HTML)

### What are `defer` and `async` attributes on a `<script>` tag?

### Answer

If neither attribute is present, the script is downloaded and executed synchronously, and will halt parsing of the document until it has finished executing (default behavior). Scripts are downloaded and executed in the order they are encountered. The `defer` attribute downloads the script while the document is still parsing but waits until the document has finished parsing before executing it, equivalent to executing inside a `DOMContentLoaded` event listener. `defer` scripts will execute in order. The `async` attribute downloads the script during parsing the document but will pause the parser to execute the script before it has fully finished parsing. `async` scripts will not necessarily execute in order. Note: both attributes must only be used if the script has a `src` attribute (i.e. not an inline script).

    <script src="myscript.js"></script>
    <script src="myscript.js" defer></script>
    <script src="myscript.js" async></script>

### Don’t forget:

- Placing a `defer` script in the `<head>` allows the browser to download the script while the page is still parsing, and is therefore a better option than placing the script before the end of the body.
- If the scripts rely on each other, use `defer`.
- If the script is independent, use `async`.
- Use `defer` if the DOM must be ready and the contents are not placed within a `DOMContentLoaded` listener.

### Additional links

- [async vs defer attributes](http://www.growingwiththeweb.com/2014/02/async-vs-defer-attributes.html)

### What is an `async` function?

```js
    async function foo() {
      ...
    }

```

### Answer

An `async` function is a function that allows you to pause the function’s execution while it waits for (`await`s) a promise to resolve. It’s an abstraction on top of the Promise API that makes asynchronous operations _look_ like they’re synchronous. `async` functions automatically return a Promise object. Whatever you `return` from the `async` function will be the promise’s _resolution_. If instead you `throw` from the body of an `async` function, that will be how your async function _rejects_ the promise it returns. Most importantly, `async` functions are able to use the `await` keyword in their function body, which **pauses the function** until the operation after the `await` completes, and allows it to return that operation’s result to a variable synchronously.

```js
// Normal promises in regular function:
function foo() {
  promiseCall().then((result) => {
    // do something with the result
  });
}
// async functions
async function foo() {
  const result = await promiseCall();
  // do something with the result
}
```

### Don’t forget:

- `async` functions are just syntactic sugar on top of Promises.
- They make asynchronous operations look like synchronous operations in your function.
- They implicitly return a promise which resolves to whatever your `async` function returns, and reject to whatever your `async` function `throw`s.

### Additional links

- [MDN Docs - async function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
- [MDN Docs - await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)

### Create a function `batches` that returns the maximum number of whole batches that can be cooked from a recipe.

```js
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
);
batches(
  { milk: 100, flour: 4, sugar: 10, butter: 5 },
  { milk: 1288, flour: 9, sugar: 95 }
);
// 1 batch can be made
batches(
  { milk: 100, butter: 50, cheese: 10 },
  { milk: 198, butter: 52, cheese: 10 }
);
// 2 batches can be made
batches(
  { milk: 2, sugar: 40, butter: 20 },
  { milk: 5, sugar: 120, butter: 500 }
);
```

### Answer

We must have all ingredients of the recipe available, and in quantities that are more than or equal to the number of units required. If just one of the ingredients is not available or lower than needed, we cannot make a single batch. Use `Object.keys()` to return the ingredients of the recipe as an array, then use `Array.prototype.map()` to map each ingredient to the ratio of available units to the amount required by the recipe. If one of the ingredients required by the recipe is not available at all, the ratio will evaluate to `NaN`, so the logical OR operator can be used to fallback to `0` in this case. Use the spread `...` operator to feed the array of all the ingredient ratios into `Math.min()` to determine the lowest ratio. Passing this entire result into `Math.floor()` rounds down to return the maximum number of whole batches.

```js
const batches = (recipe, available) =>
  Math.floor(
    Math.min(...Object.keys(recipe).map((k) => available[k] / recipe[k] || 0))
  );
```

### Don’t forget:

### Additional links

### What is CSS BEM?

### Answer

The BEM methodology is a naming convention for CSS classes in order to keep CSS more maintainable by defining namespaces to solve scoping issues. BEM stands for Block Element Modifier which is an explanation for its structure. A Block is a standalone component that is reusable across projects and acts as a “namespace” for sub components (Elements). Modifiers are used as flags when a Block or Element is in a certain state or is different in structure or style.

```css
/* block component */
.block {
}
/* element */
.block__element {
}
/* modifier */
.block__element--modifier {
}
```

Here is an example with the class names on markup:

```html
<nav class="navbar">
  <a href="/" class="navbar__link navbar__link--active"></a>
  <a href="/" class="navbar__link"></a>
  <a href="/" class="navbar__link"></a>
</nav>
```

In this case, `navbar` is the Block, `navbar__link` is an Element that makes no sense outside of the `navbar` component, and `navbar__link--active` is a Modifier that indicates a different state for the `navbar__link` Element. Since Modifiers are verbose, many opt to use `is-*` flags instead as modifiers.

    <a href="/" class="navbar__link is-active"></a>

These must be chained to the Element and never alone however, or there will be scope issues.

```css
.navbar__link.is-active {
}
```

### Don’t forget:

- Alternative solutions to scope issues like CSS-in-JS

### Additional links

- [Writing clean and maintainable CSS](https://hackernoon.com/writing-clean-and-maintainable-css-using-bem-methodology-1dcbf810a664)

### What is Big O Notation?

### Answer

Big O notation is used in Computer Science to describe the time complexity of an algorithm. The best algorithms will execute the fastest and have the simplest complexity. Algorithms don’t always perform the same and may vary based on the data they are supplied. While in some cases they will execute quickly, in other cases they will execute slowly, even with the same number of elements to deal with. In these examples, the base time is 1 element = `1ms`.

### O(1)

```js
arr[arr.length - 1];
```

- 1000 elements = `1ms` Constant time complexity. No matter how many elements the array has, it will theoretically take (excluding real-world variation) the same amount of time to execute.

### O(N)

```js
arr.filter(fn);
```

- 1000 elements = `1000ms` Linear time complexity. The execution time will increase linearly with the number of elements the array has. If the array has 1000 elements and the function takes 1ms to execute, 7000 elements will take 7ms to execute. This is because the function must iterate through all elements of the array before returning a result.

### O(\[1, N\])

```js
arr.some(fn);
```

- 1000 elements = `1ms <= x <= 1000ms` The execution time varies depending on the data supplied to the function, it may return very early or very late. The best case here is O(1) and the worst case is O(N).

### O(NlogN)

```js
arr.sort(fn);
```

- 1000 elements ~= `10000ms` Browsers usually implement the quicksort algorithm for the `sort()` method and the average time complexity of quicksort is O(NlgN). This is very efficient for large collections.

### O(N^2)

```js
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length; j++) {
    // ...
  }
}
```

- 1000 elements = `1000000ms` The execution time rises quadratically with the number of elements. Usually the result of nesting loops.

### O(N!)

```js
const permutations = (arr) => {
  if (arr.length <= 2) return arr.length === 2 ? [arr, [arr[1], arr[0]]] : arr;
  return arr.reduce(
    (acc, item, i) =>
      acc.concat(
        permutations([...arr.slice(0, i), ...arr.slice(i + 1)]).map((val) => [
          item,
          ...val,
        ])
      ),
    []
  );
};
```

- 1000 elements = `Infinity` (practically) ms The execution time rises extremely fast with even just 1 addition to the array.

### Don’t forget:

- Be wary of nesting loops as execution time increases exponentially.

### Additional links

- [Big O Notation in JavaScript](https://medium.com/cesars-tech-insights/big-o-notation-javascript-25c79f50b19b)

### Create a standalone function `bind` that is functionally equivalent to the method `Function.prototype.bind`.

```js
function example() {
  console.log(this);
}
```

---

```js
const boundExample = bind(example, { a: true });
boundExample.call({ b: true }); // logs { a: true }
```

### Answer

Return a function that accepts an arbitrary number of arguments by gathering them with the rest `...` operator. From that function, return the result of calling the `fn` with `Function.prototype.apply` to apply the context and the array of arguments to the function.

```js
const bind =
  (fn, context) =>
  (...args) =>
    fn.apply(context, args);
```

### Don’t forget:

### Additional links

### What is the purpose of cache busting and how can you achieve it?

### Answer

Browsers have a cache to temporarily store files on websites so they don’t need to be re-downloaded again when switching between pages or reloading the same page. The server is set up to send headers that tell the browser to store the file for a given amount of time. This greatly increases website speed and preserves bandwidth. However, it can cause problems when the website has been changed by developers because the user’s cache still references old files. This can either leave them with old functionality or break a website if the cached CSS and JavaScript files are referencing elements that no longer exist, have moved or have been renamed. Cache busting is the process of forcing the browser to download the new files. This is done by naming the file something different to the old file. A common technique to force the browser to re-download the file is to append a query string to the end of the file.

- `src="js/script.js"` =&gt; `src="js/script.js?v=2"` The browser considers it a different file but prevents the need to change the file name.

### Don’t forget:

### Additional links

- [Strategies for cache-busting CSS](https://css-tricks.com/strategies-for-cache-busting-css/)

### How can you avoid callback hells?

```js
getData(function (a) {
  getMoreData(a, function (b) {
    getMoreData(b, function (c) {
      getMoreData(c, function (d) {
        getMoreData(d, function (e) {
          // ...
        });
      });
    });
  });
});
```

### Answer

Refactoring the functions to return promises and using `async/await` is usually the best option. Instead of supplying the functions with callbacks that cause deep nesting, they return a promise that can be `await`ed and will be resolved once the data has arrived, allowing the next line of code to be evaluated in a sync-like fashion. The above code can be restructured like so:

```js
async function asyncAwaitVersion() {
  const a = await getData();
  const b = await getMoreData(a);
  const c = await getMoreData(b);
  const d = await getMoreData(c);
  const e = await getMoreData(d);
  // ...
}
```

There are lots of ways to solve the issue of callback hells:

- Modularization: break callbacks into independent functions
- Use a control flow library, like async
- Use generators with Promises
- Use async/await (from v7 on)

### Don’t forget:

- As an efficient JavaScript developer, you have to avoid the constantly growing indentation level, produce clean and readable code and be able to handle complex flows.

### Additional links

- [Avoiding Callback Hell in Node.js](http://stackabuse.com/avoiding-callback-hell-in-node-js/)
- [Asynchronous JavaScript: From Callback Hell to Async and Await](https://blog.hellojs.org/asynchronous-javascript-from-callback-hell-to-async-and-await-9b9ceb63c8e8)

### What is the purpose of callback function as an argument of `setState`?

### Answer

The callback function is invoked when `setState` has finished and the component gets rendered. Since `setState` is asynchronous, the callback function is used for any post action.

```js
setState({ name: "sudheer" }, () => {
  console.log("The name has updated and component re-rendered");
});
```

### Don’t forget:

- The callback function is invoked after `setState` finishes and is used for any post action.
- It is recommended to use lifecycle method rather this callback function.

### Additional links

- [React docs on `setState`](https://reactjs.org/docs/react-component.html#setstate)

### Which is the preferred option between callback refs and findDOMNode()?

### Answer

Callback refs are preferred over the `findDOMNode()` API, due to the fact that `findDOMNode()` prevents certain improvements in React in the future.

```js
// Legacy approach using findDOMNode()
class MyComponent extends Component {
  componentDidMount() {
    findDOMNode(this).scrollIntoView();
  }
  render() {
    return <div />;
  }
}
// Recommended approach using callback refs
class MyComponent extends Component {
  componentDidMount() {
    this.node.scrollIntoView();
  }
  render() {
    return <div ref={(node) => (this.node = node)} />;
  }
}
```

### Don’t forget:

- Callback refs are preferred over `findDOMNode()`.

### Additional links

- [React docs on Refs and the DOM](https://reactjs.org/docs/refs-and-the-dom.html#exposing-dom-refs-to-parent-components)

### What is a callback? Can you show an example using one?

### Answer

Callbacks are functions passed as an argument to another function to be executed once an event has occurred or a certain task is complete, often used in asynchronous code. Callback functions are invoked later by a piece of code but can be declared on initialization without being invoked. As an example, event listeners are asynchronous callbacks that are only executed when a specific event occurs.

```js
function onClick() {
  console.log("The user clicked on the page.");
}
document.addEventListener("click", onClick);
```

However, callbacks can also be synchronous. The following `map` function takes a callback function that is invoked synchronously for each iteration of the loop (array element).

```js
const map = (arr, callback) => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i], i));
  }
  return result;
};
map([1, 2, 3, 4, 5], (n) => n * 2); // [2, 4, 6, 8, 10]
```

### Don’t forget:

- Functions are first-class objects in JavaScript
- Callbacks vs Promises

### Additional links

- [MDN docs for callbacks](https://developer.mozilla.org/en-US/docs/Glossary/Callback_function)

### What is the `children` prop?

### Answer

`children` is part of the props object passed to components that allows components to be passed as data to other components, providing the ability to compose components cleanly. There are a number of methods available in the React API to work with this prop, such as `React.Children.map`, `React.Children.forEach`, `React.Children.count`, `React.Children.only` and `React.Children.toArray`. A simple usage example of the children prop is as follows:

```js
function GenericBox({ children }) {
  return <div className="container">{children}</div>;
}
function App() {
  return (
    <GenericBox>
      <span>Hello</span> <span>World</span>
    </GenericBox>
  );
}
```

### Don’t forget:

- Children is a prop that allows components to be passed as data to other components.
- The React API provides methods to work with this prop.

### Additional links

- [React docs on Children](https://reactjs.org/docs/jsx-in-depth.html#children-in-jsx)

### Why does React use `className` instead of `class` like in HTML?

### Answer

React’s philosophy in the beginning was to align with the browser DOM API rather than HTML, since that more closely represents how elements are created. Setting a `class` on an element meant using the `className` API:

```js
const element = document.createElement("div");
element.className = "hello";
```

Additionally, before ES5, reserved words could not be used in objects:

```js
const element = {
  attributes: {
    class: "hello",
  },
};
```

In IE8, this will throw an error. In modern environments, destructuring will throw an error if trying to assign to a variable:

```js

    const { class } = this.props // Error
    const { className } = this.props // All good
    const { class: className } =
        this.props // All good, but
            cumbersome!
```

However, `class` _can_ be used as a prop without problems, as seen in other libraries like Preact. React currently allows you to use `class`, but will throw a warning and convert it to `className` under the hood. There is currently an open thread (as of January 2019) discussing changing `className` to `class` to reduce confusion.

### Don’t forget:

### Additional links

### How do you clone an object in JavaScript?

### Answer

Using the object spread operator `...`, the object’s own enumerable properties can be copied into the new object. This creates a shallow clone of the object.

```js
const obj = { a: 1, b: 2 };
const shallowClone = { ...obj };
```

With this technique, prototypes are ignored. In addition, nested objects are not cloned, but rather their references get copied, so nested objects still refer to the same objects as the original. Deep-cloning is much more complex in order to effectively clone any type of object (Date, RegExp, Function, Set, etc) that may be nested within the object. Other alternatives include:

- `JSON.parse(JSON.stringify(obj))` can be used to deep-clone a simple object, but it is CPU-intensive and only accepts valid JSON (therefore it strips functions and does not allow circular references).
- `Object.assign({}, obj)` is another alternative.
- `Object.keys(obj).reduce((acc, key) => (acc[key] = obj[key], acc), {})` is another more verbose alternative that shows the concept in greater depth.

### Don’t forget:

- JavaScript passes objects by reference, meaning that nested objects get their references copied, instead of their values.
- The same method can be used to merge two objects.

### Additional links

- [MDN docs for Object.assign()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
- [Clone an object in vanilla JS](http://voidcanvas.com/clone-an-object-in-vanilla-js-in-depth/)

### What is a closure? Can you give a useful example of one?

### Answer

A closure is a function defined inside another function and has access to its lexical scope even when it is executing outside its lexical scope. The closure has access to variables in three scopes:

- Variables declared in its own scope
- Variables declared in the scope of the parent function
- Variables declared in the global scope In JavaScript, all functions are closures because they have access to the outer scope, but most functions don’t utilise the usefulness of closures: the persistence of state. Closures are also sometimes called stateful functions because of this. In addition, closures are the only way to store private data that can’t be accessed from the outside in JavaScript. They are the key to the UMD (Universal Module Definition) pattern, which is frequently used in libraries that only expose a public API but keep the implementation details private, preventing name collisions with other libraries or the user’s own code.

### Don’t forget:

- Closures are useful because they let you associate data with a function that operates on that data.
- A closure can substitute an object with only a single method.
- Closures can be used to emulate private properties and methods.

### Additional links

- [MDN docs for closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)
- [What is a closure](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-closure-b2f0d2152b36)
- [I never understood JavaScript closures](https://medium.com/dailyjs/i-never-understood-javascript-closures-9663703368e8)

### How do you compare two objects in JavaScript?

### Answer

Even though two different objects can have the same properties with equal values, they are not considered equal when compared using `==` or `===`. This is because they are being compared by their reference (location in memory), unlike primitive values which are compared by value. In order to test if two objects are equal in structure, a helper function is required. It will iterate through the own properties of each object to test if they have the same values, including nested objects. Optionally, the prototypes of the objects may also be tested for equivalence by passing `true` as the 3rd argument. Note: this technique does not attempt to test equivalence of data structures other than plain objects, arrays, functions, dates and primitive values.

```js
function isDeepEqual(obj1, obj2, testPrototypes = false) {
  if (obj1 === obj2) {
    return true;
  }
  if (typeof obj1 === "function" && typeof obj2 === "function") {
    return obj1.toString() === obj2.toString();
  }
  if (obj1 instanceof Date && obj2 instanceof Date) {
    return obj1.getTime() === obj2.getTime();
  }
  if (
    Object.prototype.toString.call(obj1) !==
      Object.prototype.toString.call(obj2) ||
    typeof obj1 !== "object"
  ) {
    return false;
  }
  const prototypesAreEqual = testPrototypes
    ? isDeepEqual(
        Object.getPrototypeOf(obj1),
        Object.getPrototypeOf(obj2),
        true
      )
    : true;
  const obj1Props = Object.getOwnPropertyNames(obj1);
  const obj2Props = Object.getOwnPropertyNames(obj2);
  return (
    obj1Props.length === obj2Props.length &&
    prototypesAreEqual &&
    obj1Props.every((prop) => isDeepEqual(obj1[prop], obj2[prop]))
  );
}
```

### Don’t forget:

- Primitives like strings and numbers are compared by their value
- Objects on the other hand are compared by their reference (location in memory)

### Additional links

- [Object Equality in JavaScript](http://adripofjavascript.com/blog/drips/object-equality-in-javascript.html)
- [Deep comparison between two values](https://30secondsofcode.org/object#equals)

### What is context?

### Answer

Context provides a way to pass data through the component tree without having to pass props down manually at every level. For example, authenticated user, locale preference, UI theme need to be accessed in the application by many components.

```js
const { Provider, Consumer } = React.createContext(defaultValue);
```

### Don’t forget:

- Context provides a way to pass data through a tree of React components, without having to manually pass props.
- Context is designed to share data that is considered _global_ for a tree of React components.

### Additional links

- [React docs on Context](https://reactjs.org/docs/context.html)

### What is CORS?

### Answer

Cross-Origin Resource Sharing or CORS is a mechanism that uses additional HTTP headers to grant a browser permission to access resources from a server at an origin different from the website origin. An example of a cross-origin request is a web application served from `http://mydomain.com` that uses AJAX to make a request for `http://yourdomain.com`. For security reasons, browsers restrict cross-origin HTTP requests initiated by JavaScript. `XMLHttpRequest` and `fetch` follow the same-origin policy, meaning a web application using those APIs can only request HTTP resources from the same origin the application was accessed, unless the response from the other origin includes the correct CORS headers.

### Don’t forget:

- CORS behavior is not an error,  it’s a security mechanism to protect users.
- CORS is designed to prevent a malicious website that a user may unintentionally visit from making a request to a legitimate website to read their personal data or perform actions against their will.

### Additional links

- [MDN docs for CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)

### Describe the layout of the CSS Box Model and briefly describe each component.

### Answer

`Content`: The inner-most part of the box filled with content, such as text, an image, or video player. It has the dimensions `content-box width` and `content-box height`. `Padding`: The transparent area surrounding the content. It has dimensions `padding-box width` and `padding-box height`. `Border`: The area surrounding the padding (if any) and content. It has dimensions `border-box width` and `border-box height`. _Margin_: The transparent outer-most layer that surrounds the border. It separates the element from other elements in the DOM. It has dimensions `margin-box width` and `margin-box height`. ![alt text](https://www.washington.edu/accesscomputing/webd2/student/unit3/images/boxmodel.gif) alt text

### Don’t forget:

- This is a very common question asked during front-end interviews and while it may seem easy, it is critical you know it well!
- Shows a solid understanding of spacing and the DOM

### Additional links

- [W3School’s CSS Box Model Page](https://www.w3schools.com/Css/css_boxmodel.asp)
- [Mozilla’s Intro to the CSS Box Model](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)

### What are the advantages of using CSS preprocessors?

### Answer

CSS preprocessors add useful functionality that native CSS does not have, and generally make CSS neater and more maintainable by enabling DRY (Don’t Repeat Yourself) principles. Their terse syntax for nested selectors cuts down on repeated code. They provide variables for consistent theming (however, CSS variables have largely replaced this functionality) and additional tools like color functions (`lighten`, `darken`, `transparentize`, etc), mixins, and loops that make CSS more like a real programming language and gives the developer more power to generate complex CSS.

### Don’t forget:

- They allow us to write more maintainable and scalable CSS
- Some disadvantages of using CSS preprocessors (setup, re-compilation time can be slow etc.)

### Additional links

- [CSS Preprocessors](https://medium.com/@garyfagan/css-preprocessors-6f226fa16f27)

### What is the difference between ‘+’ and ‘~’ sibling selectors?.

### Answer

The General Sibling Selector `~` selects all elements that are siblings of a specified element. The following example selects all `<p>` elements that are siblings of `<div>` elements:

    div ~ p {
      background-color: blue;
    }

The Adjacent Sibling Selector `+` selects all elements that are the adjacent siblings of a specified element. The following example will select all `<p>` elements that are placed immediately after `<div>` elements:

```css
div + p {
  background-color: red;
}
```

### Don’t forget:

### Additional links

- [W3School’s CSS Combinators Page](https://www.w3schools.com/css/css_combinators.asp)
- [Mozilla’s Combinators and groups of selectors page](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Combinators_and_multiple_selectors)

### Can you describe how CSS specificity works?

### Answer

Assuming the browser has already determined the set of rules for an element, each rule is assigned a matrix of values, which correspond to the following from highest to lowest specificity:

- Inline rules (binary - 1 or 0)
- Number of id selectors
- Number of class, pseudo-class and attribute selectors
- Number of tags and pseudo-element selectors When two selectors are compared, the comparison is made on a per-column basis (e.g. an id selector will always be higher than any amount of class selectors, as ids have higher specificity than classes). In cases of equal specificity between multiple rules, the rules that comes last in the page’s style sheet is deemed more specific and therefore applied to the element.

### Don’t forget:

- Specificity matrix: \[inline, id, class/pseudo-class/attribute, tag/pseudo-element\]
- In cases of equal specificity, last rule is applied

### Additional links

- [CSS Specificity](https://www.smashingmagazine.com/2007/07/css-specificity-things-you-should-know/)

### What is debouncing?

### Answer

Debouncing is a process to add some delay before executing a function. It is commonly used with DOM event listeners to improve the performance of page. It is a technique which allow us to “group” multiple sequential calls in a single one. A raw DOM event listeners can easily trigger 20+ events per second. A debounced function will only be called once the delay has passed.

```js
const debounce = (func, delay) => {
  let debounceTimer;
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => func.apply(context, args), delay);
  };
};
window.addEventListere(
  "scroll",
  debounce(function () {
    // Do stuff, this function will be called after a delay of 1 second
  }, 1000)
);
```

### Don’t forget:

- Common use case is to make API call only when user is finished typing while searching.

### Additional links

- [Debouncing explained](https://css-tricks.com/debouncing-throttling-explained-examples/)

### What is the DOM?

### Answer

The DOM (Document Object Model) is a cross-platform API that treats HTML and XML documents as a tree structure consisting of nodes. These nodes (such as elements and text nodes) are objects that can be programmatically manipulated and any visible changes made to them are reflected live in the document. In a browser, this API is available to JavaScript where DOM nodes can be manipulated to change their styles, contents, placement in the document, or interacted with through event listeners.

### Don’t forget:

- The DOM was designed to be independent of any particular programming language, making the structural representation of the document available from a single, consistent API.
- The DOM is constructed progressively in the browser as a page loads, which is why scripts are often placed at the bottom of a page, in the `<head>` with a `defer` attribute, or inside a `DOMContentLoaded` event listener. Scripts that manipulate DOM nodes should be run after the DOM has been constructed to avoid errors.
- `document.getElementById()` and `document.querySelector()` are common functions for selecting DOM nodes.
- Setting the `innerHTML` property to a new value runs the string through the HTML parser, offering an easy way to append dynamic HTML content to a node.

### Additional links

- [MDN docs for DOM](https://developer.mozilla.org/en-US/docs/DOM)

### What is the difference between the equality operators `==` and `===`?

### Answer

Triple equals (`===`) checks for strict equality, which means both the type and value must be the same. Double equals (`==`) on the other hand first performs type coercion so that both operands are of the same type and then applies strict comparison.

### Don’t forget:

- Whenever possible, use triple equals to test equality because loose equality `==` can have unintuitive results.
- Type coercion means the values are converted into the same type.
- Mention of falsy values and their comparison.

### Additional links

- [MDN docs for comparison operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators)

### What is the difference between an element and a component in React?

### Answer

An element is a plain JavaScript object that represents a DOM node or component. Elements are pure and never mutated, and are cheap to create. A component is a function or class. Components can have state and take props as input and return an element tree as output (although they can represent generic containers or wrappers and don’t necessarily have to emit DOM). Components can initiate side effects in lifecycle methods (e.g. AJAX requests, DOM mutations, interfacing with 3rd party libraries) and may be expensive to create.

```js

    const Component = () => "Hello";
    const componentElement = <Component />;
    const domNodeElement = <div />;

### Don’t forget:

- Elements are immutable, plain objects that describe the DOM nodes or components you want to render.
- Components can be either classes or functions, that take props as an input and return an element tree as the output.

### Additional links

- [React docs on Rendering Elements](https://reactjs.org/docs/rendering-elements.html)
- [React docs on Components and Props](https://reactjs.org/docs/components-and-props.html)

### What is the difference between `em` and `rem` units?

### Answer

Both `em` and `rem` units are based on the `font-size` CSS property. The only difference is where they inherit their values from.

- `em` units inherit their value from the `font-size` of the parent element
- `rem` units inherit their value from the `font-size` of the root element (`html`) In most browsers, the `font-size` of the root element is set to `16px` by default.

### Don’t forget:

- Benefits of using `em` and `rem` units

### Additional links

- [CSS units for font-size: px | em | rem](https://medium.com/code-better/css-units-for-font-size-px-em-rem-79f7e592bb97)

### What are error boundaries in React?

### Answer

Error boundaries are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of the component tree that crashed. Class components become error boundaries if they define either (or both) of the lifecycle methods `static getDerivedStateFromError()` or `componentDidCatch().`

    class ErrorBoundary extends React.Component {
      constructor(props) {
        super(props);
        this.state = { hasError: false };
      }
      // Use componentDidCatch to log the error
      componentDidCatch(error, info) {
        // You can also log the error to an error reporting service
        logErrorToMyService(error, info);
      }
      // use getDerivedStateFromError to update state
      static getDerivedStateFromError(error) {
        // Display fallback UI
        return { hasError: true };
      }
      render() {
        if (this.state.hasError) {
          // You can render any custom fallback UI
          return <h1>Something went wrong.</h1>;
        }
        return this.props.children;
      }
    }

```

### Don’t forget:

- Error boundaries only catch errors in the components below them in the tree. An error boundary can’t catch an error within itself.

### Additional links

https://reactjs.org/docs/error-boundaries.html

### What is event delegation and why is it useful? Can you show an example of how to use it?

### Answer

Event delegation is a technique of delegating events to a single common ancestor. Due to event bubbling, events “bubble” up the DOM tree by executing any handlers progressively on each ancestor element up to the root that may be listening to it. DOM events provide useful information about the element that initiated the event via `Event.target`. This allows the parent element to handle behavior as though the target element was listening to the event, rather than all children of the parent or the parent itself. This provides two main benefits:

- It increases performance and reduces memory consumption by only needing to register a single event listener to handle potentially thousands of elements.
- If elements are dynamically added to the parent, there is no need to register new event listeners for them. Instead of:

  document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", handleButtonClick);
  });

Event delegation involves using a condition to ensure the child target matches our desired element:

```js
document.addEventListener("click", (e) => {
  if (e.target.closest("button")) {
    handleButtonClick();
  }
});
```

### Don’t forget:

- The difference between event bubbling and capturing

### Additional links

- [Event Delegation](https://davidwalsh.name/event-delegate)

### What is event-driven programming?

### Answer

Event-driven programming is a paradigm that involves building applications that send and receive events. When the program emits events, the program responds by running any callback functions that are registered to that event and context, passing in associated data to the function. With this pattern, events can be emitted into the wild without throwing errors even if no functions are subscribed to it. A common example of this is the pattern of elements listening to DOM events such as `click` and `mouseenter`, where a callback function is run when the event occurs.

````js

    document.addEventListener("click", function (event) {
      // This callback function is run when the user
      // clicks on the document.
    });

Without the context of the DOM, the pattern may look like this:

```js

    const hub = createEventHub();
    hub.on("message", function (data) {
      console.log(`${data.username} said ${data.text}`);
    });
    hub.emit("message", {
      username: "John",
      text: "Hello?",
    });

With this implementation, `on` is the way to _subscribe_ to an event, while `emit` is the way to _publish_ the event.

### Don’t forget:

- Follows a publish-subscribe pattern.
- Responds to events that occur by running any callback functions subscribed to the event.
- Show how to create a simple pub-sub implementation with JavaScript.

### Additional links

- [MDN docs on Events and Handlers](https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Overview_of_Events_and_Handlers)
- [Understanding Node.js event-driven architecture](https://medium.freecodecamp.org/understanding-node-js-event-driven-architecture-223292fcbc2d)

### What is the difference between an expression and a statement in JavaScript?

### Answer

There are two main syntactic categories in JavaScript: expressions and statements. A third one is both together, referred to as an expression statement. They are roughly summarized as:

- **Expression**: produces a value
- **Statement**: performs an action
- **Expression statement**: produces a value and performs an action A general rule of thumb: &gt; If you can print it or assign it to a variable, it’s an expression. If you can’t, it’s a statement.

### Statements

    let x = 0;
    function declaration() {}
    if (true) {
    }

Statements appear as instructions that do something but don’t produce values.
```js

    // Assign `x` to the absolute value of `y`.
    var x;
    if (y >= 0) {
      x = y;
    } else {
      x = -y;
    }

The only expression in the above code is `y >= 0` which produces a value, either `true` or `false`. A value is not produced by other parts of the code.

### Expressions

Expressions produce a value. They can be passed around to functions because the interpreter replaces them with the value they resolve to.

    5 + 5; // => 10
    lastCharacter("input"); // => "t"
    true === true; // => true

### Expression statements

There is an equivalent version of the set of statements used before as an expression using the conditional operator:
```js

    // Assign `x` as the absolute value of `y`.
    var x = y >= 0 ? y : -y;

This is both an expression and a statement, because we are declaring a variable `x` (statement) as an evaluation (expression).

### Don’t forget:

- Function declarations vs function expressions

### Additional links

- [What is the difference between a statement and an expression?](https://stackoverflow.com/questions/12703214/javascript-difference-between-a-statement-and-an-expression)

### What are truthy and falsy values in JavaScript?

### Answer

A value is either truthy or falsy depending on how it is evaluated in a Boolean context. Falsy means false-like and truthy means true-like. Essentially, they are values that are coerced to `true` or `false` when performing certain operations. There are 6 falsy values in JavaScript. They are:

- `false`
- `undefined`
- `null`
- `""` (empty string)
- `NaN`
- `0` (both `+0` and `-0`) Every other value is considered truthy. A value’s truthiness can be examined by passing it into the `Boolean` function.

  Boolean(""); // false
  Boolean([]); // true

There is a shortcut for this using the logical NOT `!` operator. Using `!` once will convert a value to its inverse boolean equivalent (i.e. not false is true), and `!` once more will convert back, thus effectively converting the value to a boolean.

    !!""; // false
    !![]; // true

### Don’t forget:

### Additional links

- [Truthy on MDN](https://developer.mozilla.org/en/docs/Glossary/Truthy)
- [Falsy on MDN](https://developer.mozilla.org/en-US/docs/Glossary/Falsy)

### Generate an array, containing the Fibonacci sequence, up until the nth term.

### Answer

Initialize an empty array of length `n`. Use `Array.prototype.reduce()` to add values into the array, using the sum of the last two values, except for the first two.

```js

    const fibonacci = (n) =>
      [...Array(n)].reduce(
        (acc, val, i) => acc.concat(i > 1 ? acc[i - 1] + acc[i - 2] : i),
        []
      );

````

### Don’t forget:

### Additional links

- [Similar problem](https://github.com/Chalarangelo/30-seconds-of-code/blob/master/snippets_archive/fibonacciUntilNum.md)

### Given an array of words, write a method to output matching sets of anagrams.

````js

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

### Answer

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

````

### Don’t forget:

- Iterate the array
- Alphabetize each word
- Store alphabetize word as the key value in a groupedWords object with the original word as the value
- Compare alphabetize words to object keys and add additional original words when matches are found
- Iterate over the return object and output the values, when there is more then one. (single values mean no anagram )

### Additional links

- [Find The Anagrams Gist](https://gist.github.com/tinabme/fe6878f5cff42f60a537262503f9b765)
- [isAnagram function implementation](https://www.30secondsofcode.org/snippet/isAnagram)

### Using flexbox, create a 3-column layout where each column takes up a `col-{n} / 12` ratio of the container.

    <div class="row">
      <div class="col-2"></div>
      <div class="col-7"></div>
      <div class="col-3"></div>
    </div>

### Answer

Set the `.row` parent to `display: flex;` and use the `flex` shorthand property to give the column classes a `flex-grow` value that corresponds to its ratio value.

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

````

### Don’t forget:

### Additional links

- [MDN docs for basic concepts of flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)
- [A complete guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

### What does `0.1 + 0.2 === 0.3` evaluate to?

### Answer

It evaluates to `false` because JavaScript uses the IEEE 754 standard for Math and it makes use of 64-bit floating numbers. This causes precision errors when doing decimal calculations, in short, due to computers working in Base 2 while decimal is Base 10.

    0.1 + 0.2; // 0.30000000000000004

A solution to this problem would be to use a function that determines if two numbers are approximately equal by defining an error margin (epsilon) value that the difference between two values should be less than.

```js

    const approxEqual = (n1, n2, epsilon = 0.0001) => Math.abs(n1 - n2) < epsilon;
    approxEqual(0.1 + 0.2, 0.3); // true

### Don’t forget:

- A simple solution to this problem

### Additional links

- [A simple helper function to check equality](https://github.com/Chalarangelo/30-seconds-of-code#approximatelyequal)
- [Fix “0.1 + 0.2 = 0.300000004” in JavaScript](http://blog.blakesimpson.co.uk/read/61-fix-0-1-0-2-0-300000004-in-javascript)

### What is a focus ring? What is the correct solution to handle them?

### Answer

A focus ring is a visible outline given to focusable elements such as buttons and anchor tags. It varies depending on the vendor, but generally it appears as a blue outline around the element to indicate it is currently focused. In the past, many people specified `outline: 0;` on the element to remove the focus ring. However, this causes accessibility issues for keyboard users because the focus state may not be clear. When not specified though, it causes an unappealing blue ring to appear around an element. In recent times, frameworks like Bootstrap have opted to use a more appealing `box-shadow` outline to replace the default focus ring. However, this is still not ideal for mouse users. The best solution is an upcoming pseudo-selector `:focus-visible` which can be polyfilled today with JavaScript. It will only show a focus ring if the user is using a keyboard and leave it hidden for mouse users. This keeps both aesthetics for mouse use and accessibility for keyboard use.

### Don’t forget:

### Additional links

- [:focus-visible](https://css-tricks.com/focus-visible-and-backwards-compatibility/)

### What is the difference between the array methods `map()` and `forEach()`?

### Answer

Both methods iterate through the elements of an array. `map()` maps each element to a new element by invoking the callback function on each element and returning a new array. On the other hand, `forEach()` invokes the callback function for each element but does not return a new array. `forEach()` is generally used when causing a side effect on each iteration, whereas `map()` is a common functional programming technique.

### Don’t forget:

- Use `forEach()` if you need to iterate over an array and cause mutations to the elements without needing to return values to generate a new array.
- `map()` is the right choice to keep data immutable where each value of the original array is mapped to a new array.

### Additional links

- [MDN docs for forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
- [MDN docs for map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [JavaScript — Map vs. ForEach](https://codeburst.io/javascript-map-vs-foreach-f38111822c0f)

### What are fragments?

### Answer

Fragments allow a React component to return multiple elements without a wrapper, by grouping the children without adding extra elements to the DOM. Fragments offer better performance, lower memory usage, a cleaner DOM and can help in dealing with certain CSS mechanisms (e.g. tables, Flexbox and Grid).

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

````

### Don’t forget:

- Fragments group multiple elements returned from a component, without adding a DOM element around them.

### Additional links

- [React docs on Fragments](https://reactjs.org/docs/fragments.html)

### What is functional programming?

### Answer

Functional programming is a paradigm in which programs are built in a declarative manner using pure functions that avoid shared state and mutable data. Functions that always return the same value for the same input and don’t produce side effects are the pillar of functional programming. Many programmers consider this to be the best approach to software development as it reduces bugs and cognitive load.

### Don’t forget:

- Cleaner, more concise development experience
- Simple function composition
- Features of JavaScript that enable functional programming (`.map`, `.reduce` etc.)
- JavaScript is multi-paradigm programming language (Object-Oriented Programming and Functional Programming live in harmony)

### Additional links

- [Javascript and Functional Programming: An Introduction](https://hackernoon.com/javascript-and-functional-programming-an-introduction-286aa625e26d)
- [Master the JavaScript Interview: What is Functional Programming?](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0)

### Describe your thoughts on how a single page web app should handle focus when changing routes

### Answer

Single page applications make use of client-side rendering. This means that ‘examplesite.com’ and ‘examplesite.com/page2’ are actually the same HTML web page, but the client app decides what content to drop into that single page at runtime. Your user never actually “leaves” the page, and this causes some accessibility issues in terms of focus. Unless focus is explicitly managed in the app, a scenario like this may happen:

1.  User visits ‘examplesite.com’
2.  User clicks a link to go to another route: ‘examplesite.com/product1’
3.  Client app changes the visible content to show the details for this new route (e.g. some info about Product 1)
4.  Focus is still on the link that was clicked in step 2
5.  If a user uses the keyboard or screen reader to now try and read the content, the focused starting point is in the middle of the page on an element no longer visible Many strategies have been proposed in handling this situation, all involving explicitly managing the focus when the new page content is rendered. [Recent research by GatsbyJS](https://www.gatsbyjs.org/blog/2019-07-11-user-testing-accessible-client-routing/) suggests the best approach is:
6.  User visits ‘examplesite.com’
7.  User clicks a link to go to another route: ‘examplesite.com/product1’
8.  Client app changes the visible content to show the details for this new route (e.g. some info about Product 1)
9.  Client app manually places focus on the main header at the top of the page (almost always this will be the H1 element) By doing so, focus is reset to the top of the page, ready for the user to begin exploring the new content. This solution requires inserting the main heading into the start of tabbing order with `tabindex="-1"`.

### Don’t forget:

- Focus issues caused by client-side rendering, instead of server-side
- Focus should not be left on elements no longer visible on the page
- Challenges faced by screen reader users and users utilising keyboard navigation
- Careful manual focus management required

### Additional links

- [Handling Focus on Route Change: Up Your A11y](https://www.upyoura11y.com/handling-focus/)

### What are higher-order components?

### Answer

A higher-order component (HOC) is a function that takes a component as an argument and returns a new component. It is a pattern that is derived from React’s compositional nature. Higher-order components are like **pure components** because they accept any dynamically provided child component, but they won’t modify or copy any behavior from their input components.

```js
const EnhancedComponent = higherOrderComponent(WrappedComponent);
```

### Don’t forget:

- They can be used for state abstraction and manipulation, props manipulation, render high jacking, etc.

### Additional links

### What will the console log in this example?

    var foo = 1;
    var foobar = function () {
      console.log(foo);
      var foo = 2;
    };
    foobar();

```
### Answer

Due to hoisting, the local variable `foo` is declared before the `console.log` method is called. This means the local variable `foo` is passed as an argument to `console.log()` instead of the global one declared outside of the function. However, since the value is not hoisted with the variable declaration, the output will be `undefined`, not `2`.

### Don’t forget:

- Hoisting is JavaScript’s default behavior of moving declarations to the top
- Mention of `strict` mode

### Additional links

- [MDN docs for hoisting](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting)

### How does hoisting work in JavaScript?

### Answer

Hoisting is a JavaScript mechanism where variable and function declarations are put into memory during the compile phase. This means that no matter where functions and variables are declared, they are moved to the top of their scope regardless of whether their scope is global or local. However, the value is not hoisted with the declaration. The following snippet:

    console.log(hoist);
    var hoist = "value";

is equivalent to:

    var hoist;
    console.log(hoist);
    hoist = "value";

Therefore logging `hoist` outputs `undefined` to the console, not `"value"`. Hoisting also allows you to invoke a function declaration before it appears to be declared in a program.

    myFunction(); // No error; logs "hello"
    function myFunction() {
      console.log("hello");
    }

But be wary of function expressions that are assigned to a variable:

    myFunction(); // Error: `myFunction` is not a function
    var myFunction = function () {
      console.log("hello");
    };

### Don’t forget:

- Hoisting is JavaScript’s default behavior of moving declarations to the top
- Functions declarations are hoisted before variable declarations

### Additional links

- [MDN docs for hoisting](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting)
- [Understanding Hoisting in JavaScript](https://scotch.io/tutorials/understanding-hoisting-in-javascript)

### Can a web page contain multiple `<header>` elements? What about `<footer>` elements?

### Answer

Yes to both. The W3 documents state that the tags represent the header(`<header>`) and footer(`<footer>`) areas of their nearest ancestor “section”. So not only can the page `<body>` contain a header and a footer, but so can every `<article>` and `<section>` element.

### Don’t forget:

- W3 recommends having as many as you want, but only 1 of each for each “section” of your page, i.e. body, section etc.

### Additional links

- [StackOverflow - Using header or footer tag twice](https://stackoverflow.com/questions/4837269/html5-using-header-or-footer-tag-twice?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa)

### Discuss the differences between an HTML specification and a browser’s implementation thereof.

### Answer

HTML specifications such as `HTML5` define a set of rules that a document must adhere to in order to be “valid” according to that specification. In addition, a specification provides instructions on how a browser must interpret and render such a document. A browser is said to “support” a specification if it handles valid documents according to the rules of the specification. As of yet, no browser supports all aspects of the `HTML5` specification (although all of the major browser support most of it), and as a result, it is necessary for the developer to confirm whether the aspect they are making use of will be supported by all of the browsers on which they hope to display their content. This is why cross-browser support continues to be a headache for developers, despite the improved specificiations.

### Don’t forget:

- `HTML5` defines some rules to follow for an invalid `HTML5` document (i.e., one that contains syntactical errors)
- However, invalid documents may contain anything, so it’s impossible for the specification to handle all possibilities comprehensively.
- Thus, many decisions about how to handle malformed documents are left up to the browser.

### Additional links

- [HTML 5.2 WWW Specifications](https://www.w3.org/TR/html52/)

### What is the difference between HTML and React event handling?

### Answer

In HTML, the attribute name is in all lowercase and is given a string invoking a function defined somewhere:

    <button onclick="handleClick()"></button>

In React, the attribute name is camelCase and are passed the function reference inside curly braces:

    <button onClick={handleClick} />

In HTML, `false` can be returned to prevent default behavior, whereas in React `preventDefault` has to be called explicitly.

    <a href="#" onclick="console.log('The link was clicked.'); return false" />

    function handleClick(e) {
      e.preventDefault();
      console.log("The link was clicked.");
    }

```

### Don’t forget:

- HTML uses lowercase, React uses camelCase.

### Additional links

- [React docs on Handling Events](https://reactjs.org/docs/handling-events.html)

### What are some differences that XHTML has compared to HTML?

### Answer

Some of the key differences are:

- An XHTML element must have an XHTML `<DOCTYPE>`
- Attributes values must be enclosed in quotes
- Attribute minimization is forbidden (e.g. one has to use `checked="checked"` instead of `checked`)
- Elements must always be properly nested
- Elements must always be closed
- Special characters must be escaped

### Don’t forget:

- Any element can be self-closed
- Tags ands attributes are case-sensitive, usually lowercase

### Additional links

- [W3Schools docs for HTML and XHTML](https://www.w3schools.com/html/html_xhtml.asp)

### Briefly describe the correct usage of the following HTML5 semantic elements: `<header>`, `<article>`,`<section>`, `<footer>`

### Answer

- `<header>` is used to contain introductory and navigational information about a section of the page. This can include the section heading, the author’s name, time and date of publication, table of contents, or other navigational information.
- `<article>` is meant to house a self-contained composition that can logically be independently recreated outside of the page without losing its meaning. Individual blog posts or news stories are good examples.
- `<section>` is a flexible container for holding content that shares a common informational theme or purpose.
- `<footer>` is used to hold information that should appear at the end of a section of content and contain additional information about the section. Author’s name, copyright information, and related links are typical examples of such content.

### Don’t forget:

- Other semantic elements are `<form>` and `<table>`

### Additional links

- [HTML 5 Semantic Elements](https://www.w3schools.com/html/html5_semantic_elements.asp)

### What is HTML5 Web Storage? Explain `localStorage` and `sessionStorage`.

### Answer

With HTML5, web pages can store data locally within the user’s browser. The data is stored in name/value pairs, and a web page can only access data stored by itself. **Differences between `localStorage` and `sessionStorage` regarding lifetime:**

- Data stored through `localStorage` is permanent: it does not expire and remains stored on the user’s computer until a web app deletes it or the user asks the browser to delete it.
- `sessionStorage` has the same lifetime as the top-level window or browser tab in which the data got stored. When the tab is permanently closed, any data stored through `sessionStorage` is deleted. **Differences between `localStorage` and `sessionStorage` regarding storage scope:** Both forms of storage are scoped to the document origin so that documents with different origins will never share the stored objects.
- `sessionStorage` is also scoped on a per-window basis. Two browser tabs with documents from the same origin have separate `sessionStorage` data.
- Unlike in `localStorage`, the same scripts from the same origin can’t access each other’s `sessionStorage` when opened in different tabs.

### Don’t forget:

- Earlier, this was done with cookies.
- The storage limit is far larger (at least 5MB) than with cookies and its faster.
- The data is never transferred to the server and can only be used if the client specifically asks for it.

### Additional links

- [W3Schools - HTML5 Webstorage](https://www.w3schools.com/html/html5_webstorage.asp)

### What is the reason for wrapping the entire contents of a JavaScript source file in a function that is immediately invoked?

### Answer

This technique is very common in JavaScript libraries. It creates a closure around the entire contents of the file which creates a private namespace and thereby helps avoid potential name clashes between different JavaScript modules and libraries. The function is immediately invoked so that the namespace (library name) is assigned the return value of the function.

````js

    const myLibrary = (function () {
      var privateVariable = 2;
      return {
        publicMethod: () => privateVariable,
      };
    })();
    privateVariable; // ReferenceError
    myLibrary.publicMethod(); // 2

### Don’t forget:

- Used among many popular JavaScript libraries
- Creates a private namespace

### Additional links

- [MDN docs for closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)

### Explain the differences between imperative and declarative programming.

### Answer

These two types of programming can roughly be summarized as:

- Imperative: **how** to achieve something
- Declarative: **what** should be achieved A common example of declarative programming is CSS. The developer specifies CSS properties that describe what something should look like rather than how to achieve it. The “how” is abstracted away by the browser. On the other hand, imperative programming involves the steps required to achieve something. In JavaScript, the differences can be contrasted like so:

### Imperative

```js

    const numbers = [1, 2, 3, 4, 5];
    const numbersDoubled = [];
    for (let i = 0; i < numbers.length; i++) {
      numbersDoubled[i] = numbers[i] * 2;
    }

We manually loop over the numbers of the array and assign the new index as the number doubled.

### Declarative

```js

    const numbers = [1, 2, 3, 4, 5];
    const numbersDoubled = numbers.map((n) => n * 2);

We declare that the new array is mapped to a new one where each value is doubled.

### Don’t forget:

- Declarative programming often works with functions and expressions. Imperative programming frequently uses statements and relies on low-level features that cause mutations, while declarative programming has a strong focus on abstraction and purity.
- Declarative programming is more terse and easier to process at a glance.

### Additional links

- [Declarative vs Imperative Programming](https://codeburst.io/declarative-vs-imperative-programming-a8a7c93d9ad2)

### What are inline conditional expressions?

### Answer

Since a JSX element tree is one large expression, you cannot embed statements inside. Conditional expressions act as a replacement for statements to use inside the tree. For example, this won’t work:

    function App({ messages, isVisible }) {
      return (
        <div>
          if (messages.length > 0){" "}
          {<h2>You have {messages.length} unread messages.</h2>} else{" "}
          {<h2>You have no unread messages.</h2>}
          if (isVisible) {<p>I am visible.</p>}
        </div>
      );
    }

Logical AND `&&` and the ternary `? :` operator replace the `if`/`else` statements.

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
      );
    }

````

### Don’t forget:

### Additional links

- [React docs on Conditional Rendering](https://reactjs.org/docs/conditional-rendering.html)

### What is a key? What are the benefits of using it in lists?

### Answer

Keys are a special string attribute that helps React identify which items have been changed, added or removed. They are used when rendering array elements to give them a stable identity. Each element’s key must be unique (e.g. IDs from the data or indexes as a last resort).

````js

    const todoItems = todos.map((todo) => <li key={todo.id}>{todo.text}</li>);

- Using indexes as keys is not recommended if the order of items may change, as it might negatively impact performance and may cause issues with component state.
- If you extract list items as a separate component then apply keys on the list component instead of the `<li>` tag.

### Don’t forget:

- Keys give elements in a collection a stable identity and help React identify changes.
- You should avoid using indexes as keys if the order of items may change.
- You should lift the key up to the component, instead of the `<li>` element, if you extract list items as components.

### Additional links

- [React docs on Lists and Keys](https://reactjs.org/docs/lists-and-keys.html)

### What are landmark roles and how can they be useful?

### Answer

Landmark roles is a way to identify different sections of a page like the main content or a navigation region. The Landmarks helps assistive technology users to navigate a page, allowing them skip over areas of it. For example,

    <div id="header" role="banner">Header of the Page</div>
    <div id="content" role="main">Main Content Goes Here</div>

### Don’t forget:

- Identify sections of a page
- Assist users in navigating a page

### Additional links

- [ARIA Landmark Roles](https://www.washington.edu/accessibility/web/landmarks/)
- [Using ARIA landmarks to identify regions of a page](https://www.w3.org/WAI/GL/wiki/Using_ARIA_landmarks_to_identify_regions_of_a_page)

### What is the difference between lexical scoping and dynamic scoping?

### Answer

Lexical scoping refers to when the location of a function’s definition determines which variables you have access to. On the other hand, dynamic scoping uses the location of the function’s invocation to determine which variables are available.

### Don’t forget:

- Lexical scoping is also known as static scoping.
- Lexical scoping in JavaScript allows for the concept of closures.
- Most languages use lexical scoping because it tends to promote source code that is more easily understood.

### Additional links

- [Mozilla Docs - Closures & Lexical Scoping](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)

### What are the lifecycle methods in React?

### Answer

`getDerivedStateFromProps`: Executed before rendering on the initial mount and all component updates. Used to update the state based on changes in props over time. Has rare use cases, like tracking component animations during the lifecycle. There are only few cases where this makes sense to use over other lifecycle methods. It expects to return an object that will be the the new state, or null to update nothing. This method does not have access to the component instance either. `componentDidMount`: Executed after first rendering and here all AJAX requests, DOM or state updates, and set up eventListeners should occur. `shouldComponentUpdate`: Determines if the component will be updated or not. By default, it returns true. If you are sure that the component doesn’t need to render after state or props are updated, you can return a false value. It is a great place to improve performance as it allows you to prevent a rerender if component receives new prop. `getSnapshotBeforeUpdate`: Invoked right after a component render happens because of an update, before `componentDidUpdate`. Any value returned from this method will be passed to `componentDidUpdate`. `componentDidUpdate`: Mostly it is used to update the DOM in response to prop or state changes. `componentWillUnmount`: It will be used to cancel any outgoing network requests, or remove all event listeners associated with the component. `componentDidCatch`: Used in error boundaries, which are components that implement this method. It allows the component to catch JavaScript errors anywhere in the _child_ component tree (below this component), log errors, and display a UI with error information.

### Don’t forget:

### Additional links

### What are the different phases of the component lifecycle in React?

### Answer

There are four different phases of component’s lifecycle: **Initialization**: In this phase, the component prepares setting up the initial state and default props. **Mounting**: The react component is ready to mount to the DOM. This phase covers the `getDerivedStateFromProps` and `componentDidMount` lifecycle methods. **Updating**: In this phase, the component gets updated in two ways, sending the new props and updating the state. This phase covers the `getDerivedStateFromProps`, `shouldComponentUpdate`, `getSnapshotBeforeUpdate` and `componentDidUpdate` lifecycle methods. **Unmounting**: In this last phase, the component is not needed and gets unmounted from the browser DOM. This phase includes the `componentWillUnmount` lifecycle method. **Error Handling**: In this phase, the component is called whenever there’s an error during rendering, in a lifecycle method, or in the constructor for any child component. This phase includes the `componentDidCatch` lifecycle method.

### Don’t forget:

### Additional links

### What does lifting state up in React mean?

### Answer

When several components need to share the same data, then it is recommended to lift the shared state up to their closest common ancestor. For example, if two child components share the same data, it is recommended to move the shared state to parent instead of maintaining the local state in both child components.

### Don’t forget:

### Additional links

### Create a function that masks a string of characters with `#` except for the last four (4) characters.

    mask("123456789"); // "#####6789"

### Answer

> There are many ways to solve this problem, this is just one one of them. Using `String.prototype.slice()` we can grab the last 4 characters of the string by passing `-4` as an argument. Then, using `String.prototype.padStart()`, we can pad the string to the original length with the repeated mask character.

```js

    const mask = (str, maskChar = "#") =>
      str.slice(-4).padStart(str.length, maskChar);
````

### Don’t forget:

- Short, one-line functional solutions to problems should be preferred provided they are efficient

### Additional links

### Can you name the four types of `@media` properties?

### Answer

- `all`, which applies to all media type devices
- `print`, which only applies to printers
- `screen`, which only applies to screens (desktops, tablets, mobile etc.)
- `speech`, which only applies to screenreaders

### Don’t forget:

### Additional links

- [MDN docs for `@media` rule](https://developer.mozilla.org/en-US/docs/Web/CSS/@media)
- [MDN docs for using media queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries)

### What is memoization?

### Answer

Memoization is the process of caching the output of function calls so that subsequent calls are faster. Calling the function again with the same input will return the cached output without needing to do the calculation again. A basic implementation in JavaScript looks like this:

````js

    const memoize = (fn) => {
      const cache = new Map();
      return (value) => {
        const cachedResult = cache.get(value);
        if (cachedResult !== undefined) return cachedResult;
        const result = fn(value);
        cache.set(value, result);
        return result;
      };
    };

### Don’t forget:

- The above technique returns a unary function even if the function can take multiple arguments.
- The first function call will be slower than usual because of the overhead created by checking if a cached result exists and setting a result before returning the value.
- Memoization increases performance on subsequent function calls but still needs to do work on the first call.

### Additional links

- [Implementing memoization in JavaScript](https://www.sitepoint.com/implementing-memoization-in-javascript/)

### How do you ensure methods have the correct `this` context in React component classes?

### Answer

In JavaScript classes, the methods are not bound by default. This means that their `this` context can be changed (in the case of an event handler, to the element that is listening to the event) and will not refer to the component instance. To solve this, `Function.prototype.bind()` can be used to enforce the `this` context as the component instance.

```js

    constructor(props) {
      super(props);
      this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
      // Perform some logic
    }

- The `bind` approach can be verbose and requires defining a `constructor`, so the new public class fields syntax is generally preferred:

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

- You can also use an inline arrow function, because lexical `this` (referring to the component instance) is preserved:

  <button onClick={(e) => this.handleClick(e)}>Click me</button>

Note that extra re-rendering can occur using this technique because a new function reference is created on render, which gets passed down to child components and breaks `shouldComponentUpdate` / `PureComponent` shallow equality checks to prevent unnecessary re-renders. In cases where performance is important, it is preferred to go with `bind` in the constructor, or the public class fields syntax approach, because the function reference remains constant.

### Don’t forget:

- You can either bind methods to the component instance context in the constructor, use public class fields syntax, or use inline arrow functions.

### Additional links

- [React docs on Handling Events](https://reactjs.org/docs/handling-events.html)
- [React docs on Passing Functions to Components](https://reactjs.org/docs/faq-functions.html#how-do-i-bind-a-function-to-a-component-instance)

### What is a MIME type and what is it used for?

### Answer

`MIME` is an acronym for `Multi-purpose Internet Mail Extensions`. It is used as a standard way of classifying file types over the Internet.

### Don’t forget:

- A `MIME type` actually has two parts: a type and a subtype that are separated by a slash (/). For example, the `MIME type` for Microsoft Word files is `application/msword` (i.e., type is application and the subtype is msword).

### Additional links

- [MIME Type - MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types)

### Contrast mutable and immutable values, and mutating vs non-mutating methods.

### Answer

The two terms can be contrasted as:

- Mutable: subject to change
- Immutable: cannot change In JavaScript, objects are mutable while primitive values are immutable. This means operations performed on objects can change the original reference in some way, while operations performed on a primitive value cannot change the original value. All `String.prototype` methods do not have an effect on the original string and return a new string. On the other hand, while some methods of `Array.prototype` do not mutate the original array reference and produce a fresh array, some cause mutations.

  const myString = "hello!";
  myString.replace("!", ""); // returns a new string, cannot mutate the original value
  const originalArray = [1, 2, 3];
  originalArray.push(4); // mutates originalArray, now [1, 2, 3, 4]
  originalArray.concat(4); // returns a new array, does not mutate the original

### Don’t forget:

- List of mutating and non-mutating array methods

### Additional links

- [Mutating vs non-mutating array methods](https://lorenstewart.me/2017/01/22/javascript-array-methods-mutating-vs-non-mutating/)

### What is the only value not equal to itself in JavaScript?

### Answer

`NaN` (Not-a-Number) is the only value not equal to itself when comparing with any of the comparison operators. `NaN` is often the result of meaningless math computations, so two `NaN` values make no sense to be considered equal.

### Don’t forget:

- The difference between `isNaN()` and `Number.isNaN()`
- `const isNaN = x => x !== x`

### Additional links

- [MDN docs for `NaN`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN)

### NodeJS often uses a callback pattern where if an error is encountered during execution, this error is passed as the first argument to the callback. What are the advantages of this pattern?

    fs.readFile(filePath, function (err, data) {
      if (err) {
        // handle the error, the return is important here
        // so execution stops here
        return console.log(err);
      }
      // use the data object
      console.log(data);
    });
````

### Answer

Advantages include:

- Not needing to process data if there is no need to even reference it
- Having a consistent API leads to more adoption
- Ability to easily adapt a callback pattern that will lead to more maintainable code As you can see from below example, the callback is called with null as its first argument if there is no error. However, if there is an error, you create an Error object, which then becomes the callback’s only parameter. The callback function allows a user to easily know whether or not an error occurred. This practice is also called the _Node.js error convention_, and this kind of callback implementations are called _error-first callbacks_.

  var isTrue = function (value, callback) {
  if (value === true) {
  callback(null, "Value was true.");
  } else {
  callback(new Error("Value is not true!"));
  }
  };
  var callback = function (error, retval) {
  if (error) {
  console.log(error);
  return;
  }
  console.log(retval);
  };
  isTrue(false, callback);
  isTrue(true, callback);
  /_
  { stack: [Getter/Setter],
  arguments: undefined,
  type: undefined,
  message: 'Value is not true!' }
  Value was true.
  _/

### Don’t forget:

- This is just a convention. However, you should stick to it.

### Additional links

- [The Node.js Way - Understanding Error-First Callbacks](http://fredkschott.com/post/2014/03/understanding-error-first-callbacks-in-node-js/)
- [What are the error conventions?](https://docs.nodejitsu.com/articles/errors/what-are-the-error-conventions)

### What is the event loop in Node.js?

### Answer

The event loop handles all async callbacks. Callbacks are queued in a loop, while other code runs, and will run one by one when the response for each one has been received.

### Don’t forget:

- The event loop allows Node.js to perform non-blocking I/O operations, despite the fact that JavaScript is single-threaded

### Additional links

- [Node.js docs on event loop, timers and process.nextTick()](https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/)

### What is the difference between `null` and `undefined`?

### Answer

In JavaScript, two values discretely represent nothing - `undefined` and `null`. The concrete difference between them is that `null` is explicit, while `undefined` is implicit. When a property does not exist or a variable has not been given a value, the value is `undefined`. `null` is set as the value to explicitly indicate “no value”. In essence, `undefined` is used when the nothing is not known, and `null` is used when the nothing is known.

### Don’t forget:

- `typeof undefined` evaluates to `"undefined"`.
- `typeof null` evaluates `"object"`. However, it is still a primitive value and this is considered an implementation bug in JavaScript.
- `undefined == null` evaluates to `true`.

### Additional links

- [MDN docs for null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null)
- [MDN docs for undefined](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined)

### Describe the different ways to create an object. When should certain ways be preferred over others?

### Answer

### Object literal

Often used to store one occurrence of data.

````js

    const person = {
      name: "John",
      age: 50,
      birthday() {
        this.age++;
      },
    };
    person.birthday(); // person.age === 51

### Constructor

Often used when you need to create multiple instances of an object, each with their own data that other instances of the class cannot affect. The `new` operator must be used before invoking the constructor or the global object will be mutated.

    function Person(name, age) {
      this.name = name;
      this.age = age;
    }
    Person.prototype.birthday = function () {
      this.age++;
    };
    const person1 = new Person("John", 50);
    const person2 = new Person("Sally", 20);
    person1.birthday(); // person1.age === 51
    person2.birthday(); // person2.age === 21

### Factory function

Creates a new object similar to a constructor, but can store private data using a closure. There is also no need to use `new` before invoking the function or the `this` keyword. Factory functions usually discard the idea of prototypes and keep all properties and methods as own properties of the object.

```js

    const createPerson = (name, age) => {
      const birthday = () => person.age++;
      const person = { name, age, birthday };
      return person;
    };
    const person = createPerson("John", 50);
    person.birthday(); // person.age === 51

### `Object.create()`

Sets the prototype of the newly created object.

```js

    const personProto = {
      birthday() {
        this.age++;
      },
    };
    const person = Object.create(personProto);
    person.age = 50;
    person.birthday(); // person.age === 51

A second argument can also be supplied to `Object.create()` which acts as a descriptor for the new properties to be defined.

    Object.create(personProto, {
      age: {
        value: 50,
        writable: true,
        enumerable: true,
      },
    });
````

### Don’t forget:

- Prototypes are objects that other objects inherit properties and methods from.
- Factory functions offer private properties and methods through a closure but increase memory usage as a tradeoff, while classes do not have private properties or methods but reduce memory impact by reusing a single prototype object.

### Additional links

### What is the difference between a parameter and an argument?

### Answer

Parameters are the variable names of the function definition, while arguments are the values given to a function when it is invoked.

    function myFunction(parameter1, parameter2) {
      console.log(arguments[0]); // "argument1"
    }
    myFunction("argument1", "argument2");

````
### Don’t forget:

- `arguments` is an array-like object containing information about the arguments supplied to an invoked function.
- `myFunction.length` describes the arity of a function (how many parameters it has, regardless of how many arguments it is supplied).

### Additional links

### Does JavaScript pass by value or by reference?

### Answer

JavaScript always passes by value. However, with objects, the value is a reference to the object.

### Don’t forget:

- Difference between pass-by-value and pass-by-reference

### Additional links

- [JavaScript Value vs Reference](https://medium.com/dailyjs/back-to-roots-javascript-value-vs-reference-8fb69d587a18)

### How do you pass an argument to an event handler or callback?

### Answer

You can use an arrow function to wrap around an event handler and pass arguments, which is equivalent to calling `bind`:

    <button onClick={() => this.handleClick(id)} />
    <button onClick={this.handleClick.bind(this, id)} />

### Don’t forget:

### Additional links

- [React docs on Handling Events](https://reactjs.org/docs/handling-events.html)

### Create a function `pipe` that performs left-to-right function composition by returning a function that accepts one argument.

```js

    const square = (v) => v * v;
    const double = (v) => v * 2;
    const addOne = (v) => v + 1;
    const res = pipe(square, double, addOne);
    res(3); // 19; addOne(double(square(3)))

### Answer

Gather all supplied arguments using the rest operator `...` and return a unary function that uses `Array.prototype.reduce()` to run the value through the series of functions before returning the final value.

```js

    const pipe =
      (...fns) =>
      (x) =>
        fns.reduce((v, fn) => fn(v), x);
````

### Don’t forget:

- Function composition is the process of combining two or more functions to produce a new function.

### Additional links

- [What is function composition?](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-function-composition-20dfb109a1a0)

### What are portals in React?

### Answer

Portal are the recommended way to render children into a DOM node that exists outside the DOM hierarchy of the parent component.

    ReactDOM.createPortal(child, container);

The first argument (`child`) is any renderable React child, such as an element, string, or fragment. The second argument (`container`) is a DOM element.

### Don’t forget:

### Additional links

- [React docs on Portals](https://reactjs.org/docs/portals.html)

### What is the difference between the postfix `i++` and prefix `++i` increment operators?

### Answer

Both increment the variable value by 1. The difference is what they evaluate to. The postfix increment operator evaluates to the value _before_ it was incremented.

    let i = 0;
    i++; // 0
    // i === 1

The prefix increment operator evaluates to the value _after_ it was incremented.

    let i = 0;
    ++i; // 1
    // i === 1

### Don’t forget:

### Additional links

### In which states can a Promise be?

### Answer

A `Promise` is in one of these states:

- pending: initial state, neither fulfilled nor rejected.
- fulfilled: meaning that the operation completed successfully.
- rejected: meaning that the operation failed. A pending promise can either be fulfilled with a value, or rejected with a reason (error). When either of these options happens, the associated handlers queued up by a promise’s then method are called.

### Don’t forget:

### Additional links

- [Official Web Docs - Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

### What are Promises?

### Answer

The `Promise` object represents the eventual completion (or failure) of an asynchronous operation, and its resulting value. An example can be the following snippet, which after 100ms prints out the result string to the standard output. Also, note the catch, which can be used for error handling. `Promise`s are chainable.

    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("result");
      }, 100);
    })
      .then(console.log)
      .catch(console.error);

```
### Don’t forget:

- Take a look into the other questions regarding `Promise`s!

### Additional links

- [Master the JavaScript Interview: What is a Promise?](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e772618)

### How to apply prop validation in React?

### Answer

When the application is running in development mode, React will automatically check for all props that we set on components to make sure they are the correct data type. For incorrect data types, it will generate warning messages in the console for development mode. They are stripped in production mode due to their performance impact. Required props are defined with `isRequired`. For example, we define `propTypes` for component as below:

    import PropTypes from "prop-types"
    class User extends React.Component {
      static propTypes = {
        name: PropTypes.string.isRequired,
        age: PropTypes.number.isRequired
      }
      render() {
        return (
          <h1>Welcome, {this.props.name}</h1>
          <h2>Age, {this.props.age}
        )
      }
    }

```

### Don’t forget:

- We can define custom `propTypes`
- Using `propTypes` is not mandatory. However, it is a good practice and can reduce bugs.

### Additional links

### How does prototypal inheritance differ from classical inheritance?

### Answer

In the classical inheritance paradigm, object instances inherit their properties and functions from a class, which acts as a blueprint for the object. Object instances are typically created using a constructor and the `new` keyword. In the prototypal inheritance paradigm, object instances inherit directly from other objects and are typically created using factory functions or `Object.create()`.

### Don’t forget:

### Additional links

- [MDN docs for inheritance and the prototype chain](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)

### What is a pure function?

### Answer

A pure function is a function that satisfies these two conditions:

- Given the same input, the function returns the same output.
- The function doesn’t cause side effects outside of the function’s scope (i.e. mutate data outside the function or data supplied to the function). Pure functions can mutate local data within the function as long as it satisfies the two conditions above.

### Pure

```js
const a = (x, y) => x + y;
const b = (arr, value) => arr.concat(value);
const c = (arr) => [...arr].sort((a, b) => a - b);
```

### Impure

```js
const a = (x, y) => x + y + Math.random();
const b = (arr, value) => (arr.push(value), arr);
const c = (arr) => arr.sort((a, b) => a - b);
```

### Don’t forget:

- Pure functions are easier to reason about due to their reliability.
- All functions should be pure unless explicitly causing a side effect (i.e. `setInnerHTML`).
- If a function does not return a value, it is an indication that it is causing side effects.

### Additional links

- [Pure functions in JavaScript](http://www.nicoespeon.com/en/2015/01/pure-functions-javascript/)

### How do you write comments inside a JSX tree in React?

### Answer

Comments must be wrapped inside curly braces `{}` and use the `/* */` syntax.

```js
const tree = (
  <div>
    {/* Comment */}
    <p>Text</p>
  </div>
);
```

### What is recursion and when is it useful?

### Answer

Recursion is the repeated application of a process. In JavaScript, recursion involves functions that call themselves repeatedly until they reach a base condition. The base condition breaks out of the recursion loop because otherwise the function would call itself indefinitely. Recursion is very useful when working with data structures that contain nesting where the number of levels deep is unknown. For example, you may have a thread of comments returned from a database that exist in a flat array but need to be nested for display in the UI. Each comment is either a top-level comment (no parent) or is a reply to a parent comment. Comments can be a reply of a reply of a reply… we have no knowledge beforehand the number of levels deep a comment may be. This is where recursion can help.

````js

    const nest = (items, id = null, link = "parent_id") =>
      items
        .filter((item) => item[link] === id)
        .map((item) => ({ ...item, children: nest(items, item.id) }));
    const comments = [
      { id: 1, parent_id: null, text: "First reply to post." },
      { id: 2, parent_id: 1, text: "First reply to comment #1." },
      { id: 3, parent_id: 1, text: "Second reply to comment #1." },
      { id: 4, parent_id: 3, text: "First reply to comment #3." },
      { id: 5, parent_id: 4, text: "First reply to comment #4." },
      { id: 6, parent_id: null, text: "Second reply to post." },
    ];
    nest(comments);
    /*
    [
      { id: 1, parent_id: null, text: "First reply to post.", children: [...] },
      { id: 6, parent_id: null, text: "Second reply to post.", children: [] }
    ]
    */

In the above example, the base condition is met if `filter()` returns an empty array. The chained `map()` won’t invoke the callback function which contains the recursive call, thereby breaking the loop.

### Don’t forget:

- Recursion is useful when working with data structures containing an unknown number of nested structures.
- Recursion must have a base condition to be met that breaks out of the loop or it will call itself indefinitely.

### Additional links

- [In plain English, what is recursion?](https://softwareengineering.stackexchange.com/questions/25052/in-plain-english-what-is-recursion)

### What is the output of the following code?

```js

    const a = [1, 2, 3];
    const b = [1, 2, 3];
    const c = "1,2,3";
    console.log(a == c);
    console.log(a == b);
````

### Answer

The first `console.log` outputs `true` because JavaScript’s compiler performs type conversion and therefore it compares to strings by their value. On the other hand, the second `console.log` outputs `false` because Arrays are Objects and Objects are compared by reference.

### Don’t forget:

- JavaScript performs automatic type conversion
- Objects are compared by reference
- Primitives are compared by value

### Additional links

- [JavaScript Value vs Reference](https://medium.com/dailyjs/back-to-roots-javascript-value-vs-reference-8fb69d587a18)

### What are refs in React? When should they be used?

### Answer

Refs provide a way to access DOM nodes or React elements created in the render method. Refs should be used sparringly, but there are some good use cases for refs, such as:

- Managing focus, text selection, or media playback.
- Triggering imperative animations.
- Integrating with third-party DOM libraries. Refs are created using `React.createRef()` method and attached to React elements via the `ref` attribute. In order to use refs throughout the component, assign the `ref` to the instance property within the constructor:

  class MyComponent extends React.Component {
  constructor(props) {
  super(props);
  this.myRef = React.createRef();
  }
  render() {
  return <div ref={this.myRef} />;
  }
  }

Refs can also be used in functional components with the help of closures.

### Don’t forget:

- Refs are used to return a reference to an element.
- Refs shouldn’t be overused.
- You can create a ref using `React.createRef()` and attach to elements via the `ref` attribute.

### Additional links

- [React docs on Refs and the DOM](https://reactjs.org/docs/refs-and-the-dom.html)

### Where and why is the `rel="noopener"` attribute used?

### Answer

The `rel="noopener"` is an attribute used in `<a>` elements (hyperlinks). It prevents pages from having a `window.opener` property, which would otherwise point to the page from where the link was opened and would allow the page opened from the hyperlink to manipulate the page where the hyperlink is.

### Don’t forget:

- `rel="noopener"` is applied to hyperlinks.
- `rel="noopener"` prevents opened links from manipulating the source page.

### Additional links

- [Open external anchors using rel=“noopener”](https://developers.google.com/web/tools/lighthouse/audits/noopener)
- [About rel=“noopener”](https://mathiasbynens.github.io/rel-noopener/)

### What is REST?

### Answer

REST (REpresentational State Transfer) is a software design pattern for network architecture. A RESTful web application exposes data in the form of information about its resources. Generally, this concept is used in web applications to manage state. With most applications, there is a common theme of reading, creating, updating, and destroying data. Data is modularized into separate tables like `posts`, `users`, `comments`, and a RESTful API exposes access to this data with:

- An identifier for the resource. This is known as the endpoint or URL for the resource.
- The operation the server should perform on that resource in the form of an HTTP method or verb. The common HTTP methods are GET, POST, PUT, and DELETE. Here is an example of the URL and HTTP method with a `posts` resource:
- Reading: `/posts/` =&gt; GET
- Creating: `/posts/new` =&gt; POST
- Updating: `/posts/:id` =&gt; PUT
- Destroying: `/posts/:id` =&gt; DELETE

### Don’t forget:

- Alternatives to this pattern like GraphQL

### Additional links

- [What is REST — A Simple Explanation for Beginners, Part 1: Introduction](https://medium.com/extend/what-is-rest-a-simple-explanation-for-beginners-part-1-introduction-b4a072f8740f)

### What does the following function return?

    function greet() {
      return;
      {
        message: "hello";
      }
    }

````

### Answer

Because of JavaScript’s automatic semicolon insertion (ASI), the compiler places a semicolon after `return` keyword and therefore it returns `undefined` without an error being thrown.

### Don’t forget:

- Automatic semicolon placement can lead to time-consuming bugs

### Additional links

- [Automatic semicolon insertion in JavaScript](http://2ality.com/2011/05/semicolon-insertion.html) **Folders** [&lt;parent&gt;](../right.html) | **File** | **File** | **File** | **File** | **File** | **File** | | :——————————————————————— | :————————————————————————————————- | :———————————————————————————– | :—————————————————————– | :——————————————————————————————— | :——————————————————————————- | | [accessibility-aria.html](accessibility-aria.html) | [fibonacci.html](fibonacci.html) | [object-creation.html](object-creation.html) | [accessibility-contrast.md](accessibility-contrast.md) | [fibonacci.md](fibonacci.md) | [null-vs-undefined.md](null-vs-undefined.md) | | [accessibility-contrast.html](accessibility-contrast.html) | [find-the-anagrams.html](find-the-anagrams.html) | [parameter-vs-argument.html](parameter-vs-argument.html) | [accessibility-testing.md](accessibility-testing.md) | [find-the-anagrams.md](find-the-anagrams.md) | [object-creation.md](object-creation.md) | | [accessibility-testing.html](accessibility-testing.html) | [flex-layout.html](flex-layout.html) | [pass-by-value-reference.html](pass-by-value-reference.html) | [accessibility-tree.md](accessibility-tree.md) | [flex-layout.md](flex-layout.md) | [parameter-vs-argument.md](parameter-vs-argument.md) | | [accessibility-tree.html](accessibility-tree.html) | [floating-point.html](floating-point.html) | [passing-arguments-to-event-handlers.html](passing-arguments-to-event-handlers.html) | [alt-attribute.md](alt-attribute.md) | [floating-point.md](floating-point.md) | [pass-by-value-reference.md](pass-by-value-reference.md) | | [alt-attribute.html](alt-attribute.html) | [focus-ring.html](focus-ring.html) | [pipe.html](pipe.html) | [async-defer-attributes.md](async-defer-attributes.md) | [focus-ring.md](focus-ring.md) | [passing-arguments-to-event-handlers.md](passing-arguments-to-event-handlers.md) | | [async-defer-attributes.html](async-defer-attributes.html) | [for-each-map.html](for-each-map.html) | [portals.html](portals.html) | [async-functions.md](async-functions.md) | [for-each-map.md](for-each-map.md) | [pipe.md](pipe.md) | | [async-functions.html](async-functions.html) | [fragments.html](fragments.html) | [postfix-vs-prefix-increment.html](postfix-vs-prefix-increment.html) | [batches.md](batches.md) | [fragments.md](fragments.md) | [portals.md](portals.md) | | [batches.html](batches.html) | [functional-programming.html](functional-programming.html) | [promise-states.html](promise-states.html) | [bem.md](bem.md) | [functional-programming.md](functional-programming.md) | [postfix-vs-prefix-increment.md](postfix-vs-prefix-increment.md) | | [bem.html](bem.html) | [handling-route-changes-in-single-page-apps.html](handling-route-changes-in-single-page-apps.html) | [promises.html](promises.html) | [big-o-notation.md](big-o-notation.md) | [handling-route-changes-in-single-page-apps.md](handling-route-changes-in-single-page-apps.md) | [promise-states.md](promise-states.md) | | [big-o-notation.html](big-o-notation.html) | [hoc-component.html](hoc-component.html) | [prop-validation.html](prop-validation.html) | [bind-function.md](bind-function.md) | [hoc-component.md](hoc-component.md) | [promises.md](promises.md) | | [bind-function.html](bind-function.html) | [hoisting-example.html](hoisting-example.html) | [prototypal-inheritance.html](prototypal-inheritance.html) | [cache-busting.md](cache-busting.md) | [hoisting-example.md](hoisting-example.md) | [prop-validation.md](prop-validation.md) | | [cache-busting.html](cache-busting.html) | [hoisting.html](hoisting.html) | [pure-functions.html](pure-functions.html) | [callback-hell.md](callback-hell.md) | [hoisting.md](hoisting.md) | [prototypal-inheritance.md](prototypal-inheritance.md) | | [callback-hell.html](callback-hell.html) | [html-multiple-header-footers.html](html-multiple-header-footers.html) | [react-comments.html](react-comments.html) | [callback-in-setState.md](callback-in-setState.md) | [html-multiple-header-footers.md](html-multiple-header-footers.md) | [pure-functions.md](pure-functions.md) | | [callback-in-setState.html](callback-in-setState.html) | [html-specification-implementation.html](html-specification-implementation.html) | [recursion.html](recursion.html) | [callback-refs-vs-finddomnode.md](callback-refs-vs-finddomnode.md) | [html-specification-implementation.md](html-specification-implementation.md) | [react-comments.md](react-comments.md) | | [callback-refs-vs-finddomnode.html](callback-refs-vs-finddomnode.html) | [html-vs-react-event-handling.html](html-vs-react-event-handling.html) | [reference-example.html](reference-example.html) | [callbacks.md](callbacks.md) | [html-vs-react-event-handling.md](html-vs-react-event-handling.md) | [recursion.md](recursion.md) | | [callbacks.html](callbacks.html) | [html-vs-xhtml.html](html-vs-xhtml.html) | [refs.html](refs.html) | [children-prop.md](children-prop.md) | [html-vs-xhtml.md](html-vs-xhtml.md) | [reference-example.md](reference-example.md) | | [children-prop.html](children-prop.html) | [html5-semantic-elements-usage.html](html5-semantic-elements-usage.html) | [rel-noopener.html](rel-noopener.html) | [class-name.md](class-name.md) | [html5-semantic-elements-usage.md](html5-semantic-elements-usage.md) | [refs.md](refs.md) | | [class-name.html](class-name.html) | [html5-web-storage.html](html5-web-storage.html) | [rest.html](rest.html) | [clone-object.md](clone-object.md) | [html5-web-storage.md](html5-web-storage.md) | [rel-noopener.md](rel-noopener.md) | | [clone-object.html](clone-object.html) | [iife.html](iife.html) | [return-semicolon.html](return-semicolon.html) | [closures.md](closures.md) | [iife.md](iife.md) | [rest.md](rest.md) | | [closures.html](closures.html) | [imperative-vs-declarative.html](imperative-vs-declarative.html) | [right.html](right.html) | [comparing-objects.md](comparing-objects.md) | [imperative-vs-declarative.md](imperative-vs-declarative.md) | [return-semicolon.md](return-semicolon.md) | | [comparing-objects.html](comparing-objects.html) | [inline-conditional-expressions.html](inline-conditional-expressions.html) | [semicolons.html](semicolons.html) | [context.md](context.md) | [inline-conditional-expressions.md](inline-conditional-expressions.md) | [semicolons.md](semicolons.md) | | [context.html](context.html) | [keys.html](keys.html) | [short-circuit-evaluation.html](short-circuit-evaluation.html) | [cors.md](cors.md) | [keys.md](keys.md) | [short-circuit-evaluation.md](short-circuit-evaluation.md) | | [cors.html](cors.html) | [landmark-roles.html](landmark-roles.html) | [sprites.html](sprites.html) | [css-box-model.md](css-box-model.md) | [landmark-roles.md](landmark-roles.md) | [sprites.md](sprites.md) | | [css-box-model.html](css-box-model.html) | [lexical-vs-dynamic-scoping.html](lexical-vs-dynamic-scoping.html) | [stateful-components.html](stateful-components.html) | [css-preprocessors.md](css-preprocessors.md) | [lexical-vs-dynamic-scoping.md](lexical-vs-dynamic-scoping.md) | [stateful-components.md](stateful-components.md) | | [css-preprocessors.html](css-preprocessors.html) | [lifecycle-methods.html](lifecycle-methods.html) | [stateless-components.html](stateless-components.html) | [css-sibling-selectors.md](css-sibling-selectors.md) | [lifecycle-methods.md](lifecycle-methods.md) | [stateless-components.md](stateless-components.md) | | [css-sibling-selectors.html](css-sibling-selectors.html) | [lifecycle.html](lifecycle.html) | [static-vs-instance-method.html](static-vs-instance-method.html) | [css-specificity.md](css-specificity.md) | [lifecycle.md](lifecycle.md) | [static-vs-instance-method.md](static-vs-instance-method.md) | | [css-specificity.html](css-specificity.html) | [lift-state.html](lift-state.html) | [sync-vs-async.html](sync-vs-async.html) | [debouncing.md](debouncing.md) | [lift-state.md](lift-state.md) | [sync-vs-async.md](sync-vs-async.md) | | [debouncing.html](debouncing.html) | [mask.html](mask.html) | [this.html](this.html) | [dom.md](dom.md) | [mask.md](mask.md) | [this.md](this.md) | | [dom.html](dom.html) | [media-properties.html](media-properties.html) | [typeof-typeof.html](typeof-typeof.html) | [double-vs-triple-equals.md](double-vs-triple-equals.md) | [media-properties.md](media-properties.md) | [typeof-typeof.md](typeof-typeof.md) | | [double-vs-triple-equals.html](double-vs-triple-equals.html) | [memoize.html](memoize.html) | [types.html](types.html) | [element-vs-component.md](element-vs-component.md) | [memoize.md](memoize.md) | [types.md](types.md) | | [element-vs-component.html](element-vs-component.html) | [methods-context-react-classes.html](methods-context-react-classes.html) | [ui-library-framework-purpose.html](ui-library-framework-purpose.html) | [em-rem-difference.md](em-rem-difference.md) | [methods-context-react-classes.md](methods-context-react-classes.md) | [ui-library-framework-purpose.md](ui-library-framework-purpose.md) | | [em-rem-difference.html](em-rem-difference.html) | [mime.html](mime.html) | [use-strict.html](use-strict.html) | [error-boundaries.md](error-boundaries.md) | [mime.md](mime.md) | [use-strict.md](use-strict.md) | | [error-boundaries.html](error-boundaries.html) | [mutable-vs-immutable.html](mutable-vs-immutable.html) | [var-let-const.html](var-let-const.html) | [event-delegation.md](event-delegation.md) | [mutable-vs-immutable.md](mutable-vs-immutable.md) | [var-let-const.md](var-let-const.md) | | [event-delegation.html](event-delegation.html) | [nan.html](nan.html) | [virtual-dom.html](virtual-dom.html) | [event-driven-programming.md](event-driven-programming.md) | [nan.md](nan.md) | [virtual-dom.md](virtual-dom.md) | | [event-driven-programming.html](event-driven-programming.html) | [node-error-first-callback.html](node-error-first-callback.html) | [wcag.html](wcag.html) | [expression-vs-statement.md](expression-vs-statement.md) | [node-error-first-callback.md](node-error-first-callback.md) | [wcag.md](wcag.md) | | [expression-vs-statement.html](expression-vs-statement.html) | [node-event-loop.html](node-event-loop.html) | [xss.html](xss.html) | [falsy-truthy.md](falsy-truthy.md) | [node-event-loop.md](node-event-loop.md) | [xss.md](xss.md) | | [falsy-truthy.html](falsy-truthy.html) | [null-vs-undefined.html](null-vs-undefined.html) | [accessibility-aria.md](accessibility-aria.md) | | | | Folders: 1 Files: 219 Size of all files: 461594 K

### Are semicolons required in JavaScript?

### Answer

Sometimes. Due to JavaScript’s automatic semicolon insertion, the interpreter places semicolons after most statements. This means semicolons can be omitted in most cases. However, there are some cases where they are required. They are not required at the beginning of a block, but are if they follow a line and:

1.  The line starts with `[`

```js

    const previousLine = 3;
    [1, 2, previousLine].map((n) => n \* 2);

1.  The line starts with `(`

```js

    const previousLine = 3;
    (function () {
    // ...
    })();

In the above cases, the interpreter does not insert a semicolon after `3`, and therefore it will see the `3` as attempting object property access or being invoked as a function, which will throw errors.

### Don’t forget:

- Semicolons are usually optional in JavaScript but have edge cases where they are required.
- If you don’t use semicolons, tools like Prettier will insert semicolons for you in the places where they are required on save in a text editor to prevent errors.

### Additional links

### What is short-circuit evaluation in JavaScript?

### Answer

Short-circuit evaluation involves logical operations evaluating from left-to-right and stopping early.

    true || false;

In the above sample using logical OR, JavaScript won’t look at the second operand `false`, because the expression evaluates to `true` regardless. This is known as short-circuit evaluation. This also works for logical AND.

    false && true;

This means you can have an expression that throws an error if evaluated, and it won’t cause issues.

    true || nonexistentFunction();
    false && nonexistentFunction();

This remains true for multiple operations because of left-to-right evaluation.

    true || nonexistentFunction() || window.nothing.wouldThrowError;
    true || window.nothing.wouldThrowError;
    true;

A common use case for this behavior is setting default values. If the first operand is falsy the second operand will be evaluated.

```js

    const options = {};
    const setting = options.setting || "default";
    setting; // "default"

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

````

In the above case, if `e.target` is not or does not contain an element matching the `"button"` selector, the function will not be called. This is because the first operand will be falsy, causing the second operand to not be evaluated.

### Don’t forget:

- Logical operations do not produce a boolean unless the operand(s) evaluate to a boolean.

### Additional links

- [JavaScript: What is short-circuit evaluation?](https://codeburst.io/javascript-what-is-short-circuit-evaluation-ff22b2f5608c)

### What are the advantages of using CSS sprites and how are they utilized?

### Answer

CSS sprites combine multiple images into one image, limiting the number of HTTP requests a browser has to make, thus improving load times. Even under the new HTTP/2 protocol, this remains true. Under HTTP/1.1, at most one request is allowed per TCP connection. With HTTP/1.1, modern browsers open multiple parallel connections (between 2 to 8) but it is limited. With HTTP/2, all requests between the browser and the server are multiplexed on a single TCP connection. This means the cost of opening and closing multiple connections is mitigated, resulting in a better usage of the TCP connection and limits the impact of latency between the client and server. It could then become possible to load tens of images in parallel on the same TCP connection. However, according to [benchmark results](https://blog.octo.com/en/http2-arrives-but-sprite-sets-aint-no-dead/), although HTTP/2 offers 50% improvement over HTTP/1.1, in most cases the sprite set is still faster to load than individual images. To utilize a spritesheet in CSS, one would use certain properties, such as `background-image`, `background-position` and `background-size` to ultimately alter the `background` of an element.

### Don’t forget:

- `background-image`, `background-position` and `background-size` can be used to utilize a spritesheet.

### Additional links

- [CSS Sprites explained by CSS Tricks](https://css-tricks.com/css-sprites/)

### What is a stateful component in React?

### Answer

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

### Don’t forget:

- Stateful components have internal state that they depend on.
- Stateful components are class components or function components that use stateful Hooks.
- Stateful components have their state initialized in the constructor or with `useState()`.

### Additional links

- [React docs on State and Lifecycle](https://reactjs.org/docs/state-and-lifecycle.html)

### What is a stateless component?

### Answer

A stateless component is a component whose behavior does not depend on its state. Stateless components can be either functional or class components. Stateless functional components are easier to maintain and test since they are guaranteed to produce the same output given the same props. Stateless functional components should be preferred when lifecycle hooks don’t need to be used.

### Don’t forget:

- Stateless components are independent of their state.
- Stateless components can be either class or functional components.
- Stateless functional components avoid the `this` keyword altogether.

### Additional links

- [React docs on State and Lifecycle](https://reactjs.org/docs/state-and-lifecycle.html)

### Explain the difference between a static method and an instance method.

### Answer

Static methods belong to a class and don’t act on instances, while instance methods belong to the class prototype which is inherited by all instances of the class and acts on them.

    Array.isArray; // static method of Array
    Array.prototype.push; // instance method of Array

In this case, the `Array.isArray` method does not make sense as an instance method of arrays because we already know the value is an array when working with it. Instance methods could technically work as static methods, but provide terser syntax:

````js

```js

    const arr = [1, 2, 3];
    arr.push(4);
    Array.push(arr, 4);
````

### Don’t forget:

- How to create static and instance methods with ES2015 class syntax

### Additional links

- [Classes on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)

### What is the difference between synchronous and asynchronous code in JavaScript?

### Answer

Synchronous means each operation must wait for the previous one to complete. Asynchronous means an operation can occur while another operation is still being processed. In JavaScript, all code is synchronous due to the single-threaded nature of it. However, asynchronous operations not part of the program (such as `XMLHttpRequest` or `setTimeout`) are processed outside of the main thread because they are controlled by native code (browser APIs), but callbacks part of the program will still be executed synchronously.

### Don’t forget:

- JavaScript has a concurrency model based on an “event loop”.
- Functions like `alert` block the main thread so that no user input is registered until the user closes it.

### Additional links

### What is the `this` keyword and how does it work?

### Answer

The `this` keyword is an object that represents the context of an executing function. Regular functions can have their `this` value changed with the methods `call()`, `apply()` and `bind()`. Arrow functions implicitly bind `this` so that it refers to the context of its lexical environment, regardless of whether or not its context is set explicitly with `call()`. Here are some common examples of how `this` works:

### Object literals

`this` refers to the object itself inside regular functions if the object precedes the invocation of the function. Properties set as `this` do not refer to the object.

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

### Event listeners

`this` refers to the element listening to the event.

```js
document.body.addEventListener("click", function () {
  console.log(this); // document.body
});
```

### Constructors

`this` refers to the newly created object.

```js
class Example {
  constructor() {
    console.log(this); // myExample
  }
}
```

---

```js
const myExample = new Example();
```

### Manual

With `call()` and `apply()`, `this` refers to the object passed as the first argument.

    var myFunction = function () {
      return this;
    };
    myFunction.call({ customThis: true }); // { customThis: true }

### Unwanted `this`

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

### Don’t forget:

- In non-strict mode, global `this` is the global object (`window` in browsers), while in strict mode global `this` is `undefined`.
- `Function.prototype.call` and `Function.prototype.apply` set the `this` context of an executing function as the first argument, with `call` accepting a variadic number of arguments thereafter, and `apply` accepting an array as the second argument which are fed to the function in a variadic manner.
- `Function.prototype.bind` returns a new function that enforces the `this` context as the first argument which cannot be changed by other functions.
- If a function requires its `this` context to be changed based on how it is called, you must use the `function` keyword. Use arrow functions when you want `this` to be the surrounding (lexical) context.

### Additional links

- [`this` on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)

### What does the following code evaluate to?

    typeof typeof 0;

### Answer

It evaluates to `"string"`. `typeof 0` evaluates to the string `"number"` and therefore `typeof "number"` evaluates to `"string"`.

### Don’t forget:

### Additional links

- [MDN docs for typeof](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)

### What are JavaScript data types?

### Answer

The latest ECMAScript standard defines seven data types, six of them being primitive: `Boolean`, `Null`, `Undefined`, `Number`, `String`, `Symbol` and one non-primitive data type: `Object`.

### Don’t forget:

- Mention of newly added `Symbol` data type
- `Array`, `Date` and `function` are all of type `object`
- Functions in JavaScript are objects with the capability of being callable

### Additional links

- [MDN docs for data types and data structures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)
- [Understanding Data Types in JavaScript](https://www.digitalocean.com/community/tutorials/understanding-data-types-in-javascript)

### What is the purpose of JavaScript UI libraries/frameworks like React, Vue, Angular, Hyperapp, etc?

### Answer

The main purpose is to avoid manipulating the DOM directly and keep the state of an application in sync with the UI easily. Additionally, they provide the ability to create components that can be reused when they have similar functionality with minor differences, avoiding duplication which would require multiple changes whenever the structure of a component which is reused in multiple places needs to be updated. When working with DOM manipulation libraries like jQuery, the data of an application is generally kept in the DOM itself, often as class names or `data` attributes. Manipulating the DOM to update the UI involves many extra steps and can introduce subtle bugs over time. Keeping the state separate and letting a framework handle the UI updates when the state changes reduces cognitive load. Saying you want the UI to look a certain way when the state is a certain value is the declarative way of creating an application, instead of the imperative way of manually updating the UI to reflect the new state.

### Don’t forget:

- The virtual DOM is a representation of the real DOM tree in the form of plain objects, which allows a library to write code as if the entire document is thrown away and rebuilt on each change, while the real DOM only updates what needs to be changed. Comparing the new virtual DOM against the previous one leads to high efficiency as changing real DOM nodes is costly compared to recalculating the virtual DOM.
- JSX is an extension to JavaScript that provides XML-like syntax to create virtual DOM objects which is transformed to function calls by a transpiler. It simplifies control flow (if statements/ternary expressions) compared to tagged template literals.

### Additional links

- [Virtual DOM in Hyperapp](https://github.com/hyperapp/hyperapp#view)

### What does `'use strict'` do and what are some of the key benefits to using it?

### Answer

Including `'use strict'` at the beginning of your JavaScript source file enables strict mode, which enforces more strict parsing and error handling of JavaScript code. It is considered a good practice and offers a lot of benefits, such as:

- Easier debugging due to eliminating silent errors.
- Disallows variable redefinition.
- Prevents accidental global variables.
- Oftentimes provides increased performance over identical code that is not running in strict mode.
- Simplifies `eval()` and `arguments`.
- Helps make JavaScript more secure.

### Don’t forget:

- Eliminates `this` coercion, throwing an error when `this` references a value of `null` or `undefined`.
- Throws an error on invalid usage of `delete`.
- Prohibits some syntax likely to be defined in future versions of ECMAScript

### Additional links

- [MDN docs for strict mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode)

### What are the differences between `var`, `let`, `const` and no keyword statements?

### Answer

### No keyword

When no keyword exists before a variable assignment, it is either assigning a global variable if one does not exist, or reassigns an already declared variable. In non-strict mode, if the variable has not yet been declared, it will assign the variable as a property of the global object (`window` in browsers). In strict mode, it will throw an error to prevent unwanted global variables from being created.

### var

`var` was the default statement to declare a variable until ES2015. It creates a function-scoped variable that can be reassigned and redeclared. However, due to its lack of block scoping, it can cause issues if the variable is being reused in a loop that contains an asynchronous callback because the variable will continue to exist outside of the block scope. Below, by the time the the `setTimeout` callback executes, the loop has already finished and the `i` variable is `10`, so all ten callbacks reference the same variable available in the function scope.

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

### let

`let` was introduced in ES2015 and is the new preferred way to declare variables that will be reassigned later. Trying to redeclare a variable again will throw an error. It is block-scoped so that using it in a loop will keep it scoped to the iteration.

```js
for (let i = 0; i < 10; i++) {
  setTimeout(() => {
    // logs 0, 1, 2, 3, ...
    console.log(i);
  });
}
```

### const

`const` was introduced in ES2015 and is the new preferred default way to declare all variables if they won’t be reassigned later, even for objects that will be mutated (as long as the reference to the object does not change). It is block-scoped and cannot be reassigned.

````js

    const myObject = {};
    myObject.prop = "hello!"; // No error
    myObject = "hello"; // Error

### Don’t forget:

- All declarations are hoisted to the top of their scope.
- However, with `let` and `const` there is a concept called the temporal dead zone (TDZ). While the declarations are still hoisted, there is a period between entering scope and being declared where they cannot be accessed.
- Show a common issue with using `var` and how `let` can solve it, as well as a solution that keeps `var`.
- `var` should be avoided whenever possible and prefer `const` as the default declaration statement for all variables unless they will be reassigned later, then use `let` if so.

### Additional links

- [`let` vs `const`](https://wesbos.com/let-vs-const/)

### What is a virtual DOM and why is it used in libraries/frameworks?

### Answer

The virtual DOM (VDOM) is a representation of the real DOM in the form of plain JavaScript objects. These objects have properties to describe the real DOM nodes they represent: the node name, its attributes, and child nodes.

    <div class="counter">
      <h1>0</h1>
      <button>-</button>
      <button>+</button>
    </div>

The above markup’s virtual DOM representation might look like this:

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

The library/framework uses the virtual DOM as a means to improve performance. When the state of an application changes, the real DOM needs to be updated to reflect it. However, changing real DOM nodes is costly compared to recalculating the virtual DOM. The previous virtual DOM can be compared to the new virtual DOM very quickly in comparison. Once the changes between the old VDOM and new VDOM have been calculated by the diffing engine of the framework, the real DOM can be patched efficiently in the least time possible to match the new state of the application.

### Don’t forget:

- Why accessing the DOM can be so costly.

### Additional links

- [The difference between Virtual DOM and DOM](http://reactkungfu.com/2015/10/the-difference-between-virtual-dom-and-dom/)

### What is WCAG? What are the differences between A, AA, and AAA compliance?

### Answer

WCAG stands for “Web Content Accessibility Guidelines”. It is a standard describing how to make web content more accessible to people with disabilities They have 12-13 guidelines and for each one, there are testable success criteria, which are at three levels: A, AA, and AAA. The higher the level, the higher the impact on the design of the web content. The higher the level, the web content is essentially more accessible by more users. Depending on where you live/work, there may be regulations requiring websites to meet certain levels of compliance. For instance, in Ontario, Canada, beginning January 1, 2021 all public websites and web content posted after January 1, 2012 must meet AA compliance.

### Don’t forget:

- A guideline for making web content more accessible
- 3 different levels (A, AA, and AAA) of compliance for each guideline
- Governments are starting to require web content to meet a certain level of compliance by law

### Additional links

- [Web Content Accessibility Guidelines (WCAG) Overview](https://www.w3.org/WAI/standards-guidelines/wcag/)
- [How to Meet WCAG](https://www.w3.org/WAI/WCAG21/quickref/)

### What is a cross-site scripting attack (XSS) and how do you prevent it?

### Answer

XSS refers to client-side code injection where the attacker injects malicious scripts into a legitimate website or web application. This is often achieved when the application does not validate user input and freely injects dynamic HTML content. For example, a comment system will be at risk if it does not validate or escape user input. If the comment contains unescaped HTML, the comment can inject a `<script>` tag into the website that other users will execute against their knowledge.

- The malicious script has access to cookies which are often used to store session tokens. If an attacker can obtain a user’s session cookie, they can impersonate the user.
- The script can arbitrarily manipulate the DOM of the page the script is executing in, allowing the attacker to insert pieces of content that appear to be a real part of the website.
- The script can use AJAX to send HTTP requests with arbitrary content to arbitrary destinations.

### Don’t forget:

- On the client, using `textContent` instead of `innerHTML` prevents the browser from running the string through the HTML parser which would execute scripts in it.
- On the server, escaping HTML tags will prevent the browser from parsing the user input as actual HTML and therefore won’t execute the script.

### Additional links

- [Cross-Site Scripting Attack (XSS)](https://www.acunetix.com/websitesecurity/cross-site-scripting/)

---

# ALL Prior Code

  ```js
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

````

---

```js
const permutations = (arr) => {
  if (arr.length <= 2) return arr.length === 2 ? [arr, [arr[1], arr[0]]] : arr;
  return arr.reduce(
    (acc, item, i) =>
      acc.concat(
        permutations([...arr.slice(0, i), ...arr.slice(i + 1)]).map((val) => [
          item,
          ...val,
        ])
      ),
    []
  );
};
function example() {
  console.log(this);
}
```

---

```js
const boundExample = bind(example, { a: true });
boundExample.call({ b: true }); // logs { a: true }
```

---

```js
const bind =
  (fn, context) =>
  (...args) =>
    fn.apply(context, args);
getData(function (a) {
  getMoreData(a, function (b) {
    getMoreData(b, function (c) {
      getMoreData(c, function (d) {
        getMoreData(d, function (e) {
          // ...
        });
      });
    });
  });
});
async function asyncAwaitVersion() {
  const a = await getData();
  const b = await getMoreData(a);
  const c = await getMoreData(b);
  const d = await getMoreData(c);
  const e = await getMoreData(d);
  // ...
}
setState({ name: "sudheer" }, () => {
  console.log("The name has updated and component re-rendered");
});
// Legacy approach using findDOMNode()
class MyComponent extends Component {
  componentDidMount() {
    findDOMNode(this).scrollIntoView();
  }
  render() {
    return <div />;
  }
}
// Recommended approach using callback refs
class MyComponent extends Component {
  componentDidMount() {
    this.node.scrollIntoView();
  }
  render() {
    return <div ref={(node) => (this.node = node)} />;
  }
}
function onClick() {
  console.log("The user clicked on the page.");
}
document.addEventListener("click", onClick);
const map = (arr, callback) => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i], i));
  }
  return result;
};
map([1, 2, 3, 4, 5], (n) => n * 2); // [2, 4, 6, 8, 10]
function GenericBox({ children }) {
  return <div className="container">{children}</div>;
}
function App() {
  return (
    <GenericBox>
      <span>Hello</span> <span>World</span>
    </GenericBox>
  );
}
```

---

```js
const element = document.createElement("div");
element.className = "hello";
const element = {
  attributes: {
    class: "hello",
  },
};
```

---

```js
    const { class } = this.props // Error
    const { className } = this.props // All good
    const { class: className } =
        this.props // All good, but
    const obj = { a: 1, b: 2 }

```

---

```js
const shallowClone = { ...obj };
function isDeepEqual(obj1, obj2, testPrototypes = false) {
  if (obj1 === obj2) {
    return true;
  }
  if (typeof obj1 === "function" && typeof obj2 === "function") {
    return obj1.toString() === obj2.toString();
  }
  if (obj1 instanceof Date && obj2 instanceof Date) {
    return obj1.getTime() === obj2.getTime();
  }
  if (
    Object.prototype.toString.call(obj1) !==
      Object.prototype.toString.call(obj2) ||
    typeof obj1 !== "object"
  ) {
    return false;
  }
  const prototypesAreEqual = testPrototypes
    ? isDeepEqual(
        Object.getPrototypeOf(obj1),
        Object.getPrototypeOf(obj2),
        true
      )
    : true;
  const obj1Props = Object.getOwnPropertyNames(obj1);
  const obj2Props = Object.getOwnPropertyNames(obj2);
  return (
    obj1Props.length === obj2Props.length &&
    prototypesAreEqual &&
    obj1Props.every((prop) => isDeepEqual(obj1[prop], obj2[prop]))
  );
}
```

---

```js
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

```

---

```js
const myLibrary = (function () {
  var privateVariable = 2;
  return {
    publicMethod: () => privateVariable,
  };
})();
privateVariable; // ReferenceError
myLibrary.publicMethod(); // 2
const numbers = [1, 2, 3, 4, 5];
const numbersDoubled = [];
for (let i = 0; i < numbers.length; i++) {
  numbersDoubled[i] = numbers[i] * 2;
}
```

---

```js
const numbers = [1, 2, 3, 4, 5];
const numbersDoubled = numbers.map((n) => n * 2);
function App({ messages, isVisible }) {
  return (
    <div>
      if (messages.length > 0){" "}
      {<h2>You have {messages.length} unread messages.</h2>} else{" "}
      {<h2>You have no unread messages.</h2>}
      if (isVisible) {<p>I am visible.</p>}
    </div>
  );
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
  );
}
```

---

```js
const todoItems = todos.map((todo) => <li key={todo.id}>{todo.text}</li>);
const mask = (str, maskChar = "#") =>
  str.slice(-4).padStart(str.length, maskChar);
const memoize = (fn) => {
  const cache = new Map();
  return (value) => {
    const cachedResult = cache.get(value);
    if (cachedResult !== undefined) return cachedResult;
    const result = fn(value);
    cache.set(value, result);
    return result;
  };
};
```

---

```js
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

```

---

```js
const person1 = new Person("John", 50);
const person2 = new Person("Sally", 20);
person1.birthday(); // person1.age === 51
person2.birthday(); // person2.age === 21
const createPerson = (name, age) => {
  const birthday = () => person.age++;
  const person = { name, age, birthday };
  return person;
};
```

---

```js
const person = createPerson("John", 50);
person.birthday(); // person.age === 51
const personProto = {
  birthday() {
    this.age++;
  },
};
```

---

```js
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

```

---

```js
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

```

---

```js
const previousLine = 3;
[1, 2, previousLine].map((n) => n * 2);
const previousLine = 3;
(function () {
  // ...
})();
true || false;
false && true;
true || nonexistentFunction();
false && nonexistentFunction();
true || nonexistentFunction() || window.nothing.wouldThrowError;
true || window.nothing.wouldThrowError;
true;
const options = {};
```

---

```js
const setting = options.setting || "default";
setting; // "default"
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
Array.isArray; // static method of Array
Array.prototype.push; // instance method of Array
const arr = [1, 2, 3];
arr.push(4);
Array.push(arr, 4);
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
document.body.addEventListener("click", function () {
  console.log(this); // document.body
});
class Example {
  constructor() {
    console.log(this); // myExample
  }
}
```

---

```js
const myExample = new Example();
var myFunction = function () {
  return this;
};
myFunction.call({ customThis: true }); // { customThis: true }
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
typeof typeof 0;
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
for (let i = 0; i < 10; i++) {
  setTimeout(() => {
    // logs 0, 1, 2, 3, ...
    console.log(i);
  });
}
```

---

```js
const myObject = {};
myObject.prop = "hello!"; // No error
myObject = "hello"; // Error
```
