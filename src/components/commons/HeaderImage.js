import React from 'react';
import { Image, Dimensions, StyleSheet } from 'react-native';

const winWidth = Dimensions.get('window').width;
const winHeight = Dimensions.get('window').height;

const HeaderImage = (props) => {
  return (
    <Image
      style={{ width: 50, height: 50 }}
      resizeMode={'center'}
      source={require('../../../assets/img/icon.png')}
    />
  );
};

export { HeaderImage };