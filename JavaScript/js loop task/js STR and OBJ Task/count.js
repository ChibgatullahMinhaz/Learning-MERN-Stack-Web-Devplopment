let str = "lorem ipsum dolor sit AAAAAA AAAA amaaaaaaaa aaaaaaet";
let count = 0;
for(let i =0 ; i <= str.length; i++){
    if(str[i] === "a" || str[i] === "A" ){
        count++;
    }
}
console.log(count);