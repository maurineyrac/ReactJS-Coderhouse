import React from 'react';
import { BsCart2 } from "react-icons/bs";
import Nav from 'react-bootstrap/Nav';
import { useCart } from "../../context/CartContext";
import { useModal } from '@/context/modalContext';
import ModalCart from '@/pages/ModalCart/ModalCart';

const CartWidget = () => {
  const { itemQuantity } = useCart();
  const { toggleModal} = useModal();

  return (
    <>
      <Nav.Link onClick={toggleModal}>
        <div className="d-flex">
          <BsCart2 />
          <span className="ms-2 badge rounded-pill text-bg-dark">{itemQuantity()}</span>
        </div>
      </Nav.Link>
      <ModalCart/>
    </>
  );
}

export default CartWidget;
