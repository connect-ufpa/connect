import React from 'react';
import { View, StatusBar } from 'react-native';
import Styles from '../../Styles';

const Card = ({ children, addStyle }) => {
  return (
    <View style={[Styles.cardStyle, addStyle]}>
      <StatusBar
        backgroundColor="#2A4065"
        barStyle="light-content"
      />
      {children}
    </View>
  );
};

export { Card };