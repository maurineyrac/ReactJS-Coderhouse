import { useEffect, useState } from "react"

import { useParams } from "react-router-dom"
import ItemList from "../ItemList/ItemList"
import { getProducts, getProductsByCategory } from "../../asyncMock"

const ItemListContainer = ({ greeting }) => {

  const [loading, setLoading] = useState(true)
  const [products, setProducts] = useState([])

  const { category } = useParams()

  useEffect(() => {
    category ?
      getProductsByCategory(category).then(res => {
        setProducts(res)
      }) :
      getProducts().then(res => {
        setProducts(res)
      }).finally(() => {
        setLoading(false)
      }
      )
  }, [category])

  return (
    <div className="d-flex justify-content-center fs-1">
      {loading
        ?
        <div>Cargando... </div>
        :
        <>
        <div>{greeting}</div>
        <ItemList products={products} />
        </>
      }
    </div>
  )
}

export default ItemListContainer