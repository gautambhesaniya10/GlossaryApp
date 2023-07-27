import {Button, Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {React, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import CustomButton from '../common/CustomButton';
import axios from 'axios';
import {encode} from 'base-64';
import RazorpayCheckout from 'react-native-razorpay';
import {OrderAdd} from '../Redux/action/AllOrdersAction';
import {useNavigation} from '@react-navigation/native';

const CheckOut = () => {
  const YOUR_KEY_ID = 'rzp_test_I8qVTgIekF6rLy';
  const YOUR_KEY_SECRET = 'kjASzEz6pQHDK3aSdrZpuUex';

  const dispatch = useDispatch();
  const navigation = useNavigation();

  const CartData = useSelector(state => state?.products?.productsData);
  console.log('CartData///////', CartData);
  const AllAddress = useSelector(state => state?.Address?.Data);

  const [selectedAddress, setSelectedAddress] = useState('');

  const GetTotalAmount = () => {
    let totalAmount = 0;
    CartData?.map((item, index) => {
      totalAmount = totalAmount + item?.price;
    });
    return totalAmount;
  };

  const PlaceOrder = async () => {
    if (selectedAddress !== '') {
      const orderPayload = {
        amount: GetTotalAmount() * 100,
        currency: 'INR',
      };
      await axios
        .post('https://api.razorpay.com/v1/orders', orderPayload, {
          headers: {
            'content-type': 'application/json',
            Authorization: `Basic ${encode(
              `${YOUR_KEY_ID}:${YOUR_KEY_SECRET}`,
            )}`, // Use encode() to perform Base64 encoding
          },
        })
        .then(
          res => {
            CheckOutOrder(res?.data);
          },
          error => {
            console.log('errorerror', error);
          },
        )
        .catch(err => {
          console.log('err', err);
        });
    }
  };

  const CheckOutOrder = orderData => {
    const options = {
      description: 'Credits towards consultation',
      image: 'https://i.imgur.com/3g7nmJC.jpg',
      currency: 'INR',
      key: YOUR_KEY_ID,
      amount: orderData?.amount,
      name: 'Shop Cart',
      order_id: orderData?.id, //Replace this with an order_id created using Orders API.
      theme: {color: '#53a20e'},
    };

    RazorpayCheckout.open(options)
      .then(data => {
        // handle success
        dispatch(
          OrderAdd({
            Address: selectedAddress,
            items: CartData,
            total: GetTotalAmount(),
          }),
        );
        navigation.navigate('SuccessOrder', {
          Status: 'success',
        });
      })
      .catch(error => {
        navigation.navigate('SuccessOrder', {
          Status: 'failed',
        });
      });
  };

  return (
    <View style={{flex: 1}}>
      <ScrollView>
        <View style={styles.mainCon}>
          {CartData &&
            CartData?.map((item, index) => {
              return (
                <View style={styles.mainView} key={index}>
                  <Image
                    source={{uri: item?.images[0]}}
                    style={{width: 100, height: 100}}
                  />
                  <View>
                    <Text numberOfLines={1} style={styles.NameText}>
                      {item?.title}
                    </Text>
                    <Text style={styles.rupeesText}>₹{item?.price}</Text>
                  </View>
                </View>
              );
            })}
        </View>
        <View style={styles.totalMain}>
          <Text style={styles.totalText}>Total : </Text>
          <Text style={styles.totalText}>₹{GetTotalAmount()}</Text>
        </View>
        <View style={styles.AddressMain}>
          {AllAddress?.length > 0 ? (
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
                    onPress={() =>
                      setSelectedAddress(
                        `${item?.city} , ${item?.buildingName} , ${item?.pinCode}`,
                      )
                    }
                    title="Select"
                    color="black"
                  />
                </View>
              );
            })
          ) : (
            <Text
              onPress={() => navigation.navigate('AddAddress')}
              style={styles.linkToAddress}>
              Please Add Your Address
            </Text>
          )}
        </View>
        <View style={styles.addressTextMain}>
          <Text style={styles.totalText}>Selected Address</Text>
          {selectedAddress === '' ? (
            <Text style={{color: 'red', fontSize: 14}}>
              Please select a address{' '}
            </Text>
          ) : (
            <Text style={styles.totalText}>{selectedAddress}</Text>
          )}
        </View>
        <View style={{marginBottom: 30, width: '90%', alignSelf: 'center'}}>
          <CustomButton
            title="Place Order"
            bgColor="black"
            textColor="white"
            onPress={() => PlaceOrder()}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default CheckOut;

const styles = StyleSheet.create({
  linkToAddress: {
    color: 'blue',
    textDecorationLine: 'underline',
    fontSize: 16,
  },
  addressTextMain: {
    marginLeft: 25,
  },
  AddressMain: {
    marginVertical: 20,
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
    marginBottom: 7,
  },
  textField: {
    paddingBottom: 8,
    fontSize: 16,
    color: 'black',
  },
  totalMain: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    borderBottomWidth: 0.5,
  },
  totalText: {
    fontSize: 18,
    fontWeight: '500',
    color: 'black',
  },
  mainCon: {
    borderBottomWidth: 0.5,
  },
  mainView: {
    display: 'flex',
    flexDirection: 'row',
    gap: 20,
    alignItems: 'center',
    margin: 15,
  },
  NameText: {
    fontSize: 20,
    fontWeight: '500',
    color: 'black',
  },
  rupeesText: {
    fontSize: 18,
    fontWeight: '500',
    color: 'black',
  },
});
