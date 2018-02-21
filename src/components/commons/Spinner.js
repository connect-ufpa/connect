import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import Styles from '../../Styles';

const Spinner = ({ size, color }) => {
  return (
    <View style={Styles.spinnerStyle}>
      <ActivityIndicator size={size || 'large'} color={color} />
    </View>
  );
};

export { Spinner };

