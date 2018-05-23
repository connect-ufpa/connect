import React, { Component } from 'react';
import { ScrollView, View, TextInput } from 'react-native';
import { CardSection, Input, Button, HeaderImage, Texts } from '../components/commons';
import Styles from '../Styles';

class VisualizarEventos extends Component {
    static navigationOptions = () => {
        return {
            headerTitle:
                <View style={{ flex: 1, alignItems: 'center', flexDirection: 'row', justifyContent: 'center' }}>
                    <View style={{ marginRight: 5 }}>
                        <Texts text='Detalhe Evento' />
                    </View><HeaderImage />
                </View>,
            headerStyle: {
                paddingRight: 60,
            },
        };
    }

    componentWillMount() {
        const { params } = this.props.navigation.state;
        this.setState({ evento: params });
    }

    renderEvent = () => {
        const { evento } = this.state;
        const { coords } = evento;
        return (
            <ScrollView >
                <View style={[Styles.eventCardStyle, { marginTop: 5, marginBottom: 5, elevation: 5, flex: 1 }]} >
                    <CardSection>
                        <Input
                            value={evento.nome}
                        />
                    </CardSection>
                    <CardSection>
                        <TextInput
                            style={Styles.inputStyle}
                            value={evento.descricao}
                            underlineColorAndroid='transparent'
                            multiline
                            numberOfLines={4}
                            maxLength={250}
                        />
                    </CardSection>
                    <CardSection>
                        <Input
                            value={evento.local}
                        />
                    </CardSection>
                    <CardSection>
                        <Texts text='Área Temática' style='medium' />
                    </CardSection>
                    <CardSection>
                        <Input
                            value={evento.area_tematica}
                        />
                    </CardSection>
                    <CardSection>
                        <Texts text='Início do Evento' style='medium' />
                    </CardSection>
                    <CardSection>
                        <Input
                            value={evento.data_inicio}
                        />
                        <Input
                            value={evento.hora_inicio}
                        />
                    </CardSection>
                    <CardSection>
                        <Texts text='Término do Evento' style='medium' />
                    </CardSection>
                    <CardSection>
                        <Input
                            value={evento.data_fim}
                        />
                        <Input
                            value={evento.hora_fim}
                        />
                    </CardSection>
                    <CardSection>
                        <Button
                            text="Ver Local no Mapa"
                            styles={Styles.btnConfirm}
                            onPress={() => { this.props.navigation.navigate('VisualizarEventoMapa', coords); }}
                        />
                    </CardSection>
                </View>
            </ScrollView>
        );
    }

    render() {
        return (
            this.renderEvent()
        );
    }
}

export default VisualizarEventos;
