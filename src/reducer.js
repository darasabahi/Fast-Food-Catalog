const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      let cart = state.cart;
      let indexOfFastFood = cart.findIndex(
        (fastfood) => fastfood.id === action.payload.id
      );
      if (indexOfFastFood !== -1) cart[indexOfFastFood].number += 1;
      else {
        const newCart = { ...action.payload, number: 1 };
        cart.push(newCart);
      }
      return { ...state, cart };

    default:
      break;
  }
};
export default reducer;
