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

const SquaredButtonStyle = {
  height: 128,
  width: 128,
  backgroundColor: 'transparent',
  borderWidth: 2,
  paddingLeft: 8,
  paddingTop: 8,
  paddingRight: 8,
  paddingBottom: 8,
  justifyContent: 'flex-end',
  borderRadius: 16,
};

const SquaredButtonTextStyle = {
  fontSize: 16,
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
    textStyle,
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
      <ButtonText
        numberOfLines={2}
        buttonTextColor={buttonTextColor}
        style={[textStyle, SquaredButtonTextStyle]}
      >
        {title}
      </ButtonText>
    </StyledButton>
  );
};

SquaredCardButton.defaultProps = {
  ...buttonDefaultProps,
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
