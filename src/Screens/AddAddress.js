import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import leftArrow from '../Images/back-button.png';
import buildings from '../Images/skyline.png';
import building from '../Images/building.png';
import pinIcon from '../Images/password.png';
import {useNavigation} from '@react-navigation/native';
import CustomTextInput from '../common/CustomTextInput';
import CustomButton from '../common/CustomButton';
import {useSelector, useDispatch} from 'react-redux';
import {AddToAddress} from '../Redux/action/AddressAction';

const AddAddress = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [addressData, setAddressData] = useState({
    city: '',
    buildingName: '',
    pinCode: '',
  });

  const [error, setError] = useState({});

  const validateForm = () => {
    let isValid = true;
    let error = {};
    if (!addressData.city) {
      isValid = false;
      error['city'] = 'Please enter a city *';
    }
    if (!addressData.buildingName) {
      isValid = false;
      error['buildingName'] = 'Please enter a buildingName *';
    }
    if (!addressData.pinCode) {
      isValid = false;
      error['pinCode'] = 'Please enter a pinCode *';
    }
    setError(error);
    return isValid;
  };

  const SaveAddress = () => {
    if (validateForm()) {
      dispatch(AddToAddress(addressData));
      navigation.goBack();
    }
  };
  return (
    <View style={{flex: 1}}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image
          source={leftArrow}
          style={{width: 40, height: 40, marginTop: 25, marginLeft: 15}}
        />
      </TouchableOpacity>
      <View style={{marginHorizontal: 30, marginTop: 20}}>
        <Text style={styles.title}>Add Your Address</Text>
        <CustomTextInput
          type="text"
          value={addressData?.city}
          onChangeText={text => setAddressData({...addressData, city: text})}
          placeholder="Enter Your City"
          icon={buildings}
        />
        {error?.city && <Text style={styles.errMsg}>{error.city}</Text>}
        <CustomTextInput
          type="text"
          value={addressData?.buildingName}
          onChangeText={text =>
            setAddressData({...addressData, buildingName: text})
          }
          placeholder="Enter Your Building Name"
          icon={building}
        />
        {error?.buildingName && (
          <Text style={styles.errMsg}>{error.buildingName}</Text>
        )}

        <CustomTextInput
          type="text"
          value={addressData?.pinCode}
          onChangeText={text => setAddressData({...addressData, pinCode: text})}
          placeholder="Enter Your Pin Code"
          icon={pinIcon}
          keyboardType="number-pad"
        />
        {error?.pinCode && <Text style={styles.errMsg}>{error.pinCode}</Text>}

        <CustomButton
          title="Save Address"
          bgColor="black"
          textColor="orange"
          onPress={() => SaveAddress()}
        />
      </View>
    </View>
  );
};

export default AddAddress;

const styles = StyleSheet.create({
  errMsg: {
    color: 'red',
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
  },
});
