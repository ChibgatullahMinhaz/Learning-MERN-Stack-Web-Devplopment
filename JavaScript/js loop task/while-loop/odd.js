let i = 78;
let sum = 0;
while (i <= 98) {
    if (i % 2 !== 0) {
        console.log(i, "odd number");
        sum += i;
    }
    i++;
}
console.log(sum);