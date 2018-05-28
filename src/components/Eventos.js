import React, { Component } from 'react';
import { View, TouchableOpacity, FlatList, Text, Dimensions, Modal, TouchableHighlight, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { Icon } from 'react-native-elements';
import { Calendar } from 'react-native-calendars';
import { firebaseAuth } from '../config/Config';
import { HeaderImage, Input, Loading } from '../components/commons';
import { serachEventsToShow, searchEvento } from '../actions';
import Styles from '../Styles';

const HEIGHT = Dimensions.get('window').height;
const HALFHEIGHT = HEIGHT * 0.13;
const MODALSUCCESS = HEIGHT * 0.4;

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
      drawerIcon: () => (
        <Icon
          type='font-awesome'
          name='calendar'
          color='#2a4065'
          size={25}
        />
      ),
      headerLeft: (
        <View>
          <Icon
            name="bars"
            type="font-awesome"
            color="#2a4065"
            size={25}
            onPress={() => navigate('DrawerOpen')}
          />
        </View>
      ),
      headerRight: (
        <View>
          <Icon
            name="settings"
            color="#2a4065"
            size={25}
            onPress={() => navigate('DrawerOpen')}
          />
        </View>
      ),
    };
  }
  state = {
    modal: false,
    datas_eventos: [],
    trabalho: 'Trabalho',
    loading: true
  }

  componentWillMount() {
    this.props.serachEventsToShow();
  }

  setEventosToState(eventos) {
    this.setState({ datas_eventos: eventos, modal: true });
  }

  showLoading() {
    if (this.props.loading) return (<Loading />);
  }

  showPoupUpEventoDia(data) {
    const formatData = data.split('-').reverse().join('/');
    let datas_eventos = {};
    let id = '';
    this.props.eventos.map(evento => {
      if (evento.data_inicio === formatData) {
        id = evento.id;
        datas_eventos = { ...datas_eventos, [evento.id]: evento };
      }
      return datas_eventos;
    });
    if (Object.prototype.hasOwnProperty.call(datas_eventos, id)) {
      this.setState({
        modal: true,
        datas_eventos
      });
    }
  }

  infoEventoModal() {
    const { datas_eventos } = this.state;
    const keys = Object.keys(this.state.datas_eventos);
    return (
      keys.map(index => {
        return (
          <View key={index} style={{ flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
            <Text style={{ flex: 1, color: '#777', fontSize: 15, margin: 5, height: 40, paddingTop: 7, paddingLeft: 5 }}>
              {datas_eventos[index].nome}
            </Text>
            {this.renderEditEventIcon(datas_eventos[index])}
            <View style={{ marginTop: 7 }}>
              <TouchableOpacity onPress={() => { this.props.navigation.navigate('VisualizarEvento', datas_eventos[index]); this.setState({ modal: false }); }} >
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
          </View>
        );
      })
    );
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
          <TouchableOpacity onPress={() => { this.props.navigation.navigate('EditarEvento', evento); this.setState({ modal: false }); }} >
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
      <View style={{ margin: 18.5, marginTop: HALFHEIGHT, borderRadius: 5, borderWidth: 3, borderColor: '#FFF', elevation: 8 }}>
        <View style={{ padding: 5, backgroundColor: '#FFF' }}>
          <Calendar
            onDayPress={(day) => { this.showPoupUpEventoDia(day.dateString); }}
            markedDates={datas_eventos}
          />
        </View>
      </View>
    );
  }

  renderButtomSaveEvento() {
    return (
      <View style={{ alignItems: 'center' }}>
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
      </View>
    );
  }

  renderButtomEventosRelated() {
    let render_button_once = 0;
    const eventos = [];
    return (
      this.props.eventos.map(evento => {
        if (this.state.trabalho === evento.area_tematica) {
          eventos.push(evento);
          if (render_button_once === 0) {
            render_button_once = 1;
            return (
              <View key={evento.id} style={{ alignItems: 'center', marginLeft: 10 }}>
                <TouchableOpacity onPress={() => { this.setEventosToState(eventos); }} >
                  <View style={[Styles.iconButtomStyle, { backgroundColor: '#2A4065' }]}>
                    <Icon
                      type='material-community'
                      name='calendar-text'
                      color='#FFF'
                      size={25}
                    />
                  </View>
                </TouchableOpacity>
              </View>
            );
          }
        }
        return null;
      })
    );
  }

  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'column' }}>
        {this.renderInputPesquisaEvento()}
        {this.renderListEventosAchados()}
        {this.showLoading()}
        {this.renderCalendar()}
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
          {this.renderButtomSaveEvento()}
          {this.renderButtomEventosRelated()}
        </View>
        <Modal
          animationType="slide"
          transparent
          visible={this.state.modal}
          onRequestClose={() => { this.setState({ modal: false }); }}
        >
          <ScrollView style={Styles.scrollViewStyle} >
            <View style={[Styles.eventCardStyle, { marginTop: MODALSUCCESS }]}>
              <View style={{ alignItems: 'flex-end', paddingTop: 5, paddingRight: 10 }}>
                <TouchableHighlight
                  onPress={() => { this.setState({ modal: false }); }}
                >
                  <View>
                    <Icon
                      type='font-awesome'
                      name='times-circle'
                      color='#CC2820'
                      size={30}
                    />
                  </View>
                </TouchableHighlight>
              </View>
              {this.infoEventoModal()}
            </View>
          </ScrollView>
        </Modal>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.evento.fetchingEventsToShow,
    helper: state.evento.helper,
    positionHelper: state.evento.positionHelper,
    eventos: state.evento.eventosToShow,
    eventoNome: state.evento.eventoPesquisado,
    eventosAchados: state.evento.eventosAchados,
  };
};
export default connect(mapStateToProps, { serachEventsToShow, searchEvento })(Eventos);
