import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import CheckIcon from '../Images/check.png';
import FailIcon from '../Images/cancel.png';
import {useRoute, useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

const SuccessOrder = () => {
  const route = useRoute();
  const navigation = useNavigation();

  return (
    <View style={{flex: 1, alignSelf: 'center', justifyContent: 'center'}}>
      <View style={styles.main}>
        {route?.params?.Status === 'success' ? (
          <>
            <Image source={CheckIcon} style={{width: 100, height: 100}} />
            <Text style={styles.text}>Order Place Successfully</Text>
          </>
        ) : (
          <Image source={FailIcon} style={{width: 100, height: 100}} />
        )}
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text style={styles.goHome}>Go To Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SuccessOrder;

const styles = StyleSheet.create({
  main: {
    alignItems: 'center',
  },
  text: {
    paddingTop: 15,
    fontSize: 20,
    fontWeight: '400',
    color: 'green',
  },
  goHome: {
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderWidth: 1,
    fontSize: 16,
    marginTop: 20,
  },
});
