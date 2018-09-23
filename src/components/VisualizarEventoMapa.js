import React, { Component } from 'react';
import { View, TouchableOpacity, Text, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import MapView, { Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { Icon } from 'react-native-elements';
import { Texts, Loading } from '../components/commons';
import { getLocation, creatingRoute } from '../actions';
import Styles from '../Styles';

const { height, width } = Dimensions.get('window');
const ICON = require('../../assets/img/pin.png');

class VisualizarEventoNoMapa extends Component {
    static navigationOptions = {
        title: 'Local do evento',
        headerTintColor: '#2A4065',
        headerTitleStyle: {
            fontFamily: 'Ubuntu-Medium',
            fontWeight: '200',
            fontSize: 18,
        },
        headerStyle: {
            elevation: 5
        }
    };

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
                        Tempo de ônibus:{` ${this.state.infoRota.duration.toFixed(2)} min`}
                    </Text>
                </View>
            );
        }
    }

    showLoading() {
        if (this.state.showRota) return (<Loading />);
    }

    mapSetCenter() {
        const { params } = this.props.navigation.state;
        const lat = params.lat;
        const long = params.long;

        const origin = {
            latitude: this.props.latitude,
            longitude: this.props.longitude
        };
        const destiny = {
            latitude: lat,
            longitude: long
        };

        this.mapRef.fitToCoordinates([origin, destiny],
            { edgePadding: { top: 200, right: 50, bottom: 300, left: 50 }, animated: true }
        );
    }

    renderRota = () => {
        const { params } = this.props.navigation.state;
        const lat = params.lat;
        const long = params.long;

        if (this.props.latitude) {
            const user_lat = this.props.latitude;
            const user_long = this.props.longitude;
            return (
                <MapViewDirections
                    origin={{ latitude: user_lat, longitude: user_long }}
                    destination={{
                        latitude: lat,
                        longitude: long,
                    }}
                    strokeWidth={6}
                    mode={'bus'}
                    strokeColor={'#2BA3DA'}
                    apikey={'AIzaSyDs39LTHBTeq5xQoR6HJDkFtoLuWARdhCY'}
                    onReady={result => { this.setState({ infoRota: result, showRota: false }); this.mapSetCenter(); }}
                />
            );
        }
    }

    renderButtomRoute() {
        return (
            <View style={{ flex: 1, position: 'absolute' }}>
                <TouchableOpacity onPress={() => { this.props.getLocation(); this.setState({ showRota: true }); }} >
                    <View style={[Styles.iconButtomStyle, { backgroundColor: '#2A4065' }]}>
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
                    ref={(ref) => { this.mapRef = ref; }}
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
                {this.showLoading()}
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
    return {
        latitude: state.evento.user_latitude,
        longitude: state.evento.user_longitude,
        loading: state.evento.loadingRoute
    };
};

export default connect(mapStateToProps, { getLocation, creatingRoute })(VisualizarEventoNoMapa);
