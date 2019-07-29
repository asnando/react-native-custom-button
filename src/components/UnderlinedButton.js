import React from 'react';
import PropTypes from 'prop-types';
import StyledButton from './common/StyledButton';
import ButtonText from './common/ButtonText';
import {
  buttonDefaultColor,
  buttonPropTypes,
  buttonDefaultProps,
} from '../constants';

const UnderlinedButtonTextStyle = {
  textDecorationLine: 'underline',
};

const UnderlinedButton = (props) => {
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
      <ButtonText numberOfLines={1} buttonTextColor={buttonTextColor} style={[buttonTextStyle, UnderlinedButtonTextStyle]}>
        {title}
      </ButtonText>
    </StyledButton>
  );
};

UnderlinedButton.defaultProps = {
  ...buttonDefaultProps,
  buttonTintColor: 'transparent',
  buttonTextColor: buttonDefaultColor,
};

UnderlinedButton.propTypes = {
  ...buttonPropTypes,
};

export default UnderlinedButton;
