import * as actionTypes from "./orderTypes";

//create new order
export const orderCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.ORDER_CREATE_REQUEST:
      return { loading: true };

    case actionTypes.ORDER_CREATE_SUCCESS:
      return { loading: false, success: true, order: action.payload };

    case actionTypes.ORDER_CREATE_FAIL:
      return { loading: false, error: action.payload };
    case actionTypes.ORDER_CREATE_RESET:
      return {};
    default:
      return state;
  }
};

//get order details
export const orderDetailsReducer = (
  state = { loading: true, orderItems: [], shippingAddress: {} },
  action
) => {
  switch (action.type) {
    case actionTypes.ORDER_DETAILS_REQUEST:
      return { ...state, loading: true };

    case actionTypes.ORDER_DETAILS_SUCCESS:
      return { loading: false, order: action.payload };

    case actionTypes.ORDER_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

//get order pay details
export const orderPayReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.ORDER_PAY_REQUEST:
      return { loading: true };

    case actionTypes.ORDER_PAY_SUCCESS:
      return { loading: false, success: true };

    case actionTypes.ORDER_PAY_FAIL:
      return { loading: false, error: action.payload };

    case actionTypes.ORDER_PAY_RESET:
      return {};

    default:
      return state;
  }
};

//get my orders
export const myOrdersReducer = (state = { orders: [] }, action) => {
  switch (action.type) {
    case actionTypes.MY_ORDERS_REQUEST:
      return { loading: true };

    case actionTypes.MY_ORDERS_SUCCESS:
      return { loading: false, orders: action.payload };

    case actionTypes.MY_ORDERS_FAIL:
      return { loading: false, error: action.payload };

    case actionTypes.MY_ORDERS_RESET:
      return { orders: [] };

    default:
      return state;
  }
};
