import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { HeaderImage } from './commons';
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
            <View style={{ flex: 1, backgroundColor: '#000'}}>
                <View
                    style={{ 
                        flex: 1,
                        width: null,
                        backgroundColor: '#039BE5',
                     }}
                >
                </View>
                <View
                    style={{ 
                        flex: 7,
                        width: null,
                        backgroundColor: '#E0E0E0',
                     }}
                >
                <View 
                    style={{ 
                        backgroundColor: "#fff",
                        height: 60,
                        width: 300,
                        padding: 15
                    }}
                >

                </View>
                </View>
            </View>
        );
    }
}

export default Perfil;
