import {combineReducers} from 'redux';
import CartReducer from './reducer/CartReducer';
import WishListReducer from './reducer/WishListReducer';

const rootReducer = combineReducers({
  products: CartReducer,
  wishlistProduct: WishListReducer,
});

export default rootReducer;
