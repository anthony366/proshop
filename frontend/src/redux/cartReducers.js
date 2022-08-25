import * as actionTypes from "./cartTypes";

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case actionTypes.CART_ADD_ITEM:
      const cartItem = action.payload;
      const cartItemExist = state.cartItems.find(
        (x) => x.product === cartItem.product
      );

      if (cartItemExist) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product === cartItemExist.product ? cartItem : x
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, cartItem],
        };
      }
    case actionTypes.CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.product !== action.payload),
      };
    default:
      return state;
  }
};
