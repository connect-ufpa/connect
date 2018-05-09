import React, { Component } from 'react';
import { View, TouchableOpacity, FlatList, Text } from 'react-native';
import { connect } from 'react-redux';
import { Icon } from 'react-native-elements';
import { StackNavigator } from 'react-navigation';
import { CardSection, HeaderImage, Button, Texts, Input } from '../components/commons';
import { serachEventsToShow, searchEvento } from '../actions';
import Styles from '../Styles';

class Eventos extends Component {
  static navigationOptions = ({ navigation }) => {
    const { navigate } = navigation;
    return {
      headerTitle: <View style={{ flex: 1, alignContent: 'center' }}><HeaderImage /></View>,
      headerStyle: {
        paddingLeft: 15,
        paddingRight: 15,
        height: 55
      },
      headerTitleStyle: {
        alignSelf: 'center',
      },
      drawerLabel: 'Eventos',
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
          name='bars'
          type='font-awesome'
          color='#2a4065'
          size={25}
          onPress={() => navigate('DrawerOpen')}
        />,
      headerRight:
        <Icon
          name='search'
          type='font-awesome'
          color='#2a4065'
          size={25}
          onPress={() => navigate('DrawerOpen')}
        />,
    };
  }

  componentWillMount() {
    this.props.serachEventsToShow();
  }
  renderInputPesquisaEvento() {
    return (
      <View style={{ flex: 1, zIndex: 1, padding: 20, width: '100%', position: 'absolute' }}>
        <Input
          placeholder='Pesquise evento desejado:'
          value={this.props.eventoNome}
          onChangeText={evento => this.props.searchEvento(evento, this.props.eventos)}
          addStyle={{ elevation: 8, borderColor: '#2A4065', color: '#2A4065', fontSize: 14 }}
        />
      </View>
    );
  }

  renderListEventosAchados() {
    if (this.props.eventosAchados.length !== 0) {
      return (
        <View style={{ flex: 1, zIndex: 1, position: 'absolute', marginTop: 70, paddingLeft: 20, paddingRight: 20, elevation: 8, width: '100%' }}>
          <FlatList
            data={this.props.eventosAchados}
            style={{ borderBottomLeftRadius: 6, borderBottomRightRadius: 6, borderWidth: 2, borderColor: '#2A4065' }}
            renderItem={({ item }) =>
              <TouchableOpacity onPress={evento => this.props.searchEvento(evento, this.props.eventos)}>
                <Text style={{ backgroundColor: 'white', color: '#777', fontSize: 12, padding: 12.5 }}>
                  {item.nome}
                </Text>
              </TouchableOpacity >}
          />
        </View>
      );
    }
  }

  renderButtomSaveEvento() {
    return (
      <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'flex-end' }}>
        <TouchableOpacity onPress={() => { this.props.navigation.navigate('SalvarEventos'); }} >
          <View style={{ height: 60, width: 60, margin: 15, backgroundColor: '#2BA3DA', elevation: 8, borderRadius: 150, alignContent: 'center', justifyContent: 'center' }}>
            <Icon
              type='font-awesome'
              name='calendar'
              color='#FFF'
              size={25}
            />
          </View>
        </TouchableOpacity>
        <View style={{ marginLeft: 10 }} >
          <Texts text="Criar evento" />
        </View>
      </View>
    );
  }
  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'row' }}>
        {this.renderInputPesquisaEvento()}
        {this.renderListEventosAchados()}
        {this.renderButtomSaveEvento()}

        {/* 
        <CardSection>
          <Button
            text="Editar Eventos"
            styles={Styles.btnConfirm}
            onPress={() => { this.props.navigation.navigate('EditarEventos'); }}
          />
        </CardSection>
        <CardSection>
          <Button
            text="Visualizar Eventos"
            styles={Styles.btnConfirm}
            onPress={() => { this.props.navigation.navigate('VisualizarEventos'); }}
          />
        </CardSection> */}
      </View>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    loading: state.evento.fetchingEventsToShow,
    eventos: state.evento.eventosToShow,
    eventoNome: state.evento.eventoPesquisado,
    eventosAchados: state.evento.eventosAchados
  };
};
export default connect(mapStateToProps, { serachEventsToShow, searchEvento })(Eventos);
