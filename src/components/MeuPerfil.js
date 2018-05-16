import React, { Component } from 'react';
import { onNameChanged, onRegistrationChanged, onBirthChanged, onEmailChanged, authUser, updateUser } from '../actions';
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
      headerTitle: <View style={{ flex: 1, alignContent: 'center' }}><HeaderImage /></View>,
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
          name='person'
          color='#2a4065'
          size={27}
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
            onPress={() => { false }}
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
    // name: state.updateUser.name,
    // registration: state.updateUser.registration,
    // birthday: state.updateUser.birthday,
    // loading: state.updateUser.loading,
    // error: state.updateUser.error,
    // errorMessageName: state.updateUser.errorMessageName,
    // errorMessageRegistration: state.updateUser.errorMessageRegistration,
    // errorMessageBirthday: state.updateUser.errorMessageBirthday,
    // errorMessageEmail: state.updateUser.errorMessageEmail,
    // errorMessageCreateAccountFail: state.updateUser.errorMessageCreateAccountFail
  };
};

export default connect(mapStateToProps, {
  onNameChanged,
  onRegistrationChanged,
  onBirthChanged,
  onEmailChanged
  // updateUser
})(MeuPerfil);