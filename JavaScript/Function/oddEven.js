// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.

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