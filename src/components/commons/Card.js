import React from 'react';
import { View } from 'react-native';
import Styles from '../../Styles';

const Card = ({ children, addStyle }) => {
  return (
    <View style={[Styles.cardStyle, addStyle]}>
      {children}
    </View>
  );
};

export { Card };