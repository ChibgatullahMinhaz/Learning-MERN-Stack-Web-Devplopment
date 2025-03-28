const getItemLocalStorage = ()=>{
    const getStoredItem = localStorage.getItem('cart');
    if (getStoredItem) {
        const storedItem = JSON.parse(getStoredItem);
        return storedItem;
    }
    return [];
};


const saveItemsLocalStorage = (cart) =>{
    localStorage.setItem('cart', JSON.stringify(cart));
}
const addtocartSaveLocalStorage = (id)=>{
    const cart = getItemLocalStorage();
    const newCart = [...cart, id];
    saveItemsLocalStorage(newCart)
}
const removeCartFromLocalStorage = (id)=>{
const storedCart = getItemLocalStorage()
const remainingCart =storedCart.filter(storedId => storedId !==id)
saveItemsLocalStorage(remainingCart)
}
export {
    addtocartSaveLocalStorage as addcartSave ,
    getItemLocalStorage as getCart, 
    removeCartFromLocalStorage as removeCart
}