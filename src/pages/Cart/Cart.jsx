import React, { useContext, useState } from 'react'
import ButtonP from '../../components/Button/ButtonP'
import { useCart } from "../../context/CartContext";
const Cart = () => {
  const { cart, totalCart, emptyCart, removeItem } = useCart();

  return (

    <div className="p-6 w-full max-w-xl mx-auto">
      <section className="flex justify-center items-start gap-2">
        <div className='text-center '>
          <h2 className=' font-bold text-lg'>Carrito</h2>
          <p>Tus articulos en carrito</p>
        </div>
      </section>
      {
        cart.map((item) =>
          <div key={item.id} className="divide-y divide-gray-200 dark:divide-gray-800">
            <div className="py-4 flex justify-between items-center">
              <div className="flex gap-2">
                <img
                  alt="Product image"
                  height="50"
                  src={item.img}
                  style={{
                    aspectRatio: "50/50",
                    objectFit: "cover",
                  }}
                  width="50"
                />
                <div>
                  <h3 className="text-lg font-medium">{item.name}</h3>
                  <p className="text-sm text-gray-500">{item.quantity}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-lg font-medium">{item.price}</p>
                <p className="text-sm text-gray-500">Total: $ {item.price * item.quantity}</p>
              </div>
              <div className='h-50 '>
                <ButtonP label='Eliminar' callback={() => removeItem(item.id)} stock1={cart.length} />
              </div>

            </div>
          </div>
        )
      }
      <div className="pt-6 flex justify-between">
        <h2 className="text-2xl font-semibold">Total</h2>
        <p className="text-2xl font-semibold">${totalCart()}</p>
      </div>
      <div className="pt-6 flex justify-center items-center">
        <ButtonP className='w-full' label='Vaciar carrito' callback={emptyCart} stock1={cart.length} />
      </div>
    </div>

  )
}

export default Cart