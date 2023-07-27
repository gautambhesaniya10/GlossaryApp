import {View, ScrollView, Text} from 'react-native';
import {React, useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import ProductCard from '../common/ProductCard';
import CustomButton from '../common/CustomButton';
import {useNavigation} from '@react-navigation/native';

const Cart = () => {
  const navigation = useNavigation();
  const CartData = useSelector(state => state?.products?.productsData);

  return (
    <View style={{flex: 1}}>
      {CartData?.length > 0 ? (
        <ScrollView>
          {CartData &&
            CartData?.map((item, index) => {
              return (
                <View key={index}>
                  <ProductCard item={item} cartPage={true} />
                </View>
              );
            })}
          <View style={{marginBottom: 110, width: '90%', alignSelf: 'center'}}>
            <CustomButton
              title="Check Out"
              bgColor="green"
              textColor="white"
              onPress={() => navigation.navigate('CheckOut')}
            />
          </View>
        </ScrollView>
      ) : (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{color: 'black', fontSize: 16}}>
            No Item Added In Cart
          </Text>
        </View>
      )}
    </View>
  );
};

export default Cart;
