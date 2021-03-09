let stringArray = new Array( '20', '120', '111', '215', '54', '78' );

// let's convert it to a real array of numbers, not of strings :
let intArray = stringArray.map( Number );

console.log(stringArray);
console.log(intArray);
