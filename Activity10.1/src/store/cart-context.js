import { createContext, useState } from "react";

const CartContext = createContext({
  cartItems: [],
  addCartItems: () => {},
  removeCartItems: () => {},
});

export function CartContextProvider({ children }) {
  const [cartItem, setCartItem] = useState([]);

  function addItems(item) {
    setCartItem((prevCartItems) => [...prevCartItems, item]);
  }

  function removeItems(cartId) {
    setCartItem((prevCartItems) => {
      prevCartItems.filter((item) => item.id != cartId);
    });
  }

  const cartItemCtxValue = {
    cartItems: cartItem,
    addCartItems: addItems,
    removeCartItems: removeItems,
  };

  return (
    <CartContext.Provider value={cartItemCtxValue}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;
