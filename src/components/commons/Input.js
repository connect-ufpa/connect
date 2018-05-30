import React from 'react';
import { TextInput, View, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import Styles from '../../Styles';

const Input = ({ value, onChangeText, placeholder, secureTextEntry, editable, addStyle, keyboardType, iconName }) => {

  return (
      <View style={{
        flex: 1,
        padding: 5,
        elevation: 2,
        borderRadius: 5,
        borderColor: '#FFF',
        flexDirection: 'row',
        backgroundColor: '#FFF',
      }}>
        <TextInput
          value={value}
          editable={editable}
          autoCorrect={false}
          placeholder={placeholder}
          onChangeText={onChangeText}
          keyboardType={keyboardType}
          underlineColorAndroid='transparent'
          secureTextEntry={secureTextEntry}
          style={[Styles.inputStyle, addStyle]}
        />
        <View
          style={{
            flex: 1,
            padding: 5,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#FFF',
          }}
        >
          <Icon 
            name={iconName} 
            color="#777" 
            size={25} 
          />
        </View>
      </View>
  );
};

export { Input };

