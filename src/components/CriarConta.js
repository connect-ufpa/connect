import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import { connect } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import { onNameChanged, onRegistrationChanged, onBirthChanged, onEmailChanged, onPasswordChanged, onConfirmPasswordChanged, authUser } from '../actions';
import { Card, CardSection, Texts, Input, Button, Loading } from './commons';
import Styles from '../Styles';

class CriarConta extends Component {
  static navigationOptions = {
    title: 'Criar conta',
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

  showLoading() {
    if (this.props.loading) return (<Loading />);
  }

  renderCriarContaButton() {
    const user = {
      name: this.props.name,
      registration: this.props.registration,
      birthday: this.props.birthday,
      email: this.props.email,
      password: this.props.password,
      error: this.props.error
    };
    return (
      <Button
        text="Cadastrar"
        styles={Styles.btnConfirm}
        onPress={() => { this.props.authUser(user); }}
      />
    );
  }

  render() {
    return (
      <LinearGradient colors={['#2A4065', '#2BA3DA']}>
        <ScrollView style={Styles.scrollViewStyle}>
          {this.showLoading()}
          <Card addStyle={{ paddingBottom: 40 }}>
            <CardSection>
              <Input
                iconName={'person'}
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
                iconName={'school'}
                keyboardType={'numeric'}
                placeholder="Matrícula:"
                value={this.props.registration}
                onChangeText={registration => this.props.onRegistrationChanged(registration)}
              />
            </CardSection>
            <View>
              <Texts text={this.props.errorMessageRegistration} />
            </View>
            <CardSection>
              <Input
                iconName={'date-range'}
                value={this.props.birthday}
                placeholder={'Nascimento: 00/00/0000'}
                onChangeText={birthday => this.props.onBirthChanged(birthday)}
              />
            </CardSection>
            <View>
              <Texts text={this.props.errorMessageBirthday} />
            </View>

            <CardSection>
              <Input
                iconName={'email'}
                value={this.props.email}
                keyboardType={'email-address'}
                placeholder={'E-mail: aluno@email.com'}
              onChangeText={email => this.props.onEmailChanged(email)}
              />
            </CardSection>
            <View>
              <Texts text={this.props.errorMessageEmail} />
            </View>
            <CardSection>
              <Input
                secureTextEntry
                iconName={'vpn-key'}
                placeholder={'Senha:'}
                value={this.props.password}
                onChangeText={
                  password =>
                    this.props.onPasswordChanged(password)
                }
              />
            </CardSection>
            <View>
              <Texts text={this.props.errorMessagePassword} />
            </View>
            <CardSection>
              <Input
                secureTextEntry
                iconName={'vpn-key'}
                placeholder={'Confirmação de senha:'}
                value={this.props.confirmPassword}
                onChangeText={confirmPassword => this.props.onConfirmPasswordChanged(confirmPassword, this.props.password)}
              />
            </CardSection>
            <View>
              <Texts text={this.props.errorMessageConfirmPassword} />
            </View>
            <CardSection>
              {this.renderCriarContaButton()}
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
  authUser
})(CriarConta);
