import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { StackNavigator } from 'react-navigation';
import { editEvent } from '../actions';
import { HeaderImage, CardSection, Input } from '../components/commons';
import { Icon } from 'react-native-elements';
import Styles from '../Styles';

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
            <View style={[Styles.eventCardStyle, { marginTop: 5, marginBottom: 5, elevation: 5 }]} >
                <CardSection>
                    <Input
                        onChangeText={text => this.props.editEvent({ prop: 'nome', value: text })}
                        value={this.props.nome}
                    />
                </CardSection>
                <CardSection>
                      <TextInput
                          style={Styles.inputStyle}
                          onChangeText={text => this.props.editEvent({ prop: 'descricao', value: text })}
                          value={this.props.descricao}
                          underlineColorAndroid='transparent'
                          multiline
                          numberOfLines={4}
                          maxLength={250}
                      />
                  </CardSection>
                  <CardSection>
                      <Input
                          onChangeText={text => this.props.editEvent({ prop: 'local', value: text })}
                          value={this.props.local}
                      />
                  </CardSection>
                  <CardSection>
                      <Input
                          onChangeText={text => this.props.editEvent({ prop: 'data', value: text })}
                          value={this.props.data}
                      />
                      <Input
                          onChangeText={text => this.props.editEvent({ prop: 'hora', value: text })}
                          value={this.props.hora}
                      />
                  </CardSection>
            </View>
        );
    }
}
const mapStateToProps = (state) => {
   const { nome, descricao, local, data, hora } = state.eventoEdicao;
   
   return { nome, descricao, local, data, hora };
};

export default connect(mapStateToProps, { editEvent })(EditarEvento);
