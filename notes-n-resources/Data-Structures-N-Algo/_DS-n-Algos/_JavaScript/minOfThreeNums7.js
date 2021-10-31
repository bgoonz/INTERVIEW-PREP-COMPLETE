//7. Write a JS Program to get minimum of three numbers

function minOfThreeNums(a, b, c) {
  console.log(a < b < c ? a : b < c ? b : c);
}

minOfThreeNums(1, 2, 3);
minOfThreeNums(1, 20, 3);
minOfThreeNums(-1, 12, 30);
minOfThreeNums(0, 0, 0);
