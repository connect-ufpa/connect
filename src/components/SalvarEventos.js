import React, { Component } from 'react';
import { View, Modal, TouchableHighlight, Dimensions, ScrollView, TextInput } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { connect } from 'react-redux';
import { Icon } from 'react-native-elements';
import { showMarkerAndModal, closeModal, eventNameChange, eventDescriptionChange, eventLocalChange } from '../actions';
import { Button, Input, CardSection } from './commons/';
import Styles from '../Styles';

const Height = Dimensions.get('window').height;
const HalfHeight = Height * 0.3;


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
                        longitudeDelta: 0.0030
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
                >
                    <ScrollView style={Styles.scrollViewStyle} >
                        <View style={[Styles.eventCardStyle, { marginTop: HalfHeight }]}>
                            <View style={{ alignItems: 'flex-end', paddingTop: 5, paddingRight: 10 }}>
                                <TouchableHighlight
                                    onPress={() => { this.props.closeModal(); }}
                                >
                                    <View>
                                        <Icon
                                            type='font-awesome'
                                            name='times-circle'
                                            color='#2a4065'
                                            size={30}
                                        />
                                    </View>
                                </TouchableHighlight>
                            </View>
                            <CardSection>
                                <Input
                                    placeholder="Nome do evento:"
                                    onChangeText={texto => this.props.eventNameChange(texto)}
                                    value={this.props.nomeEvento}
                                />
                            </CardSection>
                            <CardSection>
                                <TextInput
                                    style={Styles.inputStyle}
                                    placeholder="Descrição do evento:"
                                    onChangeText={texto => this.props.eventDescriptionChange(texto)}
                                    value={this.props.descricaoEvento}
                                    underlineColorAndroid='transparent'
                                    multiline={true}
                                    numberOfLines={4}
                                    maxLength={250}
                                />
                            </CardSection>
                            <CardSection>
                                <Input
                                    placeholder="Local:"
                                    onChangeText={texto => this.props.eventLocalChange(texto)}
                                    value={this.props.nomeEvento}
                                />
                            </CardSection>
                            <CardSection>
                                <Input
                                    placeholder="00/00/000"
                                    onChangeText={texto => this.props.eventLocalChange(texto)}
                                    value={this.props.nomeEvento}
                                />
                                <Input
                                    placeholder="00:00"
                                    onChangeText={texto => this.props.eventLocalChange(texto)}
                                    value={this.props.nomeEvento}
                                />
                            </CardSection>
                            <CardSection>
                                <Button
                                    text="Salvar"
                                    styles={Styles.btnConfirm}
                                    onPress={() => { this.props.loginUser(user); }}
                                />

                            </CardSection>
                        </View>
                    </ScrollView>
                </Modal>
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
const mapStatesToProps = (state) => {
    return { 
        marker: state.evento.marker,
        modal: state.evento.modal,
        nomeEvento: state.nomeEvento,
        descricaoEvento: state.descricaoEvento,
        localEvento: state.localEvento 
    };
};

export default connect(mapStatesToProps, { 
                        showMarkerAndModal, 
                        closeModal, 
                        eventNameChange, 
                        eventDescriptionChange,
                        eventLocalChange })(SalvarEventos);

