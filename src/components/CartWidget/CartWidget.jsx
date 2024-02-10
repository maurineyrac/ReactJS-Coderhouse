import { useContext } from "react";
import { BsCart2 } from "react-icons/bs";
import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import { useCart } from "../../context/CartContext";

const CartWidget = () => {

  const { itemQuantity } = useCart();
  return (

    <Nav.Link as={Link} to='/cart'>
      <>
        <BsCart2 />
        <span className="badge rounded-pill text-bg-dark">{itemQuantity()}</span>
      </>
    </Nav.Link>
  )
}

export default CartWidget