/***
you have two numbers in two variables, called: num1, num2

now declare a variable called result. 
if num1 is bigger than num2 then result will be double of num1. if not, then the value of the variable result will be the sum of num1 and num2.

write a simple if-else. 

also, write it using ternary operator.

 */

// uisng if-else 
let num1;
num1 = 50;
let num2;
num2 = 49;

let result;

 if (num1 >= num2) {
    result = num1 * num1;
    console.log(result)

 } else {
    result = num1 + num2;
    console.log(result)
 }

// using ternary operator
 let result_two = num1 > num2 ? num1 * num2 : num1 + num2;
 console.log(result_two)