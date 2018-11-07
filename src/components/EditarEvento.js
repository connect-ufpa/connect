import React, { Component } from 'react';
import { View, Text, Dimensions, TextInput, ScrollView, Picker, TouchableOpacity, DatePickerAndroid, TimePickerAndroid } from 'react-native';
import { connect } from 'react-redux';
import { Icon } from 'react-native-elements';
import { editEvent, saveEditedEvent, closeEventEditHelper } from '../actions';
import { CardSection, Input, Texts, Loading } from '../components/commons';
import Styles from '../Styles';

const { height, width } = Dimensions.get('window');
const HEIGHT = Dimensions.get('window').height;

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
                let hora;
                let minutos;
                if (hour < 10) hora = `0${hour}`;
                else hora = hour;
        
                if (minute < 10) minutos = `0${minute}`;
                else minutos = minute;
        
                const hours = `${hora}:${minutos}`;
                this.props.editEvent({ prop, value: hours });
            }
        } catch ({ code, message }) {
            console.warn('Cannot open time picker', message);
        }
    }

    async openAndroidDatePicker(prop) {
        try {
            const { action, year, month, day } = await DatePickerAndroid.open();
            if (action !== DatePickerAndroid.dismissedAction) {
                const correctMonth = month + 1;
                let dia;
                let mes;
                if (day < 10) dia = `0${day}`;
                else dia = day;
        
                if (month < 10) mes = `0${correctMonth}`;
                else mes = correctMonth;
        
                const data = `${dia}/${mes}/${year}`;
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
            area_tematica: this.props.area_tematica,
            local: this.props.local,
            coords: this.props.coords,
            data_inicio: this.props.data_inicio,
            hora_inicio: this.props.hora_inicio,
            data_fim: this.props.data_fim,
            hora_fim: this.props.hora_fim,
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

    renderHelper() {
        const { positionHelper } = this.props;
        if (this.props.helper) {
          return (
            <View
              style={[
                Styles.cardHelperStyle,
                {
                  marginBottom: HEIGHT * positionHelper,
                  width: width * 0.5,
                  height: height * 0.2,
                },
              ]}
            >
              <View style={{ flex: 2, flexDirection: 'row', margin: 5 }}>
                <Text style={Styles.dicaTextStyle}>Dica</Text>
                <TouchableOpacity
                  style={{ alignSelf: 'center' }}
                  onPress={() => {
                    this.props.closeEventEditHelper();
                  }}
                >
                  <View style={Styles.buttomCloseStyle}>
                    <Icon name="clear" color="#FFF" size={15} />
                  </View>
                </TouchableOpacity>
              </View>
              <Text style={Styles.textCardHelperStyle}>
                {'Evento salvo com sucesso! \n Clique na seta acima para voltar para a tela de evento'}
              </Text>
            </View>
          );
        }
      }

    render() {
        return (
            <ScrollView >
                <View style={[Styles.eventCardStyle, { marginTop: 5, marginBottom: 5, elevation: 5, flex: 1 }]} >
                    <CardSection>
                        <View style={{ alignItems: 'center' }}>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate('EditarEventoMapa'); }} >
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
                        <View style={Styles.viewInput}>
                            <Picker
                                selectedValue={this.props.area_tematica}
                                style={{ height: 58, width: '100%', flex: 5, paddingLeft: 20, paddingRight: 20 }}
                                onValueChange={texto => this.props.editEvent({ prop: 'area_tematica', value: texto })}
                            >
                                <Picker.Item color='gray' label="Comunicação" value="Comunicação" />
                                <Picker.Item color='gray' label="Cultura" value="Cultura" />
                                <Picker.Item color='gray' label="Direitos Humanos e Justiça" value="Direitos Humanos e Justiça" />
                                <Picker.Item color='gray' label="Educação" value="Educação" />
                                <Picker.Item color='gray' label="Meio Ambiente" value="Meio Ambiente" />
                                <Picker.Item color='gray' label="Ciências Sociais e Aplicadas" value="Ciências Sociais e Aplicadas" />
                                <Picker.Item color='gray' label="Saúde" value="Saúde" />
                                <Picker.Item color='gray' label="Tecnologia e Produção" value="Tecnologia e Produção" />
                                <Picker.Item color='gray' label="Trabalho" value="Trabalho" />
                            </Picker>
                        </View>
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
                {this.renderHelper()}
            </ScrollView>
        );
    }
}
const mapStateToProps = (state) => {
    const { id, nome, descricao, local, area_tematica, data_inicio, hora_inicio, data_fim, hora_fim, coords, loading, errorData, errorHora, error, helper, positionHelper } = state.eventoEdicao;

    return { id, nome, descricao, local, area_tematica, data_inicio, hora_inicio, data_fim, hora_fim, coords, errorData, errorHora, error, loading, helper, positionHelper };
};

export default connect(mapStateToProps, { editEvent, saveEditedEvent, closeEventEditHelper })(EditarEvento);
