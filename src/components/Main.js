import React, { Component } from 'react';
import { View, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Actions } from 'react-native-router-flux';
import { firebaseAuth } from '../config/Config';
import { Spinner, Card, CardSection, Button } from './commons';
import Styles from '../Styles';

class Main extends Component {
  render () {
    return (
      <LinearGradient colors={['#2A4065', '#2BA3DA']}>
        <Card>
          <CardSection>
            <Text>Dashboard</Text>
          </CardSection>
          <CardSection>
            <Button
              styles={Styles.btnCancel}
              text="Logout"
              onPress={() => {Actions.login(); firebaseAuth ().signOut();} }
            />
          </CardSection>
        </Card>
      </LinearGradient>
    );
  }
};

export default Main;