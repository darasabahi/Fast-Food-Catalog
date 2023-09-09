const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const cart = state.cart;
      cart.push(action.payload);
      return { ...state, cart };

    default:
      break;
  }
};
export default reducer;
