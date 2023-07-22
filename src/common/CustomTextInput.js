import {View, Text, TextInput, StyleSheet, Image} from 'react-native';
import React from 'react';

const CustomTextInput = ({
  value,
  onChangeText,
  placeholder,
  type,
  icon,
  keyboardType,
}) => {
  return (
    <>
      <View style={style.inputMainDiv}>
        <Image source={icon} style={{width: 24, height: 24}} />
        <TextInput
          style={style.textInput}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          secureTextEntry={type === 'password' ? true : false}
          keyboardType={keyboardType}
        />
      </View>
    </>
  );
};

const style = StyleSheet.create({
  inputMainDiv: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 0.5,
    marginVertical: 15,
    paddingLeft: 20,
  },
  textInput: {
    paddingLeft: 10,
    fontSize: 16,
  },
});

export default CustomTextInput;
