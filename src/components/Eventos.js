import React, { Component } from 'react';
import { View, TouchableOpacity, FlatList, Text, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { Icon } from 'react-native-elements';
import { Calendar } from 'react-native-calendars';
import { StackNavigator } from 'react-navigation';
import { firebaseAuth } from '../config/Config';
import { HeaderImage, Texts, Input } from '../components/commons';
import { serachEventsToShow, searchEvento } from '../actions';
import Styles from '../Styles';

const HEIGHT = Dimensions.get('window').height;
const HALFHEIGHT = HEIGHT * 0.15;

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
      <View style={Styles.searchBarStyle}>
        <Input
          placeholder='Pesquise evento desejado:'
          value={this.props.eventoNome}
          onChangeText={evento => this.props.searchEvento(evento, this.props.eventos)}
          addStyle={{ elevation: 8, borderColor: '#2A4065', color: '#2A4065', fontSize: 14 }}
        />
      </View>
    );
  }

  renderEditEventIcon(evento) {
    const usuario = firebaseAuth().currentUser;
    if (usuario.uid === evento.usuario_id) {
      return (
        <View style={{ marginTop: 7 }}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('EditarEvento', evento)} >
            <View style={[Styles.iconInsideSearchBarStyle, { backgroundColor: '#CC2820' }]}>
              <Icon
                type='material-community'
                name='calendar'
                color='#FFF'
                size={20}
              />
            </View>
          </TouchableOpacity >
        </View>
      );
    }
  }

  renderListEventosAchados() {
    if (this.props.eventosAchados.length !== 0) {
      return (
        <View style={Styles.viewListItensFoundStyle}>
          <FlatList
            data={this.props.eventosAchados}
            style={Styles.flatListStyle}
            renderItem={({ item }) =>
              <View style={Styles.backgroudTextFlatListStyle}>
                <Text style={Styles.textFlatListStyle}>
                  {item.nome}
                </Text>
                {this.renderEditEventIcon(item)}
                <View style={{ marginTop: 7 }}>
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('VisualizarEvento', item)} >
                    <View style={[Styles.iconInsideSearchBarStyle, { backgroundColor: '#2BA3DA' }]}>
                      <Icon
                        type='font-awesome'
                        name='eye'
                        color='#FFF'
                        size={20}
                      />
                    </View>
                  </TouchableOpacity >
                </View>
              </View>}
          />
        </View>
      );
    }
  }

  renderCalendar() {
    const selected = true;
    const marked = true;
    const selectedColor = '#2BA3DA';
    let markedDates = {};
    markedDates = { ...markedDates, ...{ selected } };
    markedDates = { ...markedDates, ...{ marked } };
    markedDates = { ...markedDates, ...{ selectedColor } };
    let datas_eventos = {};
    this.props.eventos.map(evento => {
      const evento_data = evento.data_inicio.split('/').reverse().join('-');
      const updatedMarkedDates = { ...datas_eventos, [evento_data]: markedDates };
      datas_eventos = { ...updatedMarkedDates };
      return datas_eventos;
    });
    return (
      <View style={{ flex: 1, marginTop: HALFHEIGHT }}>
        <Calendar
          onDayPress={(day) => { console.log('selected day', day.dateString) }}
          markedDates={datas_eventos}
        />
      </View>
    );
  }

  renderButtomSaveEvento() {
    return (
      <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'flex-end' }}>
        <TouchableOpacity onPress={() => { this.props.navigation.navigate('SalvarEventos'); }} >
          <View style={[Styles.iconButtomStyle, { backgroundColor: '#2BA3DA' }]}>
            <Icon
              type='material-community'
              name='calendar-plus'
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
      <View style={{ flex: 1, flexDirection: 'column' }}>
        {this.renderInputPesquisaEvento()}
        {this.renderListEventosAchados()}
        {this.renderCalendar()}
        {this.renderButtomSaveEvento()}
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
