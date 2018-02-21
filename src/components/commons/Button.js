import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import Styles from '../../Styles';

const Button = ({ onPress, text, styles }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles}>
      <Text style={Styles.btnTextStyle}>{text}</Text>
    </TouchableOpacity>
  );
};

export { Button };