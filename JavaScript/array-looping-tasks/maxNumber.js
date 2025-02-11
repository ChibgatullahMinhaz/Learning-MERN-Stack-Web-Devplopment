let numbers = [10, 3, 6, 8, 15, 20];

let max = [];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > numbers[0]) {
        max = numbers[i]
    }
}
console.log(max)