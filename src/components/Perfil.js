import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, Modal, ScrollView, Texts, TouchableHighlight } from 'react-native';
import { HeaderImage, Card, CardSection, Input } from './commons';
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
                            <TouchableOpacity 
                                onPress={() => {
                                    console.log("cheguei aqui!!!");
                                    this.setModalVisible(true)}}>
                                <View
                                    style={{
                                    height: 60,
                                    width: 60,
                                    margin: 15,
                                    elevation: 8,
                                    borderRadius: 150,
                                    alignContent: 'center',
                                    justifyContent: 'center',
                                    backgroundColor: '#2A4065',
                                    }}
                                    >
                                    <Icon 
                                    type="font-awesome"
                                    name="edit" 
                                    color="#FFF" 
                                    size={25} />
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>


                <Modal
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
                    <Text style={{fontSize: 20,
                        fontFamily: 'Ubuntu',
                        marginBottom: 10,
                        color: '#000',
                        backgroundColor: '#fff',
                        paddingRight: 120,
                        paddingLeft: 120,
                        paddingBottom: 15,
                        paddingTop: 15,
                        marginTop: -22,}}
                        >Editar Perfil</Text>
                    <CardSection>
                        <Input
                        placeholder="Nome:"
                        onChangeText={namePerfil =>
                            this.props.onNameChanged(namePerfil)
                        }
                        value={this.props.namePerfil}
                        />
                    </CardSection>
                    {/* <View>
                        <Texts text={this.props.errorMessageName} />
                    </View> */}
                    <CardSection>
                        <Input
                        placeholder="Matrícula:"
                        onChangeText={registrationPerfil =>
                            this.props.onRegistrationChanged(registrationPerfil)
                        }
                        value={this.props.registrationPerfil}
                        />
                    </CardSection>
                    {/* <View>
                        <Texts text={this.props.errorMessageRegistration} />
                    </View> */}
                    <CardSection>
                        <Input
                        placeholder="Nascimento: 00/00/0000"
                        onChangeText={birthdayPerfil =>
                            this.props.onBirthChanged(birthdayPerfil)
                        }
                        value={this.props.birthdayPerfil}
                        />
                    </CardSection>
                    {/* <View>
                        <Texts text={this.props.errorMessageBirthday} />
                    </View> */}
                    {/* <CardSection>{this.renderSaveDataUserButton()}</CardSection> */}

                    <TouchableHighlight
                        onPress={() => {
                        this.setModalVisible(!this.state.modalVisible);
                        }}
                    >
                        <Text style={{ fontSize: 30 }}>Hide Modal</Text>
                    </TouchableHighlight>
                    </Card>
                </ScrollView>
                </Modal>
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
    };
};

export default connect(mapStateToProps, { 
    dataPerfil,
    onNameChanged,
    onRegistrationChanged,
    onBirthChanged,
    saveDataUser,
 })(Perfil);
