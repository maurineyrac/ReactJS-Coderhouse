import React from 'react'
import { Link } from 'react-router-dom'
import './Item.css'

const Item = ({product}) => {
  return (
    <section className="card-section col-6 col-md-4 col-lg-3">
        <div className="productcard">

            <div className="cardimg">
                <img src={product.img} alt="" className="cardimg2"/>
            </div>

            <div className="cardbody">
                <h4>{product.name}</h4>
                <div className="cardsec1">
                    <Link to={`/product/${product.id}`} className="btt-infoenvio">
                        
                    </Link>
                </div>

                <div className="cardfoot">
                    <div className="cardsec3">
                        <div className="precio">
                            <h5>$ {product.price}</h5>
                            <p>Precio Especial</p>
                        </div>
                    </div>
                    <div className="favicon">
                        <i className="fa-regular fa-heart"></i>
                    </div>
                </div>

                <div className="cardsec2">
                    <div className="star"><i className="fa-regular fa-star"></i>
                    </div>
                    <div className="bsec2">
                        <h6>12 cuotas sin interes!</h6>
                        <p>del precio de lista</p>
                    </div>
                </div>

            </div>

        </div>
    </section>
  )
}

export default Item