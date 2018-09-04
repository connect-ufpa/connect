import React from 'react';
import { Icon } from 'react-native-elements';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ContactButton = ({ iconName, iconType, onClick }) => {
  return (
    <TouchableOpacity onPress={onClick} style={styleContactButton.card}>
      <Icon 
        size={25}
        name={iconName}
        type={iconType}  
        color={"#2a4065"}
      />
    </TouchableOpacity>
  );
};

const styleContactButton = StyleSheet.create({
  card: {
    margin: 5,
    width: 60,
    height: 60,
    elevation: 4,
    borderRadius: 50,
    justifyContent: 'center',
    backgroundColor: 'white',
  }
});

export { ContactButton };