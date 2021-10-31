//8. Find the maximum of Four Nums

function maxOfFourNums(a, b, c, d) {
  console.log(a > b && a > c && a > d ? a : b > c && b > d ? b : c > d ? c : d);
}

maxOfFourNums(100, 2, 3, 4);
maxOfFourNums(0, 19, 29, 83);
maxOfFourNums(-1, -3, -4, -10);
maxOfFourNums(3, 5, 6, 7);
