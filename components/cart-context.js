import { createContext, useState, useContext } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (itemToAdd) => {
    setCart((prevCart) => {
      if (!prevCart) return [itemToAdd];

      const existingItemIndex = prevCart.findIndex(
        (item) => item.name === itemToAdd.name
      );

      if (existingItemIndex !== -1) return;
      else {
        return [...prevCart, itemToAdd];
      }
    });
  };

  const incrementItemCount = (alias) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.alias === alias ? { ...item, count: item.count + 1 } : item
      )
    );
  };

  const decrementItemCount = (alias) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.alias === alias && item.count > 1
          ? { ...item, count: item.count - 1 }
          : item
      )
    );
  };

  const deleteCartItem = (alias) => {
    setCart((prevCart) => prevCart.filter((item) => item.alias !== alias));
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        incrementItemCount,
        decrementItemCount,
        deleteCartItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
