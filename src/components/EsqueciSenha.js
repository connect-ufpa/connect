import React, { Component } from 'react';
import { TextInput, ScrollView, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { connect } from 'react-redux';
import { Card, CardSection, Texts, Input, Button, Spinner } from './commons';
import { onEmailForgotChange } from '../actions';
import Styles from '../Styles';

class EsqueciSenha extends Component {
  static navigationOptions = {
    title: 'Esqueci minha senha',
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

  render() {
    return (
      <LinearGradient colors={['#2A4065', '#2BA3DA']}>
        <ScrollView style={Styles.scrollViewStyle}>
          <Card>
            <CardSection>
              <Texts style='small' text={'Informe seu e-mail cadastrado, um link para redefinição de senha será enviado.'}/>
            </CardSection>
            <CardSection>
              <Input
                iconName={'email'}
                placeholder={"E-mail:"}
                value={this.props.email}
                onChangeText={email => this.props.onEmailForgotChange(email)}
              />
            </CardSection>
            <View>
              <Texts text={this.props.emailForgot} />
            </View>
            <CardSection>
              <Button
                text="Enviar"
                styles={Styles.btnConfirm}
              />
            </CardSection>
          </Card>
        </ScrollView>
      </LinearGradient>
    );
  }
}

const mapStateToProps = (state) => { 
  return {
    email: state.forgotPassword.email,
    emailForgot: state.forgotPassword.emailForgot
  };
};

export default connect(mapStateToProps, {
  onEmailForgotChange,
})(EsqueciSenha);