import React, { Component } from 'react';
import { Dimensions, Text, ScrollView, View, Alert } from 'react-native';
import { Card, CardSection, Texts } from '../components/commons';

class MeuPerfil extends Component {

  static navigationOptions = ({ navigation }) => {
    const { state, navigate, goBack } = navigation;
    return {
      title: 'Meu Perfil',
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: "#F4394A",
        height: 60
      },
      headerTitleStyle: {
        alignSelf: 'center',
      },
      drawerLabel: 'Meu Perfil',
    }
  };
     

  render() {
    return (
      <Card>
        <CardSection>
          <Texts sizeText="large" text="Meu perfil"/>
        </CardSection>
      </Card>
    )
  }
}
export default MeuPerfil; 