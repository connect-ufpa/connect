import React, { Component } from 'react';
import {
  Text,
  View,
  FlatList,
  TextInput,
  Dimensions,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {
  markLocal,
  saveLocais,
  createRoute,
  searchLocal,
  verifyLocais,
  closeHelper,
  closeError,
  loadingRoute,
  showInfoRoute,
  clearInputSearch,
  createRouteError,
  createRouteSuccess,
  searchLocalizacaoUsuario,
} from '../actions';
import { CalloutView, HeaderImage, Loading, HelperCard } from './commons';
import MapViewDirections from 'react-native-maps-directions';
import MapView, { Marker, Callout } from 'react-native-maps';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import _ from 'lodash';

import locais from '../data/locais.json';
import Styles from '../Styles';

const { height, width } = Dimensions.get('window');
const initialRegion = {
  latitude: -1.473987,
  longitude: -48.452267,
  latitudeDelta: 0.004,
  longitudeDelta: 0.004,
};

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
      drawerIcon: () => <Icon name="place" color="#2a4065" size={27} />,
      headerLeft: (
        <TouchableOpacity
          style={{
            flex: 1,
            paddingTop: 20,
            paddingBottom: 20,
            paddingRight: 20,
          }}
          onPress={() => navigate('DrawerOpen')}
        >
          <Icon type="font-awesome" name="bars" color="#2a4065" size={25} />
        </TouchableOpacity>
      ),
      headerRight: (
        <View>
          <Icon
            name="settings"
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
    if (!_.isEmpty(this.props.localMarcado)) {
      const map = this.refs.Map;
      map.animateToCoordinate(
        (coordinate = {
          latitude: this.props.localMarcado.coords.lat,
          longitude: this.props.localMarcado.coords.lng,
        })
      );

      const local = this.props.localMarcado;

      switch (local.tipo) {
        case 'Instituto':
          return (
            <Marker
              key={local.nome}
              coordinate={{
                latitude: local.coords.lat,
                longitude: local.coords.lng,
              }}
              title={local.nome}
              image={require('../../assets/img/pin/Instituto.png')}
            >
              <Callout tooltip>
                <CalloutView name={local.nome} desc={local.desc} />
              </Callout>
            </Marker>
          );

        case 'Laboratório':
          return (
            <Marker
              key={local.nome}
              coordinate={{
                latitude: local.coords.lat,
                longitude: local.coords.lng,
              }}
              title={local.nome}
              image={require('../../assets/img/pin/Laboratório.png')}
            >
              <Callout tooltip={true}>
                <CalloutView name={local.nome} desc={local.desc} />
              </Callout>
            </Marker>
          );

        case 'Biblioteca':
          return (
            <Marker
              key={local.nome}
              coordinate={{
                latitude: local.coords.lat,
                longitude: local.coords.lng,
              }}
              title={local.nome}
              image={require('../../assets/img/pin/Biblioteca.png')}
            >
              <Callout tooltip>
                <CalloutView name={local.nome} desc={local.desc} />
              </Callout>
            </Marker>
          );

        case 'Bloco':
          return (
            <Marker
              key={local.nome}
              coordinate={{
                latitude: local.coords.lat,
                longitude: local.coords.lng,
              }}
              title={local.nome}
              image={require('../../assets/img/pin/Bloco.png')}
            >
              <Callout tooltip>
                <CalloutView name={local.nome} desc={local.desc} />
              </Callout>
            </Marker>
          );
        case 'Banheiro':
          return (
            <Marker
              key={local.nome}
              coordinate={{
                latitude: local.coords.lat,
                longitude: local.coords.lng,
              }}
              title={local.nome}
              image={require('../../assets/img/pin/Banheiro.png')}
            >
              <Callout tooltip>
                <CalloutView name={local.nome} desc={local.desc} />
              </Callout>
            </Marker>
          );

        case 'Administração':
          return (
            <Marker
              key={local.nome}
              coordinate={{
                latitude: local.coords.lat,
                longitude: local.coords.lng,
              }}
              title={local.nome}
              image={require('../../assets/img/pin/Administração.png')}
            >
              <Callout tooltip={true}>
                <CalloutView name={local.nome} desc={local.desc} />
              </Callout>
            </Marker>
          );

        case 'Restaurante':
          return (
            <Marker
              key={local.nome}
              coordinate={{
                latitude: local.coords.lat,
                longitude: local.coords.lng,
              }}
              title={local.nome}
              image={require('../../assets/img/pin/Restaurante.png')}
            >
              <Callout tooltip={true}>
                <CalloutView name={local.nome} desc={local.desc} />
              </Callout>
            </Marker>
          );
          break;

        case 'Centro Acadêmico':
          return (
            <Marker
              key={local.nome}
              coordinate={{
                latitude: local.coords.lat,
                longitude: local.coords.lng,
              }}
              title={local.nome}
              image={require('../../assets/img/pin/Centro Acadêmico.png')}
            >
              <Callout tooltip={true}>
                <CalloutView name={local.nome} desc={local.desc} />
              </Callout>
            </Marker>
          );
          break;

        case 'Desporto':
          return (
            <Marker
              key={local.nome}
              coordinate={{
                latitude: local.coords.lat,
                longitude: local.coords.lng,
              }}
              title={local.nome}
              image={require('../../assets/img/pin/Desporto.png')}
            >
              <Callout tooltip={true}>
                <CalloutView name={local.nome} desc={local.desc} />
              </Callout>
            </Marker>
          );
          break;

        case 'Convenções':
          return (
            <Marker
              key={local.nome}
              coordinate={{
                latitude: local.coords.lat,
                longitude: local.coords.lng,
              }}
              title={local.nome}
              image={require('../../assets/img/pin/Convenções.png')}
            >
              <Callout tooltip={true}>
                <CalloutView name={local.nome} desc={local.desc} />
              </Callout>
            </Marker>
          );
          break;

        case 'Serviço':
          return (
            <Marker
              key={local.nome}
              coordinate={{
                latitude: local.coords.lat,
                longitude: local.coords.lng,
              }}
              title={local.nome}
              image={require('../../assets/img/pin/Serviço.png')}
            >
              <Callout tooltip={true}>
                <CalloutView name={local.nome} desc={local.desc} />
              </Callout>
            </Marker>
          );
          break;

        case 'Hospital':
          return (
            <Marker
              key={local.nome}
              coordinate={{
                latitude: local.coords.lat,
                longitude: local.coords.lng,
              }}
              title={local.nome}
              image={require('../../assets/img/pin/Hospital.png')}
            >
              <Callout tooltip={true}>
                <CalloutView name={local.nome} desc={local.desc} />
              </Callout>
            </Marker>
          );
          break;

        default:
          return (
            <Marker
              key={local.nome}
              coordinate={{
                latitude: local.coords.lat,
                longitude: local.coords.lng,
              }}
              title={local.nome}
              image={require('../../assets/img/pin.png')}
            >
              <Callout tooltip={true}>
                <CalloutView name={local.nome} desc={local.desc} />
              </Callout>
            </Marker>
          );
          break;
      }
    }
  }

  renderInputPesquisarLocais() {
    if (this.props.loading) {
      return <Loading />;
    } else {
      return (
        <View style={styles.containerPesquisar}>
          <TextInput
            autoCorrect={false}
            style={styles.inputPesquisar}
            underlineColorAndroid={'transparent'}
            value={this.props.localSendoPesquisado}
            placeholder={'Pesquise um local desejado:'}
            onChangeText={localSendoPesquisado =>
              this.props.searchLocal(localSendoPesquisado, this.props.locais)
            }
          />
          <TouchableOpacity
            onPress={() => {
              this.props.clearInputSearch();
            }}
          >
            <View
              style={{
                flex: 1,
                padding: 10,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#FFF',
              }}
            >
              {this.props.inputSearchFocused ? (
                <Icon name="clear" color="#777" size={25} />
              ) : (
                  <Icon name="search" color="#777" size={25} />
                )}
            </View>
          </TouchableOpacity>
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
            style={{
              borderWidth: 2,
              borderColor: '#FFF',
              borderBottomLeftRadius: 6,
              borderBottomRightRadius: 6,
            }}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => {
                  this.props.markLocal(item);
                }}
              >
                <View
                  style={{
                    flex: 1,
                    borderTopWidth: 1,
                    flexDirection: 'row',
                    borderTopColor: '#777',
                    backgroundColor: '#FFF',
                  }}
                >
                  <Text style={Styles.textFlatListStyle}>{item.nome}</Text>
                  <View
                    style={{
                      flex: 1,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <View
                      style={{
                        width: 20,
                        height: 20,
                        borderRadius: 50,
                        backgroundColor: '#2A4065',
                      }}
                    >
                      <Icon name="keyboard-arrow-right" color="#FFF" size={20} />
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      );
    }
  }

  renderMarcadoresLocais() {
    if (!this.props.loading) {
      if (_.isEmpty(this.props.localMarcado)) {
        return this.props.locais.map(local => {
          switch (local.tipo) {
            case 'Instituto':
              return (
                <Marker
                  key={local.nome}
                  coordinate={{
                    latitude: local.coords.lat,
                    longitude: local.coords.lng,
                  }}
                  title={local.nome}
                  image={require('../../assets/img/pin/Instituto.png')}
                >
                  <Callout tooltip={true}>
                    <CalloutView name={local.nome} desc={local.desc} />
                  </Callout>
                </Marker>
              );
              break;

            case 'Laboratório':
              return (
                <Marker
                  key={local.nome}
                  coordinate={{
                    latitude: local.coords.lat,
                    longitude: local.coords.lng,
                  }}
                  title={local.nome}
                  image={require('../../assets/img/pin/Laboratório.png')}
                >
                  <Callout tooltip={true}>
                    <CalloutView name={local.nome} desc={local.desc} />
                  </Callout>
                </Marker>
              );
              break;

            case 'Biblioteca':
              return (
                <Marker
                  key={local.nome}
                  coordinate={{
                    latitude: local.coords.lat,
                    longitude: local.coords.lng,
                  }}
                  title={local.nome}
                  image={require('../../assets/img/pin/Biblioteca.png')}
                >
                  <Callout tooltip={true}>
                    <CalloutView name={local.nome} desc={local.desc} />
                  </Callout>
                </Marker>
              );
              break;

            case 'Bloco':
              return (
                <Marker
                  key={local.nome}
                  coordinate={{
                    latitude: local.coords.lat,
                    longitude: local.coords.lng,
                  }}
                  title={local.nome}
                  image={require('../../assets/img/pin/Bloco.png')}
                >
                  <Callout tooltip={true}>
                    <CalloutView name={local.nome} desc={local.desc} />
                  </Callout>
                </Marker>
              );
              break;

            case 'Banheiro':
              return (
                <Marker
                  key={local.nome}
                  coordinate={{
                    latitude: local.coords.lat,
                    longitude: local.coords.lng,
                  }}
                  title={local.nome}
                  image={require('../../assets/img/pin/Banheiro.png')}
                >
                  <Callout tooltip={true}>
                    <CalloutView name={local.nome} desc={local.desc} />
                  </Callout>
                </Marker>
              );
              break;

            case 'Administração':
              return (
                <Marker
                  key={local.nome}
                  coordinate={{
                    latitude: local.coords.lat,
                    longitude: local.coords.lng,
                  }}
                  title={local.nome}
                  image={require('../../assets/img/pin/Administração.png')}
                >
                  <Callout tooltip={true}>
                    <CalloutView name={local.nome} desc={local.desc} />
                  </Callout>
                </Marker>
              );
              break;

            case 'Restaurante':
              return (
                <Marker
                  key={local.nome}
                  coordinate={{
                    latitude: local.coords.lat,
                    longitude: local.coords.lng,
                  }}
                  title={local.nome}
                  image={require('../../assets/img/pin/Restaurante.png')}
                >
                  <Callout tooltip={true}>
                    <CalloutView name={local.nome} desc={local.desc} />
                  </Callout>
                </Marker>
              );
              break;

            case 'Centro Acadêmico':
              return (
                <Marker
                  key={local.nome}
                  coordinate={{
                    latitude: local.coords.lat,
                    longitude: local.coords.lng,
                  }}
                  title={local.nome}
                  image={require('../../assets/img/pin/Centro Acadêmico.png')}
                >
                  <Callout tooltip={true}>
                    <CalloutView name={local.nome} desc={local.desc} />
                  </Callout>
                </Marker>
              );
              break;

            case 'Desporto':
              return (
                <Marker
                  key={local.nome}
                  coordinate={{
                    latitude: local.coords.lat,
                    longitude: local.coords.lng,
                  }}
                  title={local.nome}
                  image={require('../../assets/img/pin/Desporto.png')}
                >
                  <Callout tooltip={true}>
                    <CalloutView name={local.nome} desc={local.desc} />
                  </Callout>
                </Marker>
              );
              break;

            case 'Convenções':
              return (
                <Marker
                  key={local.nome}
                  coordinate={{
                    latitude: local.coords.lat,
                    longitude: local.coords.lng,
                  }}
                  title={local.nome}
                  image={require('../../assets/img/pin/Convenções.png')}
                >
                  <Callout tooltip={true}>
                    <CalloutView name={local.nome} desc={local.desc} />
                  </Callout>
                </Marker>
              );
              break;

            case 'Serviço':
              return (
                <Marker
                  key={local.nome}
                  coordinate={{
                    latitude: local.coords.lat,
                    longitude: local.coords.lng,
                  }}
                  title={local.nome}
                  image={require('../../assets/img/pin/Serviço.png')}
                >
                  <Callout tooltip={true}>
                    <CalloutView name={local.nome} desc={local.desc} />
                  </Callout>
                </Marker>
              );
              break;

            case 'Hospital':
              return (
                <Marker
                  key={local.nome}
                  coordinate={{
                    latitude: local.coords.lat,
                    longitude: local.coords.lng,
                  }}
                  title={local.nome}
                  image={require('../../assets/img/pin/Hospital.png')}
                >
                  <Callout tooltip={true}>
                    <CalloutView name={local.nome} desc={local.desc} />
                  </Callout>
                </Marker>
              );
              break;

            default:
              return (
                <Marker
                  key={local.nome}
                  coordinate={{
                    latitude: local.coords.lat,
                    longitude: local.coords.lng,
                  }}
                  title={local.nome}
                  image={require('../../assets/img/pin.png')}
                >
                  <Callout tooltip={true}>
                    <CalloutView name={local.nome} desc={local.desc} />
                  </Callout>
                </Marker>
              );
              break;
          }
        });
      }
    }
  }

  renderFiltroButtons() {
    return (
      <View
        style={{
          flex: 1,
          bottom: 0,
          marginBottom: 100,
          marginRight: 5,
          right: 0,
          zIndex: 1,
          position: 'absolute',
        }}
      >
        <Text
          style={{
            textAlign: 'center',
            fontFamily: 'Ubuntu',
            fontSize: 8,
            color: '#777',
          }}
        >
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
          <Icon name="place" color="#FFF" size={15} />
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
          <Icon type="font-awesome" name="flask" color="#FFF" size={15} />
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
          <Icon name="event-seat" color="#FFF" size={15} />
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
          <Icon name="local-dining" color="#FFF" size={15} />
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
          <Icon name="local-library" color="#FFF" size={15} />
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
          <Icon name="clear" color="#FFF" size={15} />
        </View>
      </View>
    );
  }

  renderLoadingRoute() {
    if (this.props.creatingRoute) {
      return <Loading />;
    }
  }

  renderRouteInfo() {
    if (!_.isEmpty(this.props.infoRoute)) {
      const map = this.refs.Map;
      map.animateToCoordinate({
        latitude: this.props.localizacaoUsuario.coords.latitude,
        longitude: this.props.localizacaoUsuario.coords.longitude,
      });

      return (
        <View style={styles.containerInfoRoute}>
          <Text
            style={{
              fontSize: 12,
              paddingBottom: 5,
              color: '#2D2D2D',
              textAlign: 'center',
              borderBottomWidth: 2,
              fontFamily: 'Ubuntu-Medium',
              borderBottomColor: '#2D2D2D',

            }}
          >
            Informações da rota
          </Text>
          <Text
            style={{
              fontSize: 12,
              marginTop: 10,
              color: '#777',
              textAlign: 'center',
              fontFamily: 'Ubuntu-Regular',
            }}
          >
            Distância:{` ${this.props.infoRoute.distance.toFixed(2)} km`}
          </Text>
          <Text
            style={{
              textAlign: 'center',
              color: '#777',
              fontSize: 11,
              fontFamily: 'Ubuntu-Regular',
              marginTop: 10,
            }}
          >
            Tempo:{` ${this.props.infoRoute.duration.toFixed(2)} min`}
          </Text>
        </View>
      );
    }
  }

  renderButtons() {
    if (!this.props.loading) {
      return (
        <View style={styles.containerButtons}>
          <View
            style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}
          >
            <TouchableOpacity
              onPress={() => {
                if (!_.isEmpty(this.props.localMarcado)) {
                  this.props.createRoute(this.props.localMarcado);
                } else {
                  this.props.createRouteError();
                }
              }}
            >
              {_.isEmpty(this.props.localMarcado) ? (
                <View
                  style={{
                    height: 60,
                    width: 60,
                    margin: 15,
                    elevation: 8,
                    borderRadius: 150,
                    alignContent: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#777',
                  }}
                >
                  <Icon name="near-me" color="#FFF" size={25} />
                </View>
              ) : (
                  <View
                    style={{
                      height: 60,
                      width: 60,
                      margin: 15,
                      elevation: 8,
                      borderRadius: 150,
                      alignContent: 'center',
                      justifyContent: 'center',
                      backgroundColor: '#2A4065',
                    }}
                  >
                    <Icon name="near-me" color="#FFF" size={25} />
                  </View>
                )}
            </TouchableOpacity>
          </View>
        </View>
      );
    }
  }

  renderHelper() {
    if (this.props.helper && !this.props.loading) {
      return (
        <HelperCard
          kind={'helper'}
          title={'Dica!'}
          onPress={this.props.closeHelper}
          message={this.props.helperMessage}
        />
      );
    }
  }

  renderError() {
    if (this.props.error) {
      return (
        <HelperCard
          kind={'error'}
          title={'Erro!'}
          onPress={this.props.closeError}
          message={this.props.errorMessage}
        />
      );
    }
  }

  renderRoute() {
    if (!this.props.error && this.props.showRoute) {
      return (
        <MapViewDirections
          origin={this.props.localizacaoUsuario.coords}
          destination={{
            latitude: this.props.localMarcado.coords.lat,
            longitude: this.props.localMarcado.coords.lng,
          }}
          strokeWidth={6}
          mode={'walking'}
          strokeColor={'#2BA3DA'}
          apikey={'AIzaSyDs39LTHBTeq5xQoR6HJDkFtoLuWARdhCY'}
          onStart={() => {
            this.props.loadingRoute();
          }}
          onReady={result => {
            this.props.showInfoRoute(result);
            this.props.createRouteSuccess();
          }}
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
          ref={'Map'}
          showsUserLocation
          showsMyLocationButton={false}
          style={Styles.mapLocalizacaoStyle}
          initialRegion={initialRegion}
        >
          {this.renderMarcadorLocalPesquisado()}
          {this.renderMarcadoresLocais()}
          {this.renderRoute()}
        </MapView>
        {/* {this.renderFiltroButtons()} */}
        {this.renderInputPesquisarLocais()}
        {this.renderListaLocaisAchados()}
        {this.renderLoadingRoute()}
        {this.renderRouteInfo()}
        {this.renderButtons()}
        {this.renderHelper()}
        {this.renderError()}
        {/*   */}
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
  containerLista: {
    flex: 1,
    zIndex: 3,
    elevation: 8,
    marginTop: 75,
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
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  containerPesquisar: {
    flex: 1,
    zIndex: 2,
    padding: 5,
    margin: 20,
    elevation: 8,
    borderRadius: 5,
    borderColor: '#FFF',
    position: 'absolute',
    flexDirection: 'row',
    backgroundColor: '#FFF',
  },
  containerInfoRoute: {
    flex: 1,
    zIndex: 2,
    padding: 5,
    margin: 20,
    right: 0,
    bottom: 100,
    elevation: 8,
    borderRadius: 5,
    width: width * 0.35,
    height: height * 0.2,
    borderColor: '#FFF',
    position: 'absolute',
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: '#FFF',
    justifyContent: 'center',
  },
  inputPesquisar: {
    flex: 5,
    color: '#2D2D2D',
    fontSize: 14,
    paddingLeft: 20,
    paddingRight: 20,
    borderColor: '#FFF',
    fontFamily: 'Ubuntu-Regular',
    backgroundColor: '#FFF',
  },
});

const mapStateToProps = state => {
  return {
    error: state.localizacao.error,
    helper: state.localizacao.helper,
    locais: state.localizacao.locais,
    loading: state.localizacao.loading,
    infoRoute: state.localizacao.infoRoute,
    showRoute: state.localizacao.showRoute,
    localPesquisado: state.localizacao.local,
    errorMessage: state.localizacao.errorMessage,
    localMarcado: state.localizacao.localMarcado,
    locaisAchados: state.localizacao.locaisAchados,
    creatingRoute: state.localizacao.creatingRoute,
    helperMessage: state.localizacao.helperMessage,
    inputSearchFocused: state.localizacao.inputSearchFocused,
    localizacaoUsuario: state.localizacao.localizacaoUsuario,
    localSendoPesquisado: state.localizacao.localSendoPesquisado,
  };
};

export default connect(mapStateToProps, {
  markLocal,
  createRoute,
  closeError,
  closeHelper,
  searchLocal,
  verifyLocais,
  showInfoRoute,
  loadingRoute,
  createRouteError,
  clearInputSearch,
  createRouteSuccess,
  searchLocalizacaoUsuario,
})(Localizacao);
