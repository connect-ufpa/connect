import React from 'react';
import { Text, View, Dimensions } from 'react-native';
import Styles from '../../Styles';

const CalloutView = ({ onPress, text, styles }) => {
  return (
    <View style={{ flex: 1, backgroundColor: '#fff'}}>
      <Text>Callout View</Text>
    </View>
  );
};

export { CalloutView };