import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import ItemDetail from '../ItemDetail/ItemDetail'
import { getProductById } from '../../asyncMock'

const ItemDetailContainer = () => {
    const { id } = useParams()
    const [product, setProduct] = useState(null)


    useEffect(() => {
        getProductById(id).then(res => setProduct(res))
    }, [id])



    return (
        <>

            <ItemDetail product={product} />

        </>
    )
}

export default ItemDetailContainer