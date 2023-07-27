import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import logoutIcon from '../Images/turn-off.png';
import logo from '../Images/ic_launcher_round.png';

const Header = ({setSelectedTab}) => {
  const navigation = useNavigation();

  const LogoutHandler = async () => {
    await AsyncStorage.removeItem('signUpUsers');
    navigation.navigate('Login');
  };
  return (
    <View style={style.main}>
      <TouchableOpacity>
        <TouchableOpacity onPress={() => setSelectedTab(0)}>
          <Image source={logo} style={{width: 55, height: 55}} />
        </TouchableOpacity>
      </TouchableOpacity>
      <Text style={style.RightText}>Amazon</Text>
      <TouchableOpacity onPress={() => LogoutHandler()}>
        <Image source={logoutIcon} style={{width: 30, height: 30}} />
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  main: {
    backgroundColor: 'white',
    width: '100%',
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
  },

  RightText: {
    fontSize: 18,
    color: 'black',
  },
});

export default Header;
