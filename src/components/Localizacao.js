import React, { Component } from 'react';
import { Spinner, Card, CardSection, Button, Texts, HeaderImage } from './commons';
import { View, Text, UIManager, Dimensions, StyleSheet } from 'react-native';
import { firebaseAuth } from '../config/Config';
import { Icon } from 'react-native-elements';
import { saveLocal } from '../actions';
import LinearGradient from 'react-native-linear-gradient';
import MapView from 'react-native-maps';
import Styles from '../Styles';
import local from '../data/locais.json';

const { height, width } = Dimensions.get('window');

class Localizacao extends Component {
  static navigationOptions = ({ navigation }) => {    
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

  salvarLocais() {
    saveLocal(local);
  }

  render() {
    return (
      <View>
        <MapView
          style={styles.container}
          initialRegion={{
            latitude: -1.473987,
            longitude: -48.452267,
            latitudeDelta: 0.00121,
            longitudeDelta: 0.0099
          }}
        />
        <CardSection>
          <Button
            text="Verificar locais"
            styles={Styles.btnConfirm}
            onPress={() => {this.salvarLocais()}}
          />
        </CardSection>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '65%',
    width: '100%',
  }
}
);

export default Localizacao;
