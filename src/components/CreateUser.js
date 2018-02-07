import React, { Component } from 'react';
import { ScrollView, Image, View } from 'react-native';
import { connect } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import { Actions } from 'react-native-router-flux';
import Swiper from 'react-native-swiper';
import { Card, CardSection, Texts, Input, Button } from './commons';
import {
    onNameChanged,
    onRegistrationChanged,
    onBirthChanged,
    onEmailChanged,
    onPasswordChanged
} from '../actions';
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
                                    onChangeText={name => this.props.onNameChanged(name)}
                                    value={this.props.name}
                                />
                            </CardSection>
                            <View>
                                <Texts text={this.props.errorMessageName} />
                            </View>
                            <CardSection>
                                <Input
                                    placeholder="Matrícula:"
                                    onChangeText={
                                        registration => 
                                        this.props.onRegistrationChanged(registration)
                                    }
                                    value={this.props.registration}
                                />
                            </CardSection>
                            <View>
                                <Texts text={this.props.errorMessageRegistration} />
                            </View>
                            <CardSection>
                                <Input
                                    placeholder="Nascimento: 00/00/0000"
                                    onChangeText={birth => this.props.onBirthChanged(birth)}
                                    value={this.props.date}
                                />
                            </CardSection>
                            <View>
                                <Texts text={this.props.errorMessageDate} />
                            </View>
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
                                    placeholder="E-mail:"
                                    onChangeText={email => this.props.onEmailChanged(email)}
                                    value={this.props.email}
                                />
                            </CardSection>
                            <View>
                                <Texts text={this.props.errorMessageEmail} />
                            </View>
                            <CardSection>
                                <Input
                                    placeholder="Senha:"
                                    secureTextEntry
                                    onChangeText={
                                        password => 
                                        this.props.onPasswordChanged(password)
                                    }
                                    value={this.props.password}
                                />
                            </CardSection>
                            <View>
                                <Texts text={this.props.errorMessagePassword} />
                            </View>
                            <CardSection>
                                <Input
                                    placeholder="Confirmação de senha:"
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

const mapStateToProps = (state) => {
    return {
        name: state.createUser.name,
        registration: state.createUser.registration,
        date: state.createUser.date,
        email: state.createUser.email,
        password: state.createUser.password,
        errorMessageName: state.createUser.errorMessageName,
        errorMessageRegistration: state.createUser.errorMessageRegistration,
        errorMessageDate: state.createUser.errorMessageDate,
        errorMessageEmail: state.createUser.errorMessageEmail,
        errorMessagePassword: state.createUser.errorMessagePassword
    };
};
export default connect(mapStateToProps, {
    onNameChanged,
    onRegistrationChanged,
    onBirthChanged,
    onEmailChanged,
    onPasswordChanged
})(CreateUser);
