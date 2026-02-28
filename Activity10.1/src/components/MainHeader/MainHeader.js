import { useContext, useState } from "react";

import Cart from "../Cart/Cart";
import classes from "./MainHeader.module.css";
import CartContext from "../../store/cart-context";

function MainHeader({ cartItems }) {
  const cartContxt = useContext(CartContext);
  const [modalIsOpen, setModalIsOpen] = useState();

  function openCartModalHandler() {
    setModalIsOpen(true);
  }

  function closeCartModalHandler() {
    setModalIsOpen(false);
  }

  const numCartItems = cartContxt.cartItems.length;

  return (
    <>
      <header className={classes.header}>
        <h1>StateEvents Shop</h1>
        <button onClick={openCartModalHandler}>Cart ({numCartItems})</button>
      </header>
      {modalIsOpen && (
        <Cart onClose={closeCartModalHandler} items={cartItems} />
      )}
    </>
  );
}

export default MainHeader;
