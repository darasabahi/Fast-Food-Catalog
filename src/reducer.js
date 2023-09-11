const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
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
    }
    case "GET_TOTALS": {
      let { total, quantity } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { price, number } = cartItem;
          const itemTotal = price * number;
          cartTotal.total += itemTotal;
          cartTotal.quantity += number;
          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );

      return { ...state, total, quantity };
    }
    default:
      break;
  }
};
export default reducer;
