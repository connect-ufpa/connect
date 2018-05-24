import React, { Component } from 'react';
import { ScrollView, Image, TouchableOpacity, View, Text } from 'react-native';
import { Input, Card, CardSection, Button, Texts, Spinner } from './commons/';
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

    if (this.props.loading) return <Spinner size="large" color="#ffff" />;

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
                placeholder="E-mail:"
                onChangeText={email => this.props.loginEmailChange(email)}
                value={this.props.email}
              />
            </CardSection>
            <View>
              <Texts text={this.props.errorMessageEmail} />
            </View>
            <CardSection>
              <Input
                secureTextEntry
                placeholder="Senha:"
                onChangeText={password =>
                  this.props.loginPasswordChange(password)
                }
                value={this.props.password}
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
                    this.props.navigation.navigate('ForgotPasword')
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
                onPress={() => this.props.navigation.navigate('CreateUser')}
              >
                <Texts text="Criar conta" style="medium" />
              </TouchableOpacity>
            </CardSection>
          </Card>
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
