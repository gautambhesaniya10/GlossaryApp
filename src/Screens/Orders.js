import {StyleSheet, Text, Image, View, ScrollView} from 'react-native';
import React from 'react';
import ProfileHeader from '../common/ProfileHeader';
import {useSelector} from 'react-redux';
import Header from '../common/Header';

const Orders = () => {
  const MyOrders = useSelector(state => state?.AllOrders?.Orders);
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Header />
      <ProfileHeader title="Orders" />
      {MyOrders?.length > 0 ? (
        <ScrollView>
          <View>
            {MyOrders?.map((orderItem, index) => {
              return (
                <View style={styles.mainParent}>
                  {orderItem?.items?.map((productItem, index1) => {
                    return (
                      <View style={styles.mainDivOrder}>
                        <Text style={styles.textTotal}>No. {index + 1}</Text>
                        <Image
                          source={{uri: productItem?.images[0]}}
                          style={{width: 100, height: 100}}
                        />
                        <View
                          style={{
                            flexWrap: 'wrap',
                            display: 'flex',
                            width: 50,
                          }}>
                          <Text numberOfLines={1}>{productItem?.title}</Text>
                          <Text style={{width: 150, marginTop: 6}}>
                            {orderItem?.Address}
                          </Text>
                        </View>
                      </View>
                    );
                  })}
                  <View style={styles.totalText}>
                    <Text style={styles.textTotal}>Total : </Text>
                    <Text style={styles.textTotal}>₹{orderItem?.total}</Text>
                  </View>
                </View>
              );
            })}
          </View>
        </ScrollView>
      ) : (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{color: 'black', fontSize: 16}}>
            No Orders Available
          </Text>
        </View>
      )}
    </View>
  );
};

export default Orders;

const styles = StyleSheet.create({
  mainParent: {
    borderBottomWidth: 1,
  },
  mainDivOrder: {
    display: 'flex',
    flexDirection: 'row',
    gap: 20,
    marginVertical: 20,
    marginHorizontal: 20,
  },
  totalText: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginHorizontal: 30,
    marginBottom: 10,
    alignItems: 'center',
  },
  textTotal: {
    fontSize: 16,
    fontWeight: '600',
    color: 'black',
  },
});
