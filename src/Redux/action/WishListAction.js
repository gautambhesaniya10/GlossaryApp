import {ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST} from '../ActionType';

export const AddToWishList = data => ({
  type: ADD_TO_WISHLIST,
  payload: data,
});

export const RemoveItemToWishList = id => ({
  type: REMOVE_FROM_WISHLIST,
  payload: id,
});
