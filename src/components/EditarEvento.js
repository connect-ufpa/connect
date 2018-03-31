import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { StackNavigator } from 'react-navigation';
import { editEvent } from '../actions';
import { HeaderImage } from '../components/commons';
import { Icon } from 'react-native-elements';

class EditarEvento extends Component {
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
        const key = Object.keys(params);
        key.forEach(prop => {
            const value = params[prop];
            this.props.editEvent({ prop, value });
        });
    }

    render() {
        return (
            <View>
                <Text>NOME</Text> 
            </View>
        );
    }
}
const mapStateToProps = (state) => {
    return {}
};

export default connect(mapStateToProps, { editEvent })(EditarEvento);
