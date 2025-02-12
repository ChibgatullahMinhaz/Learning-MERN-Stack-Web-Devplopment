let numbers = [1,2,3,4,5,6,7,8,9,10];
let newArray = [];
for (i =0; i <numbers.length; i++){
    if(i % 2 === 0  ){
        newArray.push(i)
    }
}
console.log(newArray)