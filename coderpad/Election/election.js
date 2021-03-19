

/* -------------------------------------------------------------------------- */

// ------------------(Problem)----------------------------

/* -------------------------------------------------------------------------- */
/*
const _ = require('underscore');
/**
 * Instructions to candidate.
 * 1) Run this code in the REPL to observe its behaviour. The
 * execution entry point is main().
 * 2) Consider adding some additional tests in doTestsPass().
 * 3) Implement whoIsElected() correctly.
 * 4) If time permits, try to improve your implementation.
 */
// const solution = (() => {
// 
// 	/**
// 	 * A group of students are sitting in a circle. The teacher is electing a new class president. 
// 	 * The teacher does this by singing a song while walking around the circle. After the song is 
// 	 * finished the student at which the teacher stopped is removed from the circle. 
// 	 * 
// 	 * Starting at the student next to the one that was just removed, the teacher resumes singing and walking around the circle.
// 	 * After the teacher is done singing, the next student is removed. The teacher repeats this until only one student is left. 
// 	 *
// 	 * A song of length k will result in the teacher walking past k students on each round. The students are numbered 1 to n. The teacher starts at student 1.
// 	 * 
// 	 * For example, suppose the song length is two (k=2). And there are four students to start with (1,2,3,4). The first 
// 	 * student to go would be `2`, after that `4`, and after that `3`. Student `1` would be the next president in this example.
// 	 *
// 	 * @param n the number of students sitting in a circle.
// 	 * @param k the length (in students) of each song.
// 	 * @return the number of the student that is elected.
// 	 */
// 	function whoIsElected(n, k) {
// 		return -1;
// 	}
// 	
// 	
//    /*
// 	* This function runs all of the tests in the 'testCases' object (where keys are the input string and values are the expected integer array).
// 	*/
// 	function doTestsPass(testCases) {
//       let passes = true;
// 
//       testCases.forEach(testCase => {
//         const expectedResult = testCase[2];
//         const actualResult = whoIsElected(testCase[0], testCase[1]);
//         passes = passes && (expectedResult === actualResult);
//       });
// 
//       return passes;
//     }
// 	
// 	return {
// 		doTestsPass: doTestsPass,
// 		whoIsElected: whoIsElected
// 	};
// 
// })();
// 
// /*
//   todo: add more test cases please!
// */
// const testCases = [
// 	[1, 1, 1],
// 	[2, 2, 1],
// 	[4, 2, 1],
// 	[100, 2, 73]
// ]
// 
// if(solution.doTestsPass(testCases)){
//   console.log("All tests pass!");
// } else {
//   console.error("Not all tests pass :(");
// }






/* -------------------------------------------------------------------------- */

// ------------------(Solution)----------------------------

/* -------------------------------------------------------------------------- */
let _ = require( 'underscore' );
const solution = (() => {

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
    const l = _.range( 1, n + 1 );
    let i = -1;
    while ( l.length > 1 ) {
      l.splice( ( i + k ) % l.length, 1 );
      i = ( i + k ) % ( l.length + 1 ) - 1;
    }
    return l[ 0 ];
  }



/* -------------------------------------------------------------------------- */

// ------------------(Testing)----------------------------

/* -------------------------------------------------------------------------- */
/*
 * This function runs all of the tests in the 'testCases' object (where keys are the input string and values are the expected integer array).
 */
function doTestsPass( testCases ) {
  let passes = true;

  testCases.forEach( testCase => {
    const expectedResult = testCase[ 2 ];
    const actualResult = whoIsElected( testCase[ 0 ], testCase[ 1 ] );
    passes = passes && ( expectedResult === actualResult );
  } );

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
// 
// node election.js
// All tests pass!
// |15:04:31|bryan@LAPTOP-9LGJ3JGS:[Election] Election_exitstatus:0__________________________________________________________o>
