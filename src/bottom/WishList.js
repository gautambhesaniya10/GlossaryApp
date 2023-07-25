import {View, ScrollView} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import ProductCard from '../common/ProductCard';

const WishList = () => {
  const WishListData = useSelector(
    state => state?.wishlistProduct?.WishListProductsData,
  );

  return (
    <View style={{marginBottom: 140}}>
      <ScrollView>
        {WishListData &&
          WishListData?.map((item, index) => {
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

export default WishList;
