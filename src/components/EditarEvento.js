import React, { Component } from 'react';
import { View, TextInput, ScrollView, Picker } from 'react-native';
import { connect } from 'react-redux';
import { editEvent, saveEditedEvent } from '../actions';
import { HeaderImage, CardSection, Input, Texts, Button, Spinner } from '../components/commons';
import { Icon } from 'react-native-elements';
import Styles from '../Styles';

class EditarEvento extends Component {
    static navigationOptions = () => {
        return {
            headerTitle: <View style={{ flex: 1, alignContent: 'center' }}><HeaderImage /></View>,
            headerStyle: {
                paddingRight: 60,
                height: 55
            },
            headerTitleStyle: {
                alignSelf: 'center',
            },
            drawerLabel: 'Eventos',
            drawerIcon: () => (
                <Icon
                    type='font-awesome'
                    name='calendar'
                    color='#2a4065'
                    size={25}
                />
            ),
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
                        <Texts text='Área Temática' style='medium' />
                    </CardSection>
                    <CardSection>
                        <Picker
                            selectedValue={this.props.area_tematica}
                            style={{ height: 50, width: 250 }}
                            onValueChange={texto => this.props.eventFieldChange({ prop: 'area_tematica', value: texto })}
                        >
                            <Picker.Item label="Comunicação" value="Comunicação" />
                            <Picker.Item label="Cultura" value="Cultura" />
                            <Picker.Item label="Direitos Humanos e Justiça" value="Direitos Humanos e Justiça" />
                            <Picker.Item label="Educação" value="Educação" />
                            <Picker.Item label="Meio Ambiente" value="Meio Ambiente" />
                            <Picker.Item label="Ciências Sociais e Aplicadas" value="Ciências Sociais e Aplicadas" />
                            <Picker.Item label="Saúde" value="Saúde" />
                            <Picker.Item label="Tecnologia e Produção" value="Tecnologia e Produção" />
                            <Picker.Item label="Trabalho" value="Trabalho" />
                        </Picker>
                    </CardSection>
                    <CardSection>
                        <Texts text='Início do Evento' style='medium' />
                    </CardSection>
                    <CardSection>
                        <Input
                            onChangeText={text => this.props.editEvent({ prop: 'data_inicio', value: text })}
                            value={this.props.data_inicio}
                        />
                        <Input
                            onChangeText={text => this.props.editEvent({ prop: 'hora_inicio', value: text })}
                            value={this.props.hora_inicio}
                        />
                    </CardSection>
                    <CardSection>
                        <Texts text='Término do Evento' style='medium' />
                    </CardSection>
                    <CardSection>
                        <Input
                            onChangeText={text => this.props.editEvent({ prop: 'data_fim', value: text })}
                            value={this.props.data_fim}
                        />
                        <Input
                            onChangeText={text => this.props.editEvent({ prop: 'hora_fim', value: text })}
                            value={this.props.hora_fim}
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
    const { id, nome, descricao, local, area_tematica, data_inicio, hora_inicio, data_fim, hora_fim, coords, loading, errorData, errorHora, error } = state.eventoEdicao;

    return { id, nome, descricao, local, area_tematica, data_inicio, hora_inicio, data_fim, hora_fim, coords, errorData, errorHora, error, loading };
};

export default connect(mapStateToProps, { editEvent, saveEditedEvent })(EditarEvento);
