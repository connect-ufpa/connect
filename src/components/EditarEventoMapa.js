import React, { Component } from 'react';
import { View, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import MapView, { Marker } from 'react-native-maps';
import { Icon } from 'react-native-elements';
import { editEvent, saveNewEventCoords } from '../actions';
import { HeaderImage, Button, CardSection } from '../components/commons';
import Styles from '../Styles';

const Height = Dimensions.get('window').height;
const HalfHeight = Height * 0.75;
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
                <CardSection styleSection={{ position: 'absolute', marginTop: HalfHeight }}>
                    <Button
                        text="Salvar Localização"
                        styles={Styles.btnConfirm}
                        onPress={() => {
                            this.props.saveNewEventCoords({
                            id: this.props.id,
                            coords
                        }); 
                    }}
                    />
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
