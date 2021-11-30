// !Easy
// Count Length of Cycle
// Election
// Longest Uniform String
// Run Length Encoding
// Search Tree
// Second Smallest
// Walking Robot
// !Moderate
// Best Average Grade
// Longest Word
// Median Two Sorted Arrays
// Snowpack
// Stair Case
// !Hard
// HashMap
// Lowest Price
// Prefix Search
// Easy
// Count Length of Cycle
/**
 * Instructions to candidate.
 *  1) Run this code in the REPL to observe its behaviour. The
 *     execution entry point is main().
 *  2) Consider adding some additional tests in doTestsPass().
 *  3) Implement countLengthOfCycle() correctly.
 *  4) If time permits, try to improve your implementation.
 */

let _ = require( 'lodash' );

/**
 * countLengthOfCycle(arr, startIndex)
 *
 * You are given an integer array of size N. 
 * Every element of the array is greater than or equal to 0.
 * Starting from arr[startIndex], follow each element to the index it points to. 
 * Continue to do this until you find a cycle. 
 * Return the length of the cycle. If no cycle is found return -1
 *
 * Examples:
 * countLengthOfCycle([1, 0], 0) == 2
 * countLengthOfCycle([1, 2, 0], 0) == 3
 */
const countLengthOfCycle = function ( arr, startIndex ) {
  //TODO: Implement Solution

  return -1;
}

/**
 * boolean doTestsPass()
 * Returns true if all the tests pass. Otherwise returns false.
 */
const doTestsPass = () => {
  let testsPassed = true;
  let testCases = [
    [
      [ 1, 0 ], 0, 2
    ],
    [
      [ 1, 2, 0 ], 0, 3
    ]
  ];

  _.forEach( testCases, ( testCase ) => {
    testsPassed &=
      countLengthOfCycle( testCase[ 0 ], testCase[ 1 ] ) === testCase[ 2 ];
  } )

  return testsPassed;
}

/**
 * Main execution entry.
 */
if ( doTestsPass() ) {
  console.log( "All tests pass!" );
} else {
  console.log( "There are test failures." );
}



const countLengthOfCycle = function ( arr, startIndex ) {
  let visited = {};
  let index = startIndex;
  let count = 1;
  while ( !( index in visited ) ) {
    if ( arr[ index ] > arr.length ) return -1;
    visited[ index ] = count;
    count++;
    index = arr[ index ];
  }

  return count - visited[ index ];
}

/**
 * boolean doTestsPass()
 * Returns true if all the tests pass. Otherwise returns false.
 */
const doTestsPass = () => {
  let testsPassed = true;
  let testCases = [
    [
      [ 1, 0 ], 0, 2
    ],
    [
      [ 1, 2, 0 ], 0, 3
    ],
    /* additional test cases
    [[1, 1], 0, 1 ],
    [[1, 3, 0, 1], 0, 2],
    [[7], 0, -1],
    [[1, 2, 4], 0, -1]
    */
  ];

  _.forEach( testCases, ( testCase ) => {
    testsPassed &=
      countLengthOfCycle( testCase[ 0 ], testCase[ 1 ] ) === testCase[ 2 ];
  } )

  return testsPassed;
}

/**
 * Main execution entry.
 */
if ( doTestsPass() ) {
  console.log( "All tests pass!" );
} else {
  console.log( "There are test failures." );
}
Election
let _ = require( 'underscore' );
/**
 * Instructions to candidate.
 * 1) Run this code in the REPL to observe its behaviour. The
 * execution entry point is main().
 * 2) Consider adding some additional tests in doTestsPass().
 * 3) Implement whoIsElected() correctly.
 * 4) If time permits, try to improve your implementation.
 */
let solution = ( function () {

  /**
   * A group of students are sitting in a circle. The teacher is electing a new class president. 
   * The teacher does this by singing a song while walking around the circle. After the song is 
   * finished the student at which the teacher stopped is removed from the circle. 
   * 
   * Starting at the student next to the one that was just removed, the teacher resumes singing and walking around the circle.
   * After the teacher is done singing, the next student is removed. The teacher repeats this until only one student is left. 
   *
   * A song of length k will result in the teacher walking past k students on each round. The students are numbered 1 to n. The teacher starts at student 1.
   * 
   * For example, suppose the song length is two (k=2). And there are four students to start with (1,2,3,4). The first 
   * student to go would be `2`, after that `4`, and after that `3`. Student `1` would be the next president in this example.
   *
   * @param n the number of students sitting in a circle.
   * @param k the length (in students) of each song.
   * @return the number of the student that is elected.
   */
  function whoIsElected( n, k ) {
    return -1;
  }


  /*
   * This function runs all of the tests in the 'testCases' object (where keys are the input string and values are the expected integer array).
   */
  function doTestsPass( testCases ) {
    let passes = true;
    for ( let i = 0; i < testCases.length; i++ ) {
      const testCase = testCases[ i ];
      const expectedResult = testCase[ 2 ];
      const actualResult = whoIsElected( testCase[ 0 ], testCase[ 1 ] );
      passes = passes && ( expectedResult === actualResult );
    }
    return passes;
  }

  return {
    doTestsPass: doTestsPass,
    whoIsElected: whoIsElected
  };

} )();

/*
  todo: add more test cases please!
*/
const testCases = [
  [ 1, 1, 1 ],
  [ 2, 2, 1 ],
  [ 4, 2, 1 ],
  [ 100, 2, 73 ]
]

if ( solution.doTestsPass( testCases ) ) {
  console.log( "All tests pass!" );
} else {
  console.error( "Not all tests pass :(" );
}



let solution = ( function () {

  /**
   * A group of students are sitting in a circle. The teacher is electing a new class president. 
   * The teacher does this by singing a song while walking around the circle. After the song is 
   * finished the student at which the teacher stopped is removed from the circle. 
   * 
   * Starting at the student next to the one that was just removed, the teacher resumes singing and walking around the circle.
   * After the teacher is done singing, the next student is removed. The teacher repeats this until only one student is left. 
   *
   * A song of length k will result in the teacher walking past k students on each round. The students are numbered 1 to n. The teacher starts at student 1.
   * 
   * For example, suppose the song length is two (k=2). And there are four students to start with (1,2,3,4). The first 
   * student to go would be `2`, after that `4`, and after that `3`. Student `1` would be the next president in this example.
   *
   * @param n the number of students sitting in a circle.
   * @param k the length (in students) of each song.
   * @return the number of the student that is elected.
   */
  function whoIsElected( n, k ) {
    if ( n === 1 ) return 1;
    return ( whoIsElected( n - 1, k ) + k - 1 ) % n + 1;
  }

  function whoIsElected2( n, k ) {
    let l = _.range( 1, n + 1 );
    let i = -1;
    while ( l.length > 1 ) {
      l.splice( ( i + k ) % l.length, 1 );
      i = ( i + k ) % ( l.length + 1 ) - 1;
    }
    return l[ 0 ];
  }


  /*
   * This function runs all of the tests in the 'testCases' object (where keys are the input string and values are the expected integer array).
   */
  function doTestsPass( testCases ) {
    let passes = true;
    for ( let i = 0; i < testCases.length; i++ ) {
      const testCase = testCases[ i ];
      const expectedResult = testCase[ 2 ];
      const actualResult = whoIsElected( testCase[ 0 ], testCase[ 1 ] );
      passes = passes && ( expectedResult === actualResult );
    }
    return passes;
  }

  return {
    doTestsPass: doTestsPass,
    whoIsElected: whoIsElected
  };

} )();

/*
  todo: add more test cases please!
*/
const testCases = [
  [ 1, 1, 1 ],
  [ 2, 2, 1 ],
  [ 4, 2, 1 ],
  [ 100, 2, 73 ],
  [ 5, 3, 4 ],
  [ 6, 4, 5 ],
  [ 1000, 5, 763 ]
]

if ( solution.doTestsPass( testCases ) ) {
  console.log( "All tests pass!" );
} else {
  console.error( "Not all tests pass :(" );
}
Longest Uniform String
/**
 * Instructions to candidate:
 * 
 *  1) Run this code in the REPL to observe its behaviour. The
 *     execution entry point is main().
 *
 *  2) Your task is to implement the following function ('longestUniformSubstring')
 *   
 *  This function should return an array with exactly two elements that describe the location of the longest
 *  uniform substring of a string input. The first element of the array should be the start index and the second 
 *  element is the length
 *  
 *  e.g.
 *      
 *      for the input: "abbbccda" the longest uniform substring is "bbb" 
 *      (which starts at index 1 and is 3 characters long).
 *      
 *      Therefore the return value would be the array: [1, 3]
 *  
 *  3) If time permits, consider adding additional test cases.
 */
