function calculateTax(income, cost) {
    if (Number.isInteger(income) !== true || Number.isInteger(cost) !== true) {
        return "not valid "
    }
    const paybleAmount = ((income - cost) * 20) / 100;
    return paybleAmount;
}
const result = calculateTax(10000, 3000);
console.log(result)