import React from 'react';
import PropTypes from 'prop-types';
import StyledButton from './common/StyledButton';
import ButtonText from './common/ButtonText';
import {
  buttonDefaultColor,
  buttonDefaultFontColor,
  buttonPropTypes,
  buttonDefaultProps,
} from '../constants';

const RoundedButtonStyle = {
  borderRadius: 16,
  height: 56,
  marginTop: 8,
  marginBottom: 8,
  width: '100%',
};

const RoundedButtonTextStyle = {
  fontWeight: 'bold',
};

const RoundedButton = (props) => {
  const {
    title,
    buttonTintColor,
    buttonTextColor,
    onPress,
    buttonStyle,
    textStyle,
  } = props;
  return (
    <StyledButton
      buttonTintColor={buttonTintColor}
      onPress={onPress}
      style={[
        buttonStyle,
        RoundedButtonStyle,
      ]}
    >
      <ButtonText
        buttonTextColor={buttonTextColor}
        style={[
          textStyle,
          RoundedButtonTextStyle,
        ]}
      >
        {title}
      </ButtonText>
    </StyledButton>
  );
};

RoundedButton.defaultProps = {
  ...buttonDefaultProps,
  buttonTintColor: buttonDefaultColor,
  buttonTextColor: buttonDefaultFontColor,
};

RoundedButton.propTypes = {
  ...buttonPropTypes,
};

export default RoundedButton;
