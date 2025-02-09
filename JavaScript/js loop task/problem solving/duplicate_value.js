let products = [ "laptop", "laptop", "mouse", "keyboard", "mouse" ];

let uniqueProducts = [];
// one way to remove duplicates
for (let i = 0; i < products.length; i++) {
  if (uniqueProducts.indexOf(products[i]) === -1) {
    uniqueProducts.push(products[i]);
  }
}
console.log(uniqueProducts);

// another way to remove duplicates
let uniqueProducts2 = [];
products.forEach((product) => {
  if (!uniqueProducts2.includes(product)) {
    uniqueProducts2.push(product);
  }
});
console.log(uniqueProducts2);
// another way to remove duplicates

let uniqueProducts3 = [];

for (let product of products) {
  if (!uniqueProducts3.includes(product)) {
    uniqueProducts3.push(product);
  }
}

// another way to remove duplicates
let uniqueProducts4 = [];

for (let index = 0; index < products.length; index++) {
    let element = products[index];
    console.log(element)
    if (!uniqueProducts4.includes(element) ) {
        uniqueProducts4.push(element);
    }
    
}
console.log(uniqueProducts4);