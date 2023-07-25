import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import likeIcon from '../Images/like.png';
import likeIconFill from '../Images/likeFill.png';
import {useSelector, useDispatch} from 'react-redux';
import {AddToCart, RemoveItemToCart} from '../Redux/action/CartAction';
import {
  AddToWishList,
  RemoveItemToWishList,
} from '../Redux/action/WishListAction';

const ProductCard = ({item, cartPage}) => {
  const CartData = useSelector(state => state?.products?.productsData);
  const WishListData = useSelector(
    state => state?.wishlistProduct?.WishListProductsData,
  );

  const dispatch = useDispatch();

  const AddItemToCart = cartItem => {
    dispatch(AddToCart(cartItem));
  };

  const AddItemToWishList = cartItem => {
    dispatch(AddToWishList(cartItem));
  };

  const RemoveItem = id => {
    dispatch(RemoveItemToCart(id));
  };

  const RemoveToWishList = id => {
    dispatch(RemoveItemToWishList(id));
  };

  const AddRemoveButton = id => {
    const FindItem = CartData?.find(cartItem => cartItem?.id === id);
    if (FindItem) {
      return true;
    } else {
      return false;
    }
  };
  const ChangeWishListButton = id => {
    const FindItem = WishListData?.find(cartItem => cartItem?.id === id);
    if (FindItem) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <View style={[styles.main, {width: cartPage ? '90%' : 200}]}>
      <Image source={{uri: item?.images[0]}} style={styles.img} />
      <Text numberOfLines={1} style={styles.NameText}>
        {item?.title}
      </Text>
      <View style={styles.bottomDiv}>
        <Text style={styles.rupeesText}>₹{item?.price}</Text>
        {AddRemoveButton(item?.id) ? (
          <TouchableOpacity
            onPress={() => RemoveItem(item?.id)}
            style={[styles.cartAddBtn, styles.cartRemoveBtn]}>
            <Text style={{color: 'white', fontWeight: '500'}}>
              Remove To Cart
            </Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => AddItemToCart(item)}
            style={styles.cartAddBtn}>
            <Text style={{color: 'black'}}>Add To Cart</Text>
          </TouchableOpacity>
        )}
      </View>
      {ChangeWishListButton(item?.id) ? (
        <TouchableOpacity
          onPress={() => RemoveToWishList(item?.id)}
          style={styles.likeBtn}>
          <Image
            source={likeIconFill}
            style={{width: 24, height: 24, tintColor: 'red'}}
          />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={() => AddItemToWishList(item)}
          style={styles.likeBtn}>
          <Image source={likeIcon} style={{width: 24, height: 24}} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  main: {
    width: 200,
    height: 200,
    borderRadius: 10,
    elevation: 5,
    backgroundColor: '#fff',
    marginLeft: 20,
    marginVertical: 10,
  },
  img: {
    width: '100%',
    height: '50%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  NameText: {
    fontSize: 20,
    fontWeight: '500',
    color: 'black',
    marginLeft: 10,
    marginTop: 10,
  },
  rupeesText: {
    fontSize: 18,
    fontWeight: '500',
    color: 'black',
  },
  bottomDiv: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginTop: 10,
    alignItems: 'center',
  },
  cartAddBtn: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
  cartRemoveBtn: {
    backgroundColor: 'green',
    borderWidth: 0,
  },
  likeBtn: {
    width: 40,
    height: 40,
    backgroundColor: 'white',
    borderRadius: 20,
    elevation: 5,
    position: 'absolute',
    top: 10,
    right: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
