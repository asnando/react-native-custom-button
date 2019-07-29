import React from 'react';
import PropTypes from 'prop-types';
import renderButtonIcon from '../helpers/renderButtonIcon';
import StyledButton from './common/StyledButton';
import ButtonText from './common/ButtonText';
import {
  buttonPropTypes,
  buttonDefaultProps,
  buttonIconSize,
} from '../constants';

const SQUARED_BUTTON_TEXT_PADDING = 6;
const SQUARED_BUTTON_TEXT_PADDING_BOTTOM = 8;

const SquaredButtonStyle = {
  height: 128,
  width: 128,
  borderWidth: 2,
  paddingLeft: SQUARED_BUTTON_TEXT_PADDING,
  paddingTop: SQUARED_BUTTON_TEXT_PADDING,
  paddingRight: SQUARED_BUTTON_TEXT_PADDING,
  paddingBottom: SQUARED_BUTTON_TEXT_PADDING_BOTTOM,
  justifyContent: 'flex-end',
  borderRadius: 16,
};

const SquaredButtonTextStyle = {
  fontSize: 14,
  paddingTop: 6,
};

const SquaredCardButton = (props) => {
  const {
    title,
    buttonTintColor,
    buttonTextColor,
    buttonBorderColor,
    buttonIcon,
    buttonIconSize,
    buttonIconColor,
    onPress,
    buttonStyle,
    buttonTextStyle,
  } = props;

  const buttonIconProps = {
    buttonIconSize,
    buttonIconColor,
  };

  return (
    <StyledButton
      buttonTintColor={buttonTintColor}
      buttonBorderColor={buttonBorderColor}
      onPress={onPress}
      style={[buttonStyle, SquaredButtonStyle]}
    >
      {renderButtonIcon(buttonIcon, buttonIconProps)}
      <ButtonText numberOfLines={1}
        numberOfLines={2}
        buttonTextColor={buttonTextColor}
        style={[buttonTextStyle, SquaredButtonTextStyle]}
      >
        {title}
      </ButtonText>
    </StyledButton>
  );
};

SquaredCardButton.defaultProps = {
  ...buttonDefaultProps,
  buttonTintColor: 'transparent',
  buttonIcon: null,
  buttonIconSize: buttonIconSize,
  buttonIconColor: null,
};

SquaredCardButton.propTypes = {
  ...buttonPropTypes,
  buttonIcon: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object,
  ]),
  buttonIconSize: PropTypes.number,
  buttonIconColor: PropTypes.string,
};

export default SquaredCardButton;
