import React, { Component } from 'react';
import { View, TouchableOpacity, Text, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import MapView, { Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { Icon } from 'react-native-elements';
import { HeaderImage, Texts } from '../components/commons';
import Styles from '../Styles';

const { height, width } = Dimensions.get('window');
const ICON = require('../../assets/img/marker.png');

class VisualizarEventoNoMapa extends Component {
    static navigationOptions = () => {
        return {
            headerTitle:
                <View style={{ flex: 1, alignItems: 'center', flexDirection: 'row', justifyContent: 'center' }}>
                    <View style={{ marginRight: 5 }}>
                        <Texts text='Visualizar Local' />
                    </View><HeaderImage />
                </View>,
            headerStyle: {
                paddingRight: 60,
            },
        };
    }

    state = {
        showRota: false,
        infoRota: ''
    };
    
    showInfoRota() {
        if (this.state.infoRota) {
            return (
                <View
                    style={{
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
                    }}
                >
                    <Text style={{ textAlign: 'center', color: '#2D2D2D', fontSize: 12, fontFamily: 'Ubuntu', borderBottomColor: '#2D2D2D', borderBottomWidth: 2, paddingBottom: 5 }}>
                        Informações da rota
                    </Text>
                    <Text style={{ textAlign: 'center', color: '#777', fontSize: 11, fontFamily: 'Ubuntu', marginTop: 10 }}>
                        Distância:{` ${this.state.infoRota.distance.toFixed(2)} km`}
                    </Text>
                    <Text style={{ textAlign: 'center', color: '#777', fontSize: 11, fontFamily: 'Ubuntu', marginTop: 10 }}>
                        Tempo:{` ${this.state.infoRota.duration.toFixed(2)} min`}
                    </Text>
                </View>
            );
        }
    }

    renderRota = () => {
        const { params } = this.props.navigation.state;
        const lat = params.lat;
        const long = params.long;
        if (this.state.showRota) {
            return (
                <MapViewDirections
                    origin={{ latitude: -1.433551, longitude: -48.464247 }}
                    destination={{
                        latitude: lat,
                        longitude: long,
                    }}
                    strokeWidth={6}
                    mode={'walking'}
                    strokeColor={'#2BA3DA'}
                    apikey={'AIzaSyDs39LTHBTeq5xQoR6HJDkFtoLuWARdhCY'}
                    onReady={result => { this.setState({ infoRota: result }); }}
                />
            );
        }
    }

    renderButtomRoute() {
        return (
            <View style={{ flex: 1, position: 'absolute' }}>
                <TouchableOpacity onPress={() => { this.setState({ showRota: true }); }} >
                    <View style={[Styles.iconButtomStyle, { backgroundColor: '#2BA3DA' }]}>
                        <Icon
                            type='material-community'
                            name='near-me'
                            color='#FFF'
                            size={25}
                        />
                    </View>
                </TouchableOpacity>
                <View style={{ marginLeft: 10 }} >
                    <Texts text="Gerar Rota" />
                </View>
            </View>
        );
    }

    render = () => {
        const { params } = this.props.navigation.state;
        const lat = params.lat;
        const long = params.long;
        const latLng = {
            latitude: lat,
            longitude: long
        };
        return (
            <View>
                <MapView
                    style={styles.mapStyle}
                    region={{
                        latitude: lat,
                        longitude: long,
                        latitudeDelta: 0.00021,
                        longitudeDelta: 0.0025
                    }}
                >
                    {this.renderRota()}
                    <Marker coordinate={latLng} image={ICON} />
                </MapView>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-end' }}>
                    {this.renderButtomRoute()}
                    {this.showInfoRota()}
                </View>
            </View>
        );
    }
}

const styles = {
    mapStyle: {
        height: '100%',
        width: '100%'
    }
};

const mapStateToProps = (state) => {
    return { localizacaoUsuario: state.localizacao.localizacaoUsuario };
};

export default connect(mapStateToProps)(VisualizarEventoNoMapa);
