import React from 'react';
import PropTypes from 'prop-types';
import StyledButton from './common/StyledButton';
import ButtonText from './common/ButtonText';
import {
  buttonPropTypes,
  buttonDefaultProps,
} from '../constants';

const RAISE_BUTTON_BORDER_WIDTH = 4;

const RaisedButtonStyle = {
  borderBottomWidth: RAISE_BUTTON_BORDER_WIDTH,
  borderRightWidth: 1,
  borderLeftWidth: 1,
  borderRadius: (RAISE_BUTTON_BORDER_WIDTH * 2),
};

const RaisedButtonTextStyle = {
  marginTop: (RAISE_BUTTON_BORDER_WIDTH / 2),
};

const RaisedButton = (props) => {
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
      style={[RaisedButtonStyle, buttonStyle]}
    >
      <ButtonText
        buttonTextColor={buttonTextColor}
        style={[RaisedButtonTextStyle, textStyle]}
      >
        {title}
      </ButtonText>
    </StyledButton>
  );
};

RaisedButton.defaultProps = {
  ...buttonDefaultProps,
};

RaisedButton.propTypes = {
  ...buttonPropTypes,
};

export default RaisedButton;
