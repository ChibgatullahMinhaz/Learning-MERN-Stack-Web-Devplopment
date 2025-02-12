// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

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