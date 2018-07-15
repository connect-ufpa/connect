import React, { Component } from 'react';
import { View, TouchableOpacity, FlatList, Text, Dimensions, Modal, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { Icon } from 'react-native-elements';
import { Calendar } from 'react-native-calendars';
import { firebaseAuth } from '../config/Config';
import { HeaderImage, Input, Loading } from '../components/commons';
import { serachEventsToShow, searchEvento } from '../actions';
import Styles from '../Styles';

const HEIGHT = Dimensions.get('window').height;
const MARGIN_TOP_MODAL = HEIGHT * 0.4;

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
        <TouchableOpacity style={{ flex: 1, paddingTop: 20, paddingBottom: 20, paddingRight: 20 }} onPress={() => navigate('DrawerOpen')}>
          <Icon
            type="font-awesome"
            name="bars"
            color="#2a4065"
            size={25}

          />
        </TouchableOpacity>
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
    tituloModal: ''
  }

  componentWillMount() {
    this.props.serachEventsToShow();
  }

  setEventosToState(eventos) {
    this.setState({ datas_eventos: eventos, modal: true, tituloModal: 'Eventos na sua area' });
  }

  infoEventoModal() {
    const { datas_eventos } = this.state;
    const keys = Object.keys(this.state.datas_eventos);
    return (
      keys.map(index => {
        return (
          <View key={index} style={Styles.backgroundModalStyle}>
            <Text style={Styles.textModalStyle}>
              {datas_eventos[index].nome}
            </Text>
            {this.renderEditEventIcon(datas_eventos[index])}
            <TouchableOpacity style={{ padding: 5 }} onPress={() => { this.props.navigation.navigate('VisualizarEvento', datas_eventos[index]); this.setState({ modal: false }); }} >
              <View style={[Styles.iconInsideSearchBarStyle, { backgroundColor: '#2A4065' }]}>
                <Icon
                  name='keyboard-arrow-right'
                  color='#FFF'
                  size={20}
                />
              </View>
            </TouchableOpacity>
          </View>
        );
      })
    );
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
        datas_eventos,
        tituloModal: 'Eventos nesta data'
      });
    }
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
                  <View style={[Styles.iconButtomStyle, { backgroundColor: '#2BA3DA' }]}>
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

  renderButtomSaveEvento() {
    return (
      <View style={{ alignItems: 'center' }}>
        <TouchableOpacity onPress={() => { this.props.navigation.navigate('CriarEvento'); }} >
          <View style={[Styles.iconButtomStyle, { backgroundColor: '#2A4065' }]}>
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

  renderListEventosAchados() {
    if (this.props.eventosAchados.length !== 0) {
      return (
        <View style={{ flex: 1, zIndex: 3, elevation: 8, marginTop: 75, width: '100%', paddingLeft: 18, paddingRight: 18, position: 'absolute' }}>
          <FlatList
            data={this.props.eventosAchados}
            style={{
              borderWidth: 2,
              borderColor: '#FFF',
              backgroundColor: '#FFF',
              borderBottomLeftRadius: 6,
              borderBottomRightRadius: 6,

            }}
            renderItem={({ item }) =>
              <View style={{ flex: 1, borderTopWidth: 1, flexDirection: 'row', borderTopColor: '#777', backgroundColor: '#FFF', padding: 10 }}>
                <Text style={Styles.textFlatListStyle}>
                  {item.nome}
                </Text>
                {this.renderEditEventIcon(item)}
                <TouchableOpacity onPress={() => this.props.navigation.navigate('VisualizarEvento', item)} >
                  <View style={[Styles.iconInsideSearchBarStyle, { backgroundColor: '#2A4065' }]}>
                    <Icon
                      name='keyboard-arrow-right'
                      color='#FFF'
                      size={20}
                    />
                  </View>
                </TouchableOpacity >
              </View>}
          />
        </View>
      );
    }
  }

  renderEditEventIcon(evento) {
    const usuario = firebaseAuth().currentUser;
    if (usuario.uid === evento.usuario_id) {
      return (
        <TouchableOpacity onPress={() => { this.props.navigation.navigate('EditarEvento', evento); this.setState({ modal: false }); }} >
          <View style={[Styles.iconInsideSearchBarStyle, { backgroundColor: '#2BA3DA' }]}>
            <Icon
              type='font-awsome'
              name='edit'
              color='#FFF'
              size={17}
            />
          </View>
        </TouchableOpacity >
      );
    }
  }

  renderCalendar() {
    const selected = true;
    const marked = true;
    const selectedColor = '#2A4065';
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
      <View style={{ margin: 20, borderRadius: 5, borderWidth: 3, borderColor: '#FFF', elevation: 2 }}>
        <View style={{ padding: 5, backgroundColor: '#FFF' }}>
          <Calendar
            onDayPress={(day) => { this.showPoupUpEventoDia(day.dateString); }}
            markedDates={datas_eventos}
          />
        </View>
      </View>
    );
  }

  renderInputPesquisaEvento() {
    return (
      <View style={{ marginTop: 10, paddingRight: 20, paddingLeft: 20, paddingTop: 10, position: 'relative', flexDirection: 'row', justifyContent: 'center' }}>
        <Input
          iconName={'search'}
          value={this.props.eventoNome}
          placeholder={'Pesquise um evento desejado:'}
          onChangeText={evento => this.props.searchEvento(evento, this.props.eventos)}
        />
      </View>
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
          transparent
          animationType="fade"
          visible={this.state.modal}
          onRequestClose={() => { this.setState({ modal: false }); }}
        >
          <ScrollView style={Styles.scrollViewStyle} >
            <View style={[Styles.eventCardStyle, { marginTop: MARGIN_TOP_MODAL, marginLeft: 40, marginRight: 40, marginBottom: 10 }]}>
              <View style={Styles.headerModalStyle}>
                <Text style={Styles.titleModalStyle}>
                  {this.state.tituloModal}
                </Text>
                <View style={{ alignItems: 'flex-end', marginLeft: 20 }}>
                  <TouchableOpacity style={{ padding: 5 }} onPress={() => { this.setState({ modal: false }); }}>
                    <View style={Styles.buttomCloseStyle} >
                      <Icon name="clear" color="#FFF" size={15} />
                    </View>
                  </TouchableOpacity>
                </View>
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