let solution = ( function () {

  function longestUniformSubstring( input ) {
    return [ -1, 0 ];
  }


  /*
   * This function runs all of the tests in the 'testCases' object (where keys are the input string and values are the expected integer array).
   */
  function doTestsPass( testCases ) {
    let passes = true;
    for ( let testCase in testCases ) {
      if ( testCases.hasOwnProperty( testCase ) ) {
        let expectedResult = testCases[ testCase ];
        let actualResult = longestUniformSubstring( testCase );
        passes = passes && ( expectedResult[ 0 ] == actualResult[ 0 ] && expectedResult[ 1 ] == actualResult[ 1 ] );
      }
    }
    return passes;
  }

  return {
    doTestsPass: doTestsPass,
    longestUniformSubstring: longestUniformSubstring
  };

} )();

/*
  todo: add more test cases please!
*/
let testCases = {
  "": [ -1, 0 ],
  "10000111": [ 1, 4 ],
  "aabbbbbCdAA": [ 2, 5 ],
}

if ( solution.doTestsPass( testCases ) ) {
  console.log( "All tests pass!" );
} else {
  console.error( "Not all tests pass :(" );
}



let solution = ( function () {

  function longestUniformSubstring( input ) {
    let ix = 1;
    let longestLength = 0;
    let longestStart = -1;
    while ( ix < input.length ) {
      let start = ix - 1;
      let currentLength = 1;
      while ( ix < input.length && input[ ix ] == input[ ix - 1 ] ) {
        ix++;
        currentLength++;
      }
      if ( currentLength > longestLength ) {
        longestStart = start;
        longestLength = currentLength;
      }
      ix++;
    }
    return [ longestStart, longestLength ];
  }


  /*
   * You don't need to modify 'doTestsPass'.
   *   This function runs all of the tests in the 'testCases' object (where keys are the input string and values are the expected integer array).
   */
  function doTestsPass( testCases ) {
    let passes = true;
    for ( let testCase in testCases ) {
      if ( testCases.hasOwnProperty( testCase ) ) {
        let expectedResult = testCases[ testCase ];
        let actualResult = longestUniformSubstring( testCase );
        passes = passes && ( expectedResult[ 0 ] == actualResult[ 0 ] && expectedResult[ 1 ] == actualResult[ 1 ] );
      }
    }
    return passes;
  }

  return {
    doTestsPass: doTestsPass,
    longestUniformSubstring: longestUniformSubstring
  };

} )();

/*
  todo: add more test cases please!
*/
let testCases = {
  "": [ -1, 0 ],
  "10000111": [ 1, 4 ],
  "aabbbbbCdAA": [ 2, 5 ],
  "1000011010101110110100010010011111111": [ 29, 8 ]
}

if ( solution.doTestsPass( testCases ) ) {
  console.log( "All tests pass!" );
} else {
  console.error( "Not all tests pass :(" );
}
Run Length Encoding
/**
 * Instructions to candidate.
 *  1) Run this code in the REPL to observe its behaviour.
 *  2) Consider adding some additional tests in doTestsPass().
 *  3) Implement rle() correctly.
 *  4) If time permits, try to improve your implementation.
 */


/**
 * rle ( testString )
 *
 * Implement a run length encoding function.
 *
 * For a string input the function returns output encoded as follows:
 *
 * "a"     -> "a1"
 * "aa"    -> "a2"
 * "aabbb" -> "a2b3"
 * "aabbbaa" -> "a2b3a2"
 * ""      -> ""
 *
 */

const _ = require( "underscore" );

const rle = ( input ) => {
  // TODO: Implement solution
}

/**
 * boolean doTestsPass()
 * Returns true if all the tests pass. Otherwise returns false.
 */
/**
 * Returns true if all tests pass; otherwise, returns false.
 */
const doTestsPass = () => {

  const VALID_COMBOS = {
    "aaa": "a3",
    "aaabbc": "a3b2c1"
  };

  let testPassed = true;

  _.forEach( VALID_COMBOS, function ( value, key ) {
    console.log( key, rle( key ) );
    if ( value !== rle( key ) ) {
      testPassed = false;
    }
  } );

  return testPassed;
}


/**
 * Main execution entry.
 */
if ( doTestsPass() ) {
  console.log( "All tests pass!" );
} else {
  console.log( "There are test failures." );
}



const _ = require( "underscore" );

const rle = ( input ) => {
  if ( _.isEmpty( input ) ) {
    return "";
  }

  let result = "";

  let lastSeen = "";
  let count = 1;

  for ( let i = 0; i < input.length; i++ ) {
    let current = input.substring( i, i + 1 );
    if ( lastSeen === current ) {
      count++;
    } else {
      if ( !_.isEmpty( lastSeen ) ) {
        result += lastSeen + count;
      }
      count = 1;
      lastSeen = current;
    }
  }
  result += lastSeen + count;
  return result;
}

/**
 * boolean doTestsPass()
 * Returns true if all the tests pass. Otherwise returns false.
 */
/**
 * Returns true if all tests pass; otherwise, returns false.
 */
const doTestsPass = () => {

  const VALID_COMBOS = {
    "": "",
    "a": "a1",
    "aaa": "a3",
    "aaabbbaad": "a3b3a2d1"
  };

  let testPassed = true;

  _.forEach( VALID_COMBOS, function ( value, key ) {
    console.log( key, rle( key ) );
    if ( value !== rle( key ) ) {
      testPassed = false;
    }
  } );

  return testPassed;
}


/**
 * Main execution entry.
 */
if ( doTestsPass() ) {
  console.log( "All tests pass!" );
} else {
  console.log( "There are test failures." );
}
Search Tree
/*
 Instructions to candidate.
  1) Run this code in the REPL to observe its behaviour. The
   execution entry point is main().
  2) Implement the "put" and "contains" methods.
  3) Fix the "inOrderTraversal" method.
  4) Add additional relevant tests
  5) If time permits, try to improve your implementation.
*/

let _ = require( "underscore" );

class Node {

}


function put( node, value ) {
  // TODO implement me
}


function contains( node, value ) {
  // TODO implement me
}

function inOrderTraversal( node ) {
  return inOrderTraversalAcc( node, [] );
}


function inOrderTraversalAcc( node, acc ) {
  if ( !node.value ) {
    return acc;
  }

  inOrderTraversalAcc( node.left, acc );
  acc.push( node.value );
  inOrderTraversalAcc( node.right, acc );
  return acc;

}


function assert( condition ) {
  if ( !condition )
    throw new Error();
}

function testTree() {
  let tree = new Node();
  put( tree, 3 );
  put( tree, 1 );
  put( tree, 2 );
  put( tree, 5 );
  assert( !contains( tree, 0 ) );
  assert( contains( tree, 1 ) );
  assert( contains( tree, 2 ) );
  assert( contains( tree, 3 ) );
  assert( !contains( tree, 4 ) );
  assert( contains( tree, 5 ) );
  assert( !contains( tree, 6 ) );
  assert( _.isEqual( inOrderTraversal( tree ), [ 1, 2, 3, 5 ] ) );

}

function doTestsPass() {
  testTree();
  // TODO add more tests
}


/**
 * Main execution entry.
 */
doTestsPass();
console.log( "Success!" );



let _ = require( "underscore" );

class Node {

}


function put( node, value ) {
  if ( !value ) {
    return;
  }

  if ( !node.value ) {
    node.value = value;
    node.left = new Node();
    node.right = new Node();
  } else {
    if ( value < node.value ) {
      put( node.left, value );
    } else {
      put( node.right, value );
    }

  }
}


function contains( node, value ) {
  if ( !node || !value ) {
    return false;
  } else if ( node.value === value ) {
    return true;
  } else if ( node.value && value < node.value ) {
    return contains( node.left, value );
  } else {
    return contains( node.right, value );
  }

}

function inOrderTraversal( node ) {
  return inOrderTraversalAcc( node, [] );
}


