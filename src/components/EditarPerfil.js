import React, { Component } from 'react';
import { View, ScrollView, TouchableOpacity } from 'react-native';
import { CardSection, Input, Loading, Texts } from './commons';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import { 
  onNameChanged,
  onRegistrationChanged,
  onBirthChanged,
  dataPerfil,
  saveDataUser,
} from '../actions/';
import Styles from '../Styles';

class EditarPerfil extends Component {
  static navigationOptions = {
    title: 'Editar perfil',
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

  showLoading() {
    if (this.props.loading) return (<Loading />);
  }

  renderSavePerfilButton() {
    const userUpdate = {
      // nomeEditPerfil: this.props.nome,
      // matriculaEditPeril: this.props.descricao,
      // DataNascimentoEditPerfil: this.props.local,
      // area_tematicaEditPerfil: this.props.area_tematica,
      // coords: {
      //   lat: this.props.region.latitude,
      //   long: this.props.region.longitude,
      // },
      // data_inicio: this.props.data_inicio,
      // hora_inicio: this.props.hora_inicio,
      // data_fim: this.props.data_fim,
      // hora_fim: this.props.hora_fim,
      // error: this.props.error,
    };
  
    return (
      <View style={{ alignItems: 'center' }}>
        <TouchableOpacity
          onPress={() => false}
          // onPress={() => {
          //   this.props.saveEvent(evento);
          // }}
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
        <ScrollView style={Styles.scrollViewStyle}>
          <View
            style={{
              alignItems: 'flex-end',
              paddingTop: 5,
              paddingRight: 10,
            }}
          >
          </View>
          <CardSection>
            <Input
                iconName={'person'}
                placeholder="Nome:"
                onChangeText={namePerfil => this.props.onNameChanged(namePerfil)}
                value={this.props.namePerfil}
            />
          </CardSection>
          <View>
            <Texts text={this.props.errorMessageNamePerfil} />
          </View>
          <CardSection>
            <Input
                iconName={'school'}
                keyboardType={'numeric'}
                placeholder="Matrícula:"
                value={this.props.registrationPerfil}
                onChangeText={registrationPerfil => this.props.onRegistrationChanged(registrationPerfil)}
            />
          </CardSection>
          <CardSection>
            <Input
                iconName={'date-range'}
                value={this.props.birthdayPerfil}
                placeholder={'Nascimento: 00/00/0000'}
                onChangeText={birthdayPerfil => this.props.onBirthChanged(birthdayPerfil)}
            />
          </CardSection>
          <CardSection>{this.renderSavePerfilButton()}</CardSection>
        </ScrollView>
      </View >
    );
  }
}

const mapStateToProps = state => {
  return {
    namePerfil: state.perfil.namePerfil,
    registrationPerfil: state.perfil.registrationPerfil,
    birthdayPerfil: state.perfil.birthdayPerfil,
    idadePerfil: state.perfil.idadePerfil,
    areaTematica: state.perfil.areaTematica,
    errorMessageNamePerfil: state.perfil.errorMessageNamePerfil,
    errorMessageEmail: state.perfil.errorMessageEmail,
    errorMessageBirthday: state.perfil.errorMessageBirthday,
    errorMessageRegistration: state.perfil.errorMessageRegistration,
};
}

export default connect(mapStateToProps, {
  dataPerfil,
  onNameChanged,
  onRegistrationChanged,
  onBirthChanged,
  saveDataUser,
})(EditarPerfil);

