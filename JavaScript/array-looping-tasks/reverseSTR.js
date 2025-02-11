const colors = ['red', 'blue', 'green', 'yellow', 'orange'];

let reversedColors = [] ;

for ( i = 0 ; i < colors.length ; i++ ){
    reversedColors.unshift(colors[i]);
}
console.log(reversedColors)