import React, { useState } from 'react'
import ButtonP from '../Button/ButtonP'

const ItemCount = ({stock,product}) => {

    const [counter, setCounter] = useState(1)
    const [addedProduct, setAddedProduct] = useState({})

    const handleAdd = () => {
        if (counter < stock)
        setCounter(counter + 1)
    }
    const handleSubstract = () => {
        if(counter > 1)
        setCounter(counter - 1)
    }

    const handleAddToCart = () => {
        setAddedProduct({ ...product, cantidad: counter })
        console.log(addedProduct)
    }

    return (
        <div className='d-flex flex-column w-100'>
            <div className='d-flex w-100 my-2 align-items-center justify-content-evenly'>
                <ButtonP label='-' callback={handleSubstract} stock1={stock} />
                <div>Cantidad: {counter}</div>
                <ButtonP label='+' callback={handleAdd} stock1={stock} />
            </div>
            <div className='my-2 d-flex align-items-center justify-content-center '>
                <ButtonP label='agregar al carrito' callback={handleAddToCart} stock1={stock} />
            </div>

        </div>
    )
}

export default ItemCount