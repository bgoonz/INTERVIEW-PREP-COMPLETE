//6. Write a JS Function to get max of Three numbers.

function maxOfThree(a, b, c) {
  console.log(
    a > b ? (a > c ? a : c) : b > c ? b : c

    /*
            Pseudo Code: 
            ==============
            condition1 
                ? result1 
                : condition2 ? result3 : result4
        */
  );
}

maxOfThree(100, 2, 3);
maxOfThree(1, 20, 3);
maxOfThree(-1, 12, 30);
maxOfThree(0, 0, 0);
