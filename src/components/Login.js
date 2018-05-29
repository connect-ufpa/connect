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
          <Card>
            <CardSection>
              <Image
                source={logo}
                style={{ width: 100, height: 100, marginBottom: 10 }}
              />
            </CardSection>
            <CardSection>
              <Text style={Styles.logoTextStyle}>Connect UFPa</Text>
            </CardSection>
            <CardSection>
              <Input
                iconName={'email'}
                placeholder= {"E-mail:"}
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
                  onPress={() =>
                    this.props.navigation.navigate('EsqueciSenha')
                  }
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
    errorMessageEmail: state.login.errorMessageEmail,
    password: state.login.password,
    loading: state.login.loading,
    error: state.login.error,
    errorMessagePassword: state.login.errorMessagePassword,
    errorMessageLogin: state.login.errorMessageLogin,
  };
};

export default connect(mapStateToProps, {
  loginEmailChange,
  loginPasswordChange,
  loginUser,
})(Login);
