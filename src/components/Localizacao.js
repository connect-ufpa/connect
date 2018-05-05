import React, { Component } from 'react';
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
  closeHelper,
  closeError,
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
        </View>
      ),
      headerRight: (
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

  // salvarLocais() {
  //   saveLocais(locais);
  // }

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
          image={require('../../assets/img/pin.png')}
        >
          <Callout>
            <CalloutView
              name={this.props.localMarcado.nome}
              desc={this.props.localMarcado.desc}
            />
          </Callout>
        </Marker>
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
            value={this.props.localSendoPesquisado}
            addStyle={styles.inputSearch}
            placeholder="Pesquise local desejado:"
            onChangeText={localSendoPesquisado => this.props.searchLocal(localSendoPesquisado, this.props.locais)}
          />
        </View>
      );
    }
  }

  renderListaLocaisAchados() {
    if (this.props.locaisAchados.length !== 0) {
      return (
        <View style={styles.containerLista}>
          <FlatList
            data={this.props.locaisAchados}
            style={{ borderBottomLeftRadius: 6, borderBottomRightRadius: 6, borderWidth: 2, borderColor: '#FFF',}}
            renderItem={({ item }) => (
              <View style={{ flex: 1, flexDirection: 'row', borderTopColor: '#777', borderTopWidth: 1 }}>
                <Text style={{ flex: 5, backgroundColor: 'white', color: '#777', fontSize: 12, padding: 13, height: 40 }}>
                  {item.nome}
                </Text>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 10, backgroundColor: '#FFF'  }}>
                  <TouchableOpacity onPress={() => { this.props.markLocal(item)}}>
                    <View style={{ height: 20, width: 20, justifyContent: 'center', backgroundColor: '#2A4065', borderRadius: 50 }}>
                      <Icon
                        name="keyboard-arrow-right"
                        color="#FFF"
                        size={20}
                      />
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
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
                desc={marker.desc}
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
        <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center'  }}>
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
        </View>
        
        {/* <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}>
          {( this.props.showHelperMessageRoute == true ? 
            <View style={{ borderRadius: 5, backgroundColor: '#FFF', marginBottom: 10, height: 75, width: width * 0.3, margin: 15 }}>
            </View> 
            : null )}
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
                name="comments"
                color="#FFF"
                size={25}
              />
            </View>
          </TouchableOpacity>
        </View> */}
      </View>
    );
  }

  renderHelper() {
    if(this.props.helper && !this.props.loading) {
      return (
        <View style={{ elevation: 8, flex: 1, alignSelf: 'center', position: 'absolute', bottom: 150, zIndex: 1, backgroundColor: '#FFF', padding: 5, borderRadius: 10, width: width * 0.6, height: height * 0.25 }}>
          <View style={{ flex: 2, flexDirection: 'row', marginTop: 10 }}>
            <Text style={{ flex: 5, fontFamily: 'Ubuntu', textAlign: 'center', fontSize: 14, color: "#2BA3DA", marginLeft: 20, paddingTop: 5 }}> 
              Dica
            </Text>
            <TouchableOpacity onPress={() => {this.props.closeHelper()}}>
              <View
                style={{
                  height: 30,
                  width: 30,
                  borderRadius: 25,
                  marginRight: 10,
                  backgroundColor: '#CC2820',
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
            </TouchableOpacity>
          </View>
          <Text style={{ flex: 4, fontSize: 11, padding: 5, fontFamily: 'Ubuntu', color: '#777', textAlign: 'center' }}>
            {this.props.helperMessage}
          </Text>
        </View>
      );
    } else {
      console.log("Sem helpers...");
    }
  }

  renderError() {
    if(this.props.error) {
      return (
        <View style={{ elevation: 8, flex: 1, alignSelf: 'center', position: 'absolute', bottom: 150, zIndex: 1, backgroundColor: '#FFF', padding: 5, borderRadius: 10, width: width * 0.6, height: height * 0.25 }}>
          <View style={{ flex: 2, flexDirection: 'row', marginTop: 10 }}>
            <Text style={{ flex: 5, fontFamily: 'Ubuntu', textAlign: 'center', fontSize: 14, color: "#CC2822", marginLeft: 20, paddingTop: 5 }}> 
              Erro
            </Text>
            <TouchableOpacity onPress={() => {this.props.closeError()}}>
              <View
                style={{
                  height: 30,
                  width: 30,
                  borderRadius: 25,
                  marginRight: 10,
                  backgroundColor: '#CC2820',
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
            </TouchableOpacity>
          </View>
          <Text style={{ flex: 4, fontSize: 11, padding: 5, fontFamily: 'Ubuntu', color: '#777', textAlign: 'center' }}>
            {this.props.errorMessage}
          </Text>
        </View>
      );
    } else {
      console.log("Sem erros...");
    }
  }

  renderRota() {
    if (!this.props.creatingRoute) {
      console.log("Nenhum local foi clicado para se gerar rota...");
    }
    if (this.props.error) {
      console.log("Pesquise um local antes de gerar rota...");
    }
    if(!this.props.error && this.props.creatingRoute) {
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

  debugState() {
    console.log(this.props);
  }

  render() {
    return (
      <ScrollView style={Styles.scrollViewStyle}>
        <MapView
          ref={"Map"}
          showsUserLocation={true}
          showsMyLocationButton={false}
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
        {this.renderError()}
        {this.renderHelper()}
        {this.debugState()}
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
    zIndex: 10,
    position: 'absolute',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  containerPesquisar: {
    flex: 1,
    zIndex: 2,
    padding: 20,
    width: '100%',
    position: 'absolute',
  },
  containerLista: {
    flex: 1,
    zIndex: 3,
    elevation: 8,
    marginTop: 70,
    paddingLeft: 20,
    paddingRight: 20,
    width: '100%',
    position: 'absolute',
  },
  containerButtons: {
    flex: 1,
    bottom: 0,
    zIndex: 4,
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
  },
  inputSearch: {
    fontSize: 12,
    elevation: 8,
    borderColor: '#FFF',
  }
});

const mapStateToProps = state => {
  return {
    locais: state.localizacao.locais,
    loading: state.localizacao.loading,
    localPesquisado: state.localizacao.local,
    localSendoPesquisado: state.localizacao.localSendoPesquisado,
    localMarcado: state.localizacao.localMarcado,
    locaisAchados: state.localizacao.locaisAchados,
    creatingRoute: state.localizacao.creatingRoute,
    helper: state.localizacao.helper,
    helperMessage: state.localizacao.helperMessage,
    error: state.localizacao.error,
    errorMessage: state.localizacao.errorMessage,
    localizacaoUsuario: state.localizacao.localizacaoUsuario,
  };
};

export default connect(mapStateToProps, {
  markLocal,
  createRota,
  searchLocal,
  verifyLocais,
  closeHelper,
  closeError,
  searchLocalizacaoUsuario,
})(Localizacao);

