//9. Find the minimum of Four Nums

function minOfFourNums(a, b, c, d) {
  console.log(a < b < c < d ? a : b < c < d ? b : c < d ? c : d);
}

minOfFourNums(1, 2, 3, 4);
minOfFourNums(0, 19, 29, 83);
minOfFourNums(-1, -3, -4, -10);
minOfFourNums(3, 5, 6, 7);
