import React, { Component } from 'react';
import { View, Text, Dimensions, StyleSheet, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import { saveLocais, verifyLocais, searchLocal, markLocal, searchLocalizacaoUsuario } from '../actions';
import { Spinner, HeaderImage, Input } from './commons';
import MapView, { Marker, Circle  } from 'react-native-maps';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import _ from 'lodash';
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
    this.props.searchLocalizacaoUsuario();
  }

  salvarLocais() {
    saveLocais(locais);
  }

  renderInputPesquisarLocais() {
    if (this.props.loading) {
      return (
        <View style={styles.containerLoading}>
          <Spinner size={60} color="#2A4065" />
        </View>
      );
    } else {
      return (
        <View style={styles.containerPesquisar}>
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

  renderListLocaisAchados() {
    if(this.props.locaisAchados.length !== 0) {
      return(
        <View style={styles.containerLista}>
          <FlatList
            data={this.props.locaisAchados}
            style={{ borderWidth: 2,  borderColor: "#2A4065"}}
            renderItem={({item}) =>
            <TouchableOpacity  onPress={() => { this.props.markLocal(item) }}> 
              <Text style={{ backgroundColor: 'white', color: "#777", fontSize: 12 , padding: 10 }}>
                {item.nome}
              </Text>
            </TouchableOpacity >}
          />
        </View>
      );
    }
  }

  renderMarcador() {
    if(_.isEmpty(this.props.localMarcado)) {
      return (
        <Marker 
          coordinate={{
            latitude: -1.473987,
            longitude: -48.452267
          }}
          title={'Universidade Federal do Pará'}
        />
      );
    } else {
      return (
        <Marker 
          coordinate={{
            latitude: this.props.localMarcado.coords.lat,
            longitude: this.props.localMarcado.coords.lng
          }}
          title={this.props.localMarcado.nome}
        />
      );
    }
  }

  renderLocalizacaoUsuario() {
    if(_.isEmpty(this.props.localizacaoUsuario)) {
      console.log("Verificando localização do usuário...");
    } else {
      console.log(this.props.localizacaoUsuario.coords);
      return (
        <Circle
          center={{
            latitude: this.props.localizacaoUsuario.coords.latitude,
            longitude: this.props.localizacaoUsuario.coords.longitude
          }}  
          radius={3}
          zIndex={5}
          strokeColor={'#2A4065'}
          fillColor={'#2A4065'}
        />
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
            latitudeDelta: 0.004,
            longitudeDelta: 0.004
          }}
        >
        {this.renderMarcador()}
        {this.renderLocalizacaoUsuario()}
        </MapView>
        {this.renderInputPesquisarLocais()}
        {this.renderListLocaisAchados()}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  containerLoading: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    flex: 1,
    zIndex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
  },
  containerPesquisar: {
    flex: 1,
    zIndex: 1,
    padding: 20,
    width: '100%',
    position: 'absolute', 
  },
  containerLista: {
    flex: 1,
    zIndex: 1,
    position: 'absolute',
    marginTop: 70,
    paddingLeft: 20,
    paddingRight: 20,
    elevation: 8,
    width: '100%'
  }
});

const mapStateToProps = (state) => {
  return {
    localizacaoUsuario: state.localizacao.localizacaoUsuario,
    locais: state.localizacao.locais,
    locaisAchados: state.localizacao.locaisAchados,
    localPesquisado: state.localizacao.local,
    localMarcado: state.localizacao.localMarcado,
    loading: state.localizacao.loading,
  };
};

export default connect(mapStateToProps, {
  verifyLocais,
  searchLocal,
  markLocal,
  searchLocalizacaoUsuario
})(Localizacao);
