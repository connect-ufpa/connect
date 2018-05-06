import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { Card, CardSection, HeaderImage, Button, Texts, Input } from '../components/commons';
import { StackNavigator } from 'react-navigation';
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

  render() {
    return (
      <Card>
        <CardSection>
          <View style={{ flex: 1, zIndex: 1, padding: 20, width: '100%', position: 'absolute' }}>
            <Input
              placeholder="Pesquise evento desejado:"
              addStyle={{ elevation: 8, borderColor: "#2A4065", color: "#2A4065", fontSize: 14 }}
            />
          </View>
        </CardSection>
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
        <Texts text="Criar evento" />
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
        </CardSection>
      </Card>
    );
  }
}
export default Eventos; 
