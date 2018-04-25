import React, { Component } from 'react';
import { onNameChanged, onRegistrationChanged, onBirthChanged, onEmailChanged, authUser, adicionaContato, dataPerfil } from '../actions';
import { Dimensions, Text, ScrollView, View, Alert } from 'react-native';
import { Card, CardSection, Texts, HeaderImage, Input, Button } from './commons';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import Styles from '../Styles';


class EditMeuPerfil extends Component {
    static navigationOptions = {
      title: 'Editar Perfil',
      headerTintColor: '#2A4065',
      headerTitleStyle: {
        fontFamily: 'Ubuntu',
        fontSize: 20,
        fontWeight: '200',
        textAlign: 'center'
      },
      headerStyle: { 
        elevation: 5
      }
    };
  componentWillMount() {
    this.props.dataPerfil();
  }
  

  renderUpdateUserButton() {
    const user = {
        name: this.props.namePerfil,
        registration: this.props.registrationPerfil,
        birthday: this.props.birthdayPerfil,
        // email: this.props.email,
        // error: this.props.error
    }

    if (this.props.loading) {
      return (<Spinner size="large" color="#ffff" />);
    }

        return (
          <Button
            text="Salvar"
            styles={Styles.btnConfirm}
            onPress={() => { this.props.dataPerfil(); }}
          />
        );
    }


  render() {
    return (
      <LinearGradient colors={['#2A4065', '#2BA3DA']}>
        <ScrollView style={Styles.scrollViewStyle}>
          <Card addStyle={{ paddingBottom: 40 }}>
            <CardSection>
              <Input
                placeholder="Nome:"
                onChangeText={false}
                value={this.props.namePerfil}
              />
            </CardSection>
            <View>
              <Texts text={this.props.errorMessageName} />
            </View>
            <CardSection>
              <Input
                placeholder="Matrícula:"
                onChangeText={false}
                value={this.props.registrationPerfil}
              />
            </CardSection>
            <View>
              <Texts text={this.props.errorMessageRegistration} />
            </View>
            <CardSection>
              <Input
                placeholder="Nascimento: 00/00/0000"
                onChangeText={false}
                value={this.props.birthdayPerfil}
              />
            </CardSection>
            <View>
              <Texts text={this.props.errorMessageBirthday} />
            </View>
            <CardSection>
              {this.renderUpdateUserButton()}
            </CardSection>
            <View>
              <Texts text={this.props.errorMessageCreateAccountFail} />
            </View>
          </Card>
        </ScrollView>
      </LinearGradient>
    );
  }
}
const mapStateToProps = (state) => {
  return {
      namePerfil: state.perfil.namePerfil,
      registrationPerfil: state.perfil.registrationPerfil,
      birthdayPerfil: state.perfil.birthdayPerfil
  };
};

export default connect(mapStateToProps, {dataPerfil})(EditMeuPerfil);