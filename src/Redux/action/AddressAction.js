import {ADD_ADDRESS, DELETE_ADDRESS} from '../ActionType';

export const AddToAddress = data => ({
  type: ADD_ADDRESS,
  payload: data,
});
export const DeleteToAddress = index => ({
  type: DELETE_ADDRESS,
  payload: index,
});
