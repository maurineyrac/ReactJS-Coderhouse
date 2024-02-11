import '../Item/Item.css'
import ItemCount from '../ItemCount/ItemCount'


const ItemDetail = ({ product }) => {


  return (
    <>
      {product &&
        <>
          {/* <section className="card-section">
            <div className="productcard">
              <div className="cardimg">
                <img src={product.img} alt="" className="cardimg2" />
              </div>
              <div className="cardbody">
                <h4>{product.name}</h4>
                <div className="cardfoot">
                  <div className="cardsec3">
                    <div className="precio">
                      <h5>$ {product.price}</h5>
                      <p className='text-center'>Precio Especial</p>
                    </div>
                  </div>

                </div>
                <div className="cardsec2">

                  <div className="bsec2 text-center m-0 py-1 px-0">
                    <h6>Descripcion:</h6>

                    <p className='fs-6' >{product.description}</p>
                  </div>
                </div>
                <ItemCount stock={product.stock} product={product} />
              </div>
            </div>
          </section> */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-12 max-w-6xl px-4 mx-auto py-6">
            <div className="flex justify-center">
              <img
                alt="Product Image"
                className="aspect-square object-cover border border-gray-200 rounded-lg"
                height={400}
                src={product.img}
                width={400}
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
                <p>
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


