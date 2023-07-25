import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Header = () => {
  const navigation = useNavigation();

  const LogoutHandler = async () => {
    await AsyncStorage.removeItem('signUpUsers');
    navigation.navigate('Login');
  };
  return (
    <View style={style.main}>
      <Text style={style.leftText}>E-Commerce</Text>
      <Text style={style.RightText}>Mode</Text>
      <Text
        onPress={() => LogoutHandler()}
        style={[
          style.RightText,
          {color: 'red', textDecorationLine: 'underline'},
        ]}>
        Logout
      </Text>
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
  leftText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  RightText: {
    fontSize: 18,
    color: 'black',
  },
});

export default Header;
