import React, { use, useEffect, useState } from "react";
import Bottle from "../Bottles/Bottle";
import "./Bottles.css";
import { addcartSave, getCart, removeCart } from "../../Utilities/Storage";
import { Cart } from "../Cart/Cart";

export const Bottles = ({ fetchPromise }) => {
  const bottles = use(fetchPromise);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCartids = getCart();
    const newStoredCartId = [];
    for (const id of storedCartids) {
      const cartBottoles = bottles.find((bottle) => bottle.id === id);

      if (cartBottoles) {
        newStoredCartId.push(cartBottoles);
      }

      setCart(newStoredCartId);
    }
  }, [bottles]);

  const hanldeCount = (bottle) => {
    const newCart = [...cart, bottle];
    setCart(newCart);
    addcartSave(bottle.id);
  };
const handleremove =(id)=>{
  const remainingcart = cart.filter(bottles => bottles.id !== id)
  setCart(remainingcart)
  removeCart(id)
}
  return (
    <>
      <div className="flex items-center justify-between">
        <h4>Total Bottle : {bottles.length} </h4>
        <h4>add cart: {cart.length} </h4>
      </div>
    <Cart cart ={cart} handleremove={handleremove}></Cart>
      <div className="three-grid-columns">
        {bottles.map((bottle) => (
          <Bottle
            key={bottle.id}
            bottles={bottle}
            hanldeCount={hanldeCount}
          ></Bottle>
        ))}
      </div>
    </>
  );
};
