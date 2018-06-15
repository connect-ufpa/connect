import React, { Component } from 'react';
import { View, TextInput, ScrollView, Picker, TouchableOpacity, DatePickerAndroid, TimePickerAndroid } from 'react-native';
import { connect } from 'react-redux';
import { Icon } from 'react-native-elements';
import { editEvent, saveEditedEvent } from '../actions';
import { CardSection, Input, Texts, Button, Loading } from '../components/commons';
import Styles from '../Styles';

class EditarEvento extends Component {
    static navigationOptions = {
        title: 'Editar evento',
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
        const key = Object.keys(params);
        key.forEach(prop => {
            const value = params[prop];
            this.props.editEvent({ prop, value });
        });
    }

    async openAndroidTimePicker(prop) {
        try {
            const { action, hour, minute } = await TimePickerAndroid.open({
                is24Hour: true,
            });
            if (action !== TimePickerAndroid.dismissedAction) {
                const hora = `${hour}:${minute}`;
                this.props.editEvent({ prop, value: hora });
            }
        } catch ({ code, message }) {
            console.warn('Cannot open time picker', message);
        }
    }

    async openAndroidDatePicker(prop) {
        try {
            const { action, year, month, day } = await DatePickerAndroid.open();
            if (action !== DatePickerAndroid.dismissedAction) {
                const data = `${day}/${month}/${year}`;
                this.props.editEvent({ prop, value: data });
            }
        } catch ({ code, message }) {
            console.warn('Cannot open date picker', message);
        }
    }

