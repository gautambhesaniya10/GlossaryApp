import {View, StyleSheet, TouchableOpacity, Image, Text} from 'react-native';
import React, {useState} from 'react';
import homeIconLight from '../Images/homeIcon.png';
import homeIconDark from '../Images/homeIconDark.png';
import searchIconLight from '../Images/search.png';
import searchIconDark from '../Images/searchFill.png';
import likeIconLight from '../Images/like.png';
import likeIconDark from '../Images/likeFill.png';
import userIconLight from '../Images/user.png';
import userIconDark from '../Images/userFill.png';
import bagIcon from '../Images/bag.png';
import {useSelector} from 'react-redux';

const BottomNavigation = ({selectedTab, setSelectedTab}) => {
  const CartData = useSelector(state => state?.products?.productsData);
  const WishListData = useSelector(
    state => state?.wishlistProduct?.WishListProductsData,
  );
  return (
    <>
      <View style={style.main}>
        <TouchableOpacity
          onPress={() => setSelectedTab(0)}
          style={style.menuItem}>
          <Image
            source={selectedTab === 0 ? homeIconDark : homeIconLight}
            style={{width: 24, height: 24}}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setSelectedTab(1)}
          style={style.menuItem}>
          <Image
            source={selectedTab === 1 ? searchIconDark : searchIconLight}
            style={{
              width: selectedTab === 1 ? 30 : 24,
              height: selectedTab === 1 ? 30 : 24,
            }}
          />
        </TouchableOpacity>

        <View style={style.middleIconMain}>
          <TouchableOpacity
            style={[
              style.midIcon,
              {backgroundColor: selectedTab === 2 ? 'green' : 'black'},
            ]}>
            <TouchableOpacity
              onPress={() => setSelectedTab(2)}
              style={style.menuItem}>
              <Image
                source={bagIcon}
                style={{width: 24, height: 24, tintColor: 'white'}}
              />
              <View style={style.ItemLength}>
                <Text style={{color: 'white'}}>{CartData?.length}</Text>
              </View>
            </TouchableOpacity>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          onPress={() => setSelectedTab(3)}
          style={style.menuItem}>
          <Image
            source={selectedTab === 3 ? likeIconDark : likeIconLight}
            style={{width: 24, height: 24}}
          />
          <View style={style.LikeItemLength}>
            <Text style={{color: 'white'}}>{WishListData?.length}</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setSelectedTab(4)}
          style={style.menuItem}>
          <Image
            source={selectedTab === 4 ? userIconDark : userIconLight}
            style={{width: 24, height: 24}}
          />
        </TouchableOpacity>
      </View>
    </>
  );
};

const style = StyleSheet.create({
  ItemLength: {
    width: 20,
    height: 20,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    position: 'absolute',
    top: 0,
    left: 5,
  },
  LikeItemLength: {
    width: 20,
    height: 20,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    position: 'absolute',
    top: 12,
    right: 18,
  },
  main: {
    width: '100%',
    height: 70,
    position: 'absolute',
    backgroundColor: 'white',
    bottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuItem: {
    height: '100%',
    width: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  middleIconMain: {
    height: '100%',
    width: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  midIcon: {
    width: 44,
    height: 44,
    backgroundColor: 'black',
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default BottomNavigation;
