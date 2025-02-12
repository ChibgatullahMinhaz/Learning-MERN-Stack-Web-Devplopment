# JavaScript String Methods

JavaScript provides various built-in methods to manipulate and work with strings. Below is a list of commonly used string methods along with examples.

## 1. `charAt(index)`
Returns the character at a specified index.
```javascript
let str = "Hello";
console.log(str.charAt(1)); // "e"
```

## 2. `charCodeAt(index)`
Returns the Unicode value of the character at the given index.
```javascript
console.log(str.charCodeAt(1)); // 101
```

## 3. `concat(string1, string2, ...)`
Joins two or more strings.
```javascript
let str1 = "Hello";
let str2 = " World";
console.log(str1.concat(str2)); // "Hello World"
```

## 4. `includes(searchValue, start)`
Checks if a string contains a specified value.
```javascript
console.log("JavaScript".includes("Script")); // true
```

## 5. `endsWith(searchString, length)`
Checks if a string ends with a specified value.
```javascript
console.log("Hello World".endsWith("World")); // true
```

## 6. `indexOf(searchValue, fromIndex)`
Returns the index of the first occurrence of a specified value.
```javascript
console.log("Hello World".indexOf("o")); // 4
```

## 7. `lastIndexOf(searchValue, fromIndex)`
Returns the index of the last occurrence of a specified value.
```javascript
console.log("Hello World".lastIndexOf("o")); // 7
```

## 8. `match(regex)`
Matches a string against a regular expression.
```javascript
console.log("Hello 123".match(/\d+/)); // ["123"]
```

## 9. `replace(searchValue, newValue)`
Replaces a specified value with another value.
```javascript
console.log("Hello World".replace("World", "JS")); // "Hello JS"
```

## 10. `search(regex)`
Searches a string for a specified value and returns its position.
```javascript
console.log("Hello World".search(/World/)); // 6
```

## 11. `slice(start, end)`
Extracts a section of a string and returns it as a new string.
```javascript
console.log("Hello World".slice(0, 5)); // "Hello"
```

## 12. `split(separator, limit)`
Splits a string into an array based on a separator.
```javascript
console.log("a,b,c".split(",")); // ["a", "b", "c"]
```

## 13. `startsWith(searchString, position)`
Checks if a string starts with a specified value.
```javascript
console.log("Hello World".startsWith("Hello")); // true
```

## 14. `substring(start, end)`
Extracts characters between two indices.
```javascript
console.log("Hello World".substring(0, 5)); // "Hello"
```

## 15. `toLowerCase()`
Converts a string to lowercase.
```javascript
console.log("Hello".toLowerCase()); // "hello"
```

## 16. `toUpperCase()`
Converts a string to uppercase.
```javascript
console.log("hello".toUpperCase()); // "HELLO"
```

## 17. `trim()`
Removes whitespace from both sides of a string.
```javascript
console.log("  Hello  ".trim()); // "Hello"
```

## 18. `trimStart()` / `trimLeft()`
Removes whitespace from the beginning of a string.
```javascript
console.log("  Hello  ".trimStart()); // "Hello  "
```

## 19. `trimEnd()` / `trimRight()`
Removes whitespace from the end of a string.
```javascript
console.log("  Hello  ".trimEnd()); // "  Hello"
```

## 20. `repeat(count)`
Returns a new string with a specified number of copies.
```javascript
console.log("Hello ".repeat(3)); // "Hello Hello Hello "
```

## 21. `padStart(targetLength, padString)`
Pads the beginning of a string with another string.
```javascript
console.log("5".padStart(3, "0")); // "005"
```

## 22. `padEnd(targetLength, padString)`
Pads the end of a string with another string.
```javascript
console.log("5".padEnd(3, "0")); // "500"
```

## 23. `localeCompare(compareString)`
Compares two strings in the current locale.
```javascript
console.log("apple".localeCompare("banana")); // -1
```

## 24. `toString()`
Converts a value to a string.
```javascript
console.log((123).toString()); // "123"
```

## 25. `valueOf()`
Returns the primitive value of a string object.
```javascript
let strObj = new String("Hello");
console.log(strObj.valueOf()); // "Hello"
```

## Conclusion
These string methods are essential for manipulating and processing strings efficiently in JavaScript. Understanding them will help in writing better and optimized code.