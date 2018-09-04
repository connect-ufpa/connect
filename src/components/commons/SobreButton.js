import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const SobreButton = ({ text, onClick }) => {
  return (
    <TouchableOpacity onPress={onClick} style={styleSobreButton.card}>
      <Text style={styleSobreButton.textCard}>{text}</Text>
    </TouchableOpacity>
  );
};

const styleSobreButton = StyleSheet.create({
  card: {    
    height: 55,
    elevation: 2,
    marginTop: 5,
    borderRadius: 5,
    width: '100%',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  textCard: {
    fontSize: 14,
    paddingLeft: 10,
    color: '#2A4065',
    textAlign: 'left',
    fontFamily: 'Ubuntu-Regular',
  }
});

export { SobreButton };