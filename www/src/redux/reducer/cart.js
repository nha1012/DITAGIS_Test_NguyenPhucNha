import * as ActionTypes from "../types";

const initialState = {
  items: [],
};

export const CartReducer = (state = initialState, action) => {
  let newState = undefined;

  switch (action.type) {
    case ActionTypes.CART_ADD_ITEM:
      newState = { ...state };
      newState.items = action.payload;
      return newState;

    case ActionTypes.CART_UPDATE_ITEM:
      newState = { ...state };
      newState.items[action.payload.id] = action.payload.item;
      return newState;

    case ActionTypes.CART_REMOVE_ITEM:
      newState = { ...state };
      delete newState.items[`${action.payload}`];
      return newState;

    default:
      return state;
  }
};
