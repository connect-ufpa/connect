import React, { Component } from 'react';
import { ScrollView, Image, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Actions } from 'react-native-router-flux';
import { Input, Card, CardSection, Button, Texts } from './commons/';
import Styles from '../Styles';

const logo = require('../../assets/img/logo.png');

class Login extends Component {
    render() {
        return (
            <LinearGradient colors={['#62B5DB', '#D6534D']}>
                <ScrollView style={Styles.scrollViewStyle} >
                    <Card>
                        <CardSection>
                            <Image
                                source={logo}
                                style={{ width: 95, height: 120, marginBottom: 10 }}
                            />
                        </CardSection>
                        <CardSection>
                            <Input
                                placeholder="Digite seu e-mail lalalala 123456:"
                            />
                        </CardSection>
                        <CardSection>
                            <Input
                                placeholder="Digite sua senha:"
                            />
                        </CardSection>
                        <View>
                            <TouchableOpacity style={{ paddingLeft: 160 }}>
                                <Texts text="Esqueci a senha" sizeText="medium" />
                            </TouchableOpacity>
                        </View>
                        <CardSection>
                            <Button
                                text="Entrar"
                                styles={Styles.btnConfirm}
                            />
                        </CardSection>
                        <CardSection>
                            <TouchableOpacity onPress={() => { Actions.createUser(); }}>
                                <Texts text="Criar conta" sizeText="medium" />
                            </TouchableOpacity>
                        </CardSection>
                    </Card>
                </ScrollView>
            </LinearGradient>
        );
    }
}

export default Login;
