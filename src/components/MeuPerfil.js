import React, { Component } from 'react';
import { onNameChanged, onRegistrationChanged, onBirthChanged, onEmailChanged, authUser, adicionaContato, dataPerfil } from '../actions';
import { Dimensions, Text, ScrollView, View, Alert, Image, StatusBar, StyleSheet, ImageBackground } from 'react-native';
import { Card, CardSection, Texts, HeaderImage, Input, Button, UserImage } from './commons';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import { StackNavigator } from 'react-navigation';
import LinearGradient from 'react-native-linear-gradient';
import Styles from '../Styles';
import Bar from './Bar';


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

        <ImageBackground style={styles.headerBackground} source={require('../../assets/img/paisagem2.jpg')}>
          <View style={styles.header}>
            <View style={styles.perfilFotoWwrap}>
              <Image style={styles.perfilFoto} source={require('../../assets/img/user_male.png')} />
            </View>
            <Text style={styles.name}>{this.props.namePerfil}</Text>
            <Text style={styles.idade}>{this.props.idadePerfil} anos</Text>
          </View>
        </ImageBackground>
        {/* //////////// Barra //////////// */}
        <View style={styles.barra}>
          <View style={[styles.barraItem, styles.barraSeparador]}>
            <Text style={styles.barraTop}>12K</Text>
            <Text style={styles.barraBottom}>Locais Visitados</Text>
          </View>

          <View style={styles.barraItem}>
            <Text style={styles.barraTop}>332</Text>
            <Text style={styles.barraBottom}>Locais Adicionados</Text>
          </View>

        </View>

        {/* <LinearGradient colors={['#2A4065', '#2BA3DA']} style={styles.viewbtn}>

          <Button
            text="Editar"
            styles={Styles.btnEditar}
            onPress={() => { this.props.navigation.navigate('EditMeuPerfil'); }}
          />

        </ LinearGradient> */}
        <View style={styles.areaBtn}>
          <View style={styles.photoGrid}>
            <Button
            text="Editar"
            styles={Styles.btnEditar}
            onPress={() => { this.props.navigation.navigate('EditMeuPerfil'); }}
          />
          </View>
        </View>

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
  },
  headerBackground: {
    flex: 1,
    width: null,
    alignSelf: 'stretch'
  },
  header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'rgba(0,0,0, 0.5)'
  },
  perfilFotoWwrap: {
    marginTop: 10,
    width: 150,
    height: 150,
    borderRadius: 100,
    borderColor: 'rgba(0,0,0, 0.4)',
    borderWidth: 6,
  },
  perfilFoto: {
    flex: 1,
    width: null,
    alignSelf: 'stretch',
    borderRadius: 100,
    borderColor: '#fff',
    borderWidth: 4,
  },
  name: {
    marginTop: 15,
    fontSize: 20,
    color: '#fff',
    //fontWeight: 'bold',
    fontFamily: 'Ubuntu'
  },
  idade: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '300',
    fontFamily: 'Ubuntu'

  },

  //Barra//////////////////////////


  barra: {
    borderTopColor: "#fff",
    borderTopWidth: 4,
    backgroundColor: '#2A4065',
    flexDirection: 'row'
  },
  barraSeparador: {
    borderRightWidth: 4
  },
  barraItem: {
    flex: 1,
    padding: 18,
    alignItems: 'center'
  },
  barraTop: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    // fontStyle: 'italic',
    fontFamily: 'Ubuntu'
  },
  barraBottom: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: 'Ubuntu'
  },


  //PhotoGrid

  photoGrid: {

    flexWrap: 'wrap'
  },
  photoMap: {
    margin: 2,
    height: 120,
    width: (Dimensions.get('window').width / 2) - 4,
  },
  photo: {
    flex: 1,
    width: null,
    alignSelf: 'stretch'
  },
  areaBtn: {
    height: 180,
    backgroundColor: 'rgba(255,255,255, 1)'
  },
  btnEditar: {
    alignSelf: 'stretch',
    backgroundColor: '#000',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#000',
    elevation: 4,
    color: '#000'
  }
})

const mapStateToProps = (state) => {
  return {
    namePerfil: state.perfil.namePerfil,
    registrationPerfil: state.perfil.registrationPerfil,
    birthdayPerfil: state.perfil.birthdayPerfil,
    idadePerfil: state.perfil.idadePerfil,
  };
};

export default connect(mapStateToProps, { dataPerfil })(MeuPerfil);