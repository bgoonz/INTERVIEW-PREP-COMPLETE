/* Problem Statement 1 -
You have a string with several sentences, one of which includes a list of items. The list begins with a colon (:) and ends with a period (.), and each item is separated by a comma. You want to extract just the list.

    Before:
This is a list of items: cherries, limes, oranges, apples.
    After:
['cherries','limes','oranges','apples']
*/

let sentence =
  "This is one sentence. This is a sentence with a list of items:" +
  "cherries, oranges, apples, bananas. That was the list of items.";

let start = sentence.indexOf(":");
let end = sentence.indexOf(".", start + 1);

let extractedList = sentence.substring(start + 1, end).split(",");

extractedList.forEach(function (elmnt, indx, arry) {
  arry[indx] = elmnt.trim();
});

console.log(extractedList);

// Problem Statement 2 - swap names so the last name is first
let name = "Abe Lincoln";
let re = /(\S+)\s(\S+)/;

// Alternatively, I could also define re as /^(\w+)\s(\w+)$/;
let swappedName = name.replace(re, "$2, $1");
console.log(swappedName);

// Alternative solution to Problem-2
let name = "abe Lincoln";
let re = /^(\w+)\s(\w+)$/;
let result = re.exec(name);
let swappedName = result[2] + ", " + result[1];
