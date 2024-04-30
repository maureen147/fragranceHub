import { useState, createContext, useContext, useEffect } from "react";

const CartContext = createContext();

// Anythng in the provider function is what we want to ship out
const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    let existingCart = localStorage.getItem("cart");
    if (existingCart) setCart(JSON.parse(existingCart));
  }, []);
  
// Anything in the provider is what we want to ship out
  return (
    <CartContext.Provider value={{cart, setCart}}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

//CartProvider will wrap App in main.jsx
export { useCart, CartProvider }; 
