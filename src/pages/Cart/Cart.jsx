import React, { useContext, useState } from 'react'
import ButtonP from '../../components/Button/ButtonP'
import { useCart } from "../../context/CartContext";
const Cart = () => {
  const { cart, totalCart, emptyCart, removeItem } = useCart();

  return (

    <div>
      {
        cart.map((item) =>
          <div key={item.id}>
            <h3>{item.name}</h3>
            <p>Cantidad: {item.quantity}</p>
            <p>Precio: {item.price}</p>
            <p>Sub Total: {item.price * item.quantity}</p>
            <ButtonP label='Eliminar' callback={() => removeItem(item.id)} stock1={cart.length} />
          </div>
        )
      }
      <h3 className='text-center my-2' >Total Carrito: {totalCart()}</h3>
      <div className='my-2 d-flex align-items-center justify-content-center'>
        <ButtonP label='Vaciar carrito' callback={emptyCart} stock1={cart.length} />
      </div>
    </div>

  )
}

export default Cart