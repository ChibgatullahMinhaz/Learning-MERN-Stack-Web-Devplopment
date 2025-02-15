function calculateTax(income, cost) {
    if (Number.isInteger(income) !== true || Number.isInteger(cost) !== true || income < 0 || cost < 0) {
        return "Invalid Input "
    }
    const paybleAmount = ((income - cost) * 20) / 100;
    return paybleAmount;
}
const result = calculateTax(10000, 9000);
console.log(result)