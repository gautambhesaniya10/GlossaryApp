import {View, Text, ActivityIndicator, StyleSheet, Modal} from 'react-native';
import React from 'react';

const Loader = ({LoaderModalVisible, setLoaderModalVisible}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={LoaderModalVisible}
      onRequestClose={() => {
        setLoaderModalVisible(!LoaderModalVisible);
      }}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <ActivityIndicator size={60} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
  },
});

export default Loader;
