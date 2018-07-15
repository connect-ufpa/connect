import React, { Component } from 'react';
import { View, Modal, TouchableHighlight, Dimensions, ScrollView, TextInput, Picker, Text, TouchableOpacity, DatePickerAndroid, TimePickerAndroid } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { connect } from 'react-redux';
import { Icon } from 'react-native-elements';
import { showMarkerAndModal, closeModal, eventFieldChange, saveEvent, showHelper, closeEventHelper } from '../actions';
import { Input, CardSection, Texts, Loading } from './commons/';
import Styles from '../Styles';

const { height, width } = Dimensions.get('window');
const HEIGHT = Dimensions.get('window').height;
const HALFHEIGTH = HEIGHT * 0.55;
const ICON = require('../../assets/img/pin.png');

class CriarEvento extends Component {
  static navigationOptions = {
    title: 'Criar evento',
    headerTintColor: '#2A4065',
    headerTitleStyle: {
      fontFamily: 'Ubuntu-Medium',
      fontWeight: '200',
      fontSize: 18,
    },
    headerStyle: {
      elevation: 5,
    },
  };

  componentWillMount() {
    if (this.props.positionHelper === 0.2 || !this.props.helper) this.props.showHelper();
  }

  async openAndroidTimePicker(prop) {
    try {
      const { action, hour, minute } = await TimePickerAndroid.open({
        is24Hour: true,
      });
      if (action !== TimePickerAndroid.dismissedAction) {
        const hora = `${hour}:${minute}`;
        this.props.eventFieldChange({ prop, value: hora });
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
        this.props.eventFieldChange({ prop, value: data });
      }
    } catch ({ code, message }) {
      console.warn('Cannot open date picker', message);
    }
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
                this.props.closeEventHelper();
              }}
            >
              <View style={Styles.buttomCloseStyle}>
                <Icon name="clear" color="#FFF" size={15} />
              </View>
            </TouchableOpacity>
          </View>
          <Text style={Styles.textCardHelperStyle}>
            {this.props.helperMessage}
          </Text>
        </View>
      );
    }
  }

  renderSaveEventButton() {
    const evento = {
      nome: this.props.nome,
      descricao: this.props.descricao,
      local: this.props.local,
      area_tematica: this.props.area_tematica,
      coords: {
        lat: this.props.region.latitude,
        long: this.props.region.longitude,
      },
      data_inicio: this.props.data_inicio,
      hora_inicio: this.props.hora_inicio,
      data_fim: this.props.data_fim,
      hora_fim: this.props.hora_fim,
      error: this.props.error,
    };
    if (this.props.loading) {
      return <Loading />;
    }
    return (
      <View style={{ alignItems: 'center' }}>
        <TouchableOpacity
          onPress={() => {
            this.props.saveEvent(evento);
          }}
        >
          <View
            style={[Styles.iconButtomStyle, { backgroundColor: '#2A4065' }]}
          >
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
    return (
      <View>
        <MapView
          style={styles.mapStyle}
          region={this.props.region}
          onPress={e => {
            this.props.showMarkerAndModal(e);
          }}
        >
          {this.props.marker.map(marker => {
            return <Marker key={marker} {...marker} image={ICON} />;
          })}
        </MapView>
        {this.renderHelper()}
        <Modal
          animationType="slide"
          transparent
          visible={this.props.modal}
          onRequestClose={() => {
            this.props.closeModal();
          }}
        >
          <ScrollView style={Styles.modalScrollViewStyle}>
            <View style={[Styles.eventCardStyle, { marginTop: HALFHEIGTH }]}>
              <View
                style={{
                  alignItems: 'flex-end',
                  paddingTop: 5,
                  paddingRight: 10,
                }}
              >
                <TouchableHighlight
                  onPress={() => {
                    this.props.closeModal();
                  }}
                >
                  <View style={Styles.buttomCloseStyle}>
                    <Icon name="clear" color="#FFF" size={15} />
                  </View>
                </TouchableHighlight>
              </View>
              <CardSection>
                <Texts text='Preencha os campos do evento' style='medium' color="#2a4065" />
              </CardSection>
              <CardSection>
                <Input
                  placeholder="Nome do evento:"
                  onChangeText={texto =>
                    this.props.eventFieldChange({ prop: 'nome', value: texto })
                  }
                  value={this.props.nome}
                />
              </CardSection>
              <CardSection>
                <View style={{ flex: 1, elevation: 8, padding: 5, borderRadius: 5, borderColor: '#FFF', flexDirection: 'row', backgroundColor: '#FFF' }}>
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
                </View>
              </CardSection>
              <CardSection>
                <Input
                  placeholder="Local:"
                  onChangeText={texto =>
                    this.props.eventFieldChange({ prop: 'local', value: texto })
                  }
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
                    style={{
                      height: 58,
                      width: '100%',
                      flex: 5,
                      paddingLeft: 20,
                      paddingRight: 20
                    }}
                    onValueChange={texto =>
                      this.props.eventFieldChange({
                        prop: 'area_tematica',
                        value: texto,
                      })
                    }
                  >
                    <Picker.Item color='gray' color='gray' label="Comunicação" value="Comunicação" />
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
                      onChangeText={texto => this.props.eventFieldChange({ prop: 'data_inicio', value: texto })}
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
                        this.props.eventFieldChange({
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
                      onChangeText={texto => this.props.eventFieldChange({ prop: 'data_fim', value: texto })}
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
                        this.props.eventFieldChange({
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
                <Texts text={this.props.errorData} color="grey" />
                <Texts text={this.props.errorHora} color="grey" />
                <Texts text={this.props.createFail} color="grey" />
              </View>
              <CardSection>{this.renderSaveEventButton()}</CardSection>
            </View>
          </ScrollView>
        </Modal >
      </View >
    );
  }
}

const styles = {
  mapStyle: {
    height: '100%',
    width: '100%',
  },
};
const mapStatesToProps = state => {
  const {
    nome,
    descricao,
    local,
    area_tematica,
    data_inicio,
    hora_inicio,
    data_fim,
    hora_fim,
    errorData,
    errorHora,
  } = state.evento;
  return {
    nome,
    descricao,
    local,
    area_tematica,
    data_inicio,
    hora_inicio,
    data_fim,
    hora_fim,
    errorData,
    errorHora,
    helper: state.evento.helper,
    positionHelper: state.evento.positionHelper,
    helperMessage: state.evento.helperMessage,
    region: state.evento.region,
    marker: state.evento.marker,
    modal: state.evento.modal,
    successModal: state.evento.successModal,
    loading: state.evento.loading,
    error: state.evento.error,
    createFail: state.evento.createFail,
  };
};

export default connect(mapStatesToProps, {
  showMarkerAndModal,
  closeModal,
  eventFieldChange,
  saveEvent,
  showHelper,
  closeEventHelper,
})(CriarEvento);
