import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { HeaderImage, CardSection } from './commons';
import { Icon } from 'react-native-elements';
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
                        <View
                            style={{
                                width: 150,
                                height: 150,
                                borderRadius: 100,
                                alignItems: "center",
                                justifyContent: "center",
                                marginTop: 15
                            }}
                        >
                            <Image
                                source={require('../../assets/img/user_male.png')}
                                style={{ 
                                    borderColor: '#f4f4f4',
                                    borderWidth: 4,
                                    width: 140,
                                    height: 140,
                                    borderRadius: 100
                                }}
                            />
                            {/* <CardSection>
                                <Text>{this.props.namePerfil}</Text>
                            </CardSection> */}
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

export default Perfil;
