function checkedValue(value) {
    return (value && typeof value !== 'undefined') 
    ? console.log('defined') :
     (value === null)
        ? console.log('null') :
        console.log('undefined');
}


// console.log(typeof undefined); // in javaScript , Undefined data type is undefined .
// console.log(typeof null); // in javaScript , Data type of null is Object.

checkedValue(null)
checkedValue(undefined)
checkedValue(1)
checkedValue(0)
checkedValue('hello')

console.log(false !== false);
// output is : 
/***
 * 1. null 
 * 2. undefined
 * 3. defined 
 * 4. Undefined . here are 0 is falsy value so actually there comparison is falsy value of falsy value.  so cannot execute truty block . 
 * 5. defined 
 */

