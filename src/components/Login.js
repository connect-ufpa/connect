import React, { Component } from 'react';
import { Scroll, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Input, Card, CardSection, Button } from './commons/';
import Styles from '../Styles';

const logo = require('../../assets/img/logo.png');

class Login extends Component {
    render () {
        return (
            <LinearGradient colors={['#62B5DB', '#D6534D']}>
                <Card>
                    <CardSection>
                        <Image
                            source={logo}
                            style={{width: 95, height: 120, marginBottom: 60}}
                        />              
                    </CardSection>
                    <CardSection>               
                        <Input 
                            placeholder="Digite seu e-mail:"
                        />
                    </CardSection>
                    <CardSection>               
                        <Input 
                            placeholder="Digite sua senha:"
                        />
                    </CardSection>
                    <CardSection>               
                        <Button 
                            text="Entrar"
                            styles={Styles.btnConfirm}
                        />
                    </CardSection>
                </Card>
            </LinearGradient>
        );
    } 
}

export default Login;
