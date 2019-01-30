import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, Modal, ScrollView, Texts, TouchableHighlight } from 'react-native';
import { HeaderImage, Card, CardSection, Input, Loading } from './commons';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import { 
    onNameChanged,
    onRegistrationChanged,
    onBirthChanged,
    dataPerfil,
    saveDataUser,
 } from '../actions/';
import Styles from '../Styles';

class Perfil extends Component {
    static navigationOptions = ({ navigation }) => {
        const { navigate } = navigation;
        return {
            headerTitle: (
                <HeaderImage />
            ),
            headerStyle: Styles.navHeader,
            headerTitleStyle: {
                alignSelf: 'center',
              },
              drawLabel: 'Perfil',
              drawerIcon: () => (
                  <Icon 
                    name="person"
                    color="#2a4065"
                    size={25}
                  />
              ),
              headerLeft: (
                  <TouchableOpacity 
                    style={Styles.navIconCard}
                    onPress={() => navigate('DrawerOpen')}
                  >
                    <Icon 
                        type="font-awesome"
                        name="bars"
                        color="#2a4065"
                        size={25}
                    />
                  </TouchableOpacity>
              ),
              headerRight: (
                  <Icon 
                    name="settings"
                    color="#777"
                    size={25}
                  />
              ),
        };
    };


    componentWillMount() {
        this.props.dataPerfil();
    }

    state = {
        modalVisible: false,
      };
      
    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }


    renderButtomEditPerfil() {
        return (
          <View style={{ alignItems: 'center' }}>
            <TouchableOpacity onPress={() => { this.props.navigation.navigate('EditarPerfil'); }} >
              <View style={[Styles.iconButtomStyle, { backgroundColor: '#2A4065' }]}>
                <Icon
                  type='material-community'
                  name='edit'
                  color='#FFF'
                  size={25}
                />
              </View>
            </TouchableOpacity>
          </View>
        );
      }

    render() {
        return(
            <View>
                <View
                    style={{ 
                        height: 800,
                        backgroundColor: '#f4f4f4',
                     }}
                >
                    <View 
                        style={{ 
                            backgroundColor: "#fff",
                            height: 350,
                            width: 340,
                            marginLeft: 10,
                            marginRight: 10,
                            marginTop: 10,
                            borderRadius: 5,
                            elevation: 4,
                            alignItems: "center",
                        }}
                    >
                        <Image
                            source={require('../../assets/img/user_male.png')}
                            style={{
                                marginTop: 15, 
                                borderColor: '#2A4065',
                                borderWidth: 4,
                                width: 120,
                                height: 120,
                                borderRadius: 100
                            }}
                        />
                        <View style={{ alignItems: "center" }}>
                            <Text style={{ fontSize: 18,
                                    color: '#2A4065',
                                    textAlign: 'center',
                                    fontFamily: 'Ubuntu-Medium',
                                    marginTop: 10,
                                    marginBottom: 10 }}>
                                {this.props.namePerfil}
                            </Text>
                            <Text style={{ fontSize: 16,
                                    color: '#2A4065',
                                    textAlign: 'center',
                                    fontFamily: 'Ubuntu-Medium',
                                    marginBottom: 10  }}>
                                    {this.props.areaTematica}
                            </Text>
                            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
                                {this.renderButtomEditPerfil()}
                            </View>
                        </View>
                    </View>
                </View>


                {/* <Modal
                    style={{
                        flex: 1,
                        borderWidth: 6,
                        borderRadius: 4,}}
                    animationType="fade"
                    presentationStyle="pageSheet"
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {

                        this.setModalVisible(!this.state.modalVisible)
                    }}
                    supportedOrientations={false}
                >
                <ScrollView style={Styles.scrollViewStyle}>
                    <Card addStyle={{ paddingBottom: 40 }}>
                    <Text style={{fontSize: 18,
                        fontFamily: 'Ubuntu-Medium',
                        marginBottom: 10,
                        color: '#2A4065',
                        backgroundColor: '#fff',
                        alignItems: 'center',
                        fontWeight: '200',
                        paddingBottom: 15,
                        paddingTop: 15,
                        marginTop: -12,}}
                        >Editar Perfil</Text>
                    <CardSection>
                        <Input
                            iconName={'person'}
                            placeholder="Nome:"
                            onChangeText={namePerfil => this.props.onNameChanged(namePerfil)}
                            value={this.props.namePerfil}
                        />
                    </CardSection>
                    <View>
                         <Texts text={this.props.errorMessageNamePerfil} />
                     </View>
                    <CardSection>
                        <Input
                            iconName={'school'}
                            keyboardType={'numeric'}
                            placeholder="Matrícula:"
                            value={this.props.registrationPerfil}
                            onChangeText={registrationPerfil => this.props.onRegistrationChanged(registrationPerfil)}
                        />
                    </CardSection>
                    <View>
                        <Texts text={this.props.errorMessageRegistration} />
                    </View>
                    <CardSection>
                        <Input
                            iconName={'date-range'}
                            value={this.props.birthdayPerfil}
                            placeholder={'Nascimento: 00/00/0000'}
                            onChangeText={birthdayPerfil => this.props.onBirthChanged(birthdayPerfil)}
                        />
                    </CardSection>
                    <View>
                        <Texts text={this.props.errorMessageBirthday} />
                    </View>
                     <CardSection>{this.renderSaveDataUserButton()}</CardSection>

                    <TouchableHighlight
                        onPress={() => {
                        this.setModalVisible(!this.state.modalVisible);
                        }}
                    >
                        <Text style={{ fontSize: 30 }}>Hide Modal</Text>
                    </TouchableHighlight>
                    </Card>
                </ScrollView>
                </Modal> */}
            </View>
        );
    }
}

const mapStateToProps = state => {
    return {
        namePerfil: state.perfil.namePerfil,
        registrationPerfil: state.perfil.registrationPerfil,
        birthdayPerfil: state.perfil.birthdayPerfil,
        idadePerfil: state.perfil.idadePerfil,
        areaTematica: state.perfil.areaTematica,
        errorMessageNamePerfil: state.perfil.errorMessageNamePerfil,
        errorMessageEmail: state.perfil.errorMessageEmail,
        errorMessageBirthday: state.perfil.errorMessageBirthday,
        errorMessageRegistration: state.perfil.errorMessageRegistration,
    };
};

export default connect(mapStateToProps, { 
    dataPerfil,
    onNameChanged,
    onRegistrationChanged,
    onBirthChanged,
    saveDataUser,
 })(Perfil);
