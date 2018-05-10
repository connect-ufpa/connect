import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, ImageBackground } from 'react-native';

export default class Header extends Component {
    render() {
        return (
            <ImageBackground style={styles.herdaerBackground} source={require('../../assets/img/paisagem.jpg')}>

                <View style={styles.header}>
                    <View style={styles.profilepicWwrap}>
                        <Image style={styles.profilepic} source={require('../../assets/img/user_male.png')} />
                    </View>

                    <Text style={styles.name}>Hugo Bragança</Text>
                    <Text style={styles.pos}> - 24 - </Text>

                </View>



            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    herdaerBackground: {
        flex: 1,
        width: null,
        alignSelf: 'stretch'
    },
    header: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: 'rgba(0,0,0, 0.5)'
    },
    profilepicWwrap: {
        width: 180,
        height: 180,
        borderRadius: 100,
        borderColor: 'rgba(0,0,0, 0.4)',
        borderWidth: 16,
    },
    profilepic: {
        flex: 1,
        width: null,
        alignSelf: 'stretch',
        borderRadius: 100,
        borderColor: '#3fff',
        borderWidth: 4,
    },
    name: {
        marginTop: 20,
        fontSize: 16,
        color: '#fff',
        fontWeight: 'bold'
    },
    pos: {
        fontSize: 14,
        color: '#0394c0',
        fontWeight: '300',
        fontStyle: 'italic'

    }

})