function inOrderTraversalAcc( node, acc ) {
  if ( !node.value ) {
    return acc;
  }

  inOrderTraversalAcc( node.left, acc );
  acc.push( node.value );
  inOrderTraversalAcc( node.right, acc );
  return acc;

}


function assert( condition ) {
  if ( !condition ) {
    throw new Error();

  }
}

function testTree() {
  let tree = new Node();
  put( tree, 3 );
  put( tree, 1 );
  put( tree, 2 );
  put( tree, 5 );
  assert( !contains( tree, 0 ) );
  assert( contains( tree, 1 ) );
  assert( contains( tree, 2 ) );
  assert( contains( tree, 3 ) );
  assert( !contains( tree, 4 ) );
  assert( contains( tree, 5 ) );
  assert( !contains( tree, 6 ) );
  assert( _.isEqual( inOrderTraversal( tree ), [ 1, 2, 3, 5 ] ) );

}


function testEmptyTree() {
  let emptyTree = new Node();
  assert( _.isEqual( inOrderTraversal( emptyTree ), [] ) );

}

function testNegative() {
  let negativeTree = new Node();
  put( negativeTree, -1 );
  put( negativeTree, 11 );
  put( negativeTree, -10 );
  put( negativeTree, 50 );
  assert( contains( negativeTree, -10 ) );
  assert( contains( negativeTree, -1 ) );
  assert( contains( negativeTree, 11 ) );
  assert( contains( negativeTree, 50 ) );
  assert( _.isEqual( inOrderTraversal( negativeTree ), [ -10, -1, 11, 50 ] ) );

}

function testDupes() {
  let dupeTree = new Node();
  put( dupeTree, 1 );
  put( dupeTree, 2 );
  put( dupeTree, 1 );
  put( dupeTree, 2 );
  assert( contains( dupeTree, 1 ) );
  assert( contains( dupeTree, 2 ) );
  assert( _.isEqual( inOrderTraversal( dupeTree ), [ 1, 1, 2, 2 ] ) );

}

function testUndefined() {
  let undefinedTree = new Node();
  put( undefinedTree, undefined );
  assert( !contains( undefinedTree, undefined ) );
  assert( _.isEqual( inOrderTraversal( undefinedTree ), [] ) );

}

function testNull() {
  let nullTree = new Node();
  put( nullTree, null );
  assert( !contains( nullTree, null ) );
  assert( _.isEqual( inOrderTraversal( nullTree ), [] ) );

}

function doTestsPass() {
  testTree();
  testEmptyTree();
  testNegative();
  testDupes();
  testUndefined();
  testNull();

}


/**
 * Main execution entry.
 */
doTestsPass();
console.log( "Success!" );
Second Smallest
/**
 * Returns the second smallest element in the array x.
 * Returns 0 if the array has fewer than 2 elements.
 */
function secondSmallest( x ) {
  // todo: implement this function
  return 0;
}


/**
 * Returns true if all tests pass; otherwise, returns false.
 */
function doTestsPass() {
  // todo: add more test cases
  let testArrays = [
    [ 0 ],
    [ 0, 1 ]
  ];
  let testResults = [ 0, 1 ];

  // Run through the tests and make assertions
  for ( let i = 0; i < testArrays.length; i++ ) {
    if ( secondSmallest( testArrays[ i ] ) != testResults[ i ] ) {
      return false;
    }
  }
  return true;
}


/**
 * Main execution entry.
 */
if ( doTestsPass() ) {
  console.log( "All tests pass!" );
} else {
  console.log( "There are test failures." );
}



function secondSmallest( x ) {
  // First check if the array is large enough
  if ( x.length < 2 ) {
    return 0;
  }

  // Start these at infinity so that they're always bigger
  // than the input
  let smallest = Number.POSITIVE_INFINITY;
  let secondSmallest = Number.POSITIVE_INFINITY;
  let current;


  // Loop through the input and keep updating our
  // smallest and second smallest
  for ( let i = 0; i < x.length; i++ ) {
    current = x[ i ];
    if ( current < smallest ) {
      secondSmallest = smallest;
      smallest = current;
    } else if ( current < secondSmallest ) {
      secondSmallest = current;
    }
  }
  return secondSmallest;
}


/**
 * Returns true if all tests pass; otherwise, returns false.
 */
function doTestsPass() {
  // todo: add more test cases
  let testArrays = [
    [],
    [ 0 ],
    [ 0, 1 ],
    [ -1, 0, 1, -2, 2 ],
    [ 1, 1, 2 ]
  ];
  let testResults = [ 0, 0, 1, -1, 1 ];

  // Run through the tests and make assertions
  for ( let i = 0; i < testArrays.length; i++ ) {
    if ( secondSmallest( testArrays[ i ] ) != testResults[ i ] ) {
      return false;
    }
  }
  return true;
}


/**
 * Main execution entry.
 */
if ( doTestsPass() ) {
  console.log( "All tests pass!" );
} else {
  console.log( "There are test failures." );
}
Walking Robot
  // Instructions to candidate
  //
  // 1. Run this code in the REPL to observe its behaviour. The
  //    execution entry point is main().
  // 2. Implement the 'walk' method. This method takes in a string, path,
  //    where each character in the string corresponds to a potential movement
  //    of the robot. The robot can move up, down, left, and right represented
  //    by the characters 'U', 'D', 'L', and 'R' respectively. All other
  //    characters may be ignored. Assume the robot's initial position
  //    is at (0,0). The output of this method is the robot's final x and y
  //    coordinates relative to the initial position.
  // 3. Consider adding more test cases

  'use strict';

let chai = require( 'chai' );
let Mocha = require( 'mocha' );
let mocha = new Mocha( {
  ui: 'bdd'
} );
let assert = chai.assert;

function walk( path ) {
  //TODO: Implement walk function
  return undefined;
}

// Start CoderPad testing bootstrap - do not modify
mocha.suite.emit( 'pre-require', this, 'solution', mocha );
// End CoderPad testing bootstrap

describe( '"walk" Test Suite', function () {

  it( 'go 3 times up', function () {
    let input = 'UUU';
    let result = walk( input );
    assert.deepEqual( result, [ 0, 3 ], '' );
  } );

  it( 'simple test', function () {
    let input = 'ULDR';
    let result = walk( input );
    assert.deepEqual( result, [ 0, 0 ], 'simple test' );
  } );

  it( 'extensive test', function () {
    let input = 'ULLLDUDUURLRLR';
    let result = walk( input );
    assert.deepEqual( result, [ -2, 2 ], 'extensive test' );
  } );

  it( 'another input', function () {
    let input = 'UP LEFT 2xDOWN DOWN RIGHT RIGHT UP UP';
    let result = walk( input );
    assert.deepEqual( result, [ 1, 1 ], 'another input' );
  } );
} );


mocha.run( function () {} );



'use strict';

let chai = require( 'chai' );
let Mocha = require( 'mocha' );
let mocha = new Mocha( {
  ui: 'bdd'
} );
let assert = chai.assert;

function walk( path ) {
  return path.split( "" ).map( function ( direction ) {
    switch ( direction ) {
      case 'U':
        return function ( x, y ) {
          return [ x, y + 1 ];
        };
      case 'D':
        return function ( x, y ) {
          return [ x, y - 1 ];
        };
      case 'L':
        return function ( x, y ) {
          return [ x - 1, y ];
        };
      case 'R':
        return function ( x, y ) {
          return [ x + 1, y ];
        };
      default:
        return function ( x, y ) {
          return [ x, y ];
        };
    }
  } ).reduce( function ( acc, move ) {
    return move.apply( move, acc );
  }, [ 0, 0 ] );
}

// Start CoderPad testing bootstrap - do not modify
mocha.suite.emit( 'pre-require', this, 'solution', mocha );
// End CoderPad testing bootstrap

