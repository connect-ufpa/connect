import React, { Component } from 'react';
import { Spinner, Card, CardSection, Button, Texts, HeaderImage } from './commons';
import { View, Text, UIManager, Dimensions, StyleSheet } from 'react-native';
import { saveLocal, verifyLocal } from '../actions';
import { firebaseAuth } from '../config/Config';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import MapView from 'react-native-maps';
import Styles from '../Styles';
import locais from '../data/locais.json';

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
    saveLocal(locais);
  }

  renderLocais() {
    return(
      <View>

      </View>
    );
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
            text="Salvar locais"
            styles={Styles.btnConfirm}
            onPress={() => {this.salvarLocais()}}
          />
        </CardSection>
        <CardSection>
          <Button
            text="Verificar locais"
            styles={Styles.btnConfirm}
            onPress={locais => {this.props.verifyLocal(locais)}}
          />
        </CardSection>
        <CardSection>
          <Texts style='smallBlue' text={this.props.statusMessage} />
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

const mapStateToProps = (state) => {
  return {
    locais: state.localizacao.locais,
    statusMessage: state.localizacao.statusMessage
  };
};

export default connect(mapStateToProps, {
  verifyLocal
})(Localizacao);

