//11. Write a JavaScript program to evaluate a person if they can vote or not by taking in the age

function canVoteOrNot(age) {
  console.log(age >= 18 ? 'CAN VOTE' : 'CANNOT VOTE');
}

canVoteOrNot(65);
canVoteOrNot(18);
canVoteOrNot(0);
canVoteOrNot(-1);
canVoteOrNot(15);
