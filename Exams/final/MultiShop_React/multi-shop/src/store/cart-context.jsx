import { createContext, useEffect, useState } from "react";

export const CartContext = createContext({
  items: [],
  numItems: 0,
  subtotal: 0,
  shipping: 0,
  total: 0,
  addItem: (item) => {},
  removeItem: (itemId) => {},
  updatedItemQuantity: (itemId, newQuantity) => {},
  resetCart: () => {},
});

export const CartContextProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const cachedCart = sessionStorage.getItem("cartItems");
    if (cachedCart) {
      setItems(JSON.parse(cachedCart));
    }
  }, []);

  const numItems = items.length;
  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const shipping = subtotal * 0.1;
  const total = subtotal + shipping;

  const addItem = (item) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      let updated;
      if (existing) {
        updated = prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i,
        );
      } else {
        updated = [...prev, item];
      }
      sessionStorage.setItem("cartItems", JSON.stringify(updated));
      return updated;
    });
  };

  const removeItem = (itemId) => {
    setItems((prev) => {
      const updated = prev.filter((i) => i.id !== itemId );
      sessionStorage.setItem("cartItems", JSON.stringify(updated));
      return updated;
    });
  };

  const updateItemQuantity = (itemId, newQuantity) => {
    setItems((prev) => {
      const updated = prev.map((i) =>
        i.id === itemId ? { ...i, quantity: newQuantity } : i,
      );
      sessionStorage.setItem("cartItems", JSON.stringify(updated));
      return updated;
    });
  };

  const resetCart = () => {
    setItems([]);
    sessionStorage.removeItem("cartItems");
  };

  const contextValue = {
    items,
    numItems,
    subtotal,
    shipping,
    total,
    addItem,
    removeItem,
    updateItemQuantity,
    resetCart,
  };

  return <CartContext value={contextValue}>{children}</CartContext>;
};
