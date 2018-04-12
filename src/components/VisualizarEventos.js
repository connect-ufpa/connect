import React, { Component } from 'react';
import { ScrollView, View, TextInput, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import { Icon } from 'react-native-elements';
import { CardSection, Input, Spinner, Button, HeaderImage } from '../components/commons';
import { serachEventsToShow } from '../actions';
import Styles from '../Styles';

class VisualizarEventos extends Component {
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
                    onPress={() => navigate('Eventos')}
                />
        };
    }

    state = {
        showdetail: false,
      };
      
    componentWillMount() {
        this.props.serachEventsToShow();
    }

    searchingEvents() {
        if (this.props.loading) return (<Spinner size="large" color="#ffff" />);

        return (
            <ScrollView style={Styles.scrollViewStyle}>
               {this.renderEvents()}
            </ScrollView>
        );
    }

    changeValue(value) {
        this.setState({ showdetail: value });
    }
    
    showEvento(evento) {
        const { coords } = evento;
      if (this.state.showdetail) {
         return (
              <View>
                  <CardSection>
                      <TextInput
                          style={[Styles.inputStyle, { color: 'black' }]}
                          value={evento.descricao}
                          underlineColorAndroid='transparent'
                          multiline
                          numberOfLines={4}
                          maxLength={250}
                          editable={false}
                      />
                  </CardSection>
                  <CardSection>
                      <Input
                          addStyle={{ color: 'black' }}
                          value={evento.local}
                          editable={false}
                      />
                  </CardSection>
                  <CardSection>
                      <Input
                          addStyle={{ color: 'black' }}  
                          value={evento.data}
                          editable={false}
                      />
                      <Input
                          addStyle={{ color: 'black' }}
                          value={evento.hora}
                          editable={false}
                      />
                  </CardSection>
                  <CardSection>
                     <Button
                         text="Visualizar Evento no Mapa"
                         styles={Styles.btnConfirm}
                         onPress={() => { this.props.navigation.navigate('VisualizarEventoMapa', { coords }); }}
                     />
                  </CardSection>
              </View>
          );s
      }
    }
    renderEvents() {
        return this.props.eventos.map(evento =>
            <View key={evento.id} style={[Styles.eventCardStyle, { marginTop: 5, marginBottom: 5, elevation: 5 }]}>
                <CardSection>
                    <Input
                        addStyle={{ color: 'black' }}
                        value={evento.nome}
                        editable={false}
                    />
                </CardSection>
                <View style={{ justifyContent: 'flex-end', paddingRight: 20, flexDirection: 'row' }}>
                    <View style={{ paddingRight: 10 }}>
                        <TouchableHighlight
                            onPress={() => { this.changeValue(false); }}
                        >
                            <View>
                                <Icon
                                    type='font-awesome'
                                    name='angle-up'
                                    color='#2a4065'
                                    size={30}
                                />
                            </View>
                        </TouchableHighlight>
                    </View>
                    <TouchableHighlight
                        onPress={() => { this.changeValue(true); }}
                    >
                        <View>
                            <Icon
                                type='font-awesome'
                                name='angle-down'
                                color='#2a4065'
                                size={30}
                            />
                        </View>
                    </TouchableHighlight>
                </View>
                <View>
                    {this.showEvento(evento)}
                </View>
            </View>
        );
    }

    render() {
        return (
            this.searchingEvents()
        );
    }
}

const mapStateToProps = (state) => {
    return { 
        loading: state.evento.fetchingEventsToShow,
        eventos: state.evento.eventosToShow 
    };
};
export default connect(mapStateToProps, { serachEventsToShow })(VisualizarEventos);
