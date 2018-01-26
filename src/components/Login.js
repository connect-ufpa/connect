import React, { Component } from 'react';
import { View } from 'react-native';
import { Input } from './commons/';

class Login extends Component {
    render () {
        return (
            <View>
                <Input 
                    placeholder="Digite seu nome"
                />
            </View>
        )
    } 
}

export default Login;
