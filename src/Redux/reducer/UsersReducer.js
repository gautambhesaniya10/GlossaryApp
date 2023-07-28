const {ADD_SIGNUP_USER} = require('../ActionType');

const initialState = {
  Users: [],
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SIGNUP_USER:
      return {
        ...state,
        Users: [...state.Users, action.payload],
      };

    default:
      return state;
  }
};

export default UserReducer;
