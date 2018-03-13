import React, { Component } from 'react';
import MapView, { Marker } from 'react-native-maps';

class SalvarEventos extends Component {
    static navigationOptions = {
        header: null
      }
    
    render() {
        return (
        <MapView
            style={styles.mapStyle}
            initialRegion={{
              latitude: -1.473987,
              longitude: -48.452267,
              latitudeDelta: 0.00121,
              longitudeDelta: 0.0099
            }}
        />
        );
    }
}

const styles = {
    mapStyle: {
        height: '100%',
        width: '100%'
    }
};

export default SalvarEventos;

