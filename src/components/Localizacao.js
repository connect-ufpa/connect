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
  createRota,
  searchLocal,
  verifyLocais,
  closeHelper,
  closeError,
  loadingRoute,
  showInfoRota,
  clearInputSearch,
  createRouteError,
  createRouteSuccess,  
  searchLocalizacaoUsuario,
} from '../actions';
import { Input, Spinner, CalloutView, HeaderImage, Loading } from './commons';
import MapView, { Marker, Circle, Callout } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import Styles from '../Styles';
import locais from '../data/locais.json';
import _ from 'lodash';

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
      drawerIcon: ({ tintColor }) => (
        <Icon
          name="place" 
          color="#2a4065" 
          size={27} 
        />
      ),
      headerLeft: (
        <TouchableOpacity style={{ flex: 1, paddingTop: 20, paddingBottom: 20, paddingRight: 20 }} onPress={() => navigate('DrawerOpen')}>
          <Icon
            type="font-awesome"
            name="bars"
            color="#2a4065"
            size={25}
            
          />
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
  
  // saveLocais(locais);

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
        case "Instituto":
          return(
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
        
        case "Laboratório":
          return(
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
        
        case "Biblioteca":
          return(
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
        
        case "Bloco":
          return(
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
        
        case "Banheiro":
          return(
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
          
        case "Administração":
          return(
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
          break
        
        case "Restaurante":
          return(
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
          break
        
        case "Centro Acadêmico":
          return(
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
          break
        
        case "Desporto":
          return(
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
          break

        case "Convenções":
          return(
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
          break
        
        case "Serviço":
          return(
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
          break            
          
        case "Hospital":
          return(
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
          break

        default:
          return(
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
      return (
        <Loading />
      );
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
              borderBottomLeftRadius: 6,
              borderBottomRightRadius: 6,
              borderWidth: 2,
              borderColor: '#FFF',
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
                    flexDirection: 'row',
                    borderTopColor: '#777',
                    borderTopWidth: 1,
                  }}
                >
                  <Text
                    style={{
                      flex: 5,
                      fontFamily: 'Ubuntu-Regular',
                      backgroundColor: 'white',
                      color: '#777',
                      fontSize: 12,
                      padding: 13,
                      height: 40,
                    }}
                  >
                    {item.nome}
                  </Text>
                  <View
                    style={{
                      flex: 1,
                      padding: 10,
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: '#FFF',
                    }}
                  >
                    <View
                      style={{
                        width: 20,
                        height: 20,
                        borderRadius: 50,
                        justifyContent: 'center',
                        backgroundColor: '#2A4065',
                      }}
                    >
                      <Icon
                        name="keyboard-arrow-right"
                        color="#FFF"
                        size={20}
                      />
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
        return this.props.locais.map((local) => {
          switch (local.tipo) {
            case "Instituto":
              return(
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
            
            case "Laboratório":
              return(
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
            
            case "Biblioteca":
              return(
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
            
            case "Bloco":
              return(
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
            
            case "Banheiro":
              return(
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
              
            case "Administração":
              return(
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
              break
            
            case "Restaurante":
              return(
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
              break
            
            case "Centro Acadêmico":
              return(
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
              break
            
            case "Desporto":
              return(
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
              break

            case "Convenções":
              return(
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
              break
            
            case "Serviço":
              return(
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
              break            
              
            case "Hospital":
              return(
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
              break

            default:
              return(
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

  renderLoadingRota() {
    if (this.props.creatingRoute) {
      return (
        <View style={styles.containerLoading}>
          <View style={{
            height: 100,
            width: 100,
            backgroundColor: '#FFF',
            borderRadius: 5,
            elevation: 8,
          }}>
            <Spinner size={60} color="#2A4065" />
          </View>
        </View>
      );
    }
  }

  renderRotaInfo() {
    if(!_.isEmpty(this.props.infoRota)) {
      const map = this.refs.Map;
      map.animateToCoordinate(
        {
          latitude: this.props.localizacaoUsuario.coords.latitude,
          longitude: this.props.localizacaoUsuario.coords.longitude,
        }
      );

      return (
        <View style={styles.containerInfoRota}>
          <Text style={{ textAlign: 'center', color: '#2D2D2D', fontSize: 12, fontFamily: 'Ubuntu-Medium', borderBottomColor: '#2D2D2D', borderBottomWidth: 2, paddingBottom: 5 }}>
            Informações da rota
          </Text>
          <Text style={{ textAlign: 'center', color: '#777', fontSize: 11, fontFamily: 'Ubuntu-Regular', marginTop: 10 }}>
            Distância:{` ${this.props.infoRota.distance.toFixed(2)} km`} 
          </Text>
          <Text style={{ textAlign: 'center', color: '#777', fontSize: 11, fontFamily: 'Ubuntu-Regular', marginTop: 10 }}>
            Tempo:{` ${this.props.infoRota.duration.toFixed(2)} min`} 
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
                  this.props.createRota(this.props.localMarcado);
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
        <View
          style={{
            elevation: 8,
            flex: 1,
            alignSelf: 'center',
            position: 'absolute',
            bottom: 130,
            zIndex: 1,
            backgroundColor: '#FFF',
            padding: 5,
            borderRadius: 10,
            width: width * 0.5,
            height: height * 0.2,
          }}
        >
          <View style={{ flex: 2, flexDirection: 'row', marginTop: 10 }}>
            <Text
              style={{
                flex: 5,
                fontFamily: 'Ubuntu-Medium',
                textAlign: 'center',
                fontSize: 14,
                color: '#2BA3DA',
                marginLeft: 20,
                paddingTop: 5,
              }}
            >
              Dica
            </Text>
            <TouchableOpacity
              onPress={() => {
                this.props.closeHelper();
              }}
            >
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
                <Icon name="clear" color="#FFF" size={15} />
              </View>
            </TouchableOpacity>
          </View>
          <Text
            style={{
              flex: 4,
              fontSize: 11,
              padding: 5,
              fontFamily: 'Ubuntu-Regular',
              color: '#777',
              textAlign: 'center',
            }}
          >
            {this.props.helperMessage}
          </Text>
        </View>
      );
    }
  }

  renderError() {
    if (this.props.error) {
      return (
        <View
          style={{
            elevation: 8,
            flex: 1,
            alignSelf: 'center',
            position: 'absolute',
            bottom: 135,
            zIndex: 1,
            backgroundColor: '#FFF',
            padding: 5,
            borderRadius: 10,
            width: width * 0.5,
            height: height * 0.2,
          }}
        >
          <View style={{ flex: 2, flexDirection: 'row', marginTop: 10 }}>
            <Text
              style={{
                flex: 5,
                fontFamily: 'Ubuntu-Medium',
                textAlign: 'center',
                fontSize: 14,
                color: '#CC2822',
                marginLeft: 20,
                paddingTop: 5,
              }}
            >
              Erro
            </Text>
            <TouchableOpacity
              onPress={() => {
                this.props.closeError();
              }}
            >
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
                <Icon name="clear" color="#FFF" size={15} />
              </View>
            </TouchableOpacity>
          </View>
          <Text
            style={{
              flex: 4,
              fontSize: 11,
              padding: 5,
              fontFamily: 'Ubuntu-Regular',
              color: '#777',
              textAlign: 'center',
            }}
          >
            {this.props.errorMessage}
          </Text>
        </View>
      );
    }
  }

  renderRota() {
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
          onReady={(result) => {
            this.props.showInfoRota(result);
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
          showsUserLocation={true}
          showsMyLocationButton={false}
          style={Styles.mapLocalizacaoStyle}
          initialRegion={initialRegion}
        >
          {this.renderMarcadorLocalPesquisado()}
          {this.renderMarcadoresLocais()}
          {this.renderRota()}
        </MapView>
        {/* {this.renderFiltroButtons()} */}
        {this.renderInputPesquisarLocais()}
        {this.renderListaLocaisAchados()}
        {this.renderLoadingRota()}
        {this.renderRotaInfo()}
        {this.renderButtons()}
        {this.renderHelper()}
        {this.renderError()}
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
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
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
  containerInfoRota: {
    flex: 1,
    zIndex: 2,
    padding: 5,
    margin: 20,
    right: 0,
    bottom: 100,
    elevation: 8,
    borderRadius: 5,
    width: width * 0.35,
    height: height * 0.20,
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
    infoRota: state.localizacao.infoRota,
    helper: state.localizacao.helper,
    error: state.localizacao.error,
    locais: state.localizacao.locais,
    loading: state.localizacao.loading,
    localPesquisado: state.localizacao.local,
    localMarcado: state.localizacao.localMarcado,
    locaisAchados: state.localizacao.locaisAchados,
    creatingRoute: state.localizacao.creatingRoute,
    errorMessage: state.localizacao.errorMessage,
    helperMessage: state.localizacao.helperMessage,
    localizacaoUsuario: state.localizacao.localizacaoUsuario,
    inputSearchFocused: state.localizacao.inputSearchFocused,
    localSendoPesquisado: state.localizacao.localSendoPesquisado,
    showRoute: state.localizacao.showRoute
  };
};

export default connect(mapStateToProps, {
  markLocal,
  createRota,
  closeError,
  closeHelper,
  searchLocal,
  verifyLocais,
  closeHelper,
  closeError,
  showInfoRota,
  loadingRoute,
  createRouteError,
  clearInputSearch,
  createRouteSuccess,
  searchLocalizacaoUsuario,
})(Localizacao);
