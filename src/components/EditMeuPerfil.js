import React, { Component } from 'react';
import { onNameChanged, onRegistrationChanged, onBirthChanged, onEmailChanged, authUser, dataPerfil, saveDataUser } from '../actions';
import { Dimensions, Text, ScrollView, View, Alert } from 'react-native';
import { Card, CardSection, Texts, HeaderImage, Input, Button, ButtonBack, Spinner } from './commons';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import { StackNavigator } from 'react-navigation';
import LinearGradient from 'react-native-linear-gradient';
import Styles from '../Styles';


class EditMeuPerfil extends Component {
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
  componentWillMount() {
    this.props.dataPerfil();

  }
  

  renderSaveDataUserButton() {
    const user = {
      namePerfil: this.props.namePerfil,
      registrationPerfil: this.props.registrationPerfil,
      birthdayPerfil: this.props.birthdayPerfil,
  }

    if (this.props.loading) {
      return (<Spinner size="large" color="#ffff" />);
    }

        return (
          <Button
            text="Salvar"
            styles={Styles.btnConfirm}
            onPress={() => { this.props.saveDataUser(user); }}
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
                onChangeText={namePerfil => this.props.onNameChanged(namePerfil)}
                value={this.props.namePerfil}
              />
            </CardSection>
            <View>
              <Texts text={this.props.errorMessageName} />
            </View>
            <CardSection>
              <Input
                placeholder="Matrícula:"
                onChangeText={registrationPerfil => this.props.onRegistrationChanged(registrationPerfil)}
                value={this.props.registrationPerfil}
              />
            </CardSection>
            <View>
              <Texts text={this.props.errorMessageRegistration} />
            </View>
            <CardSection>
              <Input
                placeholder="Nascimento: 00/00/0000"
                onChangeText={birthdayPerfil => this.props.onBirthChanged(birthdayPerfil)}
                value={this.props.birthdayPerfil}
              />
            </CardSection>
            <View>
              <Texts text={this.props.errorMessageBirthday} />
            </View>
            <CardSection>
              {this.renderSaveDataUserButton()}
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

export default connect(mapStateToProps, {
  dataPerfil,
  onNameChanged,
  onRegistrationChanged,
  onBirthChanged,
  saveDataUser
})(EditMeuPerfil);