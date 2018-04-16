import React from 'react';
import { View, Image, Dimensions, StyleSheet } from 'react-native';

const winWidth = Dimensions.get('window').width;
const winHeight = Dimensions.get('window').height;

const HeaderImage = (props) => {
  return (
    <Image
      style={{ width: 35, height: 35, resizeMode: 'contain', alignSelf: 'center' }}
      source={require('../../../assets/img/icon.png')}
    />
  );
};

export { HeaderImage };