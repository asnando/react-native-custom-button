import React from 'react';
import PropTypes from 'prop-types';
import StyledButton from './common/StyledButton';
import ButtonText from './common/ButtonText';
import {
  buttonDefaultColor,
  buttonPropTypes,
  buttonDefaultProps,
} from '../constants';

const TextButton = (props) => {
  const {
    title,
    buttonTintColor,
    buttonTextColor,
    onPress,
    buttonStyle,
    buttonTextStyle,
  } = props;
  return (
    <StyledButton buttonTintColor={buttonTintColor} onPress={onPress} style={buttonStyle}>
      <ButtonText numberOfLines={1} buttonTextColor={buttonTextColor || buttonDefaultColor} style={buttonTextStyle}>
        {title}
      </ButtonText>
    </StyledButton>
  );
};

TextButton.defaultProps = {
  ...buttonDefaultProps,
  buttonTintColor: 'transparent',
  buttonTextColor: buttonDefaultColor,
};

TextButton.propTypes = {
  ...buttonPropTypes,
};

export default TextButton;
