let str = "symbol to the sum.";

let reversedStr = str.split(" ");


let reverse = "";
for (let i = reversedStr.length -1; i >=0; i--) {
    const element = reversedStr[i];
reverse += element + " ";    
}
console.log(reverse)