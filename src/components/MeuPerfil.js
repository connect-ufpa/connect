import React, { Component } from 'react';
import { onNameChanged, onRegistrationChanged, onBirthChanged, onEmailChanged, authUser, adicionaContato, dataPerfil, saveDataUser } from '../actions';
import { Dimensions, Text, ScrollView, View, Alert, Image, StatusBar, StyleSheet, ImageBackground, TouchableHighlight, Modal } from 'react-native';
//import Modal from 'react-native-modal';
import { Card, CardSection, Texts, HeaderImage, Input, Button, UserImage } from './commons';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import { StackNavigator } from 'react-navigation';
import LinearGradient from 'react-native-linear-gradient';
import Styles from '../Styles';

class MeuPerfil extends Component {
  static navigationOptions = ({ navigation }) => {
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
        onPress={() => this._showModal}
      />
    );
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
            onPress={() => { this.props.saveDataUser(user); this.setModalVisible(!this.state.modalVisible);}}
          />
        );
    }

  state = {
    modalVisible: false
      }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
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
        <View style={styles.areaBtn}>
          <View style={styles.photoGrid}>
            <Button
              text="Editar"
              styles={styles.btnEditar}
              onPress={() => { this.setModalVisible(true); }}
            />
          </View>
        </View>


        <Modal style={styles.modal}
          animationType="fade"
          presentationStyle="pageSheet"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            alert('Modal has been closed.');
          }}
          supportedOrientations={false}
          >
          <LinearGradient colors={['#2A4065', '#2BA3DA']} >
        <ScrollView style={Styles.scrollViewStyle}>
          <Card addStyle={{ paddingBottom: 40 }}>
          <Text style={styles.titulo}>Editar Perfil</Text>
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

            <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Text style={{fontSize: 30}}>Hide Modal</Text>
              </TouchableHighlight>
          </Card>
        </ScrollView>
      </LinearGradient>
        </Modal>
      </View>



    );
  }
}

const styles = StyleSheet.create({
  titulo:{
    fontSize: 20,
    fontFamily: 'Ubuntu',
    marginBottom: 10,
    color: '#000',
    backgroundColor: '#fff',
    paddingRight: 120,
    paddingLeft: 120,
    paddingBottom: 15,
    paddingTop: 15,
    marginTop: -22

  },
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
    fontFamily: 'Ubuntu'
  },
  idade: {
    fontSize: 14,
    color: '#fff',
    fontWeight: '300',
    fontFamily: 'Ubuntu',
    marginBottom: 10
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

  areaBtn: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnEditar: {
    width: 80,
    height: 80,
    alignSelf: 'stretch',
    backgroundColor: '#2A4065',
    borderRadius: 50,
    elevation: 4,
    color: '#000',
    marginTop: 100,
    alignItems: 'center',
    justifyContent: 'center'
  },
  modal: {
    flex: 1,
    borderWidth: 6,
    borderRadius: 4

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

export default connect(mapStateToProps, { 
  dataPerfil,
  onNameChanged,
  onRegistrationChanged,
  onBirthChanged,
  saveDataUser
 })(MeuPerfil);
