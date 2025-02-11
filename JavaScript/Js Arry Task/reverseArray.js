// reverse string Array in place

let str = [ "kamal", "jamal","minhaz","sajal","sajid"];

let rev_str = [];

for (let i = 0 ; i < str.length; i++){
    rev_str.unshift(str[i]);
}
console.log(rev_str); 