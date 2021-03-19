/* -------------------------------------------------------------------------- */

// ------------------(Problem)----------------------------

/* -------------------------------------------------------------------------- */


/**
 ! Instructions
 *  1) Run this code to observe its behaviour. 
 * The execution entry point is main().
 *  2) Consider adding some additional tests in doTestsPass().
 *  3) Implement countLengthOfCycle() correctly.
 *  4) If time permits, try to improve your implementation.
 */

const _ = require( 'lodash' );

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
// const countLengthOfCycle = (arr, startIndex) => {
//   //TODO: Implement Solution
// 
//   return -1;
// }

/**
 * boolean doTestsPass()
 * Returns true if all the tests pass. Otherwise returns false.
 */
// const doTestsPass = () => {
//   let testsPassed = true;
//   let testCases = [
//     [
//       [ 1, 0 ], 0, 2
//     ],
//     [
//       [ 1, 2, 0 ], 0, 3
//     ]
//   ];
// 
//   _.forEach( testCases, ( testCase ) => {
//     testsPassed &=
//       countLengthOfCycle( testCase[ 0 ], testCase[ 1 ] ) === testCase[ 2 ];
//   } )
// 
//   return testsPassed;
// }

/**
 * Main execution entry.
 */
// if ( doTestsPass() ) {
//   console.log( "All tests pass!" );
// } else {
//   console.log( "There are test failures." );
// }

/* -------------------------------------------------------------------------- */

// ------------------(Solution)----------------------------

/* -------------------------------------------------------------------------- */

const countLengthOfCycle = ( arr, startIndex ) => {
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


/* -------------------------------------------------------------------------- */

// ------------------(Testing)----------------------------

/* -------------------------------------------------------------------------- */

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
