import React, { Component } from 'react';
import { Spinner, Card, CardSection, Button, Texts, HeaderImage } from './commons';
import { View, Text, UIManager, Dimensions } from 'react-native';
import { firebaseAuth } from '../config/Config';
import { Icon } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import Styles from '../Styles';

const {height, width} = Dimensions.get('window');

class Main extends Component {
  static navigationOptions = ({navigation}) => {
    const { navigate } = navigation;
    return {
      title: <HeaderImage />,
      headerStyle: {
        paddingLeft: 15,
        paddingRight: 15,
        height: 55
      },
      headerTitleStyle: {
        alignSelf: 'center',
      },
      drawerLabel: 'Início',
      drawerIcon: ({ tintColor }) => (
        <Icon
          type='font-awesome'
          name='home'
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
    }
  }

  render() {
    return (
      <LinearGradient colors={['#2A4065', '#2BA3DA']}>
        <Card>
          <CardSection>
            <Texts sizeText="large" text="Dashboard"/>
          </CardSection>
        </Card>
      </LinearGradient>
    );
  }
};

export default Main;