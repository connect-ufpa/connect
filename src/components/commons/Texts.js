import React from 'react';
import { Text } from 'react-native';
import Styles from '../../Styles';

const Texts = ({ text, sizeText }) => {
  let typeStyle;

  switch (sizeText) {
    case 'xlarge':
      typeStyle = Styles.xLargeTextStyle;
      break;
    case 'large':
      typeStyle = Styles.largeTextStyle;
      break;
    case 'medium':
      typeStyle = Styles.mediumTextStyle;
      break;
    default:
      typeStyle = Styles.smallTextStyle;
      break;
  }

  return (
    <Text style={typeStyle}>
      {text}
    </Text>
  );
};

export { Texts };
