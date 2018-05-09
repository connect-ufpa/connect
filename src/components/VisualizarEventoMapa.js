import React, { Component } from 'react';
import { View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { Icon } from 'react-native-elements';
import { HeaderImage } from '../components/commons';

const ICON = require('../../assets/img/marker.png');

class VisualizarEventoNoMapa extends Component {
    static navigationOptions = () => {
        return {
            headerTitle: <View style={{ flex: 1, alignContent: 'center' }}><HeaderImage /></View>,
            headerStyle: {
                paddingRight: 60,
                height: 55
            },
            headerTitleStyle: {
                alignSelf: 'center',
            },
            drawerLabel: 'Eventos',
            drawerIcon: () => (
                <Icon
                    type='font-awesome'
                    name='calendar'
                    color='#2a4065'
                    size={25}
                />
            ),
        };
    }
  
    render() {
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
                    onPress={(e) => {
                        const prop = 'coords';
                        const value = {
                            lat: e.nativeEvent.coordinate.latitude,
                            long: e.nativeEvent.coordinate.longitude
                        };
                        this.props.editEvent({ prop, value });
                    }}
                >
                    <Marker coordinate={latLng} image={ICON} />
                </MapView>
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

export default VisualizarEventoNoMapa;
