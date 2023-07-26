import {View, Text, Button} from 'react-native';
import React, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import BottomNavigation from '../common/BottomNavigation';
import Main from '../bottom/Main';
import Search from '../bottom/Search';
import Cart from '../bottom/Cart';
import WishList from '../bottom/WishList';
import Profile from '../bottom/Profile';
import Header from '../common/Header';
import {useSelector} from 'react-redux';

const Home = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const DisplayScreen = () => {
    switch (selectedTab) {
      case 0:
        return <Main />;
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
