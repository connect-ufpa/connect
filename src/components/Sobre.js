import React, { Component } from 'react';
import Styles from '../Styles';
import { Icon } from 'react-native-elements';
import { HeaderImage, SobreButton } from '../components/commons';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';

const logo = require('../../assets/img/logo.png');

class Sobre extends Component {
  static navigationOptions = ({ navigation }) => {
    const { navigate } = navigation;
    return {
      headerTitle: <HeaderImage />,
      headerStyle: Styles.navHeader,
      drawerLabel: 'Sobre',
      drawerIcon: () => (
        <Icon size={24} name="heart" color="#2a4065" type="font-awesome" />
      ),
      headerLeft: (
        <TouchableOpacity
          style={Styles.navIconCard}
          onPress={() => navigate('DrawerOpen')}
        >
          <Icon type="font-awesome" name="bars" color="#2a4065" size={25} />
        </TouchableOpacity>
      ),
      headerRight: <Icon name="settings" color="#777" size={25} />,
    };
  };

  render() {
    const {
      containerView,
      containerTitle,
      containerImage,
      textTitleImage,
      textSubtitleImage,
      containerSectionOne,
      containerSectionThree,
    } = styleSobre;

    return (
      <View style={containerView}>
        <View style={containerSectionOne}>
          <Text style={containerTitle}>Sobre</Text>
        </View>
        <View style={containerImage}>
          <Image source={logo} style={{ width: 125, height: 125 }} />
          <Text style={textTitleImage}>Connect UFPa © Versão 1.0 [0001]</Text>
          <Text style={textSubtitleImage}>Todos os direitos reservados</Text>
        </View>
        <View style={containerSectionThree}>
          <SobreButton 
            text={"Equipe de desenvolvimento"}
          />
          <SobreButton 
            text={"Termo e condições"}
          />
          <SobreButton 
            text={"Política de privacidade"}
          />
        </View>
      </View>
    );
  }
}

const styleSobre = StyleSheet.create({
  containerView: {
    height: '100%',
  },
  containerSectionOne: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
  },
  containerSectionThree: {
    flex: 3,
    paddingLeft: 20,
    paddingRight: 20,
  },
  containerImage: {
    flex: 3,
    padding: 20,
    alignItems: 'center',
    alignContent: 'center',
  },
  containerTitle: {
    fontSize: 16,
    paddingTop: 20,
    paddingBottom: 10,
    color: '#2A4065',
    textAlign: 'left',
    fontFamily: 'Ubuntu-Medium',
  },
  textTitleImage: {
    fontSize: 12,
    marginTop: 25,
    color: '#2A4065',
    textAlign: 'center',
    fontFamily: 'Ubuntu-Regular',
  },
  textSubtitleImage: {
    marginTop: 5,
    fontSize: 10,
    color: '#2A4065',
    textAlign: 'center',
    fontFamily: 'Ubuntu-Regular',
  },
});

export default Sobre;
