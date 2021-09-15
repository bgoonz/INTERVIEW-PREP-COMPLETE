//28. Write a JavaScript Program to display Mathematical Table of a Given number

function mathTable(n) {
  for (i = 1; i <= 10; i++) {
    console.log(n + ' * ' + i + ' = ' + n * i);
  }
}

mathTable(20);
