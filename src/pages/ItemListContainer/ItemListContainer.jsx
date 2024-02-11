import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemList from "../../components/ItemList/ItemList"
import { InfinitySpin } from "react-loader-spinner"
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../../services/fbconfig"

const ItemListContainer = ({ greeting }) => {

  const [loading, setLoading] = useState(true)
  const [products, setProducts] = useState([])
  const { category } = useParams()


  useEffect(() => {

    const productsRef = category
      ?
      query(collection(db, "products"), where("category", "==", category))
      :
      collection(db, "products")

    getDocs(productsRef)
      .then(qSnapshot => {
        const productsDb = qSnapshot.docs.map(doc => {
          const data = doc.data()
          return { id: doc.id, ...data }
        })
        setProducts(productsDb)
      }).finally(() => {
        setLoading(false)
      })
  }, [category])

  return (

    <div className="d-flex justify-content-center text-center">
      {loading
        ?
        <InfinitySpin
          visible={true}
          width="200"
          color="#5b44f3"
          ariaLabel="infinity-spin-loading"
        />
        :
        <>
          <section className="container" >
            <div className="fs-1 text-center">{greeting}</div>
            <div className="fs-1 text-center text-capitalize">{category}</div>
            <ItemList products={products} />
          </section>
        </>

      }
    </div>

  )
}

export default ItemListContainer