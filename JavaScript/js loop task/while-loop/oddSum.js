let i = 81;
let sum = 0;
while (i <= 131) {
    if (i % 2 !== 0) {
        console.log(i, "odd number");
        sum += i;
    }
    i++;
}
console.log(sum);