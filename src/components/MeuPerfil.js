import React, { Component } from 'react';
import { onNameChanged, onRegistrationChanged, onBirthChanged, onEmailChanged, authUser, adicionaContato, dataPerfil } from '../actions';
import { Dimensions, Text, ScrollView, View, Alert, Image,StatusBar, StyleSheet } from 'react-native';
import { Card, CardSection, Texts, HeaderImage, Input, Button, UserImage } from './commons';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import { StackNavigator } from 'react-navigation';
import LinearGradient from 'react-native-linear-gradient';
import Styles from '../Styles';
import Header from './Header';


class MeuPerfil extends Component {
  static navigationOptions = ({ navigation }) => {
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


  renderNavigateToEditPerfilButton() {

    if (this.props.loading) {
      return (<Spinner size="large" color="#ffff" />);
    }

    return (
      <Button
        text="Editar Dados"
        styles={Styles.btnConfirm}
        onPress={() => this.props.navigation.navigate('EditMeuPerfil')}
      />
    );
  }


  render() {
    return (


      <View style={styles.container}>
      <StatusBar backgroundColor="#2A4065" />
        <Header />
      </View>
      // <LinearGradient colors={['#2A4065', '#2BA3DA']}>
      //   <ScrollView style={Styles.scrollViewStyle}>
      //     <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      //     <StatusBar backgroundColor="#2A4065" />
      //       <View style={{ borderRadius: 100,  marginTop: 30, marginBottom: 20, backgroundColor: '#fff', borderColor: '#fff', borderWidth: 6 }}>
      //         <Image
      //           style={{ width: 100, height: 100}}
      //           //resizeMode={'center'}
      //           source={require('../../assets/img/user_male.png')}
      //         />
      //       </View>

      //       <Text style={{ fontSize: 25, fontFamily: 'Ubuntu', color: '#fff', marginBottom: 10 }}>{this.props.namePerfil}</Text>

      //       <Text style={{ fontSize: 16, fontFamily: 'Ubuntu', color: '#fff', marginBottom: 5 }}>Matrícula: {this.props.registrationPerfil}</Text>

      //       <Text style={{ fontSize: 16, fontFamily: 'Ubuntu', color: '#fff', marginBottom: 5 }}>Nascimento: {this.props.birthdayPerfil}</Text>
      //     </View>

      //     <Button
      //       text="Editar Dados"
      //       styles={Styles.btnConfirm} 
      //       onPress={() => { this.props.navigation.navigate('EditMeuPerfil'); }}
      //     />
      //     {/* {this.renderNavigateToEditPerfilButton()} */}
      //   </ScrollView>
      // </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  }
})

const mapStateToProps = (state) => {
  return {
    namePerfil: state.perfil.namePerfil,
    registrationPerfil: state.perfil.registrationPerfil,
    birthdayPerfil: state.perfil.birthdayPerfil
  };
};

export default connect(mapStateToProps, { dataPerfil })(MeuPerfil);