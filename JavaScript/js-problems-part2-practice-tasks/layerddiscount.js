function layedDiscount(quentity) {
    const first100price = 100;
    const second100price = 90;
    const avobe300price = 70;

    if (quentity <= 100) {
        const total = quentity * first100price;
        return total;
    } else if (quentity <= 200) {
        const first100total = 100 * first100price;
        const remainingQentity = quentity - 100;
        const sencond100total = remainingQentity * second100price;
        const total = first100total + sencond100total;
        return total;
    } else {
        const first100total = 100 * first100price;
        const sencond100total = 100 * second100price;
        const remainingQentity = quentity - 200;
        const above300total = remainingQentity * avobe300price;
        return first100total + sencond100total + above300total;
    }
}
const result = layedDiscount(2300);
console.log(result);
