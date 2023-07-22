import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';

const CustomButton = ({bgColor, title, onPress, textColor}) => {
  const style = StyleSheet.create({
    main: {
      backgroundColor: bgColor,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
      marginTop: 25,
    },
    button: {
      paddingVertical: 14,
      fontSize: 18,
      fontWeight: '600',
    },
  });
  return (
    <TouchableOpacity style={style.main} onPress={() => onPress()}>
      <Text style={[style.button, {color: textColor}]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
