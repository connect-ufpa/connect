import React, { Component } from 'react';
import { ScrollView, Image, TouchableOpacity, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Input, Card, CardSection, Button, Texts, Spinner } from './commons/';
import { loginEmailChange, loginPasswordChange, loginUser } from '../actions/';
import LinearGradient from 'react-native-linear-gradient';
import Styles from '../Styles';

const logo = require('../../assets/img/logo.png');

class Login extends Component {

  renderLoginButton() {
    const user = {
        email: this.props.email,
        password: this.props.password,
        error: this.props.error,
        loading: false
    }

    // const user = {
    //   email: 'lalala@gmail.com',
    //   password: '123456',
    //   error: false,
    //   loading: false
    // }

    if (this.props.loading)
      return <Spinner size="large" color="#ffff" />;

    return (
      <Button
        text="Entrar"
        styles={Styles.btnConfirm}
        onPress={() => {this.props.loginUser(user); }}
      />
    );
  }

  render() {
    return (
      <LinearGradient colors={['#2A4065', '#2BA3DA']}>
        <ScrollView style={Styles.scrollViewStyle} >
          <Card>
            <CardSection>
              <Image
                source={logo}
                style={{ width: 100, height: 90, marginBottom: 10 }}
              />
            </CardSection>
            <CardSection>
              <Texts sizeText="large" text="Connect UFPa" />
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
                onChangeText={password => this.props.loginPasswordChange(password)}
                value={this.props.password}
              />
            </CardSection>
            <View>
              <Texts text={this.props.errorMessagePassword} />
            </View>
            <CardSection styleSection={{ alignSelf: 'flex-end', marginTop: 0 }}>
              <View>
                <TouchableOpacity  >
                  <Texts text="Esqueci a senha" sizeText="small" />
                </TouchableOpacity>
              </View>
            </CardSection>
            <CardSection>
              {this.renderLoginButton()}
            </CardSection>
            <View>
              <Texts text={this.props.errorMessageLogin} />
            </View>
            <CardSection>
              <TouchableOpacity onPress={() => { }}>
                <Texts text="Criar conta" sizeText="medium" />
              </TouchableOpacity>
            </CardSection>
          </Card>
        </ScrollView>
      </LinearGradient>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    email: state.login.email,
    errorMessageEmail: state.login.errorMessageEmail,
    password: state.login.password,
    loading: state.login.loading,
    errorMessagePassword: state.login.errorMessagePassword,
    errorMessageLogin: state.login.errorMessageLogin
  };
};

export default connect(mapStateToProps, {
  loginEmailChange,
  loginPasswordChange,
  loginUser
})(Login);
