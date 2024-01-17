
import React, { useState } from 'react'
import ButtonC from '../Button/ButtonC'


const ItemDetail = ({product}) => {
    const [counter, setCounter] = useState(1)
    const [addedProduct, setAddedProduct] = useState({})


    const handleAdd = () =>{
        setCounter(counter+1)
    }
    const handleSubstract = () =>{
        setCounter(counter-1)
    }

    const handleAddToCart = () => {
        setAddedProduct({...product, cantidad:counter})
        console.log(addedProduct)
    }

  return (
    <>
    {product&&
        <>
        <div>{product.id}</div>
        <div>{product.name}</div>
        <div>{product.price}</div>
        <div>{product.description}</div>
        <img src={product.img} alt="" />
        <ButtonC label='-' callback={handleSubstract} />
        <div>cantidad: {counter}</div>
        <ButtonC label='+' callback={handleAdd} />
        <ButtonC label='agregar al carrito' callback={handleAddToCart}/>
        </>
    }
    </>
  )
}

export default ItemDetail
