let str = "xXYyzjoihjoho Example text with x and X.";

let result = "";

for (let i = 0; i < str.length; i++) {
  let char = str[i];
  console.log(char);
  if( char === "x"){
    result += "y";
  }else if ( char === "X"){
    result += "Y";
  }
  else{
    result += char;
  }
}
console.log(result);
