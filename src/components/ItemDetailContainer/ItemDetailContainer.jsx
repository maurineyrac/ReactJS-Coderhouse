import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import ItemDetail from '../ItemDetail/ItemDetail'
import { getProductById } from '../../asyncMock'

const ItemDetailContainer = () => {
    const { id } = useParams()
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)
    console.log(loading)
    useEffect(() => {
        getProductById(id).then(res => setProduct(res))
            .finally(() => {
                setLoading(false)
            }
            )
    }, [id])

    return (
        <div className="text-center">
            {
                loading
                    ?
                    <div>Cargando... </div>
                    :
                    <ItemDetail product={product} />
            }
        </div>
    )
}

export default ItemDetailContainer