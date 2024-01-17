import React from 'react'
import Item from '../Item/Item'

const ItemList = ({products}) => {

  return (
    <div className='d-flex '>
    {
        products.map((element)=> {
           return <Item key={element.id} product={element}/>
        })
    }
    </div>
  )
}

export default ItemList