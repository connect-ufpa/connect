import React, { Component } from 'react';
import { ScrollView, Image } from 'react-native';
import { connect } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import { Actions } from 'react-native-router-flux';
import Swiper from 'react-native-swiper';
import { Card, CardSection, Texts, Input, Button } from './commons';
import { onNameChanged } from '../actions';
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

const mapStateToPropos = (state) => {
    return {
        name: state.createUser.name
    };
};
export default connect(mapStateToPropos, { onNameChanged })(CreateUser);
