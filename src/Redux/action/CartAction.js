import {ADD_TO_CART, REMOVE_FROM_CART} from '../ActionType';

export const AddToCart = data => ({
  type: ADD_TO_CART,
  payload: data,
});

export const RemoveItemToCart = id => ({
  type: REMOVE_FROM_CART,
  payload: id,
});
