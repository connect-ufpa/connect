import React, { Component } from 'react';
import { Dimensions, Text, ScrollView, View, Alert } from 'react-native';
import { Card, CardSection, Texts, HeaderImage } from '../components/commons';
import { Icon } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';

class Sobre extends Component {
  static navigationOptions = ({navigation}) => {
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
      drawerLabel: 'Sobre',
      drawerIcon: ({ tintColor }) => (
        <Icon
          type='font-awesome'
          name='heart'
          color='#2a4065'
          size={23}
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
            <Texts style='large' text='Sobre'/>
          </CardSection>
        </Card>
      </LinearGradient>
    );
  }
}
export default Sobre; 