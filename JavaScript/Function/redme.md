## 1. `charAt(index)`
Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.
```javascript
let binaryString = "101010101010111100110101";

 function count_zero(bainary){
    let count = 0;
    for (const key of bainary) {
        if (key == "0" ) {
           count++;
        }
    }
return count;
 } 
const result = count_zero(binaryString);
console.log(result); // "e"
```