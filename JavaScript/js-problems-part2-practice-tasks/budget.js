const laptop = 35000 + "tk";
const tablet = 15000 + 'tk';
const mobile = 20000 + 'tk';
 
function laptopQuentity(quentity) {
    const totalPrice = parseInt(laptop) * quentity;
    return totalPrice;
}
function tabletquentity(quentity){
    return parseInt(tablet) * quentity;
}
function mobileQuentity(quentity){
    return parseInt(mobile) * quentity;
}

function totalBudget( quentity,productName) {
if (typeof productName !== "string") {
    return "aspect a product name as a string";
}
if (productName === "laptop") {
   return laptopQuentity(quentity);
}else if (productName === "tablet") {
    return tabletquentity(quentity);
}else if (productName === "mobile") {
    return mobileQuentity(quentity);
}else{
    return "not found!";
}
}
const result = totalBudget(5 , "laptop");
console.log(result);