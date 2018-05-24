import React, { Component } from 'react';
import { TextInput, ScrollView, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { connect } from 'react-redux';
import { Card, CardSection, Texts, Input, Button, Spinner } from './commons';
import { onEmailForgotChange } from '../actions';
import Styles from '../Styles';

class ForgotPassword extends Component {
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
              <Texts style='small' text={'Digite seu e-mail para redefinição de senha'}/>
            </CardSection>
            <CardSection>
              <Input
                placeholder="E-mail: aluno@email.com"
                onChangeText={email => this.props.onEmailForgotChange(email)}
                value={this.props.email}
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
})(ForgotPassword);