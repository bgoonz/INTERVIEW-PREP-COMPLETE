let fs = require("fs");
let util = require("util");
let log_file = fs.createWriteStream(__dirname + "consoleOutput.txt", {
  flags: "w",
});
let log_stdout = process.stdout;

console.log = function (d) {
  //
  log_file.write(util.format(d) + "\n");
  log_stdout.write(util.format(d) + "\n");
};

function countUpAndDown(n) {
  console.log("going up!");
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
  console.log("at the top, going down!");
  for (let j = n - 1; j >= 0; j--) {
    console.log(j);
  }
  console.log("Back down, bye!");
}
countUpAndDown(5);
console.log("countUpAndDown(5): ", countUpAndDown(5));
