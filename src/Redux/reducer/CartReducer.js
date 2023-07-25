import {ADD_TO_CART, REMOVE_FROM_CART} from '../ActionType';

const initialState = {
  productsData: [],
};

const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        productsData: [...state.productsData, action.payload],
      };
    case REMOVE_FROM_CART:
      const FilterData = state?.productsData?.filter(
        item => item?.id !== action.payload,
      );
      return {
        ...state,
        productsData: FilterData,
      };
    default:
      return state;
  }
};

export default CartReducer;
