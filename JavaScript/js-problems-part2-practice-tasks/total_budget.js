const laptop = 35000 + "tk";
const tablet = 15000 + 'tk';
const mobile = 20000 + 'tk';

function calculateElectronicsBudget(){
    return parseInt(laptop) + parseInt(tablet) + parseInt(mobile);
}
console.log(calculateElectronicsBudget())