import {View, ScrollView} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import ProductCard from '../common/ProductCard';

const Cart = () => {
  const CartData = useSelector(state => state?.products?.productsData);

  return (
    <View style={{marginBottom: 140}}>
      <ScrollView>
        {CartData &&
          CartData?.map((item, index) => {
            return (
              <View key={index}>
                <ProductCard item={item} cartPage={true} />
              </View>
            );
          })}
      </ScrollView>
    </View>
  );
};

export default Cart;
