import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Icon } from 'react-native-elements';
import { searchEventsToEdit } from '../actions';
import { Card, CardSection, HeaderImage, Button, Spinner } from '../components/commons';

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
        
        console.log("O QUE TA VINDO", this.props.eventos);
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
