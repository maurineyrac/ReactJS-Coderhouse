import React, { useState } from 'react'
import ButtonP from '../Button/ButtonP'
import { Link } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav';
import { useCart } from '../../context/CartContext';
import { toast } from '../ui/use-toast';
import ButtonE from '../Button/ButtonE';
import { useModal } from '@/context/modalContext';

const ItemCount = ({ stock, product }) => {
	const { toggleModal } = useModal();
	const [counter, setCounter] = useState(1)


	const { addToCart, isInCart } = useCart();

	const handleAdd = () => {
		if (counter < stock)
			setCounter(counter + 1)
	}

	const handleSubstract = () => {
		if (counter > 1)
			setCounter(counter - 1)
	}

	const handleAddToCart = () => {
		const newItem = { ...product, quantity: counter }

		addToCart(newItem)
		toast({
			title: `${product.name} agregado al carrito`,
			description: `Cantidad: ${counter}`,
		})
	}

	return (
		<>
			{
				isInCart(product.id) ?
					<>

						<div className='my-2 d-flex align-items-center justify-content-center'>
							<Nav.Link onClick={toggleModal} >
								<ButtonE className='Custombutton2' label='Ir al carrito' />
							</Nav.Link>
						</div>


					</>
					:
					<div className='d-flex flex-column w-100'>
						<div className='d-flex w-100 my-2 align-items-center justify-content-evenly'>
							<ButtonP label='-' callback={handleSubstract} stock1={stock} />
							<div>Cantidad: {counter}</div>
							<ButtonP label='+' callback={handleAdd} stock1={stock} />
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