import React from 'react';
import PropTypes from 'prop-types';
import StyledButton from './common/StyledButton';
import ButtonText from './common/ButtonText';
import {
  buttonPropTypes,
  buttonDefaultProps,
} from '../constants';

const FullWidthButtonStyle = {
  width: '100%',
};

const FullWidthButton = (props) => {
  const {
    title,
    buttonTintColor,
    buttonTextColor,
    onPress,
    buttonStyle,
    buttonTextStyle,
  } = props;
  return (
    <StyledButton
      buttonTintColor={buttonTintColor}
      style={[FullWidthButtonStyle, buttonStyle]}
      onPress={onPress}
    >
      <ButtonText buttonTextColor={buttonTextColor} style={buttonTextStyle}>
        {title}
      </ButtonText>
    </StyledButton>
  );
};

FullWidthButton.defaultProps = {
  ...buttonDefaultProps,
};

FullWidthButton.propTypes = {
  ...buttonPropTypes,
};

export default FullWidthButton;
