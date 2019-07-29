import React from 'react';
import PropTypes from 'prop-types';
import StyledButton from './common/StyledButton';
import ButtonText from './common/ButtonText';
import {
  buttonPropTypes,
  buttonDefaultProps,
} from '../constants';

const Button = (props) => {
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
      <ButtonText numberOfLines={1} buttonTextColor={buttonTextColor} style={buttonTextStyle}>
        {title}
      </ButtonText>
    </StyledButton>
  );
};

Button.defaultProps = {
  ...buttonDefaultProps,
};

Button.propTypes = {
  ...buttonPropTypes,
};

export default Button;
