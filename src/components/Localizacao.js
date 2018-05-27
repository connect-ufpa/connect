import React, { Component } from 'react';
<<<<<<< HEAD
import { View, Text, Dimensions, StyleSheet, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import { saveLocais, verifyLocais, searchLocal, markLocal, searchLocalizacaoUsuario } from '../actions';
import { StackNavigator } from 'react-navigation';
import { Spinner, HeaderImage, Input } from './commons';
import MapView, { Marker, Circle  } from 'react-native-maps';
=======
import {
  Text,
  View,
  FlatList,
  Dimensions,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {
  markLocal,
  saveLocais,
  createRota,
  searchLocal,
  verifyLocais,
  searchLocalizacaoUsuario,
} from '../actions';
import {
  Map,
  Input,
  Spinner, 
  CalloutView,
  HeaderImage,
} from './commons';
import 
  MapView, { 
  Marker,
  Circle,
  Callout 
} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
>>>>>>> master
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import Styles from '../Styles';
import locais from '../data/locais.json';
import _ from 'lodash';

const { height, width } = Dimensions.get('window');
const initialRegion = { latitude: -1.473987, longitude: -48.452267,  latitudeDelta: 0.004,  longitudeDelta: 0.004 };


class Localizacao extends Component {
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
      drawerLabel: 'Localização',
      drawerIcon: ({ tintColor }) => (
        <Icon type="font-awesome" name="map-marker" color="#2a4065" size={25} />
      ),
      headerLeft: (
        <View>
          <Icon
            name="bars"
            type="font-awesome"
            color="#2a4065"
            size={25}
            onPress={() => navigate('DrawerOpen')}
          />
<<<<<<< HEAD
        </View>,
      headerRight: 
=======
        </View>
      ),
      headerRight: (
>>>>>>> master
        <View>
          <Icon
            name="search"
            type="font-awesome"
            color="#2a4065"
            size={25}
            onPress={() => navigate('DrawerOpen')}
          />
        </View>
      ),
    };
  };

  componentDidMount() {
    this.props.verifyLocais();
    this.props.searchLocalizacaoUsuario();
  }

  renderMarcadorLocalPesquisado() {
    if (_.isEmpty(this.props.localMarcado)) {
      console.log('Nenhum local foi pesquisado até o momento...');
    } else {
      const map = this.refs.Map;
      map.animateToCoordinate(coordinate={
        latitude: this.props.localMarcado.coords.lat,
        longitude: this.props.localMarcado.coords.lng,
        }
      );

      return (
        <Marker
          coordinate={{
            latitude: this.props.localMarcado.coords.lat,
            longitude: this.props.localMarcado.coords.lng,
          }}
          title={this.props.localMarcado.nome}
          image={require('../../assets/img/pin.png')}
        />
      );
    }
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
            value={this.props.local}
            addStyle={styles.inputSearch}
            placeholder="Pesquise local desejado:"
            onChangeText={local => this.props.searchLocal(local, this.props.locais)}
          />
        </View>
      );
    }
  }

  renderLocalizacaoUsuario() {
    if (_.isEmpty(this.props.localizacaoUsuario)) {
      console.log('Verificando localização do usuário...');
    } else {
<<<<<<< HEAD
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
=======
      console.log(this.props.localizacaoUsuario.coords);
      // return (
      //   <Circle
      //     center={{
      //       latitude: this.props.localizacaoUsuario.coords.latitude,
      //       longitude: this.props.localizacaoUsuario.coords.longitude,
      //     }}
      //     radius={3}
      //     zIndex={5}
      //     strokeColor={'#2A4065'}
      //     fillColor={'#2A4065'}
      //   />
      // );
>>>>>>> master
    }
  }

  renderListaLocaisAchados() {
    if (this.props.locaisAchados.length !== 0) {
      return (
        <View style={styles.containerLista}>
          <FlatList
            data={this.props.locaisAchados}
            style={{
              borderBottomLeftRadius: 6,
              borderBottomRightRadius: 6,
              borderWidth: 2,
              borderColor: '#2A4065',
            }}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => {
                  this.props.markLocal(item);
                }}
              >
                <Text
                  style={{
                    backgroundColor: 'white',
                    color: '#777',
                    fontSize: 12,
                    padding: 12.5,
                  }}
                >
                  {item.nome}
                </Text>
              </TouchableOpacity>
            )}
          />
        </View>
      );
    }
  }

  renderMarcadoresLocais() {
    if (this.props.loading) {
      console.log('Pesquisando locais no banco de dados...');
    } else {
      if (_.isEmpty(this.props.localMarcado)) {
        return this.props.locais.map(marker => (
          <Marker
            key={marker.nome}
            coordinate={{
              latitude: marker.coords.lat,
              longitude: marker.coords.lng,
            }}
            title={marker.nome}
            image={require('../../assets/img/pin.png')}
          > 
            <Callout>
              <CalloutView
                name={marker.nome}
                desc={null}
              />
            </Callout>
          </Marker>
        ));
      } else {
        console.log('Usuário pesquisou um local específico...');
      }
    }
  }

  renderFiltroButtons() {
    return(
      <View style={{ flex: 1, bottom: 0, marginBottom: 100, marginRight: 5, right: 0, zIndex: 1, position: 'absolute' }}>
        <Text style={{ textAlign: 'center', fontFamily: 'Ubuntu', fontSize: 8, color: '#777' }}>
          Filtros
        </Text>
        <View
          style={{
            height: 30,
            width: 30,
            margin: 5,
            borderRadius: 20,
            backgroundColor: '#2A4065',
            elevation: 8,
            alignContent: 'center',
            justifyContent: 'center',
          }}
        >
          <Icon
            name="place"
            color="#FFF"
            size={15}
          />
        </View>
        <View
          style={{
            height: 30,
            width: 30,
            margin: 5,
            borderRadius: 20,
            backgroundColor: '#2BA3DA',
            elevation: 8,
            alignContent: 'center',
            justifyContent: 'center',
          }}
        >
          <Icon
            type="font-awesome"
            name="flask"
            color="#FFF"
            size={15}
          />
        </View>
        <View
          style={{
            height: 30,
            width: 30,
            margin: 5,
            borderRadius: 20,
            backgroundColor: '#2BA3DA',
            elevation: 8,
            alignContent: 'center',
            justifyContent: 'center',
          }}
        >
          <Icon
            name="event-seat"
            color="#FFF"
            size={15}
          />
        </View>
        <View
          style={{
            height: 30,
            width: 30,
            margin: 5,
            borderRadius: 20,
            backgroundColor: '#2BA3DA',
            elevation: 8,
            alignContent: 'center',
            justifyContent: 'center',
          }}
        >
          <Icon
            name="local-dining"
            color="#FFF"
            size={15}
          />
        </View>
        <View
          style={{
            height: 30,
            width: 30,
            margin: 5,
            borderRadius: 20,
            backgroundColor: '#2BA3DA',
            elevation: 8,
            alignContent: 'center',
            justifyContent: 'center',
          }}
        >
          <Icon
            name="local-library"
            color="#FFF"
            size={15}
          />
        </View>
        <View
          style={{
            height: 30,
            width: 30,
            margin: 5,
            borderRadius: 20,
            backgroundColor: '#CC2820',
            elevation: 8,
            alignContent: 'center',
            justifyContent: 'center',
          }}
        >
          <Icon
            name="clear"
            color="#FFF"
            size={15}
          />
        </View>
      </View>
    )
  }

  renderButtons() {
    return (
      <View style={styles.containerButtons}>
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
          <TouchableOpacity onPress={() => {this.props.createRota(this.props.localMarcado)}}>
            <View
              style={{
                height: 60,
                width: 60,
                margin: 15,
                backgroundColor: '#2A4065',
                elevation: 8,
                borderRadius: 150,
                alignContent: 'center',
                justifyContent: 'center',
              }}
            >
              <Icon 
                name="navigation" 
                color="#FFF" 
                size={25} 
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={{
                height: 60,
                width: 60,
                margin: 15,
                backgroundColor: '#2BA3DA',
                elevation: 8,
                borderRadius: 150,
                alignContent: 'center',
                justifyContent: 'center',
              }}
            >
              <Icon
                type="font-awesome"
                name="eye"
                color="#FFF"
                size={25}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={{
                height: 60,
                width: 60,
                margin: 15,
                backgroundColor: '#CC2820',
                elevation: 8,
                borderRadius: 150,
                alignContent: 'center',
                justifyContent: 'center',
              }}
            >
              <Icon
                type="font-awesome"
                name="comments"
                color="#FFF"
                size={25}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  renderRota() {
    if (!this.props.creatingRoute) {
      console.log("Nenhum local foi clicado para se gerar rota...");
    }
    if (this.props.erroCreatingRoute) {
      console.log("Pesquise um local antes de gerar rota...");
    }
    if(!this.props.erroCreatingRoute && this.props.creatingRoute) {
      const origin = { latitude: -1.473987, longitude: -48.452267 };
      const destination= { latitude: this.props.localMarcado.coords.lat, longitude: this.props.localMarcado.coords.lng };
      return (
        <MapViewDirections          
          origin={this.props.localizacaoUsuario.coords}
          destination={destination}
          mode={'walking'}
          strokeWidth={5}
          strokeColor={'#2A4065'}
          apikey={'AIzaSyDs39LTHBTeq5xQoR6HJDkFtoLuWARdhCY'}
        />
      );
    }
  }

  render() {
    return (
      <ScrollView style={Styles.scrollViewStyle}>
        <MapView
          ref={"Map"}
          showsUserLocation={true}
          style={Styles.mapLocalizacaoStyle}
          initialRegion={initialRegion}
        >
          {this.renderMarcadorLocalPesquisado()}
          {this.renderMarcadoresLocais()}
          {this.renderRota()}
        </MapView>
        {this.renderInputPesquisarLocais()}
        {this.renderListaLocaisAchados()}
        {this.renderFiltroButtons()}
        {this.renderButtons()}
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
    width: '100%',
  },
  containerButtons: {
    flex: 1,
    flexDirection: 'row',
    bottom: 0,
    zIndex: 1,
    position: 'absolute',
    marginBottom: 15,
  },
  inputSearch: {
    fontSize: 12,
    elevation: 8,
    color: '#2A4065',
    borderColor: '#2A4065',
  }
});

const mapStateToProps = state => {
  return {
    erroCreatingRoute: state.localizacao.erroCreatingRoute,
    creatingRoute: state.localizacao.creatingRoute,
    locais: state.localizacao.locais,
    loading: state.localizacao.loading,
    localMarcado: state.localizacao.localMarcado,
    locaisAchados: state.localizacao.locaisAchados,
    localPesquisado: state.localizacao.local,
    localizacaoUsuario: state.localizacao.localizacaoUsuario,
  };
};

export default connect(mapStateToProps, {
  markLocal,
  createRota,
  searchLocal,
  verifyLocais,
  searchLocalizacaoUsuario,
})(Localizacao);

// salvarLocais() {
//   saveLocais(locais);
// }