describe( '"walk" Test Suite', function () {

  it( 'stay', function () {
    let input = '';
    let result = walk( input );
    assert.deepEqual( result, [ 0, 0 ], '' );
  } );

  it( 'single test', function () {
    let input = 'L';
    let result = walk( input );
    assert.deepEqual( result, [ -1, 0 ], 'simple test' );
  } );

  it( 'go 3 times up', function () {
    let input = 'UUU';
    let result = walk( input );
    assert.deepEqual( result, [ 0, 3 ], '' );
  } );

  it( 'simple test', function () {
    let input = 'ULDR';
    let result = walk( input );
    assert.deepEqual( result, [ 0, 0 ], 'simple test' );
  } );

  it( 'extensive test', function () {
    let input = 'ULLLDUDUURLRLR';
    let result = walk( input );
    assert.deepEqual( result, [ -2, 2 ], 'extensive test' );
  } );

  it( 'another input', function () {
    let input = 'UP LEFT 2xDOWN DOWN RIGHT RIGHT UP UP';
    let result = walk( input );
    assert.deepEqual( result, [ 1, 1 ], 'another input' );
  } );
} );


mocha.run( function () {} );
Moderate
Best Average Grade
/*
 **  Instructions:
 **
 **  Given a list of student test scores, find the best average grade.
 **  Each student may have more than one test score in the list.
 **
 **  Complete the bestAverageGrade function in the editor below.
 **  It has one parameter, scores, which is an array of student test scores.
 **  Each element in the array is a two-element array of the form [student name, test score]
 **  e.g. [ "Bobby", "87" ].
 **  Test scores may be positive or negative integers.
 **
 **  If you end up with an average grade that is not an integer, you should
 **  use a floor function to return the largest integer less than or equal to the average.
 **  Return 0 for an empty input.
 **
 **  Example:
 **
 **  Input:
 **  [ [ "Bobby", "87" ],
 **    [ "Charles", "100" ],
 **    [ "Eric", "64" ],
 **    [ "Charles", "22" ] ].
 **
 **  Expected output: 87
 **  Explanation: The average scores are 87, 61, and 64 for Bobby, Charles, and Eric,
 **  respectively. 87 is the highest.
 */

function bestAverageGrade( scores ) {

  // TODO: implement this function
  return 0;
}

/**
 * boolean doTestsPass()
 * Returns true if all the tests pass. Otherwise returns false.
 */
/**
 * Returns true if all tests pass; otherwise, returns false.
 */
function doTestsPass() {

  const tc1 = [
    [ 'Bobby', '87' ],
    [ 'Charles', '100' ],
    [ 'Eric', '64' ],
    [ 'Charles', '22' ]
  ];

  return bestAverageGrade( tc1 ) === 87;
}

/**
 * Main execution entry.
 */
if ( doTestsPass() ) {
  console.log( "All tests pass!" );
} else {
  console.error( "There are test failures." );
}



function bestAverageGrade( scores ) {

  // Check for empty list
  if ( !Array.isArray( scores ) || scores.length === 0 )
    return 0;

  // Build hashmap of students to list of scores
  const studentsToScores = new Object();
  scores.forEach( scoreRow => {

    // Check for well-formed input
    if ( !Array.isArray( scoreRow ) || scoreRow.length != 2 )
      return 0;

    const [ student, score ] = [ scoreRow[ 0 ], parseFloat( scoreRow[ 1 ] ) ];

    // Find student in list
    const currentScores = studentsToScores[ student ];
    if ( !currentScores ) {
      studentsToScores[ student ] = [ score ];
    } else {
      // append score to list
      currentScores.push( score );
    }
  } );

  // get averages and max
  let max = Number.NEGATIVE_INFINITY;
  Object.keys( studentsToScores ).forEach( student => {
    const scores = studentsToScores[ student ];
    const sum = scores.reduce( ( a, b ) => a + b, 0 );
    const average = sum / scores.length;
    max = Math.max( max, average );
  } );

  return Math.floor( max );
}

/**
 * boolean doTestsPass()
 * Returns true if all the tests pass. Otherwise returns false.
 */
/**
 * Returns true if all tests pass; otherwise, returns false.
 */
function doTestsPass() {

  // test cases and expected results
  const testCases = [

    // example    
    {
      input: [
        [ 'Bobby', '87' ],
        [ 'Charles', '100' ],
        [ 'Eric', '64' ],
        [ 'Charles', '22' ]
      ],
      expectedOutput: 87
    },

    // empty
    {
      input: [],
      expectedOutput: 0
    },

    // multiple scores each
    {
      input: [
        [ 'Sarah', '91' ],
        [ 'Goldie', '92' ],
        [ 'Elaine', '93' ],
        [ 'Elaine', '95' ],
        [ 'Goldie', '94' ],
        [ 'Sarah', '93' ]
      ],
      expectedOutput: 94
    },

    // negatives and zeros
    {
      input: [
        [ 'Janie', '-66' ],
        [ 'Janie', '0' ],
        [ 'Gina', '-88' ],
        [ 'Bobby', '0' ],
        [ 'Gina', '44' ],
        [ 'Bobby', '0' ],
        [ 'Bobby', '-6' ]
      ],
      expectedOutput: -2
    },

    // same value and average
    {
      input: [
        [ 'Alpha', '99' ],
        [ 'Bravo', '99' ],
        [ 'Charlie', '99' ],
        [ 'Delta', '99' ],
        [ 'Echo', '99' ],
        [ 'Foxtrot', '99' ],
        [ 'Foxtrot', '99' ]
      ],
      expectedOutput: 99
    },

    // non-integer average
    {
      input: [
        [ 'Gerald', '91' ],
        [ 'Gerald', '92' ]
      ],
      expectedOutput: 91
    },

    // negative non-integer average
    {
      input: [
        [ 'Barry', '-66' ],
        [ 'Barry', '-65' ],
        [ 'Alfred', '-122' ]
      ],
      expectedOutput: -66
    }
  ];

  let passed = true;
  testCases.forEach( testCase => {
    const actual = bestAverageGrade( testCase.input );
    if ( actual != testCase.expectedOutput ) {
      passed = false;
      console.error( `Failed for ${testCase.input}\n  expected ${testCase.expectedOutput}, actual ${actual}` );
    }
  } );

  return passed;
}

/**
 * Main execution entry.
 */
if ( doTestsPass() ) {
  console.log( "All tests pass!" );
} else {
  console.error( "There are test failures." );
}
Longest Word
/**
 * Instructions to candidate.
 *  1) Given a a string of letters and a dictionary, the function longestWord should
 *     find the longest word or words in the dictionary that can be made from the letters
 *     Input: letters = "oet", dictionary = {"to","toe","toes"}
 *     Output: {"toe"}
 *     Only lowercase letters will occur in the dictionary and the letters
 *     The length of letters will be between 1 and 10 characters
 *     The solution should work well for a dictionary of over 100,000 words
 *  2) Run this code in the REPL to observe its behaviour.
 *  3) Consider adding some additional tests in doTestsPass().
 *  4) Implement the longestWord() method correctly.
 *  5) If time permits, introduce '?' which can represent any letter.  "to?" could match to "toe", "ton" etc
 */

let _ = require( 'underscore' );

class Dictionary {
  constructor( words ) {
    this.words = words
  }

  contains( word ) {
    return _.contains( this.words, word );
  }
}

function longestWord( letters, dict ) {
  return dict.contains( letters ) ? [ letters ] : [];
}

function arraysEqual( arr1, arr2 ) {
  return _.difference( arr1, arr2 ).length == 0 && _.difference( arr2, arr1 ) == 0
}

function doTestsPass() {
  let words = [ "to", "toe", "toes", "doe", "dog", "god", "dogs", "book", "banana" ];
  let dict = new Dictionary( words );

  let result = arraysEqual( [ "toe" ], longestWord( "toe", dict ) );
  result = result && arraysEqual( [ "toes", "dogs" ], longestWord( "osetdg", dict ) );

  return result;
}

/**
 * Main execution entry.
 */
if ( doTestsPass() ) {
  console.log( "All tests pass!" );
} else {
  console.error( "There are test failures." );
}



let _ = require( 'underscore' );

function dropChars( letters ) {
  return _.range( 0, letters.length ).map( function ( pos ) {
    return ( pos > 0 ? letters.slice( 0, pos ) : "" ) + letters.slice( pos + 1 );
  }, [] );
};

// For each string in set return a new set with all possibilities with 1 char dropped from lettersCombinations
function combinationsDroppingOneLetter( lettersCombinations ) {
  return _.keys( lettersCombinations.reduce( function ( memo, letters ) {
    return dropChars( letters ).reduce( function ( memo, letters ) {
      memo[ letters ] = true;
      return memo;
    }, memo );
  }, {} ) );
};

function sortLetters( letters ) {
  return letters.split( "" ).sort().join( '' );
};

