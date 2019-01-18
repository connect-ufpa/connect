import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Styles from '../Styles';
import { HeaderImage } from './commons';
import { Icon } from 'react-native-elements';

class Perfil extends Component {
    static navigationOptions = ({ navigation }) => {
        const { navigate } = navigation;
        return {
            headerTitle: (
                <View>
                    <HeaderImage />
                </View>
            ),
            headerStyle: {
                paddingLeft: 15,
                paddingRight: 15,
                height: 55,
            },
            headerTitleStyle: {
                alignSelf: 'center',
              },
              drawLabel: 'Perfil',
              drawerIcon: ({ tintColor }) => (
                  <Icon 
                    name="person"
                    color="#2a4065"
                    size={20}
                  />
              ),
        }
    }
    render() {
        return(
            <View>
                <Text>Perfil</Text>
            </View>
        );
    }
}

export default Perfil;
