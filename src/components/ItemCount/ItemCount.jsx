import React, { useState } from 'react'
import ButtonP from '../Button/ButtonP'
import { useCart } from '../../context/CartContext';
import { toast } from '../ui/use-toast';


const ItemCount = ({ stock, product }) => {

	const [counter, setCounter] = useState(1)
	console.log(counter)
	const { cart, addToCart, updateCartItems, itemQuantity } = useCart();

	const handleAdd = () => {
		if (counter < stock)
			setCounter(counter + 1)
	}

	const handleSubstract = () => {
		if (counter > 1)
			setCounter(counter - 1)
	}

	const handleAddToCart = () => {
		// Reviso si el producto ya está en el carrito
		const existingCartItemIndex = cart.findIndex(item => item.id === product.id)

		const quantityToAdd = counter;
		// Reviso que el stock del producto mas la cantidad a agregar no supere el stock total del producto
		if (itemQuantity() + quantityToAdd > stock) {
			toast({
				title: `${product.name} no se pudo agregar al carrito`,
				description: `Sin stock suficiente`,
			})
			return;
		}

		if (existingCartItemIndex !== -1 && counter > 0) {
			const updateCart = [...cart]
			updateCart[existingCartItemIndex].quantity += counter
			updateCartItems(updateCart)
			setCounter(1)
			toast({
				title: `${product.name} agregado al carrito`,
				description: `Cantidad: ${counter}`,
			})

		} else if (counter > 0) {
			const newItem = { ...product, quantity: counter }

			addToCart(newItem)
			setCounter(1)
			toast({
				title: `${product.name} agregado al carrito`,
				description: `Cantidad: ${counter}`,
			})
		}

		else {
			toast({
				variant: 'destructive',
				title: `La cantidad a agregar debe ser mayor a 0`,
				description: `Cantidad: ${counter}`,
			})
		}
	}


	return (
		<>
			{
				<div className='d-flex flex-column w-100'>
					<div className='d-flex w-100 my-2 align-items-center justify-content-evenly'>
						<ButtonP className={'min-w-7'} label='-' callback={handleSubstract} stock1={stock} />
						<div className=' text-left flex flex-col justify-center items-center' >
							<div className='w-100' >Cantidad:
								<input id='quantity' className='ml-2 max-w-8 bg-slate-200 rounded-lg focus:outline-none focus:ring-1 focus-visible:ring-indigo-600 text-center' min={1} max={stock} type='number' value={counter} onChange={(e) => setCounter(parseInt(e.target.value))} />
							</div>
							<div className='flex items-center' >Stock: {stock ? stock : <p className='ml-2 text-xs font-bold' > Agotado!</p>} </div>
						</div>
						<ButtonP className={'max-w-7'} label='+' callback={handleAdd} stock1={stock} />
					</div>
					<div className='my-2 d-flex align-items-center justify-content-center'>
						<ButtonP label='Agregar al carrito' callback={handleAddToCart} stock1={stock} />
					</div>
				</div>
			}
		</>
	)
}

export default ItemCount