class Dictionary {
  constructor( words ) {
    this.processedWords = this.process( words );
  }

  // Pre-process dictionary so we have list of dictionary entries stored against a sorted string
  // e.g. "dgo"-> {"dog", "god"}
  process( words ) {
    return words.reduce( function preProc( memo, letters ) {
      let sortedLetters = sortLetters( letters );
      ( memo[ sortedLetters ] || ( memo[ sortedLetters ] = [] ) ).push( letters );
      return memo;
    }, {} );
  }

  getEntriesForSortedLetters( sortedLetters ) {
    return this.processedWords[ sortedLetters ];
  }

}

function longestWord( letters, dict ) {
  // To support ? wild card could expand all possibilites here.  A better solution would be Tree/Trie based
  // Set with one entry of letters sorted
  let considerLettersList = [ sortLetters( letters ) ];
  while ( considerLettersList.length > 0 ) {
    // Get list of words in dictionary that match any of the set of sorted letters
    let allFoundInDict = considerLettersList.reduce( function ( memo, letters ) {
      let matchingWords = dict.getEntriesForSortedLetters( letters );
      if ( !!matchingWords ) {
        memo.push( matchingWords );
      }
      return memo;
    }, [] );
    if ( allFoundInDict.length > 0 ) {
      return _.flatten( allFoundInDict );
    }
    // Next time round loop will consider combinations of sorted letters with one less character
    considerLettersList = combinationsDroppingOneLetter( considerLettersList );
  }
}

function arraysEqual( arr1, arr2 ) {
  return _.difference( arr1, arr2 ).length == 0 && _.difference( arr2, arr1 ) == 0
}

function doTestsPass() {
  let result = arraysEqual( [ "ab", "bc", "ac" ], combinationsDroppingOneLetter( [ "abc" ] ) );
  result = result && arraysEqual( [ "ab", "bb" ], combinationsDroppingOneLetter( [ "abb" ] ) );
  result = result && arraysEqual( [ "a", "b" ], combinationsDroppingOneLetter( [ "ab", "bb" ] ) );
  result = result && arraysEqual( [], combinationsDroppingOneLetter( [ "a", "b" ] ) );

  let words = [ "to", "toe", "toes", "doe", "dog", "god", "dogs", "book", "banana" ];
  let dict = new Dictionary( words );

  result = result && arraysEqual( [ "toe" ], longestWord( "toe", dict ) );
  result = result && arraysEqual( [ "toes", "dogs" ], longestWord( "osetdg", dict ) );
  result = result && arraysEqual( [ "doe", "toe", "dog", "god" ], longestWord( "oetdg", dict ) );
  result = result && arraysEqual( [ "book" ], longestWord( "obokt", dict ) );
  result = result && arraysEqual( [ "banana" ], longestWord( "nanabaook", dict ) );
  result = result && arraysEqual( [], longestWord( "aeiou", dict ) );
  result = result && arraysEqual( [], longestWord( "a", dict ) );

  return result;
}

/**
 * Main execution entry.
 */
if ( doTestsPass() ) {
  console.log( "All tests pass!" );
} else {
  console.error( "There are test failures." );
}
Median Two Sorted Arrays
/**
 * Instructions to candidate.
 *  1) Run this code in the REPL to observe its behaviour.
 *  2) Find the median of the two sorted arrays.
 */

function findMedianSortedArrays( A, B ) {
  return -1;
  //todo
}

/**
 * Returns true if all tests pass; otherwise, returns false.
 */
function doTestsPass( testCases ) {
  // todo: add more test cases
  return testCases.reduce( ( result, testCase ) => {
    const answer = findMedianSortedArrays( testCase.inputs[ 0 ], testCase.inputs[ 1 ] );
    console.info( "expected: ", testCase.expected, ", answer: ", answer );
    return result && ( answer === testCase.expected );
  }, true );
}


const testCases = [ {
    expected: 2.5,
    inputs: [
      [ 1, 3 ],
      [ 2, 4 ]
    ]
  },
  {
    expected: 2.0,
    inputs: [
      [ 1, 3 ],
      [ 2 ]
    ]
  },
];

/**
 * Main execution entry.
 */
if ( doTestsPass( testCases ) ) {
  console.log( "All tests pass!" );
} else {
  console.log( "There are test failures." );
}



function findMedianSortedArrays( A, B ) {
  let m = A.length;
  let n = B.length;

  if ( ( m + n ) % 2 != 0 ) // odd
    return findKth( A, B, parseInt( ( m + n ) / 2 ), 0, m - 1, 0, n - 1 );
  else { // even
    return ( findKth( A, B, parseInt( ( m + n ) / 2 ), 0, m - 1, 0, n - 1 ) +
      findKth( A, B, parseInt( ( m + n ) / 2 ) - 1, 0, m - 1, 0, n - 1 ) ) * 0.5;
  }
}

function findKth( A, B, k,
  aStart, aEnd, bStart, bEnd ) {

  let aLen = aEnd - aStart + 1;
  let bLen = bEnd - bStart + 1;

  // Handle special cases
  if ( aLen == 0 )
    return B[ bStart + k ];
  if ( bLen == 0 )
    return A[ aStart + k ];
  if ( k == 0 )
    return A[ aStart ] < B[ bStart ] ? A[ aStart ] : B[ bStart ];

  let aMid = parseInt( aLen * k / ( aLen + bLen ) ); // a's middle count
  let bMid = parseInt( k - aMid - 1 ); // b's middle count

  // make aMid and bMid to be array index
  aMid = aMid + aStart;
  bMid = bMid + bStart;

  if ( A[ aMid ] > B[ bMid ] ) {
    k = k - ( bMid - bStart + 1 );
    aEnd = aMid;
    bStart = bMid + 1;
  } else {
    k = k - ( aMid - aStart + 1 );
    bEnd = bMid;
    aStart = aMid + 1;
  }

  return findKth( A, B, k, aStart, aEnd, bStart, bEnd );
}

/**
 * Returns true if all tests pass; otherwise, returns false.
 */
function doTestsPass( testCases ) {
  // todo: add more test cases
  return testCases.reduce( ( result, testCase ) => {
    const answer = findMedianSortedArrays( testCase.inputs[ 0 ], testCase.inputs[ 1 ] );
    console.info( "expected: ", testCase.expected, ", answer: ", answer );
    return result && ( answer === testCase.expected );
  }, true );
}


const testCases = [ {
    expected: 2.5,
    inputs: [
      [ 1, 3 ],
      [ 2, 4 ]
    ]
  },
  {
    expected: 2.0,
    inputs: [
      [ 1, 3 ],
      [ 2 ]
    ]
  }
];

/**
 * Main execution entry.
 */
if ( doTestsPass( testCases ) ) {
  console.log( "All tests pass!" );
} else {
  console.log( "There are test failures." );
}
Snowpack
/*
 ** Instructions to candidate.
 **  1) Given an array of non-negative integers representing the elevations
 **     from the vertical cross section of a range of hills, determine how
 **     many units of snow could be captured between the hills. 
 **
 **     See the example array and elevation map below.
 **                                 ___
 **             ___                |   |        ___
 **            |   |        ___    |   |___    |   |
 **         ___|   |    ___|   |   |   |   |   |   |
 **     ___|___|___|___|___|___|___|___|___|___|___|___
 **     {0,  1,  3,  0,  1,  2,  0,  4,  2,  0,  3,  0}
 **                                 ___
 **             ___                |   |        ___
 **            |   | *   *  _*_  * |   |_*_  * |   |
 **         ___|   | *  _*_|   | * |   |   | * |   |
 **     ___|___|___|_*_|___|___|_*_|___|___|_*_|___|___
 **     {0,  1,  3,  0,  1,  2,  0,  4,  2,  0,  3,  0}
 **
 **     Solution: In this example 13 units of snow (*) could be captured.
 **  
 **  2) Consider adding some additional tests.
 **  3) Implement computeSnowpack() correctly.
 */

/**
 * Find the amount that will be captured
 * @returns {int}
 **/
function computeSnowpack( heights = [] ) {
  // your code here
  return -1;
};

