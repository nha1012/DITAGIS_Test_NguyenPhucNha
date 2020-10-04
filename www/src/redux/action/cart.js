import * as actionsType from "../types";
export const AddToCart = (item) => (dispatch) => {
  dispatch(addTocart(item));
};
export const UpdateToCart = (item) => (dispatch) => {
  dispatch(updateCart(item));
};
export const RemoveCartItem=(id)=>(dispatch)=>{
  dispatch(removeCart(id))
}
const addTocart = (item) => ({
  type: actionsType.CART_ADD_ITEM,
  payload: item,
});
const updateCart = (item) => ({
  type: actionsType.CART_UPDATE_ITEM,
  payload: item,
});
const removeCart=(id)=>({
  type: actionsType.CART_REMOVE_ITEM,
  payload:id
})
