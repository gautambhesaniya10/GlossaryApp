import {Image, StyleSheet, Text, ScrollView, View} from 'react-native';
import React, {useState} from 'react';
import CustomTextInput from '../common/CustomTextInput';
import SearchIcon from '../Images/search.png';
import ProductCard from '../common/ProductCard';
import axios from 'axios';

const Search = () => {
  const [allProduct, setAllProduct] = useState([]);

  const getAllProducts = async searchText => {
    if (searchText == '') {
      setAllProduct([]);
    } else {
      await axios
        .get(`https://dummyjson.com/products/search?q=${searchText}`)
        .then(res => {
          setAllProduct(res?.data?.products);
        });
    }
  };

  return (
    <View style={{flex: 1}}>
      <View style={{width: '90%', alignSelf: 'center'}}>
        <CustomTextInput
          type="text"
          onChangeText={text => getAllProducts(text)}
          placeholder="Enter Your Search Text Hear.."
          icon={SearchIcon}
        />
      </View>
      <ScrollView>
        <View
          style={{
            marginBottom: 100,
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
          }}>
          {allProduct?.map((item, index) => {
            return <ProductCard key={index} cartPage={true} item={item} />;
          })}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Search;