function doTestsPass() {
  const testSet = [
    [ 0, 1, 3, 0, 1, 2, 0, 4, 2, 0, 3, 0 ],
    [ 1, 3, 2, 4, 1, 3, 1, 4, 5, 2, 2, 1, 4, 2, 2 ],
  ];
  const expectedValues = [
    13,
    15,
  ];
  let success = true;
  for ( let i = 0; i < testSet.length; i++ ) {
    const testCase = testSet[ i ];
    const expected = expectedValues[ i ];
    const actual = computeSnowpack( testCase );
    if ( expected !== actual ) {
      console.error( `Expected ${expected}. Got ${actual}` );
      success = false;
    }
  }

  if ( !success ) {
    throw new Error( "Tests failed" );
  } else {
    console.log( "Tests passed" )
  }
}

doTestsPass();



/**
 * Find the amount that will be captured
 * @returns {int}
 **/
//function computeSnowpack(height = []){
//  const n = height.length;
//
//  const left = [];
//  const right = [];
//
//  let leftMax = 0;
//  let rightMax = 0;
//
//  for (let i = 0, j = n - 1; i < n, j >= 0; i++, j--) {
//    // Scan from left
//    left[i] = leftMax;
//    leftMax = Math.max(leftMax, height[i]);
//
//    // Scan from right
//    right[j] = rightMax;
//    rightMax = Math.max(rightMax, height[j]);
//  }
//
//  let total = 0;
//  for (let i = 0; i < n; i++) {
//    let snow = Math.min(left[i], right[i]) - height[i];
//    total += snow > 0 ? snow : 0;
//  }
//
//  return total;
//}


/**
 * Find the amount that will be captured
 * @returns {int}
 **/
function computeSnowpack( heights = [] ) {
  const nHeights = heights.length;
  if ( nHeights === 0 ) {
    return 0;
  }
  let total = 0;
  const leftHighest = new Array( nHeights ).fill( 0 );
  let leftMax = 0;

  for ( let i = 0; i < nHeights; i++ ) {
    if ( heights[ i ] > leftMax ) {
      leftMax = heights[ i ];
    }
    leftHighest[ i ] = leftMax;
  }

  let rightMax = 0;
  for ( let i = nHeights - 1; i >= 0; i-- ) {
    if ( heights[ i ] > rightMax ) {
      rightMax = heights[ i ];
    }
    if ( Math.min( rightMax, leftHighest[ i ] ) > heights[ i ] ) {
      total += Math.min( rightMax, leftHighest[ i ] ) - heights[ i ];
    }
  }
  return total;
}


function doTestsPass() {
  const testSet = [
    [ 0, 1, 3, 0, 1, 2, 0, 4, 2, 0, 3, 0 ],
    [ 1, 3, 2, 4, 1, 3, 1, 4, 5, 2, 2, 1, 4, 2, 2 ],
    [ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1 ],
    [ 1 ],
    [ 0, 0, 0, 0, 0 ],
    [ 0, 0, 1, 0, 0 ],
    []
  ];
  const expectedValues = [
    13,
    15,
    10,
    0,
    0,
    0,
    0,
  ];
  let success = true;
  for ( let i = 0; i < testSet.length; i++ ) {
    const testCase = testSet[ i ];
    const expected = expectedValues[ i ];
    const actual = computeSnowpack( testCase );
    if ( expected !== actual ) {
      console.error( `Expected ${expected}. Got ${actual}` );
      success = false;
    }
  }

  if ( !success ) {
    throw new Error( "Tests failed" );
  } else {
    console.log( "All tests passed!" )
  }
}

doTestsPass();
Stair Case
/*
== Instructions ==

** There is a staircase with 'n' number of steps. A child
** walks by and wants to climb up the stairs, starting at
** the bottom step and ascending to the top.

** Of course, the child wants to have fun, too, so instead
** of taking 1 step at a time, it will lety between taking
** either 1, 2 or 3 steps at a time.

** Please complete the 'countSteps' method below so that
** given 'n' number of steps it will return the number of
** unique combinations the child could traverse.

** An example would be countSteps(3) == 4:

** 1 1 1
** 2 1
** 1 2
** 3
*/

/**
 * Given n steps, returns the number of possible permutations
 * to climb the staircase.
 *
 * Returns 0 when n is <= 0.
 */
function countSteps( n ) {
  return 0;
}


/**
 * Returns true if all tests pass; otherwise, returns false.
 */
function doTestsPass() {
  // todo: add more test cases
  return countSteps( 3 ) == 4 &&
    countSteps( 4 ) == 7;
}


/**
 * Execution entry.
 */
if ( doTestsPass() ) {
  console.log( "All tests pass!" );
} else {
  console.log( "There are test failures." );
}

for ( let n = 1; n <= 5; n++ )
  console.log( n, " steps => ", countSteps( n ) )



function countStepsRec( n ) {
  if ( n < 0 ) return 0;
  if ( n === 0 ) return 1;

  return countStepsRec( n - 1 ) + countStepsRec( n - 2 ) + countStepsRec( n - 3 );
}

function countSteps( n ) {
  if ( n <= 0 ) return 0;

  return countSteps( n );
}
*/

// Iterative linear solution
function countSteps( n ) {
  if ( n <= 0 ) return 0;
  if ( n == 1 ) return 1;
  if ( n == 2 ) return 2;
  if ( n == 3 ) return 4;

  let counts = [ 0, 1, 2, 4 ];
  for ( let i = 4; i <= n; ++i ) {
    counts.push( counts[ i - 1 ] + counts[ i - 2 ] + counts[ i - 3 ] );
  }

  return counts[ n ];
}


/**
 * Returns true if all tests pass; otherwise, returns false.
 */
function doTestsPass() {
  return countSteps( 3 ) == 4 &&
    countSteps( 4 ) == 7 &&
    countSteps( 1 ) == 1 &&
    countSteps( 2 ) == 2 &&
    countSteps( 0 ) == 0 &&
    countSteps( -5 ) == 0 &&
    countSteps( 10 ) == 274 &&
    countSteps( 36 ) == 2082876103; // Will cause naive solution to time-out
}


/**
 * Execution entry.
 */
if ( doTestsPass() ) {
  console.log( "All tests pass!" );
} else {
  console.log( "There are test failures." );
}

for ( let n = 1; n <= 5; n++ )
  console.log( n, " steps => ", countSteps( n ) )



Hard
HashMap
/**
 * class MyHashMap
 *
 * Associates a key-value pair in memory such that lookups
 * and inserts can be performed in O(1) time for a reasonably
 * small set of data, and scales linearly (at worst) for larger
 * sets of key-value pairs.
 *
 * Each unique key is associated with one single value.
 */
class MyHashMap {

  constructor() {}

  put( key, value ) {
    // todo: implement
  }

  get( key ) {
    // todo: implement
    return null;
  }
}

/**
 * bool doTestsPass()
 * Runs letious tests.
 */
function doTestsPass() {

  // todo: implement more tests, please
  // feel free to make testing more elegant
  const testCases = [
    [ 1, 2 ],
    [ 3, 4 ],
    [ 5, 6 ],
    [ 1, 7 ],
    [ 1, 8 ]
  ];

  let passed = true;

  const map = new MyHashMap();

  for ( const test of testCases ) {

    const key = test[ 0 ];
    const value = test[ 1 ];
    map.put( key, value );

    if ( value !== map.get( key ) ) {
      console.error( `Test failed [${key}, ${value}]` );
      passed = false;
    }
  }

  return passed;
}

/**
 * Execution entry point.
 */
if ( doTestsPass() ) {
  console.log( 'All tests pass!' );
} else {
  console.log( 'There are tests failures.' );
}



/**
 * class MyHashMap
 *
 * Associates a key-value pair in memory such that lookups
 * and inserts can be performed in O(1) time for a reasonably
 * small set of data, and scales linearly (at worst) for larger
 * sets of key-value pairs.
 *
 * Each unique key is associated with one single value.
 */
class MyHashMap {

  constructor() {

    this.Entry = class {
      constructor( key, value ) {
        this.key = key;
        this.value = value;
      }
    }

    this._entries = [];
    // start with 10
    for ( let i = 0; i < 10; i++ ) {
      // pre-populate the list
      this._entries.push( [] );
    }
  }

  // JavaScript has no built-in hash code function.
  _hashCode( value ) {
    const strValue = String( value );
    let hash = 0;
    for ( let i = 0; i < strValue.length; i++ ) {
      const charCode = strValue.charCodeAt( i );
      hash = ( ( hash << 5 ) - hash ) + charCode;
    }
    return hash;
  }

