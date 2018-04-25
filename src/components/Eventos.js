import React, { Component } from 'react';
import { View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Card, CardSection, HeaderImage, Button } from '../components/commons';
import { StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
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
      headerLeft: <Icon
                    name='bars'
                    type='font-awesome'
                    color='#2a4065'
                    size={25}
                    onPress={() => navigate('DrawerOpen')}
                  />,
      headerRight: <Icon
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
      <LinearGradient colors={['#2A4065', '#2BA3DA']}>
        <Card>
          <CardSection>
            <Button
              text="Salvar Evento"
              styles={Styles.btnConfirm}
              onPress={() => { this.props.navigation.navigate('SalvarEventos'); }}
            />
          </CardSection>
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
      </LinearGradient>
    );
  }
}
export default Eventos; 
