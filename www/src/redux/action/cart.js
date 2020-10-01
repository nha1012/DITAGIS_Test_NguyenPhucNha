import * as actionsType from "../types";
export const AddToCart = (item) =>(dispatch)=> {
  dispatch(addTocart(item));
};
const addTocart = (item) => ({
  type: actionsType.CART_ADD_ITEM,
  payload:item
});
