import React from 'react';
import { View } from 'react-native';
import Spinner from './Spinner';

export const Loading = () => {
  return (
    <View style={{
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      flex: 1,
      zIndex: 10,
      position: 'absolute',
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'center',
    }}>
      <View style={{
        height: 100,
        width: 100,
        backgroundColor: '#FFF',
        borderRadius: 5,
        elevation: 8,
      }}>
        <Spinner size={60} color="#2A4065" />
      </View>
    </View>
  );
};
