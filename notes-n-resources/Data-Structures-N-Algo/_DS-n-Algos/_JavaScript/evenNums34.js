//34. Write a JavaScript program to display all even numbers below 20.

function evenNums(n) {
  for (let i = 1; i < n; i++) {
    if (i % 2 == 0) {
      console.log(i);
    }
  }
}

evenNums(20);
