import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Icon } from 'react-native-elements';
import { editEvent } from '../actions';
import { StackNavigator } from 'react-navigation';
import MapView, { Marker } from 'react-native-maps';
import { HeaderImage } from '../components/commons';
import Styles from '../Styles';

let lat = -1.473987;
let long = -48.452267;
let LatLng = {
    latitude: - 1.473987,
    longitude: - 48.452267,
  };

class EditarEventoMapa extends Component {
    static navigationOptions = ({ navigation }) => {
        const { navigate } = navigation;
        return {
            title: <HeaderImage />,
            headerStyle: {
                paddingLeft: 15,
                paddingRight: 35,
                height: 55
            },
            headerTitleStyle: {
                alignSelf: 'center',
            },
            drawerLabel: 'Editar Local no Mapa',
            drawerIcon: ({ tintColor }) => (
                <Icon
                    type='font-awesome'
                    name='calendar'
                    color='#2a4065'
                    size={25}
                />
            ),
            headerLeft:
                <Icon
                    name='arrow-left'
                    type='font-awesome'
                    color='#2a4065'
                    size={25}
                    onPress={() => navigate('EditarEventos')}
                />
        };
    }

    componentWillMount() {
        const { params } = this.props.navigation.state;
        const prop = 'coords';
        this.props.editEvent({ prop, params });
    }
    render() {
        if (this.props.coords) {
             lat = this.props.coords.lat;
            long = this.props.coords.long;
            LatLng = {
                latitude: this.props.coords.lat,
                longitude: this.props.coords.long
            };
        }
        return (
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
                    const coords = e.nativeEvent.coordinate;
                    console.log("COORDENADAS", coords)
                    this.props.editEvent({ prop, coords }); 
                    }}
            >
                {/* {this.props.coords.map((coord) => { */}
                    {/* return ( */}
                        <Marker coordinate={LatLng} image={require('../../assets/img/marker.png')} />
                    {/* ); */}
                {/* } */}
                {/* )} */}
            </MapView>
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
    const { coords } = state.eventoEdicao;
    
    return { coords };
 };
 
 export default connect(mapStateToProps, { editEvent })(EditarEventoMapa);
