const products = [
    {id:1, name : 'walton phone', price: 34835},
    {id:2, name : 'oppo phone', price: 34835},
    {id:3, name : 'realme phone', price: 34835},
    {id:4, name : 'lenovo yaga laptop', price: 34835},
    {id:5, name : 'mac book', price: 34835},
    {id:6, name : ' iphone', price: 34835},
]
function searchProducts(products, search) {
    const matchProducts = [];
    for  (const product of products) {
        if (product.name.toLowerCase().includes(search.toLowerCase())) {
            matchProducts.push(product)
        }
    }
    return matchProducts;
}
console.log(searchProducts(products, "phone"))
