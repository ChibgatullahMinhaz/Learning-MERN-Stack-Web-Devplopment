let numbers = [2, 3, 2, 2, 3, 4, 5, 76, 7, 2, 3, 5, 76, 55, 55];

function max(number) {
    let max = number[0];
    for (let i = 0; i < number.length; i++) {
        let getNum = number[i];
        if (getNum > max) {
            max = getNum
        }
    }
    return max;
}
console.log(max(numbers))
// onther way
let numbers2 = [2, 3, 2, 2, 3, 4, 5, 76, 7, 2, 3, 5, 76, 55, 55];

function maxNumber(params) {
    let maximun = Math.max(...params);
    return maximun;
}
const result = maxNumber(numbers2);
console.log(result)

// other way 
function maxNumberOfArray(params) {
    let maxNumber = params[0];
    for (const number of params) {
        maxNumber = Math.max(maxNumber, number)
    }
    return maxNumber;
}
console.log(maxNumberOfArray(numbers))