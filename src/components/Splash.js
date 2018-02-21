import React, { Component } from 'react';
import { Image } from 'react-native';
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

            } else {
                
            }
        });
    }
    render() {
        return (
            <LinearGradient colors={['#2A4065', '#2BA3DA']}>
                <Card>
                    <CardSection>
                        <Image
                            source={logo}
                            style={{ width: 150, height: 135, marginBottom: 60 }}
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
