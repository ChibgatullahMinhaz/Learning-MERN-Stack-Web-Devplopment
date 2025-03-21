const numbers = [];
for (let i = 1; i <= 100; i++) {
    numbers.push(i)    
}

const result = numbers.reduce((accumulator, currentValue) => {
  return accumulator * currentValue;
}, 1);

// console.log(result.toFixed()); 

const items = [
    { name: "Apple", price: 100 },
    { name: "Banana", price: 200 },
    { name: "Orange", price: 300 },
  ];
  
  const totalPrice = items.reduce((accumulator, currentValue) => {
      console.log(accumulator);
 return    accumulator + currentValue.price;
  }, 0);
  
