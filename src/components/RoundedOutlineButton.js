import React from 'react';
import PropTypes from 'prop-types';
import StyledButton from './common/StyledButton';
import ButtonText from './common/ButtonText';
import {
  buttonDefaultColor,
} from '../constants';

const RoundedOutlineButtonStyle = {
  borderRadius: 16,
  height: 56,
  marginTop: 8,
  marginBottom: 8,
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
    textStyle,
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
        style={[textStyle, RoundedOutlineButtonTextStyle]}
      >
        {title}
      </ButtonText>
    </StyledButton>
  );
};

RoundedOutlineButton.defaultProps = {
  buttonTintColor: 'transparent',
  buttonTextColor: buttonDefaultColor,
  buttonBorderColor: buttonDefaultColor,
  onPress: null,
  buttonStyle: {},
  textStyle: {},
};

RoundedOutlineButton.propTypes = {
  title: PropTypes.string.isRequired,
  buttonTintColor: PropTypes.string,
  buttonTextColor: PropTypes.string,
  buttonBorderColor: PropTypes.string,
  onPress: PropTypes.func,
  buttonStyle: PropTypes.object,
  textStyle: PropTypes.object,
};

export default RoundedOutlineButton;
