import * as actionsType from "../types";
export const AddToCart = (item) => (dispatch) => {
  dispatch(addTocart(item));
};
export const UpdateToCart = (item) => (dispatch) => {
  dispatch(updateCart(item));
};
const addTocart = (item) => ({
  type: actionsType.CART_ADD_ITEM,
  payload: item,
});
const updateCart = (item) => ({
  type: actionsType.CART_UPDATE_ITEM,
  payload: item,
});
