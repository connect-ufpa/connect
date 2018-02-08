import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import Styles from '../../Styles';

const ButtonBack = ({ onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={Styles.btnBack}>
            <Text style={Styles.btnTextStyle}>{'<'}</Text>
        </TouchableOpacity>
    );
};

export { ButtonBack };