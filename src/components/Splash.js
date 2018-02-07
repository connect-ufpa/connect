import React, { Component } from 'react';
import { Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import LinearGradient from 'react-native-linear-gradient';
import Orientation from 'react-native-orientation';
import { firebaseAuth } from '../config/Config';
import { Spinner, Card, CardSection } from './commons';

const logo = require('../../assets/img/logo.png');

class Splash extends Component {
    /*
        Função que verifica se o usuário está logado. Se não existe usuário, vai pra tela
        de login, se existe, vai pra tela principal
    */
    componentWillMount() {
        Orientation.lockToPortrait();
        firebaseAuth().onAuthStateChanged((user) => {
            if (!user) {
                Actions.login();
            } else {
                Actions.main();
            }
        });
    }
    render() {
        return (
            <LinearGradient colors={['#62B5DB', '#D6534D']}>
                <Card>
                    <CardSection>
                        <Image
                            source={logo}
                            style={{ width: 95, height: 120, marginBottom: 60 }}
                        />
                    </CardSection>
                    <CardSection>
                        <Spinner size="large" color="#ffff" />
                    </CardSection>
                </Card>
            </LinearGradient>
        );
    }
}

export default Splash;
