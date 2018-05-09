import React from 'react';
import { Text, View, Dimensions } from 'react-native';
import Styles from '../../Styles';

const { height, width } = Dimensions.get('window');

const CalloutView = ({ name, desc }) => {
  return (
    <View style={{ flex: 1, elevation: 8, backgroundColor: '#FFF', height: height * 0.20, width: width * 0.875, padding: 15, borderRadius: 5 }}>
      <Text style={{ fontFamily: 'Ubuntu', fontSize: 12, color: '#2D2D2D', textAlign: 'center', paddingBottom: 10, borderBottomWidth: 1, borderColor: '#777'}}>
        {name}
      </Text>
      <Text numberOfLines={5} style={{ fontFamily: 'Ubuntu', textAlign: 'center', fontSize: 11, color: '#777', marginTop:  10}}>
        {desc}
      </Text>
    </View>
  );
};

export { CalloutView };