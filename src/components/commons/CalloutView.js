import React from 'react';
import { Text, View, Dimensions } from 'react-native';
import Styles from '../../Styles';

const { height, width } = Dimensions.get('window');

const CalloutView = ({ name, desc }) => {
  return (
    <View style={{ flex: 1, backgroundColor: '#fff', height: height * 0.25, width: width * 0.85, padding: 10 }}>
      <Text style={{ fontFamily: 'Ubuntu', fontSize: 12, color: '#777', textAlign: 'center'}}>{name}</Text>
      <Text style={{ fontFamily: 'Ubuntu', fontSize: 10, color: '#777', marginTop: 10}}>
        Descrição: {desc}
      </Text>
    </View>
  );
};

export { CalloutView };