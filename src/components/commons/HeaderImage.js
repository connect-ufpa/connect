import React from 'react';
import { Image } from 'react-native';
 
const SOURCE = require('../../../assets/img/icon.png');

const HeaderImage = () => {
  return (
    <Image
      style={{ width: 35, height: 35, resizeMode: 'contain', alignSelf: 'center' }}
      source={SOURCE}
    />
  );
};

export { HeaderImage };