    renderSaveEventButton() {
        const evento = {
            id: this.props.id,
            nome: this.props.nome,
            descricao: this.props.descricao,
            local: this.props.local,
            coords: this.props.coords,
            data: this.props.data,
            hora: this.props.hora,
            error: this.props.error
        };
        if (this.props.loading) {
            return <Loading />;
        }
        return (
            <View style={{ alignItems: 'center' }}>
                <TouchableOpacity onPress={() => { this.props.saveEditedEvent(evento); }} >
                    <View style={[Styles.iconButtomStyle, { backgroundColor: '#2A4065' }]} >
                        <Icon
                            type="material-community"
                            name="check"
                            color="#FFF"
                            size={25}
                        />
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
    render() {
        const param = {
            id: this.props.id,
            coords: this.props.coords
        };
        return (
            <ScrollView >
                <View style={[Styles.eventCardStyle, { marginTop: 5, marginBottom: 5, elevation: 5, flex: 1 }]} >
                    <CardSection>
                        <View style={{ alignItems: 'center' }}>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate('EditarEventoMapa', { param }); }} >
                                <View style={[Styles.iconButtomStyle, { backgroundColor: '#2A4065' }]} >
                                    <Icon
                                        type="material-community"
                                        name="map-marker"
                                        color="#FFF"
                                        size={25}
                                    />
                                </View>
                            </TouchableOpacity>
                        </View>
                    </CardSection>
                    <CardSection>
                        <Texts text='Clique nos campos para editá-los' style='medium' color="#2a4065" />
                    </CardSection>
                    <CardSection>
                        <Input
                            onChangeText={text => this.props.editEvent({ prop: 'nome', value: text })}
                            value={this.props.nome}
                        />
                    </CardSection>
                    <CardSection>
                        <View style={{ flex: 1, elevation: 8, padding: 5, borderRadius: 5, borderColor: '#FFF', flexDirection: 'row', backgroundColor: '#FFF' }}>
                            <TextInput
                                style={Styles.inputStyle}
                                onChangeText={text => this.props.editEvent({ prop: 'descricao', value: text })}
                                value={this.props.descricao}
                                underlineColorAndroid='transparent'
                                multiline
                                numberOfLines={4}
                                maxLength={250}
                            />
                        </View>
                    </CardSection>
                    <CardSection>
                        <Input
                            onChangeText={text => this.props.editEvent({ prop: 'local', value: text })}
                            value={this.props.local}
                        />
                    </CardSection>
                    <CardSection>
                        <Texts text='Área Temática' style='medium' color="#2a4065" />
                    </CardSection>
                    <CardSection>
                        <Picker
                            selectedValue={this.props.area_tematica}
                            style={{ height: 50, width: 250 }}
                            onValueChange={texto => this.props.editEvent({ prop: 'area_tematica', value: texto })}
                        >
                            <Picker.Item label="Comunicação" value="Comunicação" />
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
                        <Texts text='Data de início' style='medium' color="#2a4065" />
                    </CardSection>
                    <CardSection>
                        <View style={{ flex: 1, padding: 5, flexDirection: 'row', justifyContent: 'center' }}>
                            <View style={{ flex: 1, paddingTop: 6, paddingBottom: 6 }}>
                                <Input
                                    onChangeText={texto => this.props.editEvent({ prop: 'data_inicio', value: texto })}
                                    placeholder="00/00/000"
                                    value={this.props.data_inicio}
                                />
                            </View>
                            <TouchableOpacity onPress={() => { this.openAndroidDatePicker('data_inicio'); }}>
                                <View style={[Styles.iconButtomEventStyle, { backgroundColor: '#2A4065' }]}>
                                    <Icon
                                        type="material-community"
                                        name="calendar-text"
                                        color="#FFF"
                                        size={22}
                                    />
                                </View>
                            </TouchableOpacity>
                        </View>
                    </CardSection>
                    <CardSection>
                        <Texts text='Hora de início' style='medium' color="#2a4065" />
                    </CardSection>
                    <CardSection>
                        <View style={{ flex: 1, padding: 5, flexDirection: 'row', justifyContent: 'center' }}>
                            <View style={{ flex: 1, paddingTop: 6, paddingBottom: 6 }}>
                                <Input
                                    placeholder="00:00"
                                    onChangeText={texto =>
                                        this.props.editEvent({
                                            prop: 'hora_inicio',
                                            value: texto,
                                        })
                                    }
                                    value={this.props.hora_inicio}
                                />
                            </View>
                            <TouchableOpacity onPress={() => { this.openAndroidTimePicker('hora_inicio'); }}>
                                <View style={[Styles.iconButtomEventStyle, { backgroundColor: '#2A4065' }]}>
                                    <Icon
                                        type="material-community"
                                        name="clock"
                                        color="#FFF"
                                        size={22}
                                    />
                                </View>
                            </TouchableOpacity>
                        </View>
                    </CardSection>
                    <CardSection>
                        <Texts text='Data de fim' style='medium' color="#2a4065" />
                    </CardSection>
                    <CardSection>
                        <View style={{ flex: 1, padding: 5, flexDirection: 'row', justifyContent: 'center' }}>
                            <View style={{ flex: 1, paddingTop: 6, paddingBottom: 6 }}>
                                <Input
                                    onChangeText={texto => this.props.editEvent({ prop: 'data_fim', value: texto })}
                                    placeholder="00/00/000"
                                    value={this.props.data_fim}
                                />
                            </View>
                            <TouchableOpacity onPress={() => { this.openAndroidDatePicker('data_fim'); }}>
                                <View style={[Styles.iconButtomEventStyle, { backgroundColor: '#2A4065' }]}>
                                    <Icon
                                        type="material-community"
                                        name="calendar-text"
                                        color="#FFF"
                                        size={22}
                                    />
                                </View>
                            </TouchableOpacity>
                        </View>
                    </CardSection>
                    <CardSection>
                        <Texts text='Hora do Término' style='medium' color="#2a4065" />
                    </CardSection>
                    <CardSection>
                        <View style={{ flex: 1, padding: 5, flexDirection: 'row', justifyContent: 'center' }}>
                            <View style={{ flex: 1, paddingTop: 6, paddingBottom: 6 }}>
                                <Input
                                    placeholder="00:00"
                                    onChangeText={texto =>
                                        this.props.editEvent({
                                            prop: 'hora_fim',
                                            value: texto,
                                        })
                                    }
                                    value={this.props.hora_fim}
                                />
                            </View>
                            <TouchableOpacity onPress={() => { this.openAndroidTimePicker('hora_fim'); }}>
                                <View style={[Styles.iconButtomEventStyle, { backgroundColor: '#2A4065' }]}>
                                    <Icon
                                        type="material-community"
                                        name="clock"
                                        color="#FFF"
                                        size={22}
                                    />
                                </View>
                            </TouchableOpacity>
                        </View>
                    </CardSection>
                    <View style={{ alignItems: 'center' }}>
                        <Texts text={this.props.errorData} color='grey' />
                        <Texts text={this.props.errorHora} color='grey' />
                    </View>
                    <CardSection>
                        {this.renderSaveEventButton()}
                    </CardSection>
                </View>
            </ScrollView>
        );
    }
}
const mapStateToProps = (state) => {
    const { id, nome, descricao, local, area_tematica, data_inicio, hora_inicio, data_fim, hora_fim, coords, loading, errorData, errorHora, error } = state.eventoEdicao;

    return { id, nome, descricao, local, area_tematica, data_inicio, hora_inicio, data_fim, hora_fim, coords, errorData, errorHora, error, loading };
};

export default connect(mapStateToProps, { editEvent, saveEditedEvent })(EditarEvento);
