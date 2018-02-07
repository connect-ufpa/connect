import React, { Component } from 'react';
import { ScrollView, Image, View } from 'react-native';
import { connect } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import { Actions } from 'react-native-router-flux';
import Swiper from 'react-native-swiper';
import { Card, CardSection, Texts, Input, Button, Spinner } from './commons';
import {
    onNameChanged,
    onRegistrationChanged,
    onBirthChanged,
    onEmailChanged,
    onPasswordChanged,
    onConfirmPasswordChanged,
    saveUser
} from '../actions';
import Styles from '../Styles';

const logo = require('../../assets/img/logo.png');

class CreateUser extends Component {

    renderButton() {
        if (this.props.loading) {
            return (<Spinner size="large" color="#ffff" />);
        }
        return (
            <Button
                text="Cadastrar"
                styles={Styles.btnConfirm}
                onPress={() => {
                    // const user = {
                    //     name: this.props.name,
                    //     registration: this.props.registration,
                    //     birthday: this.props.birthday,
                    //     email: this.props.email,
                    //     password: this.props.password,
                    //     error: this.props.error
                    // }
                    const user = {
                        name: "Otavio Augusto",
                        registration: "201206840012",
                        birthday: "02/07/1992",
                        email: "tavioalves@gmail.com",
                        password: "123456",
                        error: false
                    }
                    this.props.saveUser(user);
                }}
            />
        );
    }

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
                                    onChangeText={birthday => this.props.onBirthChanged(birthday)}
                                    value={this.props.birthday}
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
                                    secureTextEntry
                                    onChangeText={
                                        confirmPassword =>
                                            this.props.onConfirmPasswordChanged(
                                                confirmPassword, this.props.password
                                            )
                                    }
                                    value={this.props.confirmPassword}
                                />
                            </CardSection>
                            <View>
                                <Texts text={this.props.errorMessageConfirmPassword} />
                            </View>
                            <CardSection>
                                {this.renderButton()}
                            </CardSection>
                            <View>
                                <Texts text={this.props.errorMessageCreateAccountFail} />
                            </View>
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
        birthday: state.createUser.birthday,
        email: state.createUser.email,
        password: state.createUser.password,
        confirmPassword: state.createUser.confirmPassword,
        loading: state.createUser.loading,
        error: state.createUser.error,
        errorMessageName: state.createUser.errorMessageName,
        errorMessageRegistration: state.createUser.errorMessageRegistration,
        errorMessageBirthday: state.createUser.errorMessageBirthday,
        errorMessageEmail: state.createUser.errorMessageEmail,
        errorMessagePassword: state.createUser.errorMessagePassword,
        errorMessageConfirmPassword: state.createUser.errorMessageConfirmPassword,
        errorMessageCreateAccountFail: state.createUser.errorMessageCreateAccountFail
    };
};
export default connect(mapStateToProps, {
    onNameChanged,
    onRegistrationChanged,
    onBirthChanged,
    onEmailChanged,
    onPasswordChanged,
    onConfirmPasswordChanged,
    saveUser
})(CreateUser);
