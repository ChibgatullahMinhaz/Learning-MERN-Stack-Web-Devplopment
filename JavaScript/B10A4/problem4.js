const person = {
    name: "minhaz",
    shoolGrad: 45,
    testScore: 23,
    isFFamily: true
}
function calculateAdmitionFinalScor(input) {
    console.log( typeof input)
    if (typeof input !== 'object') {
        return "Invalid Input";
    }
    if ( typeof input.name !== "string" || typeof  input.isFFamily !== "boolean" ||  typeof input.testScore !== "number" || typeof  input.shoolGrad !== "number") {
        return "Invalid input";
    }
    let finalSore = input.shoolGrad + input.testScore;
    if (input.isFFamily === true) {
        finalSore += 20;
    }
    if (finalSore >=80) {
        return true;
    }else{
        return false;
    }
}
const result = calculateAdmitionFinalScor(person);
console.log(result)