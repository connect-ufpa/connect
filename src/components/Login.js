import React, { Component } from 'react';
import { ScrollView, Image, TouchableOpacity, View, Text } from 'react-native';
import { Input, Card, CardSection, Button, Texts, Loading } from './commons/';
import { loginEmailChange, loginPasswordChange, loginUser } from '../actions/';
import { connect } from 'react-redux';
import { StackNavigator } from 'react-navigation';
import LinearGradient from 'react-native-linear-gradient';
import Styles from '../Styles';

const logo = require('../../assets/img/logo.png');

class Login extends Component {
  static navigationOptions = {
    header: null,
  };

  renderLoginButton() {
    const user = {
      email: this.props.email,
      password: this.props.password,
      error: this.props.error,
      loading: false,
    };

    return (
      <Button
        text="Entrar"
        styles={Styles.btnConfirm}
        onPress={() => {
          this.props.loginUser(user);
        }}
      />
    );
  }

  showLoading() {
    if (this.props.loading) return <Loading />;
  }

  render() {
    return (
      <LinearGradient colors={['#2A4065', '#2BA3DA']}>
        <ScrollView style={Styles.scrollViewStyle}>
          <Card statusBarColor={'#2A4065'}>
            <CardSection>
              <Image
                source={logo}
                style={{ width: 50, height: 50, marginBottom: 10 }}
              />
            </CardSection>
            {/* <CardSection>
              <Text style={Styles.logoTextStyle}>Connect UFPa</Text>
            </CardSection> */}
            <View style={{ alignSelf: 'flex-start', padding: 20 }}>
              <Texts
                text={'Olá.'}
                style={'xlarge'}
                addStyle={{ textAlign: 'left' }}
              />
              <Texts
                text={'Seja bem-vindo ao Connect!'}
                style={'medium'}
                addStyle={{ fontSize: 16, marginTop: 10 }}
              />
              <Texts
                text={'Por favor, entre com seu e-mail e senha.'}
                style={'medium'}
                addStyle={{ fontSize: 16 }}
              />
            </View>
            <CardSection>
              <Input
                iconName={'email'}
                placeholder={'E-mail:'}
                value={this.props.email}
                keyboardType={'email-address'}
                onChangeText={email => this.props.loginEmailChange(email)}
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
                onChangeText={password =>
                  this.props.loginPasswordChange(password)
                }
              />
            </CardSection>
            <View>
              <Texts text={this.props.errorMessagePassword} />
            </View>
            <CardSection
              styleSection={{
                alignSelf: 'flex-end',
                marginTop: 0,
                marginRight: 5,
              }}
            >
              <View>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('EsqueciSenha')}
                >
                  <Texts text="Esqueci minha senha" style="small" />
                </TouchableOpacity>
              </View>
            </CardSection>
            <CardSection>{this.renderLoginButton()}</CardSection>
            <View>
              <Texts text={this.props.errorMessageLogin} />
            </View>
            <CardSection>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('CriarConta')}
              >
                <Texts text="Criar conta" style="medium" />
              </TouchableOpacity>
            </CardSection>
          </Card>
          {this.showLoading()}
        </ScrollView>
      </LinearGradient>
    );
  }
}

const mapStateToProps = state => {
  return {
    email: state.login.email,
    error: state.login.error,
    loading: state.login.loading,
    password: state.login.password,
    errorMessageEmail: state.login.errorMessageEmail,
    errorMessageLogin: state.login.errorMessageLogin,
    errorMessagePassword: state.login.errorMessagePassword,
  };
};

export default connect(mapStateToProps, {
  loginEmailChange,
  loginPasswordChange,
  loginUser,
})(Login);
