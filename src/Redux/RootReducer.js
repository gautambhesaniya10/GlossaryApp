import {combineReducers} from 'redux';
import CartReducer from './reducer/CartReducer';
import WishListReducer from './reducer/WishListReducer';
import addressReducer from './reducer/AddressReducer';

const rootReducer = combineReducers({
  products: CartReducer,
  wishlistProduct: WishListReducer,
  Address: addressReducer,
});

export default rootReducer;
