import {Button, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ProfileHeader from '../common/ProfileHeader';
import {useSelector, useDispatch} from 'react-redux';
import {DeleteToAddress} from '../Redux/action/AddressAction';

const MyAddress = () => {
  const AllAddress = useSelector(state => state?.Address?.Data);
  const dispatch = useDispatch();

  const DeleteAddressHandler = index => {
    dispatch(DeleteToAddress(index));
  };

  return (
    <View style={{flex: 1}}>
      <ProfileHeader title="My Address" />
      <ScrollView>
        <View style={styles.main}>
          {AllAddress &&
            AllAddress?.map((item, index) => {
              return (
                <View key={index} style={styles.boxDiv}>
                  <View>
                    <Text style={styles.textField}>City : {item?.city}</Text>
                    <Text style={styles.textField}>
                      Building Name : {item?.buildingName}
                    </Text>
                    <Text style={styles.textField}>
                      Pincode : {item?.pinCode}
                    </Text>
                  </View>
                  <Button
                    onPress={() => DeleteAddressHandler(index)}
                    title="Delete"
                    color="red"
                  />
                </View>
              );
            })}
        </View>
      </ScrollView>
    </View>
  );
};

export default MyAddress;

const styles = StyleSheet.create({
  main: {
    marginVertical: 35,
    marginHorizontal: 20,
  },
  boxDiv: {
    // borderBottomWidth: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    elevation: 5,
    marginBottom: 10,
  },
  textField: {
    paddingBottom: 8,
    fontSize: 16,
    color: 'black',
  },
});
