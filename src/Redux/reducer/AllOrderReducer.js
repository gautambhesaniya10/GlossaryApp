import {ADD_ORDER, DELETE_ORDER} from '../ActionType';

const initialState = {
  Orders: [],
};

const AllOrderReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ORDER:
      return {
        ...state,
        Orders: [...state.Orders, action.payload],
      };
    case DELETE_ORDER:
      let FilterData = state?.Orders?.filter(
        (item, index) => index !== action.payload,
      );
      return {
        ...state,
        Orders: FilterData,
      };
    default:
      return state;
  }
};

export default AllOrderReducer;
