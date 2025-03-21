const numbers = [];
for (let i = 1; i <= 100; i++) {
    numbers.push(i)    
}

const result = numbers.reduce((accumulator, currentValue) => {
  return accumulator * currentValue;
}, 1);

console.log(result.toFixed()); 

