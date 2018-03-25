import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { Icon } from 'react-native-elements';
import { searchEventsToEdit } from '../actions';
import { CardSection, HeaderImage, Button, Spinner, Input } from '../components/commons';

class EditarEventos extends Component {
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
    componentWillMount() {
         this.props.searchEventsToEdit();
    }
    searchingEvents() {
        if (this.props.loading) return (<Spinner size="large" color="#ffff" />);

        return (
            <ScrollView>
                {this.renderEvents()}
            </ScrollView>
        );
    }
    renderEvents() {
        return this.props.eventos.map(evento => 
            <CardSection>
                <Input 
                    value={evento.nome}
                />
            </CardSection>
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
        loading: state.evento.fetchingEvents,
        eventos: state.evento.eventosToEdit
    };
};

export default connect(mapStateToProps, { searchEventsToEdit })(EditarEventos);
