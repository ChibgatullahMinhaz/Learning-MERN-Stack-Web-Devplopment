const numbers = [39, 45, 664, 45, 4];

function sumOfNumber(perram) {
    let sum = 0;
    for (let i = 0; i < perram.length; i++) {
        sum += perram[i];
    }
    return sum;
}
console.log(sumOfNumber(numbers))