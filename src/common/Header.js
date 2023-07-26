import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Header = ({setSelectedTab}) => {
  const navigation = useNavigation();

  const LogoutHandler = async () => {
    await AsyncStorage.removeItem('signUpUsers');
    navigation.navigate('Login');
  };
  return (
    <View style={style.main}>
      <TouchableOpacity>
        <Text onPress={() => setSelectedTab(0)} style={style.leftText}>
          E-Commerce
        </Text>
      </TouchableOpacity>
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
