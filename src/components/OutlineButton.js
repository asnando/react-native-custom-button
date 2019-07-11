import React from 'react';
import PropTypes from 'prop-types';
import StyledButton from './common/StyledButton';
import ButtonText from './common/ButtonText';
import {
  buttonDefaultColor,
  buttonDefaultProps,
  buttonPropTypes,
} from '../constants';

const OutlineButtonStyle = {
  borderWidth: 2,
};

const OutlineButton = (props) => {
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
      style={[OutlineButtonStyle, buttonStyle]}
      onPress={onPress}
    >
      <ButtonText buttonTextColor={buttonTextColor} style={textStyle}>
        {title}
      </ButtonText>
    </StyledButton>
  );
};

OutlineButton.defaultProps = {
  ...buttonDefaultProps,
  buttonTintColor: 'transparent',
  buttonTextColor: buttonDefaultColor,
};

OutlineButton.propTypes = {
  ...buttonPropTypes,
};

export default OutlineButton;
