import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import userProfile from '../Images/userProfile.png';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import ProfileHeader from '../common/ProfileHeader';

const Profile = () => {
  const navigation = useNavigation();
  const [user, setUser] = useState({});

  const getUserInfo = async () => {
    const storedData = await AsyncStorage.getItem('signUpUsers');
    const parsedData = JSON.parse(storedData);
    setUser(parsedData);
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <View style={{flex: 1}}>
      <ProfileHeader title="Profile" />
      <View style={style.userProfile}>
        <Image
          source={userProfile}
          style={{
            width: 100,
            height: 100,
          }}
        />
        <Text style={[style.profileText, {marginVertical: 10}]}>
          {user?.name}
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('MyAddress')}
        style={style.listMenu}>
        <Text>My Address</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Orders')}
        style={style.listMenu}>
        <Text>My Order</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('OtherScreen')}
        style={style.listMenu}>
        <Text>Other</Text>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  userProfile: {
    alignItems: 'center',
    marginTop: 50,
  },
  listMenu: {
    width: '90%',
    alignSelf: 'center',
    height: 50,
    borderBottomWidth: 0.3,
    borderBottomColor: '#8e8e8e',
    justifyContent: 'center',
  },
});

export default Profile;
