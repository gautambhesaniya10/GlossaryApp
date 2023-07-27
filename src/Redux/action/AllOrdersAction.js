import {ADD_ORDER, DELETE_ORDER} from '../ActionType';

export const OrderAdd = data => ({
  type: ADD_ORDER,
  payload: data,
});
export const OrderDelete = index => ({
  type: DELETE_ORDER,
  payload: index,
});
