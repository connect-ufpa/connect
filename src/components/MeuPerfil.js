import React, { Component } from 'react';
import { onNameChanged, onRegistrationChanged, onBirthChanged, onEmailChanged, authUser } from '../actions';
import { Dimensions, Text, ScrollView, View, Alert } from 'react-native';
import { Card, CardSection, Texts, HeaderImage, Input, Button } from './commons';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import Styles from '../Styles';


class MeuPerfil extends Component {
  static navigationOptions = ({navigation}) => {
    const { navigate } = navigation;
    return {
      title: <HeaderImage />,
      headerStyle: {
        paddingLeft: 15,
        paddingRight: 15,
        height: 55
      },
      headerTitleStyle: {
        alignSelf: 'center',
      },
      drawerLabel: 'Meu perfil',
      drawerIcon: ({ tintColor }) => (
        <Icon
          type='font-awesome'
          name='user'
          color='#2a4065'
          size={25}
         />
      ),
      headerLeft: <Icon
                    name='bars'
                    type='font-awesome'
                    color='#2a4065'
                    size={25}
                    onPress={() => navigate('DrawerOpen')}
                  />,
      headerRight: <Icon
                    name='search'
                    type='font-awesome'
                    color='#2a4065'
                    size={25}
                    onPress={() => navigate('DrawerOpen')}
                  />,
    }
  }
  

  renderUpdateUserButton() {
    const user = {
        name: this.props.updateName,
        registration: this.props.updateRegistration,
        birthday: this.props.updateBirthday,
        // email: this.props.email,
        error: this.props.error
    }

    if (this.props.loading) {
      return (<Spinner size="large" color="#ffff" />);
    }

        return (
          <Button
            text="Salvar"
            styles={Styles.btnConfirm}
            onPress={() => { this.props.updateUser(user); }}
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

export default connect(mapStateToProps, null)(MeuPerfil);