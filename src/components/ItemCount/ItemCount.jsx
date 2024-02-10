import React, { useContext, useState } from 'react'
import ButtonP from '../Button/ButtonP'
import { Link } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav';
import { useCart } from '../../context/CartContext';

const ItemCount = ({ stock, product }) => {

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
	}

	return (
		<>
			{
				isInCart(product.id) ?
					<>
						<Nav.Link as={Link} to='/cart'>
							<div className='my-2 d-flex align-items-center justify-content-center'>
								<ButtonP label='Ir al carrito' callback={handleAdd} stock1={stock} />
								{console.log(counter)}
							</div>
						</Nav.Link>
						
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