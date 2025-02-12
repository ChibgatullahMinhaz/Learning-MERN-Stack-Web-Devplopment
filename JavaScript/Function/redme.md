## 1. `Binary Count`
Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.
```javascript
let binaryString = "101010101010111100110101";

 function count_zero(bainary){
    let count = 0;
    for (const key of bainary) {
        if (key == "0" ) {
           count++;
        }
    }
return count;
 } 
const result = count_zero(binaryString);
console.log(result);
```
## 2. `Make Avarage`
Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.
```javascript
let array = [50,60,70,80,90,100];
function make_avg(arr) {
    const  size = arr.length; 
    let subSum = 0;
    for (const subject of arr) {
        subSum += subject;
    }
    let avg = subSum / size;
    return subSum, avg;
}
const result = make_avg(array);
console.log(result)
```
## 3. `Odd Even multi and Divid`
Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result..
```javascript
function multi(number) {
    let evenResult = 0;
    let oddResult = 0;
    if (number % 2 == 0) {
        evenResult = number / 2
    } else {
        oddResult = number * 2;
    }
    return evenResult, oddResult;
}
const result = multi(50)
console.log(result)
```
## 4. `Multifly`
Take four parameters. Multiply the four numbers and then return the result
```javascript
function multiply(a, b, c, d) {
    return a * b * c * d
}
console.log(multiply(3,4,5,6))
```