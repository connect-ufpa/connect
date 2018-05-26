import React from 'react';
import { TextInput } from 'react-native';
import Styles from '../../Styles';

const Input = ({ value, onChangeText, placeholder, secureTextEntry, editable, addStyle, keyboardType }) => {
  
  return (
      <TextInput
        keyboardType={keyboardType}
        style={[Styles.inputStyle, addStyle]}
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        autoCorrect={false}
        value={value}
        editable={editable}
        onChangeText={onChangeText}
        underlineColorAndroid='transparent'
      />
  );
};

export { Input };
