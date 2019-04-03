import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text
} from 'react-native';

const DEFAULT_ACTIVE_BUTTON_OPACITY = .7;

const Button = (props) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[ buttonStyle.button, props.style ]}
      activeOpacity={DEFAULT_ACTIVE_BUTTON_OPACITY}>
      <Text style={buttonStyle.buttonTitle}>{props.title}</Text>
    </TouchableOpacity>
  );
}

export default Button;

const buttonStyle = StyleSheet.create({
  button: {
    backgroundColor: 'purple',
    width: 232,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  buttonTitle: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  }
});