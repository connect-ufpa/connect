import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import Spinner from './Spinner';

const Loading = () => {
  return (
    <View
      style={{
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        flex: 1,
        zIndex: 10,
        elevation: 8,
        position: 'absolute',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
      }}
    >
      <View
        style={{
          width: 100,
          height: 100,
          elevation: 8,
          marginTop: 35,
          borderRadius: 5,
          backgroundColor: '#FFF'
        }}
      >
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <ActivityIndicator size={'large'} color={'#2A4065'} />
        </View>
      </View>
    </View>
  );
};

export { Loading };
