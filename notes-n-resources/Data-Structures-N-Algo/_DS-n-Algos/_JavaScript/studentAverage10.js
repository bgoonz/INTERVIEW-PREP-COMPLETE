/* 
10. Write JavaScript program to accept student_no, student_name, marks in 
three subjects. Find total marks and average and print them. Check whether 
he is passed or not and display along with grade. 

Grade-average >= 80 - Distiction
average >= 60 - First Class
average >= 50 - Second Class 
else >= 35 - Thrid Class 
           - Fail
*/

function studentAverage(student_no, student_name, marks = []) {
  let total_marks = marks.reduce(function (sum, mark) {
    return sum + mark;
  }, 0);

  const marks_average = total_marks / 3;

  console.log("Student's Name: " + student_name);
  console.log("Student's Number: " + student_no);
  console.log('Total Marks: ' + total_marks);

  if (marks_average >= 80) {
    console.log('Distinction');
  } else if (marks_average >= 60) {
    console.log('First Class');
  } else if (marks_average >= 50) {
    console.log('Second Class');
  } else if (marks_average >= 35) {
    console.log('Thrid Class');
  } else {
    console.log('Fail');
  }

  console.log('\n');
}

studentAverage(65, 'Rohit', [70, 34, 54]);
studentAverage(66, 'Rahul', [90, 84, 54]);
studentAverage(67, 'Rohan', [70, 84, 36]);
studentAverage(68, 'Robert', [80, 80, 100]);
