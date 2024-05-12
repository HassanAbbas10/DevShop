import { useState, useEffect, createContext } from "react";

export const CartContext = createContext({
  items: [],
  getprodQuantity: () => {},
  addItem: () => {},
  remItem: () => {},
  delCart: () => {},
  totalCost: () => {},
});

export const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);

  //We are getting products quant from this one
  const getprodQuantity = (id) => {
    const quantity = quantity.find((product) => product.id === id)?.quantity;

    if (quantity === undefined) {
      return "༼ つ ◕_◕ ༽つ 0";
    }
    return quantity;
  };

  const addItem = (id) => {
    const quantity = getprodQuantity(id);
    if (quantity === 0) {
      setCartProducts(...cartProducts, {
        id: id,
        quantity: 1,
      });
    } else {
      setCartProducts(
        cartProducts.map((products) =>
          id === products.id
            ? {
                ...products,
                quantity: products.quantity + 1,
              }
            : products
        )
      );
    }
  };

  const remItem = (id) => {
    const quantity = getprodQuantity(id);
    if (quantity === 0) {
      setCartProducts(...cartProducts, {
        id: id,
        quantity: 1,
      });
    } else {
      setCartProducts(
        cartProducts.map((products) =>
          id === products.id
            ? {
                ...products,
                quantity: products.quantity - 1,
              }
            : products
        )
      );
    }
  };

  const delCart = () => {};
  const totalCost = () => {};
  

  const contextValue = {
    items: cartProducts,
    getprodQuantity,
    addItem,
    remItem,
    delCart,
    totalCost,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};
