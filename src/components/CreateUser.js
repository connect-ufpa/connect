import React, { Component } from 'react';
import Swiper from 'react-native-swiper';
import LinearGradient from 'react-native-linear-gradient';
import { ScrollView, Image, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Card, CardSection, Texts, Input, Button, ButtonBack, Spinner } from './commons';
import { onNameChanged, onRegistrationChanged, onBirthChanged, onEmailChanged, onPasswordChanged, onConfirmPasswordChanged, saveUser } from '../actions';
import Styles from '../Styles';

const logo = require('../../assets/img/logo.png');

class CreateUser extends Component {

  renderCreateUserButton() {
    const user = {
        name: this.props.name,
        registration: this.props.registration,
        birthday: this.props.birthday,
        email: this.props.email,
        password: this.props.password,
        error: this.props.error
    }
    
    if (this.props.loading) {
      return (<Spinner size="large" color="#ffff" />);
    }
    return (
      <Button
        text="Cadastrar"
        styles={Styles.btnConfirm}
        onPress={() => { this.props.saveUser(user); }}
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
                onChangeText={name => this.props.onNameChanged(name)}
                value={this.props.name}
              />
            </CardSection>
            <View>
              <Texts text={this.props.errorMessageName} />
            </View>
            <CardSection>
              <Input
                placeholder="Matrícula:"
                onChangeText={registration => this.props.onRegistrationChanged(registration)}
                value={this.props.registration}
              />
            </CardSection>
            <View>
              <Texts text={this.props.errorMessageRegistration} />
            </View>
            <CardSection>
              <Input
                placeholder="Nascimento: 00/00/0000"
                onChangeText={birthday => this.props.onBirthChanged(birthday)}
                value={this.props.birthday}
              />
            </CardSection>
            <View>
              <Texts text={this.props.errorMessageBirthday} />
            </View>

            <CardSection>
              <Input
                placeholder="E-mail:"
                onChangeText={email => this.props.onEmailChanged(email)}
                value={this.props.email}
              />
            </CardSection>
            <View>
              <Texts text={this.props.errorMessageEmail} />
            </View>
            <CardSection>
              <Input
                placeholder="Senha:"
                secureTextEntry
                onChangeText={
                  password =>
                    this.props.onPasswordChanged(password)
                }
                value={this.props.password}
              />
            </CardSection>
            <View>
              <Texts text={this.props.errorMessagePassword} />
            </View>
            <CardSection>
              <Input
                placeholder="Confirmação de senha:"
                secureTextEntry
                onChangeText={
                  confirmPassword =>
                    this.props.onConfirmPasswordChanged(
                      confirmPassword, this.props.password
                    )
                }
                value={this.props.confirmPassword}
              />
            </CardSection>
            <View>
              <Texts text={this.props.errorMessageConfirmPassword} />
            </View>
            <CardSection>
              {this.renderCreateUserButton()}
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
    name: state.createUser.name,
    registration: state.createUser.registration,
    birthday: state.createUser.birthday,
    email: state.createUser.email,
    password: state.createUser.password,
    confirmPassword: state.createUser.confirmPassword,
    loading: state.createUser.loading,
    error: state.createUser.error,
    errorMessageName: state.createUser.errorMessageName,
    errorMessageRegistration: state.createUser.errorMessageRegistration,
    errorMessageBirthday: state.createUser.errorMessageBirthday,
    errorMessageEmail: state.createUser.errorMessageEmail,
    errorMessagePassword: state.createUser.errorMessagePassword,
    errorMessageConfirmPassword: state.createUser.errorMessageConfirmPassword,
    errorMessageCreateAccountFail: state.createUser.errorMessageCreateAccountFail
  };
};

export default connect(mapStateToProps, {
  onNameChanged,
  onRegistrationChanged,
  onBirthChanged,
  onEmailChanged,
  onPasswordChanged,
  onConfirmPasswordChanged,
  saveUser
})(CreateUser);
