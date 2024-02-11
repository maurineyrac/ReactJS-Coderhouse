import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../../components/ItemDetail/ItemDetail'

import { InfinitySpin } from "react-loader-spinner";
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../services/fbconfig';

const ItemDetailContainer = () => {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  useEffect(() => {

    const productRef = doc(db, "products", id)

    getDoc(productRef)
      .then(docSnap => {
          const data = docSnap.data()
          const productDb = { id: docSnap.id, ...data }
          setProduct(productDb)
        
      }).finally(() => {
        setLoading(false)
      })

  }, [id])

  return (
    <div className="d-flex justify-content-center text-center">
      {
        loading
          ?
          <InfinitySpin
            visible={true}
            width="200"
            color="#5b44f3"
            ariaLabel="infinity-spin-loading"
          />
          :
          <ItemDetail product={product} />
      }
    </div>
  )
}

export default ItemDetailContainer