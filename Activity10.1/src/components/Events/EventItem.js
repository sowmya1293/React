import { useContext } from "react";

import CartContext from "../../store/cart-context";
import classes from "./EventItem.module.css";

function EventItem({ event }) {
  const cartContxt = useContext(CartContext);
  let buttonCaption = "Add to Cart";
  let buttonAction = cartContxt.addCartItems();

  if (cartContxt.cartItems) {
    buttonCaption = "Remove from Cart";
    buttonAction = cartContxt.removeCartItems();
  }

  return (
    <li className={classes.event}>
      <img src={event.image} alt={event.title} />
      <div className={classes.content}>
        <h2>{event.title}</h2>
        <p className={classes.price}>${event.price}</p>
        <p>{event.description}</p>
        <div className={classes.actions}>
          <button onClick={buttonAction}>{buttonCaption}</button>
        </div>
      </div>
    </li>
  );
}

export default EventItem;