  // The % operator in JS can return negative because % is remainder, not modulo.
  // However, none of the test keys are long enough to return a negative hash code,
  // so this can be left as an additional exercise for the candidate.
  _mod( x, n ) {
    return ( ( x % n ) + n ) % n;
  }

  put( key, value ) {

    if ( key == null || value == null )
      return;

    const idx = this._mod( this._hashCode( key ), this._entries.length );
    const list = this._entries[ idx ];

    for ( const entry of list ) {
      if ( key === entry.key ) {
        entry.value = value;
        return;
      }
    }

    list.push( new this.Entry( key, value ) );
  }

  get( key ) {

    if ( key == null )
      return null;

    const idx = this._mod( this._hashCode( key ), this._entries.length );
    const list = this._entries[ idx ];

    for ( const entry of list )
      if ( key === entry.key )
        return entry.value;

    return null;
  }
}

/**
 * bool doTestsPass()
 * Runs letious tests.
 */
function doTestsPass() {

  // todo: implement more tests, please
  // feel free to make testing more elegant
  const testCases = [
    [ 1, 2 ],
    [ 3, 4 ],
    [ 5, 6 ],
    [ 1, 7 ],
    [ 1, 8 ]
  ];

  let passed = true;

  const map = new MyHashMap();

  for ( const test of testCases ) {

    const key = test[ 0 ];
    const value = test[ 1 ];
    map.put( key, value );

    if ( value !== map.get( key ) ) {
      console.error( `Test failed [${key}, ${value}]` );
      passed = false;
    }
  }

  const strMap = new MyHashMap();
  const strTestCases = [
    [ "one", "two" ],
    [ "three", "four" ],
    [ "one", "five" ]
  ];

  for ( const test of strTestCases ) {

    const key = test[ 0 ];
    const value = test[ 1 ];
    strMap.put( key, value );

    if ( value !== strMap.get( key ) ) {
      console.error( `Test failed [${key}, ${value}]` );
      passed = false;
    }
  }

  return passed;
}

/**
 * Execution entry point.
 */
if ( doTestsPass() ) {
  console.log( 'All tests pass!' );
} else {
  console.log( 'There are tests failures.' );
}
Lowest Price
Question:
  A popular online retailer allows vendors to specify different prices in advance
for the same item throughout the day.We now need to design an algorithm that
helps identify the lowest price
for the item at any point of the day.

Assumptions:
  1 ) For the algorithm, assume all vendors are selling the same product
and there is only one product being sold.Given an array that has
vendor information - ( startTime, endTime, price ) of the deal,
  return a sorted array with different possible intervals and
the least price of the product during the interval.

2 ) The interval is inclusive of start and end time.

3 ) All the 3 values passed by the vendor are integers.*/

const _ = require( 'lodash' );

class Interval {

  constructor( startTime, endTime, price ) {
    this.startTime = startTime;
    this.endTime = endTime;
    this.price = price;
  }
}

function getLowestPrices( inputIntervals ) {}

/**
 * Returns true if the tests pass. Otherwise, false.
 */
function doTestsPass() {

  const sampleInput = [ new Interval( 1, 5, 20 ), new Interval( 3, 8, 15 ), new Interval( 7, 10, 8 ) ];
  const expectedOutput = [ new Interval( 1, 3, 20 ), new Interval( 3, 7, 15 ), new Interval( 7, 10, 8 ) ];

  return _.isEqual( expectedOutput, getLowestPrices( sampleInput ) );
}

/**
 * Main execution entry.
 */
if ( doTestsPass() ) {
  console.log( "All tests pass!" );
} else {
  console.log( "There are test failures." );
}



const _ = require( 'lodash' );

class Interval {

  constructor( startTime, endTime, price ) {

    if ( !_.isInteger( startTime ) || !_.isInteger( endTime ) || !_.isInteger( price ) ) {
      throw 'Interval constructor parameters must be integers'
    } else if ( startTime >= endTime ) {
      throw 'startTime greater than or equal to endTime for an interval';
    } else if ( startTime < 0 || endTime < 0 || price < 0 ) {
      throw 'vendor information has negative values';
    }

    this.startTime = startTime;
    this.endTime = endTime;
    this.price = price;
  }
}

class BinaryTree {

  constructor( interval ) {
    this.interval = interval;
  }

  addNode( interval ) {

    if ( interval.startTime < this.interval.startTime ) {

      const newInterval = new Interval( interval.startTime,
        Math.min( interval.endTime, this.interval.startTime ),
        interval.price );

      if ( this.left ) {
        this.left.addNode( newInterval );
      } else {
        this.left = new BinaryTree( newInterval );
      }
    }

    if ( interval.endTime > this.interval.endTime ) {

      const newInterval = new Interval( Math.max( interval.startTime, this.interval.endTime ),
        interval.endTime,
        interval.price );

      if ( this.right ) {
        this.right.addNode( newInterval );
      } else {
        this.right = new BinaryTree( newInterval );
      }
    }
  }

  _traverse( results ) {
    if ( this.left ) {
      this.left._traverse( results );
    }
    results.push( this.interval );
    if ( this.right ) {
      this.right._traverse( results );
    }
  }

  inOrder() {
    const results = [];
    this._traverse( results );
    return results;
  }
}

function getLowestPrices( inputIntervals ) {

  if ( !Array.isArray( inputIntervals ) || inputIntervals.length === 0 ) {
    throw 'inputIntervals has 0 elements';
  }

  inputIntervals.forEach( element => {
    if ( !( element instanceof Interval ) ) {
      throw 'inputIntervals contains an invalid element';
    }
  } );

  inputIntervals.sort( ( a, b ) => a.price - b.price );

  const root = inputIntervals[ 0 ];
  const tree = new BinaryTree( root );
  for ( let i = 1; i < inputIntervals.length; i++ ) {
    tree.addNode( inputIntervals[ i ] );
  }

  return tree.inOrder();
}

/**
 * Returns true if the tests pass. Otherwise, false.
 *
 * Additional Test Cases:
 *   Input : ( 1, 20 13 ), ( 7, 10, 8 ), ( 3, 8, 15 ), ( 1, 5, 20 )
 *   Output: ( 1, 7, 13 ), ( 7, 10, 8 ), ( 10, 20, 13 )
 *
 *   Input : ( 7, 10, 8 ), ( 3, 8, 15 ), ( 1, 5, 20 ), ( 1, 20, 4 )
 *   Output: ( 1, 20, 4 )
 *
 *   Input : ( 3, 6, 2 ), ( 1, 9, 3 ), ( 5, 8, 1 )
 *   Output: ( 1, 3, 3 ), ( 3, 5, 2 ), ( 5, 8, 1 ), ( 8, 9, 3 )
 */
function doTestsPass() {

  try {
    const sampleInput = [ new Interval( 1, 5, 20 ), new Interval( 3, 8, 15 ), new Interval( 7, 10, 8 ) ];
    const expectedOutput = [ new Interval( 1, 3, 20 ), new Interval( 3, 7, 15 ), new Interval( 7, 10, 8 ) ];

    return _.isEqual( expectedOutput, getLowestPrices( sampleInput ) );

  } catch ( e ) {

    console.error( e );
  }

  return false;
}

/**
 * Main execution entry.
 */
if ( doTestsPass() ) {
  console.log( "All tests pass!" );
} else {
  console.error( "There are test failures." );
}
Prefix Search
const _ = require( 'lodash' );

class MyPrefixSearch {

  constructor( document ) {
    this._document = document;
  }

  /*
   * findAll: Return a list of all locations in a document where the
   * (case insensitive) word begins with the given prefix.
   *
   * Example:  given the document "a aa Aaa abca bca",
   *   1) findAll("a")   -> [0, 2, 5, 9]
   *   2) findAll("bc")  -> [14]
   *   3) findAll("aA")  -> [2, 5]
   *   4) findAll("abc") -> [9]
   *
   **/
  findAll( prefix ) {
    // TODO: Implement this function
    return null;
  }
}

/*********  Tests  *********/

/*
 * doTestsPass
 * Validate that the prefix search returns the correct results for the sample document.
 */
