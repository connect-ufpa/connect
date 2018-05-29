import React from 'react';
import { Text } from 'react-native';
import Styles from '../../Styles';

const Texts = ({ text, style, addStyle }) => {
  let textStyle;

  switch (style) {
    case 'xlarge':
      textStyle = Styles.xLargeTextStyle;
      break;
    case 'large':
      textStyle = Styles.largeTextStyle;
      break;
    case 'medium':
      textStyle = Styles.mediumTextStyle;
      break;
    case 'smallBlue':
      textStyle = Styles.smallBlueTextStyle;
      break;
    default:
      textStyle = Styles.smallTextStyle;
      break;
  }

  return (
    <Text style={[ textStyle, addStyle ]}>
      {text}
    </Text>
  );
};

export { Texts };
