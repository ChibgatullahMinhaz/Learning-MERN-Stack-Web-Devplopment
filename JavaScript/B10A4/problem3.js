function checkDigitNumber(name){
    let contains = false ;
if (typeof name !== "string") {
    return "Invalid input";
}
for (const char of name) {
    if(!isNaN(char) && char !== " "){
        contains = true;
    }
}
return contains
}

console.log(checkDigitNumber("minhaz355"))
