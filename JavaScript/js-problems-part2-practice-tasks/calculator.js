function add(a, b) {
    const sum = a + b;
    return sum;
}
function substraction(a, b) {
    const substrac = Math.abs(a - b);
    return substrac;
}
function multifly(a, b) {
    const mult = a * b;
    return mult;
}
function divide(a, b) {
    const divide = a / b;
    return divide;
}
function modulo(a, b) {
    const modulo = a % b;
    return modulo;
}

function calculato(a, b, operationSymbleAsString) {
    if (operationSymbleAsString === "+") {
        return add(a, b);
    }
    else if (operationSymbleAsString === "-") {
        return substraction(a, b);
    }else if (operationSymbleAsString === "/" ) {
        return divide(a ,b);
    }else if(operationSymbleAsString === "*"){
        return multifly(a,b);
    }
    else if (operationSymbleAsString === "%") {
        return modulo(a , b);
    }else{
        return "operation not posible";
    }
}
const result = calculato(2, 5, "-");
console.log(result);