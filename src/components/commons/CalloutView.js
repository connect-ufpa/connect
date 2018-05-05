import React from 'react';
import { Text, ScrollView, Dimensions } from 'react-native';
import Styles from '../../Styles';

const { height, width } = Dimensions.get('window');

const CalloutView = ({ name, desc }) => {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#fff', height: height * 0.20, width: width * 0.85, padding: 10}}>
      <Text style={{ fontFamily: 'Ubuntu', fontSize: 12, color: '#777', textAlign: 'center', paddingBottom: 10, borderBottomWidth: 1, borderColor: '#777'}}>
        {name}
      </Text>
      <Text numberOfLines={5} style={{ fontFamily: 'Ubuntu', textAlign: 'center', fontSize: 11, color: '#777', marginTop:  10}}>
        {desc}
      </Text>
    </ScrollView>
  );
};

export { CalloutView };