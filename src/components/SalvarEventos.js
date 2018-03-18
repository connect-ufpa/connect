import React, { Component } from 'react';
import { View, Modal, TouchableHighlight, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { connect } from 'react-redux';
import { Icon } from 'react-native-elements';
import { showMarkerAndModal, closeModal } from '../actions';
import { Button, Input } from './commons/';
import Styles from '../Styles';

const Height = Dimensions.get('window').height;
const HalfHeight = Height * 0.5;

class SalvarEventos extends Component {
    static navigationOptions = {
        header: null
    }
    render() {
        return (
            <View>
                <MapView
                    style={styles.mapStyle}
                    initialRegion={{
                        latitude: -1.473987,
                        longitude: -48.452267,
                        latitudeDelta: 0.00121,
                        longitudeDelta: 0.0099
                    }}
                    onPress={(e) => { this.props.showMarkerAndModal(e); }}
                >
                    {this.props.marker.map((marker) => {
                        return (
                            <Marker {...marker} image={require('../../assets/img/marker.png')} />
                        );
                    }
                    )}
                </MapView>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={this.props.modal}
                    onRequestClose={() => {
                        alert('Modal has been closed.');
                    }}
                >
                    <View style={styles.modalStyle}>
                        <View>
                            <TouchableHighlight
                                onPress={() => {
                                    this.props.closeModal();
                                }}
                            >
                                <View style={{ alignItems: 'flex-end', paddingTop: 5, paddingRight: 10 }}>
                                    <Icon
                                        type='font-awesome'
                                        name='times-circle'
                                        color='#2a4065'
                                        size={30}
                                    />
                                </View>
                            </TouchableHighlight>

                        </View>
                    </View>
                </Modal>
            </View>
        );
    }
}

const styles = {
    mapStyle: {
        height: '100%',
        width: '100%'
    },
    modalStyle: {
        jutifycontent: 'flex-end',
        backgroundColor: '#ffff',
        borderRadius: 20,
        marginTop: HalfHeight,
        marginLeft: 10,
        marginRight: 10,
    }
};
const mapStatesToProps = (state) => {
    return { 
        marker: state.evento.marker,
        modal: state.evento.modal 
    };
};

export default connect(mapStatesToProps, { showMarkerAndModal, closeModal })(SalvarEventos);

