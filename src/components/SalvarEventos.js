import React, { Component } from 'react';
import { View, Modal, TouchableHighlight, Dimensions, ScrollView, TextInput, Picker } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { connect } from 'react-redux';
import { Icon } from 'react-native-elements';
import { showMarkerAndModal, closeModal, eventFieldChange, saveEvent } from '../actions';
import { Button, Input, CardSection, Texts, Spinner, HeaderImage, Card } from './commons/';
import Styles from '../Styles';

const HEIGHT = Dimensions.get('window').height;
const HALFHEIGTH = HEIGHT * 0.55;
const MODALSUCCESS = HEIGHT * 0.4;

class SalvarEventos extends Component {
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

    renderSaveEventButton() {
        const evento = {
            nome: this.props.nome,
            descricao: this.props.descricao,
            local: this.props.local,
            area_tematica: this.props.area,
            coords: {
                lat: this.props.region.latitude,
                long: this.props.region.longitude
            },
            data_inicio: this.props.dataInicio,
            hora_inicio: this.props.horaInicio,
            data_fim: this.props.dataFim,
            hora_fim: this.props.horaFim,
            error: this.props.error
        };
        if (this.props.loading) {
            return (<Spinner size="large" color="#ffff" />);
        }
        return (
            <Button
                text="Salvar Evento"
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
                        return (<Marker key={marker} {...marker} image={require('../../assets/img/marker.png')} />);
                    }
                    )}
                </MapView>

                <Modal
                    animationType="slide"
                    transparent
                    visible={this.props.modal}
                    onRequestClose={() => { }}
                >
                    <ScrollView style={Styles.scrollViewStyle} >
                        <View style={[Styles.eventCardStyle, { marginTop: HALFHEIGTH }]}>
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
                                    onChangeText={texto => this.props.eventFieldChange({ prop: 'nome', value: texto })}
                                    value={this.props.nome}
                                />
                            </CardSection>
                            <CardSection>
                                <TextInput
                                    style={Styles.inputStyle}
                                    placeholder="Descrição do evento:"
                                    onChangeText={texto => this.props.eventFieldChange({ prop: 'descricao', value: texto })}
                                    value={this.props.descricao}
                                    underlineColorAndroid='transparent'
                                    multiline
                                    numberOfLines={4}
                                    maxLength={250}
                                />
                            </CardSection>
                            <CardSection>
                                <Input
                                    placeholder="Local:"
                                    onChangeText={texto => this.props.eventFieldChange({ prop: 'local', value: texto })}
                                    value={this.props.local}
                                />
                            </CardSection>
                            <CardSection>
                                <Texts text='Área Temática' style='medium' />
                            </CardSection>
                            <CardSection>
                                <Picker
                                    selectedValue={this.props.area}
                                    style={{ height: 50, width: 250 }}
                                    onValueChange={texto => this.props.eventFieldChange({ prop: 'area', value: texto })}
                                >
                                    <Picker.Item label="Comunição" value="Comunição" />
                                    <Picker.Item label="Cultura" value="Cultura" />
                                    <Picker.Item label="Direitos Humanos e Justiça" value="Direitos Humanos e Justiça" />
                                    <Picker.Item label="Educação" value="Educação" />
                                    <Picker.Item label="Meio Ambiente" value="Meio Ambiente" />
                                    <Picker.Item label="Ciências Sociais e Aplicadas" value="Ciências Sociais e Aplicadas" />
                                    <Picker.Item label="Saúde" value="Saúde" />
                                    <Picker.Item label="Tecnologia e Produção" value="Tecnologia e Produção" />
                                    <Picker.Item label="Trabalho" value="Trabalho" />
                                </Picker>
                            </CardSection>
                            <CardSection>
                                <Texts text='Início do Evento' style='medium' />
                            </CardSection>
                            <CardSection>
                                <Input
                                    placeholder="00/00/000"
                                    onChangeText={texto => this.props.eventFieldChange({ prop: 'dataInicio', value: texto })}
                                    value={this.props.dataInicio}
                                />
                                <Input
                                    placeholder="00:00"
                                    onChangeText={texto => this.props.eventFieldChange({ prop: 'horaInicio', value: texto })}
                                    value={this.props.horaInicio}
                                />
                            </CardSection>
                            <CardSection>
                                <Texts text='Término do Evento' style='medium' />
                            </CardSection>
                            <CardSection>
                                <Input
                                    placeholder="00/00/000"
                                    onChangeText={texto => this.props.eventFieldChange({ prop: 'dataFim', value: texto })}
                                    value={this.props.dataFim}
                                />
                                <Input
                                    placeholder="00:00"
                                    onChangeText={texto => this.props.eventFieldChange({ prop: 'horaFim', value: texto })}
                                    value={this.props.horaFim}
                                />
                            </CardSection>
                            <View style={{ alignItems: 'center' }}>
                                <Texts text={this.props.errorData} color='grey' />
                                <Texts text={this.props.errorHora} color='grey' />
                                <Texts text={this.props.createFail} color='grey' />
                            </View>
                            <CardSection>
                                {this.renderSaveEventButton()}
                            </CardSection>
                        </View>
                    </ScrollView>
                </Modal>
                <Modal
                    animationType="slide"
                    transparent
                    visible={this.props.successModal}
                    onRequestClose={() => { }}
                >
                    <View style={[Styles.eventCardStyle, { marginTop: MODALSUCCESS }]}>
                        <CardSection>
                            <Texts text='Evento salvo com sucesso!' style='medium' />
                        </CardSection>
                        <CardSection>
                            <Button
                                text="Voltar"
                                styles={Styles.btnCancel}
                                onPress={() => { this.props.navigation.navigate('Eventos'); this.props.closeModal(); }}
                            />
                        </CardSection>
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
    }
};
const mapStatesToProps = (state) => {
    const { nome, descricao, local, area, dataInicio, horaInicio, dataFim, horaFim, errorData, errorHora } = state.evento;
    return {
        nome,
        descricao,
        local,
        area,
        dataInicio,
        horaInicio,
        dataFim,
        horaFim,
        errorData,
        errorHora,
        region: state.evento.region,
        marker: state.evento.marker,
        modal: state.evento.modal,
        successModal: state.evento.successModal,
        loading: state.evento.loading,
        error: state.evento.error,
        createFail: state.evento.createFail
    };
};

export default connect(mapStatesToProps, {
    showMarkerAndModal,
    closeModal,
    eventFieldChange,
    saveEvent
})(SalvarEventos);

