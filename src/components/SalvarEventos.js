import React, { Component } from 'react';
import { View, Modal, TouchableHighlight, Dimensions, ScrollView, TextInput } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { connect } from 'react-redux';
import { Icon } from 'react-native-elements';
import { StackNavigator } from 'react-navigation';
import { showMarkerAndModal, closeModal, eventNameChange, eventDescriptionChange, eventLocalChange, eventDateChange, eventHourChange, saveEvent } from '../actions';
import { Button, Input, CardSection, Texts, Spinner, HeaderImage } from './commons/';
import Styles from '../Styles';

const Height = Dimensions.get('window').height;
const HalfHeight = Height * 0.55;


class SalvarEventos extends Component {
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
            drawerLabel: 'Salvar Evento',
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
                    onPress={() => navigate('Eventos')}
                />
        };
    }

    renderSaveEventButton() {
        const evento = {
            nome: this.props.nomeEvento,
            descricao: this.props.descricaoEvento,
            local: this.props.localEvento,
            coords: {
                lat: this.props.region.latitude, 
                long: this.props.region.longitude
                }, 
            data: this.props.dataInicioEvento,
            hora: this.props.horaInicioEvento,
            error: this.props.error
        };
        if (this.props.loading) {
          return (<Spinner size="large" color="#ffff" />);
        }
        return (
          <Button
            text="Cadastrar"
            styles={Styles.btnConfirm}
            onPress={() => { this.props.saveEvent(evento); }}
          />
        );
      }
    render() {
        return (
            <View>
                <MapView
                    style={styles.mapStyle}
                    region={this.props.region}
                    onPress={(e) => { this.props.showMarkerAndModal(e); }}
                >
                    {this.props.marker.map((marker) => {
                        return (
                            <Marker key={marker} {...marker} image={require('../../assets/img/marker.png')} />
                        );
                    }
                    )}
                </MapView>
              
                <Modal
                    animationType="slide"
                    transparent
                    visible={this.props.modal}
                    onRequestClose={() =>{}}
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
                                    value={this.props.localEvento}
                                />
                            </CardSection>
                            <CardSection>
                                <Input
                                    placeholder="00/00/000"
                                    onChangeText={texto => this.props.eventDateChange(texto)}
                                    value={this.props.dataInicioEvento}
                                />
                                <Input
                                    placeholder="00:00"
                                    onChangeText={texto => this.props.eventHourChange(texto)}
                                    value={this.props.horaInicioEvento}
                                />
                            </CardSection>
                            <View style={{ alignItems: 'center' }}>
                                <Texts text={this.props.msgErrorDataInicioEvento} color='grey' />
                                <Texts text={this.props.msgErrorHoraInicioEvento} color='grey' />
                            </View>
                            <CardSection>
                               {this.renderSaveEventButton()}
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
        region: state.evento.region,
        marker: state.evento.marker,
        modal: state.evento.modal,
        nomeEvento: state.evento.nomeEvento,
        descricaoEvento: state.evento.descricaoEvento,
        localEvento: state.evento.localEvento,
        dataInicioEvento: state.evento.dataInicioEvento,
        msgErrorDataInicioEvento: state.evento.msgErrorDataInicioEvento,
        horaInicioEvento: state.evento.horaInicioEvento,
        msgErrorHoraInicioEvento: state.evento.msgErrorHoraInicioEvento,
        loading: state.evento.loading,
        error: state.evento.error
    };
};

export default connect(mapStatesToProps, { 
                        showMarkerAndModal, 
                        closeModal, 
                        eventNameChange, 
                        eventDescriptionChange,
                        eventLocalChange,
                        eventDateChange,
                        eventHourChange,
                        saveEvent })(SalvarEventos);

