let products = [
{name: "laptop", 
    chatagories: "electronics"},
    {name: "laptop",   chatagories: "electronics"},
    {name: "T-shirt",  chatagories: "clothes"},
    {name: "Shirt",    chatagories: "clothes"},
];

let filteredProducts ={
    clothes: [],
    electronics: []
};

for (let index = 0; index < products.length; index++) {
    let  singleProduct = products[index];
    if(singleProduct.chatagories === "clothes"){
        filteredProducts.clothes.push(singleProduct.name);
    }else if(singleProduct.chatagories === "electronics"){
        filteredProducts.electronics.push(singleProduct.name);
    }
    
}
console.log(filteredProducts)