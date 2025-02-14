const number = [34,5,6,7,83,7,888,3,4,6,4000];
function getMax(numbers) {
    let max = numbers[0];
    for (const num of numbers) {
        if (num > max) {
            max = num;
        }
    }
    return max;

}
const result  = getMax(number);
console.log(result);