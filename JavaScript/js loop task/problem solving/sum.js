let price = "$34556 %%%%%      ";
let sum = 0;
for (let i = 0; i < price.length; i++) {
    let element = price[i];
    if (!isNaN(element) && element !== " ") {
        sum = sum +  parseInt(element);
    }
}
console.log(sum)