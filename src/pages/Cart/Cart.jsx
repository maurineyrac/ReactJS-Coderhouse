import React from 'react'
import ButtonP from '../../components/Button/ButtonP'
import ButtonE from '../../components/Button/ButtonE'
import { useCart } from "../../context/CartContext";
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { PiTrashLight } from 'react-icons/pi';

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
        cart.length > 0 ?
          <>
            <div className="divide-y divide-gray-200 dark:divide-gray-800">
              {cart.map(item =>
                <div key={item.id} className="py-4 flex justify-between items-center">
                  <div className="flex gap-2">
                    <img
                      alt={item.name}
                      height="55"
                      src={item.img}
                      style={{
                        aspectRatio: "50/50",
                        objectFit: "cover",
                      }}
                      width="55"
                    />
                    <div>
                      <h3 className="text-lg font-medium">{item.name}</h3>
                      <p className="text-sm text-gray-500">Cantidad: {item.quantity}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-medium">${item.price}</p>
                    <p className="text-sm text-gray-500">Total: ${item.price * item.quantity}</p>
                  </div>
                  <div className='h-50 '>
                    <ButtonP label={<PiTrashLight />} callback={() => removeItem(item.id)} stock1={cart.length} />
                  </div>
                </div>
              )
              }
              <div className="pt-6 flex justify-between">
                <h2 className="text-2xl font-semibold">Total</h2>
                <p className="text-2xl font-semibold">${totalCart()}</p>
              </div>
            </div>

            <div className="pt-6 flex justify-evenly items-center">
              <ButtonP label='Vaciar carrito' callback={emptyCart} stock1={cart.length} />
              <Nav.Link as={Link} to='/checkout'>
                <ButtonE label='Comprar' customclass='Custombutton2' />
              </Nav.Link>
            </div>
          </>
          :
          <>
          <div className="pt-6 flex justify-center items-center">
            <p className="text-2xl font-semibold">No hay productos en el carrito</p>
          </div>
          <div className=' flex justify-center '>
          <Link to={'/'}  >
          <Button className='bg-green-600 hover:bg-green-600/80 mt-6 w-80'>Ir a comprar</Button>
          </Link>
          </div>
          
          </>
      }
    </div>
  )
}

export default Cart