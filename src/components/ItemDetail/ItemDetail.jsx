import '../Item/Item.css'
import ItemCount from '../ItemCount/ItemCount'


const ItemDetail = ({ product }) => {


  return (
    <>
      {product &&
        <>
          <div className="flex flex-col md:flex-row gap-6 md:gap-12 max-w-6xl px-4 mx-auto py-6">
            <div className="flex justify-center">
              <img
                alt="Product Image"
                className="aspect-square object-contain object-center border border-gray-200 rounded-lg"
                height='400'
                src={product.img}
                width='400'
              />
            </div>
            <div className="grid gap-4 md:gap-10">
              <div className="grid gap-4">
                <h1 className="font-bold text-3xl lg:text-4xl">{product.name}</h1>
                <div className="text-4xl font-bold">$ {product.price}</div>
              </div>
              <div className="grid gap-4 md:gap-10">
                <ItemCount stock={product.stock} product={product} />
              </div>
              <div>
                <p>Descripcion: <br/>
                  {product.description}
                </p>
              </div>
            </div>
          </div>
        </>
      }
    </>
  )
}

export default ItemDetail


