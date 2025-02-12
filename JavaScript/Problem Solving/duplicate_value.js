let number = [2, 3, 2, 2, 3, 4, 5, 76, 7, 2, 3, 5, 76, 55, 55];

function uniqe(arr) {
    let uniqeNumber = [];
    for (const num of arr) {
        if (uniqeNumber.includes(num)) {
        } else {
            uniqeNumber.push(num)
        }
    }
    return uniqeNumber;
}
console.log(uniqe(number))
// onotehr way
function uniqe(arr) {
    let uniqeNumber = [];
    for (const num of arr) {
        if (!uniqeNumber.includes(num)) {
            uniqeNumber.push(num)
        }
    }
    return uniqeNumber;
}
console.log(uniqe(number))