function doTestsPass() {

  const document =
    "In publishing and graphic design, lorem ipsum is a " +
    "filler text commonly used to demonstrate the graphic elements of a " +
    "document or visual presentation. Replacing meaningful content that " +
    "could be distracting with placeholder text may allow viewers to focus " +
    "on graphic aspects such as font, typography, and page layout. It also " +
    "reduces the need for the designer to come up with meaningful text, as " +
    "they can instead use hastily generated lorem ipsum text. The lorem " +
    "ipsum text is typically a scrambled section of De finibus bonorum et " +
    "malorum, a 1st-century BC Latin text by Cicero, with words altered, " +
    "added, and removed to make it nonsensical, improper Latin. A letiation " +
    "of the ordinary lorem ipsum text has been used in typesetting since " +
    "the 1960s or earlier, when it was popularized by advertisements for " +
    "Letraset transfer sheets. It was introduced to the Information Age in " +
    "the mid-1980s by Aldus Corporation, which employed it in graphics and " +
    "word processing templates for its desktop publishing program, " +
    "PageMaker, for the Apple Macintosh. A common form of lorem ipsum " +
    "reads: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do " +
    "eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad " +
    "minim veniam, quis nostrud exercitation ullamco laboris nisi ut " +
    "aliquip ex ea commodo consequat. Duis aute irure dolor in " +
    "reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla " +
    "pariatur. Excepteur sint occaecat cupidatat non proident, sunt in " +
    "culpa qui officia deserunt mollit anim id est laborum.";

  const prefixSearch = new MyPrefixSearch( document );

  return (
    _.isEqual( prefixSearch.findAll( "demonstrate" ), [ 80 ] ) &&
    _.isEqual( prefixSearch.findAll( "pub" ), [ 3, 988 ] ) &&
    _.isEqual( prefixSearch.findAll( "publishing" ), [ 3, 988 ] ) &&
    _.isEqual( prefixSearch.findAll( "lab" ), [ 1173, 1263, 1517 ] ) &&
    _.isEqual( prefixSearch.findAll( "laborum" ), [ 1517 ] ) &&
    _.isEqual( prefixSearch.findAll( "in" ), [ 0, 404, 717, 839, 857, 873, 930, 1159, 1334, 1351, 1468 ] ) &&
    _.isEqual( prefixSearch.findAll( "lor" ), [ 34, 434, 456, 686, 1061, 1080 ] ) &&
    _.isEqual( prefixSearch.findAll( "l" ), [ 34, 309, 434, 456, 557, 651, 686, 806, 1061, 1080, 1173, 1263, 1517 ] ) &&
    _.isEqual( prefixSearch.findAll( "" ), [] ) &&
    _.isEqual( prefixSearch.findAll( "hamburger" ), [] ) );
}

/**
 * Execution entry point.
 */
if ( doTestsPass() ) {
  console.log( 'All tests pass!' );
} else {
  console.log( 'There are tests failures.' );
}



const _ = require( 'lodash' );

class MyTrie {

  constructor( character ) {
    this._character = character;
    this._locations = [];
    this._nodes = {};
  }

  // record a substring location.
  add( chars, location ) {
    if ( !_.isString( chars ) )
      throw new TypeError( 'chars must be a string' );
    if ( !_.isNumber( location ) )
      throw new TypeError( 'location must be a number' );

    if ( this._character != null )
      // note: this trie letiant records at each node, not just leaf nodes (simpler, less space efficient).
      this._locations.push( location );
    if ( chars.length > 0 ) {
      const c = chars.charAt( 0 );
      if ( !( c in this._nodes ) )
        this._nodes[ c ] = new MyTrie( c );
      this._nodes[ c ].add( chars.substring( 1 ), location );
    }
  }

  // retrieve locations for substring
  get( prefix ) {
    if ( !_.isString( prefix ) )
      throw new TypeError( 'prefix must be a string' );
    if ( prefix.length > 0 ) {
      const c = prefix.charAt( 0 );
      if ( c in this._nodes )
        return this._nodes[ c ].get( prefix.substring( 1 ) );
      else
        return [];
    } else {
      return this._locations;
    }
  }
}

class MyPrefixSearch {
  // Note: Any indexed solution should be more performant on repeat calls.
  // Trade-offs arise on how to store the index efficiently while maintaining fast lookup.
  // This solution is indexed using a trie, which is also space efficient for certain use cases.
  // For a light discussion on tries and other alternative implementations see:
  //    https://www.toptal.com/java/the-trie-a-neglected-data-structure

  constructor( document ) {

    if ( !_.isString( document ) )
      throw new TypeError( 'document must be a string' );

    this._index = new MyTrie( null );
    this._buildIndex( document );
  }

  _buildIndex( document ) {

    let location = 0;
    const words = document.split( ' ' );
    for ( const word of words ) {
      if ( word.length > 0 ) { // could be an extra whitespace, leading to a "" token
        const clean = word.toLowerCase().replace( /[\W_]+/g, '' );
        this._index.add( clean, location );
      }
      location += word.length + 1;
    }
  }

  /*
   * findAll: Return a list of all locations in a document where the
   * (case insensitive) word begins with the given prefix.
   *
   * Example:  given the document "a aa Aaa abca bca",
   *   1) findAll("a")   -> [0, 2, 5, 9]
   *   2) findAll("bc")  -> [14]
   *   3) findAll("aA")  -> [2, 5]
   *   4) findAll("abc") -> [9]
   *
   **/
  findAll( prefix ) {
    return this._index.get( prefix );
  }
}

/*********  Tests  *********/

/*
 * doTestsPass
 * Validate that the prefix search returns the correct results for the sample document.
 */
function doTestsPass() {

  const document =
    "In publishing and graphic design, lorem ipsum is a " +
    "filler text commonly used to demonstrate the graphic elements of a " +
    "document or visual presentation. Replacing meaningful content that " +
    "could be distracting with placeholder text may allow viewers to focus " +
    "on graphic aspects such as font, typography, and page layout. It also " +
    "reduces the need for the designer to come up with meaningful text, as " +
    "they can instead use hastily generated lorem ipsum text. The lorem " +
    "ipsum text is typically a scrambled section of De finibus bonorum et " +
    "malorum, a 1st-century BC Latin text by Cicero, with words altered, " +
    "added, and removed to make it nonsensical, improper Latin. A letiation " +
    "of the ordinary lorem ipsum text has been used in typesetting since " +
    "the 1960s or earlier, when it was popularized by advertisements for " +
    "Letraset transfer sheets. It was introduced to the Information Age in " +
    "the mid-1980s by Aldus Corporation, which employed it in graphics and " +
    "word processing templates for its desktop publishing program, " +
    "PageMaker, for the Apple Macintosh. A common form of lorem ipsum " +
    "reads: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do " +
    "eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad " +
    "minim veniam, quis nostrud exercitation ullamco laboris nisi ut " +
    "aliquip ex ea commodo consequat. Duis aute irure dolor in " +
    "reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla " +
    "pariatur. Excepteur sint occaecat cupidatat non proident, sunt in " +
    "culpa qui officia deserunt mollit anim id est laborum.";

  const prefixSearch = new MyPrefixSearch( document );

  return (
    _.isEqual( prefixSearch.findAll( "demonstrate" ), [ 80 ] ) &&
    _.isEqual( prefixSearch.findAll( "pub" ), [ 3, 988 ] ) &&
    _.isEqual( prefixSearch.findAll( "publishing" ), [ 3, 988 ] ) &&
    _.isEqual( prefixSearch.findAll( "lab" ), [ 1173, 1263, 1517 ] ) &&
    _.isEqual( prefixSearch.findAll( "laborum" ), [ 1517 ] ) &&
    _.isEqual( prefixSearch.findAll( "in" ), [ 0, 404, 717, 839, 857, 873, 930, 1159, 1334, 1351, 1468 ] ) &&
    _.isEqual( prefixSearch.findAll( "lor" ), [ 34, 434, 456, 686, 1061, 1080 ] ) &&
    _.isEqual( prefixSearch.findAll( "l" ), [ 34, 309, 434, 456, 557, 651, 686, 806, 1061, 1080, 1173, 1263, 1517 ] ) &&
    _.isEqual( prefixSearch.findAll( "" ), [] ) &&
    _.isEqual( prefixSearch.findAll( "hamburger" ), [] ) );
}

/**
 * Execution entry point.
 */
if ( doTestsPass() ) {
  console.log( 'All tests pass!' );
} else {
  console.log( 'There are tests failures.' );
}
