import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import MapView, { Marker } from 'react-native-maps';
import { editEvent, saveNewEventCoords } from '../actions';
import { CardSection } from '../components/commons';
import Styles from '../Styles';

const ICON = require('../../assets/img/pin.png');

let lat = -1.473987;
let long = -48.452267;
let coords = {
    lat: -1.473987,
    long: -48.452267
};
let LatLng = {
    latitude: -1.473987,
    longitude: -48.452267,
};

class EditarEventoMapa extends Component {
    static navigationOptions = {
        title: 'Editar local do evento',
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

    componentWillMount() {
        const { params } = this.props.navigation.state;
        const prop = 'coords';
        this.props.editEvent({ prop, params });
    }
    render() {
        if (this.props.coords) {
            lat = this.props.coords.lat;
            long = this.props.coords.long;
            coords = {
                lat: this.props.coords.lat,
                long: this.props.coords.long,
            };
            LatLng = {
                latitude: this.props.coords.lat,
                longitude: this.props.coords.long
            };
        }
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
                    onPress={(e) => {
                        const prop = 'coords';
                        const value = {
                            lat: e.nativeEvent.coordinate.latitude,
                            long: e.nativeEvent.coordinate.longitude
                        };
                        this.props.editEvent({ prop, value });
                    }}
                >
                    <Marker coordinate={LatLng} image={ICON} />
                </MapView>
                <CardSection styleSection={{ flex: 1, position: 'absolute', right: 0, left: 0, bottom: 0 }}>
                        <TouchableOpacity onPress={() => { this.props.saveNewEventCoords({ id: this.props.i, coords }); }} >
                            <View style={[Styles.iconButtomStyle, { backgroundColor: '#2A4065' }]}>
                                <Icon
                                    type='material-community'
                                    name='check'
                                    color='#FFF'
                                    size={25}
                                />
                            </View>
                        </TouchableOpacity>
                </CardSection>
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
    const { id, coords } = state.eventoEdicao;

    return { id, coords };
};

export default connect(mapStateToProps, { editEvent, saveNewEventCoords })(EditarEventoMapa);
