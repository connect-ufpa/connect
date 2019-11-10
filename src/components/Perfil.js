import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, TouchableHighlight } from 'react-native';
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

    showLoading() {
        if (this.props.loading) return <Loading />;
    }

    renderButtomEditPerfil() {
        return (
          <View style={{ alignItems: 'center' }}>
            <TouchableOpacity onPress={() => { this.props.navigation.navigate('EditarPerfil'); }} >
              <View style={[Styles.iconButtomStyle, { backgroundColor: '#2A4065' }]}>
                <Icon
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
                        flexDirection: 'row', 
                        justifyContent: 'center' ,
                        backgroundColor: '#f4f4f4',
                     }}
                >
                    <View 
                        style={{ 
                            backgroundColor: "#fff",
                            height: 350,
                            width: '90%',
                            marginLeft: 10,
                            marginRight: 10,
                            marginTop: 20,
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
                        </View>
                        {this.showLoading()}
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
                            {this.renderButtomEditPerfil()}
                        </View>
                    </View>
                </View>
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
        loading: state.perfil.loading,
    };
};

export default connect(mapStateToProps, { 
    dataPerfil,
    onNameChanged,
    onRegistrationChanged,
    onBirthChanged,
    saveDataUser,
 })(Perfil);
