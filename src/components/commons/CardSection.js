import React from 'react';
import { View } from 'react-native';
import Styles from '../../Styles';

const CardSection = ({ children, styleSection }) => {
  return (
    <View style={[Styles.containerStyle, styleSection]}>
      {children}
    </View>
  );
};
export { CardSection };