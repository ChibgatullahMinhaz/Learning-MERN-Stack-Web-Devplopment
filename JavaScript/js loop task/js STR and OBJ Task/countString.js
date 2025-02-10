let str = "lorem ipsum dolor sit amaaaaaaaa aaaaaaet";

let count = 0;
for (let i = 0; i < str.length; i++) {
    if (str[i] === "a"){
        count++;
    }
}
console.log(count);