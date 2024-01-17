import React from 'react'
import Item from '../Item/Item'

const ItemList = ({ products }) => {

    return (
        <div className='row'>
            {
                products.map((element) => {
                    return <Item key={element.id} product={element} />
                })
            }
        </div>
    )
}

export default ItemList