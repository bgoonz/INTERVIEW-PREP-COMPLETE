// require _ from ('underscore');

let _ = require( 'underscore' );

console.log(_.max([1, 2, 3, 4, 5]));

/* Write a function named plucker() that takes a key into an associative structure—such as an array or an object and returns a function that, given a structure, returns the value at the key.  */

function plucker (key) {
    return function (obj) {
        return (obj && obj[key]);
    }
}

//Use case
let best = {
  title: "Infinite Jest",
  author: "DFW"
};

let getTitle = plucker( 'title' );
// console.log(getTitle(best));   // Infinite Jest

// Note, getTitle itself is a function because plucker() returns a function as its first return and that takes an argument.

// another use case
let books = [ {
  title: "Chthon"
}, {
  stars: 5
}, {
  title: "Botchan"
} ];

let third = plucker( 2 );
console.log(third(books));  // { title: 'Botchan' }


