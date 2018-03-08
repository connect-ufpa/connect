import React, { Component } from 'react';
import { Spinner, Card, CardSection, Button, Texts, HeaderImage } from './commons';
import { View, Text, UIManager, Dimensions, StyleSheet } from 'react-native';
import { firebaseAuth } from '../config/Config';
import { Icon } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import MapView from 'react-native-maps';
import Styles from '../Styles';
import local from '../data/locais.json';

const { height, width } = Dimensions.get('window');

class Localizacao extends Component {
  static navigationOptions = ({ navigation }) => {  
    console.log(local);
  
    const { navigate } = navigation;
    return {
      title: <HeaderImage />,
      headerStyle: {
        paddingLeft: 15,
        paddingRight: 15,
        height: 55
      },
      headerTitleStyle: {
        alignSelf: 'center',
      },
      drawerLabel: 'Localização',
      drawerIcon: ({ tintColor }) => (
        <Icon
          type='font-awesome'
          name='map-marker'
          color='#2a4065'
          size={25}
        />
      ),
      headerLeft: <Icon
        name='bars'
        type='font-awesome'
        color='#2a4065'
        size={25}
        onPress={() => navigate('DrawerOpen')}
      />,
      headerRight: <Icon
        name='search'
        type='font-awesome'
        color='#2a4065'
        size={25}
        onPress={() => navigate('DrawerOpen')}
      />,
    }
  }

  render() {
    return (
      <MapView
        style={styles.container}
        initialRegion={{
          latitude: 39.7392,
          longitude: -104.9903,
          latitudeDelta: 0.00121,
          longitudeDelta: 0.0099
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '50%',
    width: '100%',
  }
}
);

export default Localizacao;
