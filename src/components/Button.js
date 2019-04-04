import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import resolveColorScheme from '../helpers/resolveColorScheme';
import {
  DEFAULT_ACTIVE_BUTTON_OPACITY,
  PRIMARY_COLOR,
  PRIMARY_TEXT_COLOR,
  DEFAULT_BUTTON_STYLE,
  DEFAULT_BUTTON_TEXT_FONT_SIZE,
} from '../constants';

const Button = (props) => {

  const buttonStyle = {
    backgroundColor: PRIMARY_COLOR,
    ...DEFAULT_BUTTON_STYLE,
    ...props.style,
    ...resolveColorScheme(props)
  };

  const textStyle = {
    fontSize: DEFAULT_BUTTON_TEXT_FONT_SIZE,
    color: PRIMARY_TEXT_COLOR,
    ...resolveColorScheme(props)
  };

  return (
    <TouchableOpacity onPress={props.onPress} style={buttonStyle} activeOpacity={DEFAULT_ACTIVE_BUTTON_OPACITY}>
      <Text style={textStyle}>{props.title}</Text>
    </TouchableOpacity>
  );

}

export default Button;