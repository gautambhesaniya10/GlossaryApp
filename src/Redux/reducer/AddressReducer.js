const {ADD_ADDRESS, DELETE_ADDRESS} = require('../ActionType');

const initialState = {
  Data: [],
};

const addressReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ADDRESS:
      return {
        ...state,
        Data: [...state?.Data, action.payload],
      };
    case DELETE_ADDRESS:
      let FilterData = state?.Data?.filter(
        (item, index) => index !== action.payload,
      );
      return {
        ...state,
        Data: FilterData,
      };
    default:
      return state;
  }
};

export default addressReducer;
