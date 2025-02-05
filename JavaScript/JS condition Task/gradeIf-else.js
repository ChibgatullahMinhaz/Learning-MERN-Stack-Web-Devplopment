/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/

let mark = 60;

if (mark > 30 && mark <= 33) {
    console.log("Pass")
}
else if (mark >= 40 && mark <= 49) {
    console.log("Grade c")
}
else if (mark >= 50 && mark <= 59) {
    console.log("Grade B")
} 
else if (mark >= 60 && mark <= 69) {
    console.log("Grade A-")
} 
else if (mark >= 70 && mark <= 79) {
    console.log("Grade A")
} 
else if (mark >= 80 && mark <= 100) {
    console.log("Grade A+")
} 
else {
    console.log("faill , your need more study")
}