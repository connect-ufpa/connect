import React, { Component } from 'react';
import { View, Text } from 'react-native';


class EditarPerfil extends Component {
  static navigationOptions = {
    title: 'Editar perfil',
    headerTintColor: '#2A4065',
    headerTitleStyle: {
      fontFamily: 'Ubuntu-Medium',
      fontWeight: '200',
      fontSize: 18,
    },
    headerStyle: {
      elevation: 5,
    },
  };
  
  render() {
    return (
      <View>
        <Text>Editar Perfil</Text>
      </View >
    );
  }
}

export default EditarPerfil;

