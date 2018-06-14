import React from 'react';
import { View, Text, Dimensions, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import Styles from '../../Styles';

const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;

const HelperCard = ({ onPress, message, title, kind }) => {
  if (kind === 'helper') {
    return (
      <View
        style={[
          Styles.cardHelperStyle,
          { width: WIDTH * 0.5, height: HEIGHT * 0.2 },
        ]}
      >
        <View style={Styles.cardHelperHeaderContainer}>
          <Text style={Styles.dicaTextStyle}>{title}</Text>
          <TouchableOpacity
            style={{ alignSelf: 'center' }}
            onPress={onPress}
          >
            <View style={Styles.buttomCloseStyle}>
              <Icon name="clear" color="#FFF" size={15} />
            </View>
          </TouchableOpacity>
        </View>
        <Text style={Styles.textCardHelperStyle}>{message}</Text>
      </View>
    );
  } else {
    return (
      <View
        style={[
          Styles.cardHelperStyle,
          { width: WIDTH * 0.5, height: HEIGHT * 0.2 },
        ]}
      >
        <View style={Styles.cardHelperHeaderContainer}>
          <Text style={[Styles.dicaTextStyle, { color: '#CC2820' }]}>{title}</Text>
          <TouchableOpacity
            style={{ alignSelf: 'center' }}
            onPress={onPress}
          >
            <View style={Styles.buttomCloseStyle}>
              <Icon name="clear" color="#FFF" size={15} />
            </View>
          </TouchableOpacity>
        </View>
        <Text style={Styles.textCardHelperStyle}>{message}</Text>
      </View>
    );
  }
};

export { HelperCard };
