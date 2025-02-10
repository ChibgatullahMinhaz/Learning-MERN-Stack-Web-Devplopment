let str = "lorem ipsum dolor sit AAAAAA AAAA amaaaaaaaa aaaaaaet";
let result = str.split(" ").map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);  
}).join(" ");  

console.log(result);
