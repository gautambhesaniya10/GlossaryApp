import {View, ScrollView, Text} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import ProductCard from '../common/ProductCard';

const WishList = () => {
  const WishListData = useSelector(
    state => state?.wishlistProduct?.WishListProductsData,
  );

  return (
    <View style={{flex: 1}}>
      {WishListData?.length > 0 ? (
        <ScrollView style={{marginBottom: 80}}>
          {WishListData &&
            WishListData?.map((item, index) => {
              return (
                <View key={index}>
                  <ProductCard item={item} cartPage={true} />
                </View>
              );
            })}
        </ScrollView>
      ) : (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{color: 'black', fontSize: 16}}>
            No Item Added In WishList
          </Text>
        </View>
      )}
    </View>
  );
};

export default WishList;
