
import React from 'react'
import '../Item/Item.css'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({ product }) => {


    return (
        <>
            {product &&
                <>
                    <section className="card-section">
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
                                    {/* <div className="favicon">
                                        <i className="fa-regular fa-heart"></i>
                                    </div> */}
                                </div>
                                <div className="cardsec2">
                                    {/* <div className="star">
                                        <i className="fa-regular fa-star"></i>
                                    </div> */}
                                    <div className="bsec2 text-center m-0 py-1 px-0">
                                        <h6>Descripcion:</h6>
                                        {/* <p>del precio de lista</p> */}
                                        <p className='fs-6' >{product.description}</p>
                                    </div>
                                </div>
                                <ItemCount stock={product.stock} product={product} />
                            </div>
                        </div>
                    </section>
                </>
            }
        </>
    )
}

export default ItemDetail
