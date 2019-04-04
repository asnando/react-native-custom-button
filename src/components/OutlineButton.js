import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import {
  DEFAULT_ACTIVE_BUTTON_OPACITY,
  PRIMARY_TEXT_COLOR,
  PRIMARY_BORDER_COLOR,
  DEFAULT_BUTTON_STYLE,
  DEFAULT_BUTTON_TEXT_FONT_SIZE,
} from '../constants';

const OutlineButton = (props) => {

  const buttonStyle = {
    borderWidth: 1,
    borderColor: PRIMARY_BORDER_COLOR,
    ...DEFAULT_BUTTON_STYLE,
    ...props.style,
  };

  const textStyle = {
    fontSize: DEFAULT_BUTTON_TEXT_FONT_SIZE,
    color: props.style.color || PRIMARY_TEXT_COLOR,
  };

  return (
    <TouchableOpacity onPress={props.onPress} style={buttonStyle} activeOpacity={DEFAULT_ACTIVE_BUTTON_OPACITY}>
      <Text style={textStyle}>{props.title}</Text>
    </TouchableOpacity>
  );

}

export default OutlineButton;