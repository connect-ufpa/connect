import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import { connect } from 'react-redux';
import { showMarker } from '../actions';
import { Button } from './commons/';
import Styles from '../Styles';

class SalvarEventos extends Component {
    static navigationOptions = {
        header: null
      }
      constructor(props) {
        super(props);
        this.state = { text: '' };
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
                onPress={(e) => { this.props.showMarker(e); }}
            >
                {this.props.marker.map((marker) => {
                    return (
                        <Marker
                            {...marker}
                            image={require('../../assets/img/logo.png')}
                            tracksInfoWindowChanges
                            showCallout
                           
                        >
                        <Callout>

                            <View style={styles.cardStyle}>
                                <Text>Abddasdd</Text>
                                <TextInput
                                    style={{ height: 80, width: 80, borderColor: 'gray', borderWidth: 1 }}
                                    onChangeText={(text) => console.log({ text })}
                                    value={this.state.text}
                                />
                                <Button
                                    text="Entrar"
                                    styles={Styles.btnConfirm}
                                    onPress={() => { console.log("estpui"); }}
                                />
                            </View>
                        </Callout>
                        </Marker>
                    );
                }
                )}
            </MapView>
        );
    }
}

const styles = {
    mapStyle: {
        height: '100%',
        width: '100%'
    },
    cardStyle: {
        backgroundColor: 'white'
    }
};
const mapStatesToProps = (state) => {
    return { marker: state.evento.marker };
};

export default connect(mapStatesToProps, { showMarker })(SalvarEventos);

