import { createContext, useContext, useReducer } from "react";
import reducer from "./reducer";

const CartContext = createContext();

const initialState = {
  loading: false,
  cart: [],
  total: 0,
  amount: 0,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (addObject) => {
    dispatch({ type: "ADD_TO_CART", payload: addObject });
  };

  return (
    <CartContext.Provider value={{ ...state, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };
