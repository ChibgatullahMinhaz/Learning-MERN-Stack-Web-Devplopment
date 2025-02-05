/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/


let mark = 33;
switch (true) {
    case mark < 33:
        console.log("Faill")
        break;
    case mark >=33 && mark <= 34:
        console.log("Pass")
        break;
    case mark >= 33 && mark <= 40:
        console.log("C Grade")
        break;
   
    case mark >=41 && mark <=50:
        console.log("B Grade")
        break;
    case mark >=51 && mark <=60:
        console.log("C Grade")
        break;
    case mark >=61 && mark <=70:
        console.log("A- Grade")
        break;
    case mark >=71 && mark <=79:
        console.log("A Grade")
        break;
    case mark >=80 && mark <=100:
        console.log("A+ Grade")
        break;

    default:
        console.log("need study")
        break;
}
