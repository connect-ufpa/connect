import React, { Component } from 'react';
import { ScrollView, View, TextInput, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { CardSection, Input, Texts } from '../components/commons';
import Styles from '../Styles';

class VisualizarEventos extends Component {
    static navigationOptions = {
        title: 'Detalhe evento',
        headerTintColor: '#2A4065',
        headerTitleStyle: {
            fontFamily: 'Ubuntu-Medium',
            fontWeight: '200',
            fontSize: 18,
        },
        headerStyle: {
            elevation: 5
        }
    };

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
                        <Texts text='Nome do Evento' style='medium' color='#777' />
                    </CardSection>
                    <CardSection>
                        <Input
                            value={evento.nome}
                        />
                    </CardSection>
                    <CardSection>
                        <Texts text='Descrição' style='medium' color='#777' />
                    </CardSection>
                    <CardSection>
                        <View
                            style={{
                                flex: 1,
                                padding: 5,
                                elevation: 8,
                                borderRadius: 5,
                                borderColor: '#FFF',
                                flexDirection: 'row',
                                backgroundColor: '#FFF',
                            }}
                        >
                            <TextInput
                                style={Styles.inputStyle}
                                value={evento.descricao}
                                underlineColorAndroid='transparent'
                                multiline
                                numberOfLines={4}
                                maxLength={250}
                            />
                        </View>
                    </CardSection>
                    <CardSection>
                        <Texts text='Local' style='medium' color='#777' />
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
                        <View style={{ flexDirection: 'column' }}>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate('VisualizarEventoMapa', coords); }} >
                                <View style={[Styles.iconButtomStyle, { backgroundColor: '#2A4065' }]}>
                                    <Icon
                                          type='font-awesome'
                                         name='map'
                                         color='#FFF'
                                         size={25}
                                    />
                                </View>
                            </TouchableOpacity>
                            <View style={{ marginLeft: 10 }} >
                                <Texts text="Ver no mapa" />
                            </View>
                        </View>
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
