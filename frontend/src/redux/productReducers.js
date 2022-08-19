import * as actionTypes from "./productTypes";

export const productReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case actionTypes.PRODUCT_LIST_REQUEST:
      return { loading: true, products: [] };

    case actionTypes.PRODUCT_LIST_SUCCESS:
      return { loading: false, products: action.payload };

    case actionTypes.PRODUCT_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
