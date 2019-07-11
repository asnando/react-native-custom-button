import React from 'react';
import PropTypes from 'prop-types';
import StyledButton from './common/StyledButton';
import ButtonText from './common/ButtonText';
import {
  buttonPropTypes,
  buttonDefaultProps,
} from '../constants';

const RaisedButtonStyle = {
  borderBottomWidth: 4,
  borderRightWidth: 1,
  borderLeftWidth: 1,
  borderRadius: 8,
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
        style={[RaisedButtonStyle, textStyle]}
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
