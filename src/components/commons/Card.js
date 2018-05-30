import React from 'react';
import { View, StatusBar } from 'react-native';
import Styles from '../../Styles';

const Card = ({ children, addStyle, statusBarColor }) => {
  return (
    <View style={[Styles.cardStyle, addStyle]}>
      <StatusBar
        backgroundColor={statusBarColor}
        barStyle="light-content"
      />
      {children}
    </View>
  );
};

export { Card };