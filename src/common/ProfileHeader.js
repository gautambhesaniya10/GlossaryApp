import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import settingIcon from '../Images/setting.png';
import {useNavigation} from '@react-navigation/native';

const ProfileHeader = ({title}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.mainHeader}>
      <Text style={styles.profileText}>{title}</Text>
      {title === 'Profile' && (
        <TouchableOpacity>
          <Image source={settingIcon} style={{width: 28, height: 28}} />
        </TouchableOpacity>
      )}
      {title === 'My Address' && (
        <TouchableOpacity
          onPress={() => navigation.navigate('AddAddress')}
          style={styles.AddressMain}>
          <Text>Add Address</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default ProfileHeader;

const styles = StyleSheet.create({
  mainHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 23,
    alignItems: 'center',
    marginTop: 20,
  },
  profileText: {
    fontSize: 18,
    color: 'black',
    fontWeight: '500',
  },
  AddressMain: {
    borderWidth: 1,
    borderRadius: 15,
    padding: 8,
  },
});
