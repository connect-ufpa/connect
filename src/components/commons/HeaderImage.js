import React from 'react';
import { Image } from 'react-native';

const HeaderImage = (props) => {
  return (
    <Image
      resizeMode="contain"
      source={require('../../../assets/img/icon.png')}
    />
  );
};

export { HeaderImage };