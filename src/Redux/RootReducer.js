import {combineReducers} from 'redux';
import CartReducer from './reducer/CartReducer';
import WishListReducer from './reducer/WishListReducer';
import addressReducer from './reducer/AddressReducer';
import AllOrderReducer from './reducer/AllOrderReducer';

const rootReducer = combineReducers({
  products: CartReducer,
  wishlistProduct: WishListReducer,
  Address: addressReducer,
  AllOrders: AllOrderReducer,
});

export default rootReducer;
