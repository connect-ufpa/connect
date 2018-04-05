import React, { Component } from 'react';
import { View, TextInput, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { StackNavigator } from 'react-navigation';
import { editEvent, saveEditedEvent } from '../actions';
import { HeaderImage, CardSection, Input, Texts, Button, Spinner } from '../components/commons';
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
    renderSaveEventButton() {
        const evento = {
            id: this.props.id,
            nome: this.props.nome,
            descricao: this.props.descricao,
            local: this.props.local,
            coords: this.props.coords,
            data: this.props.data,
            hora: this.props.hora,
            error: this.props.error
        };
        if (this.props.loading) {
            return (<Spinner size="large" color="#ffff" />);
        }
        return (
            <Button
                text="Salvar Edição"
                styles={Styles.btnConfirm}
                onPress={() => { this.props.saveEditedEvent(evento); }}
            />
        );
    }
    render() {
        const param = {
            id: this.props.id,
            coords: this.props.coords
        };
        return (
            <ScrollView >
                <View style={[Styles.eventCardStyle, { marginTop: 5, marginBottom: 5, elevation: 5, flex: 1 }]} >
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
                    <View style={{ alignItems: 'center' }}>
                        <Texts text={this.props.errorData} color='grey' />
                        <Texts text={this.props.errorHora} color='grey' />
                    </View>
                    <CardSection>
                        <Button
                            text="Editar Local no Mapa"
                            styles={Styles.btnConfirm}
                            onPress={() => { this.props.navigation.navigate('EditarEventoMapa', { param }); }}
                        />
                    </CardSection>
                    <CardSection>
                        {this.renderSaveEventButton()}
                    </CardSection>
                </View>
            </ScrollView>
        );
    }
}
const mapStateToProps = (state) => {
    const { id, nome, descricao, local, data, hora, coords, loading, errorData, errorHora, error } = state.eventoEdicao;

    return { id, nome, descricao, local, data, hora, coords, errorData, errorHora, error, loading };
};

export default connect(mapStateToProps, { editEvent, saveEditedEvent })(EditarEvento);
