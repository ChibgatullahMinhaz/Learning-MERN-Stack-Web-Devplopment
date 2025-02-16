const  numbers = [5,6,11,12,98,5];
const friends = ["minhaz", "john", "doe", "jane", "smith"];

function findValue(values, inputValue) {
   let count = 0;
   let message = "";
   for (const value of values) {
    if (value === inputValue) {
        message = "it's here bro "
        count++
    }else{
        console.log("not exist ")
    }
   }
   return `Times of: ${count} Message:  ${message}`;
}
const finde = findValue(numbers , 59);
console.log(finde);