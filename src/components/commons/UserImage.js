import React from 'react';
import { Image, Dimensions, StyleSheet } from 'react-native';

const winWidth = Dimensions.get('window').width;
const winHeight = Dimensions.get('window').height;

const UserImage = (props) => {
  return (
    <Image
      style={{ width: 50, height: 50 }}
      resizeMode={'center'}
      source={require('../../../assets/img/user_male.png')}
    />
  );
};

export { UserImage };