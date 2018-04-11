import React, { Component } from 'react';
import { Spinner, Card, CardSection, Button, Texts, HeaderImage, Input } from './commons';
import { View, Text, UIManager, Dimensions, StyleSheet, ScrollView } from 'react-native';
import { saveLocais, verifyLocais, searchLocal } from '../actions';
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
      headerTitle: <View style={{ flex: 1, alignContent: 'center' }}><HeaderImage /></View>,
      headerStyle: {
        paddingLeft: 15,
        paddingRight: 15,
        height: 55
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
      headerLeft: 
        <View>
          <Icon
            name='bars'
            type='font-awesome'
            color='#2a4065'
            size={25}
            onPress={() => navigate('DrawerOpen')}
          />
        </View>
        ,
      headerRight: 
        <View>
          <Icon
            name='search'
            type='font-awesome'
            color='#2a4065'
            size={25}
            onPress={() => navigate('DrawerOpen')}
          />
      </View>
    }
  }

  componentDidMount() {
    this.props.verifyLocais();
  }

  salvarLocais() {
    saveLocais(locais);
  }

  renderLocais() {
    if (this.props.loading) {
      return (
        <View style={{
          flex: 1,
          zIndex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0
        }}>
          <Spinner size={60} color="#2A4065" />
        </View>
      );
    } else {
      return (
        <View style={{
          flex: 1,
          position: 'absolute', 
          zIndex: 1,
          width: '100%',
          padding: 20
        }}>
          <Input
            placeholder="Pesquise local desejado:"
            value={this.props.local}
            onChangeText={local => this.props.searchLocal(local, this.props.locais)}
            addStyle={{ elevation: 3, borderColor: "#2A4065", color: "#2A4065", fontSize: 14 }}
          />
        </View>
      );
    }
  }

  render() {
    return (
      <ScrollView style={Styles.scrollViewStyle}>
        <MapView
          style={Styles.mapLocalizacaoStyle}
          initialRegion={{
            latitude: -1.473987,
            longitude: -48.452267,
            latitudeDelta: 0.00121,
            longitudeDelta: 0.0099
          }}
        />
        {this.renderLocais()}

      </ScrollView>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    local: state.localizacao.local,
    locais: state.localizacao.locais,
    statusMessage: state.localizacao.statusMessage,
    loading: state.localizacao.loading
  };
};

export default connect(mapStateToProps, {
  verifyLocais,
  searchLocal
})(Localizacao);

/* <CardSection>
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
    onPress={() => {this.props.verifyLocais()}}
  />
</CardSection>
<CardSection>
  <Texts style='smallBlue' text={this.props.statusMessage} />
</CardSection> */