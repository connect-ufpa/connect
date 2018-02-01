import React, { Component } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { ScrollView, Image, View, Text, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Swiper from 'react-native-swiper';
import { Card, CardSection, Texts, Input, Button } from './commons';
import Styles from '../Styles';

const logo = require('../../assets/img/logo.png');

class CreateUser extends Component {
    render() {
        return (
            <Swiper>
                <LinearGradient colors={['#62B5DB', '#D6534D']}>
                    <ScrollView style={Styles.scrollViewStyle}>
                        <Card>
                            <CardSection>
                                <Image
                                    source={logo}
                                    style={{ width: 95, height: 120, marginBottom: 10 }}
                                />
                            </CardSection>
                            <CardSection>
                                <Input
                                    placeholder="Nome:"
                                />
                            </CardSection>
                            <CardSection>
                                <Input
                                    placeholder="Matrícula:"
                                />
                            </CardSection>
                            <CardSection>
                                <Input
                                    placeholder="Nascimento: 00/00/0000"
                                />
                            </CardSection>
                        </Card>
                    </ScrollView>
                </LinearGradient>

                <LinearGradient colors={['#62B5DB', '#D6534D']}>
                    <ScrollView style={Styles.scrollViewStyle}>
                        <Card>
                            <CardSection>
                                <Image
                                    source={logo}
                                    style={{ width: 95, height: 120, marginBottom: 10 }}
                                />
                            </CardSection>
                            <CardSection>
                                <Input
                                    placeholder="Nome:"
                                />
                            </CardSection>
                            <CardSection>
                                <Input
                                    placeholder="Matrícula:"
                                />
                            </CardSection>
                            <CardSection>
                                <Input
                                    placeholder="Nascimento: 00/00/0000"
                                />
                            </CardSection>
                            <CardSection>
                                <Button
                                    text="Cadastrar"
                                    styles={Styles.btnConfirm}
                                />
                            </CardSection>
                        </Card>
                    </ScrollView>
                </LinearGradient>
            </Swiper>

        );
    }
}

export default CreateUser;
