import { createContext, useContext, useReducer, useEffect } from "react";
import reducer from "./reducer";
const CartContext = createContext();

const initialState = {
  loading: false,
  cart: [],
  total: 0,
  quantity: 0,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (addObject) => {
    dispatch({ type: "ADD_TO_CART", payload: addObject });
    dispatch({ type: "GET_TOTALS" });
  };
  useEffect(() => {
    dispatch({ type: "GET_TOTALS" });
  }, [state.cart]);

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
