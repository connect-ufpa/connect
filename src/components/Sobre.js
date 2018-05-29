import React, { Component } from 'react';
import { Dimensions, Text, ScrollView, View, Alert, Image, TouchableOpacity } from 'react-native';
import { Card, CardSection, Texts, HeaderImage } from '../components/commons';
import { Icon } from 'react-native-elements';

const logo = require('../../assets/img/logo.png');

class Sobre extends Component {
  static navigationOptions = ({ navigation }) => {
    const { navigate } = navigation;
    return {
      headerTitle: (
        <View style={{ flex: 1, alignContent: 'center' }}>
          <HeaderImage />
        </View>
      ),
      headerStyle: {
        paddingLeft: 15,
        paddingRight: 15,
        height: 55,
      },
      headerTitleStyle: {
        alignSelf: 'center',
      },
      drawerLabel: 'Sobre',
      drawerIcon: ({ tintColor }) => (
        <Icon type="font-awesome" name="heart" color="#2a4065" size={24} />
      ),
      headerLeft: (
        <TouchableOpacity style={{ flex: 1, paddingTop: 20, paddingBottom: 20, paddingRight: 20 }} onPress={() => navigate('DrawerOpen')}>
          <Icon
            type="font-awesome"
            name="bars"
            color="#2a4065"
            size={25}
            
          />
        </TouchableOpacity>
      ),
      headerRight: (
        <Icon
          name="settings"
          color="#2a4065"
          size={25}
          onPress={() => navigate('DrawerOpen')}
        />
      ),
    };
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, padding: 20 }}>
          <Text
            style={{
              color: '#2A4065',
              fontFamily: 'Ubuntu-Bold',
              fontSize: 18,
              textAlign: 'left',
            }}
          >
            Sobre
          </Text>
        </View>
        <View
          style={{
            flex: 3,
            padding: 20,
            alignItems: 'center',
            alignContent: 'center',
          }}
        >
          <Image source={logo} style={{ width: 125, height: 125 }} />
          <Text
            style={{
              marginTop: 25,
              color: '#2A4065',
              fontFamily: 'Ubuntu-Regular',
              fontSize: 12,
              textAlign: 'center',
            }}
          >
            Connect UFPa © Versão 1.0 [0001]
          </Text>
          <Text
            style={{
              marginTop: 5,
              color: '#2A4065',
              fontFamily: 'Ubuntu-Regular',
              fontSize: 10,
              textAlign: 'center',
            }}
          >
            Todos os direitos reservados
          </Text>
        </View>
        <View
          style={{
            flex: 3,
            marginTop: 10,
            marginBottom: 20,
            padding: 20,
            alignItems: 'center',
            alignContent: 'center',
          }}
        >
          <View
            style={{
              justifyContent: 'center',
              marginTop: 5,
              height: 55,
              width: '100%',
              borderRadius: 5,
              elevation: 2,
              backgroundColor: 'white',
            }}
          >
            <Text
              style={{
                paddingLeft: 10,
                color: '#2A4065',
                fontFamily: 'Ubuntu-Regular',
                fontSize: 14,
                textAlign: 'left',
              }}
            >
              Equipe de desenvolvimento
            </Text>
          </View>
          <View
            style={{
              justifyContent: 'center',
              marginTop: 5,
              height: 55,
              width: '100%',
              borderRadius: 5,
              elevation: 2,
              backgroundColor: 'white',
            }}
          >
            <Text
              style={{
                paddingLeft: 10,
                color: '#2A4065',
                fontFamily: 'Ubuntu-Regular',
                fontSize: 14,
                textAlign: 'left',
              }}
            >
              Termo e condições
            </Text>
          </View>
          <View
            style={{
              justifyContent: 'center',
              marginTop: 5,
              height: 55,
              width: '100%',
              borderRadius: 5,
              elevation: 2,
              backgroundColor: 'white',
            }}
          >
            <Text
              style={{
                paddingLeft: 10,
                color: '#2A4065',
                fontFamily: 'Ubuntu-Regular',
                fontSize: 14,
                textAlign: 'left',
              }}
            >
              Política de privacidade
            </Text>
          </View>
        </View>
      </View>
    );
  }
}
export default Sobre;
