import React from 'react';
import PropTypes from 'prop-types';
import StyledButton from './common/StyledButton';
import ButtonText from './common/ButtonText';
import { buttonDefaultColor } from '../constants';

const TextButton = (props) => {
  const {
    title,
    buttonTintColor,
    buttonTextColor,
    onPress,
    buttonStyle,
    textStyle,
  } = props;
  return (
    <StyledButton buttonTintColor={buttonTintColor} onPress={onPress} style={buttonStyle}>
      <ButtonText buttonTextColor={buttonTextColor} style={textStyle}>
        {title}
      </ButtonText>
    </StyledButton>
  );
};

TextButton.defaultProps = {
  buttonTintColor: 'transparent',
  buttonTextColor: buttonDefaultColor,
  onPress: null,
  buttonStyle: {},
  textStyle: {},
};

TextButton.propTypes = {
  title: PropTypes.string.isRequired,
  buttonTintColor: PropTypes.string,
  buttonTextColor: PropTypes.string,
  onPress: PropTypes.func,
  buttonStyle: PropTypes.object,
  textStyle: PropTypes.object,
};

export default TextButton;
