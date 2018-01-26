import React from 'react';
import { View } from 'react-native';
import Styles from '../../Styles';

const Card = ({ children, styleCard }) => {
    return (
        <View style={[Styles.cardStyle, styleCard]}>
            {children}
        </View>
    );
};

export { Card };