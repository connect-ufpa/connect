import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import { StackNavigator } from 'react-navigation';
import { HeaderImage } from '../components/commons';

class EditarEventoMapa extends Component {
    static navigationOptions = ({ navigation }) => {
        const { navigate } = navigation;
        return {
            title: <HeaderImage />,
            headerStyle: {
                paddingLeft: 15,
                paddingRight: 35,
                height: 55
            },
            headerTitleStyle: {
                alignSelf: 'center',
            },
            drawerLabel: 'Salvar Evento',
            drawerIcon: ({ tintColor }) => (
                <Icon
                    type='font-awesome'
                    name='calendar'
                    color='#2a4065'
                    size={25}
                />
            ),
            headerLeft:
                <Icon
                    name='arrow-left'
                    type='font-awesome'
                    color='#2a4065'
                    size={25}
                    onPress={() => navigate('EditarEventos')}
                />
        };
    }

    componentWillMount() {
        const { params } = this.props.navigation.state;
       console.log("PARAMS", params);
    }
    render() {
        return (
            <View>
                <Text>HERE</Text>
            </View>
        );
    }
}

export default EditarEventoMapa;
