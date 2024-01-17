import { useEffect, useState } from "react"

import { useParams } from "react-router-dom"
import ItemList from "../../components/ItemList/ItemList"
import { getProducts, getProductsByCategory } from "../../asyncMock"

const ItemListContainer = ({ greeting }) => {

  const [loading, setLoading] = useState(true)
  const [products, setProducts] = useState([])
  console.log(loading)
  const { category } = useParams()

  useEffect(() => {
    category
      ?
      getProductsByCategory(category).then(res => {
        setProducts(res)
      }).finally(() => {
        setLoading(false)
      }
      )
      :
      getProducts().then(res => {
        setProducts(res)
      }).finally(() => {
        setLoading(false)
      }
      )
  }, [category])

  return (

    <div className="text-center">
      {loading

        ?
        <div>Cargando... </div>
        :
        <>
          <div className="container" >
            <div className="fs-1">{greeting}</div>
            <ItemList products={products} />
          </div>

        </>

      }
    </div>

  )
}

export default ItemListContainer