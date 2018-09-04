import React from 'react';
import { View, Image } from 'react-native';
 
const SOURCE = require('../../../assets/img/icon.png');

const HeaderImage = () => {
  return (
    <View style={{ flex: 1, alignContent: 'center' }}>
      <Image
        style={{ width: 35, height: 35, resizeMode: 'contain', alignSelf: 'center' }}
        source={SOURCE}
      />
    </View>
  );
};

export { HeaderImage };
