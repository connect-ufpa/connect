import React, { Component } from 'react';
import { View, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { firebaseAuth } from '../config/Config';
import { Spinner, Card, CardSection, Button, Texts } from './commons';
import Styles from '../Styles';

class Main extends Component {
  static navigationOptions = ({ navigation }) => {
    const { state, navigate } = navigation;
    return {
      headerStyle: {
        backgroundColor: "#F4394A",
        height: 60
      },
      headerTitleStyle: {
        alignSelf: 'center',
      },
      drawerLabel: 'Início',

      headerLeft: <Button
        styles={Styles.btnCancel}
        text="Logout"
        onPress={() => { firebaseAuth().signOut(); }}
      />
    }
  };
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