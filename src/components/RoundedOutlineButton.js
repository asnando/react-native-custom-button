import React from 'react';
import PropTypes from 'prop-types';
import StyledButton from './common/StyledButton';
import ButtonText from './common/ButtonText';
import {
  buttonDefaultColor,
  buttonPropTypes,
  buttonDefaultProps,
} from '../constants';

const RoundedOutlineButtonStyle = {
  borderRadius: 16,
  height: 56,
  width: '100%',
  borderWidth: 2,
};

const RoundedOutlineButtonTextStyle = {
  fontWeight: 'bold',
};

const RoundedOutlineButton = (props) => {
  const {
    title,
    buttonTintColor,
    buttonTextColor,
    buttonBorderColor,
    onPress,
    buttonStyle,
    buttonTextStyle,
  } = props;
  return (
    <StyledButton
      buttonTintColor={buttonTintColor}
      buttonBorderColor={buttonBorderColor}
      onPress={onPress}
      style={[buttonStyle, RoundedOutlineButtonStyle]}
    >
      <ButtonText
        buttonTextColor={buttonTextColor}
        style={[buttonTextStyle, RoundedOutlineButtonTextStyle]}
      >
        {title}
      </ButtonText>
    </StyledButton>
  );
};

RoundedOutlineButton.defaultProps = {
  ...buttonDefaultProps,
  buttonTintColor: 'transparent',
  buttonTextColor: buttonDefaultColor,
  buttonBorderColor: buttonDefaultColor,
};

RoundedOutlineButton.propTypes = {
  ...buttonPropTypes,
};

export default RoundedOutlineButton;
