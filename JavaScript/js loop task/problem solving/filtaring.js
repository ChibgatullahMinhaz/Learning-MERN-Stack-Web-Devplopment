let products = [
    {
        name: "laptop",
        chatagories: "electronics", price: 1000
    },
    { name: "laptop", chatagories: "electronics", price: 1000 },
    { name: "Shirt", chatagories: "clothes", price: 500 },
    { name: "T-shirt", chatagories: "clothes", price: 100 },
];

let filteredProducts = {
    clothes: [],
    electronics: []
};

for (let index = 0; index < products.length; index++) {
    let singleProduct = products[index];
    if (singleProduct.chatagories === "clothes") {
        filteredProducts.clothes.push(singleProduct.name);
        filteredProducts.clothes.push( "price: "+ singleProduct.price);

    } else if (singleProduct.chatagories === "electronics") {
        filteredProducts.electronics.push(singleProduct.name);
        filteredProducts.electronics.push( "price: "+ singleProduct.price);

    }

}
console.log(filteredProducts)