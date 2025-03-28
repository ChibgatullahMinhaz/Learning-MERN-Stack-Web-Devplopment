import React from 'react'
import './Cart.css'
export const Cart = ({cart, handleremove}) => {
    console.log(cart);
  return (
    <div className='cart-columns'>
        {
            cart.map(bottle => <div>
                <img src={bottle.img} alt={bottle.name} />
                <button onClick={()=> handleremove(bottle.id)}>X</button>
            </div> )
        }
    </div>
  )
}
