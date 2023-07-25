import {ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST} from '../ActionType';

const initialState = {
  WishListProductsData: [],
};

const WishListReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_WISHLIST:
      return {
        ...state,
        WishListProductsData: [...state.WishListProductsData, action.payload],
      };
    case REMOVE_FROM_WISHLIST:
      const FilterData = state?.WishListProductsData?.filter(
        item => item?.id !== action.payload,
      );
      return {
        ...state,
        WishListProductsData: FilterData,
      };
    default:
      return state;
  }
};

export default WishListReducer;
