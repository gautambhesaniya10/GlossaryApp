import {View} from 'react-native';
import React, {useState, useEffect} from 'react';
import BottomNavigation from '../common/BottomNavigation';
import Main from '../bottom/Main';
import Search from '../bottom/Search';
import Cart from '../bottom/Cart';
import WishList from '../bottom/WishList';
import Profile from '../bottom/Profile';
import Header from '../common/Header';
import axios from 'axios';

const Home = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const [category, setCategory] = useState([]);
  const [allProduct, setAllProduct] = useState([]);
  const [productLoading, setProductLoading] = useState(false);

  const getAllProducts = async () => {
    setProductLoading(true);
    await axios.get('https://dummyjson.com/products').then(res => {
      setAllProduct(res?.data?.products);
      setProductLoading(false);
    });
  };
  const getAllCategories = async () => {
    await axios.get('https://dummyjson.com/products/categories').then(res => {
      setCategory(res?.data);
    });
  };
  useEffect(() => {
    getAllCategories();
    getAllProducts();
  }, []);

  const DisplayScreen = () => {
    switch (selectedTab) {
      case 0:
        return (
          <Main
            category={category}
            allProduct={allProduct}
            productLoading={productLoading}
          />
        );
      case 1:
        return <Search />;
      case 2:
        return <Cart />;
      case 3:
        return <WishList />;
      case 4:
        return <Profile />;
      default:
        break;
    }
  };

  return (
    <>
      <View style={{flex: 1}}>
        <Header setSelectedTab={setSelectedTab} />
        <DisplayScreen />

        <BottomNavigation
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        />
      </View>
    </>
  );
};

export default Home;
