let str = "This is a sample string to count vowels.";

function vowelsCount(strs) {
    if (typeof strs !== 'string') {
        return "this is not string";
    }
    strs = strs.toLowerCase();
    let count = 0;
    for (const value of strs) {
        if(value === "a" ){
            count++;
        }else if(value === "e" ){
            count++
        }else if(value === "i" ){
            count++
        }else if(value === "o" ){
            count++;
        }else if (value === "u" ) {
            count++
        }
    }
    return count;
}
console.log(vowelsCount(str))