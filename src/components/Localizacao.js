import React, { Component } from 'react';
import { Spinner, Card, CardSection, Button, Texts, HeaderImage } from './commons';
import { View, Text, UIManager, Dimensions, StyleSheet, ScrollView } from 'react-native';
import { saveLocal, verifyLocais } from '../actions';
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
    saveLocal(locais);
  }

  renderLocais() {
    console.log("Locais: ", this.props.locais);
   
    if (this.props.loading) {
      return <Spinner size="large" color="#2A4065" />;
    } else {

    }
  }

  render() {
    return (
      <ScrollView style={Styles.scrollViewStyle}>
        <MapView
          style={Styles.mapStyle}
          initialRegion={{
            latitude: -1.473987,
            longitude: -48.452267,
            latitudeDelta: 0.00121,
            longitudeDelta: 0.0099
          }}
        />
        {/* <CardSection>
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
        </CardSection> */}
        <CardSection>
          <Texts style='smallBlue' text={this.props.statusMessage} />
        </CardSection>
        <CardSection>
          {this.renderLocais()}
        </CardSection>
      </ScrollView>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    locais: state.localizacao.locais,
    statusMessage: state.localizacao.statusMessage,
    loading: state.localizacao.loading
  };
};

export default connect(mapStateToProps, {
  verifyLocais
})(Localizacao);

