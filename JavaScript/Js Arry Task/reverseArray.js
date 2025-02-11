// reverse string Array in place

let str = [ "kamal", "jamal","minhaz","sajal","sajid"];

let rev_str = [];

for (let i = 0 ; i < str.length; i++){
    rev_str.unshift(str[i]);
}
console.log(rev_str); 

// reverse ontther way

let rev_str2 = [];

for(let i = str.length -1; i >=0; i--){
    rev_str2.push(str[i]);
}
console.log(rev_str2);

// using reverse functhin 

let rev_str3 = str.reverse();
console.log(rev_str3);