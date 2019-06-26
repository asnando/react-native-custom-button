import React from 'react';
import PropTypes from 'prop-types';
import StyledButton from './common/StyledButton';
import ButtonText from './common/ButtonText';
import { buttonDefaultColor } from '../constants';

const TextButtonStyle = {
  backgroundColor: 'transparent',
};

const TextButtonTextStyle = {
  color: buttonDefaultColor,
};

const TextButton = (props) => {
  const {
    title,
    buttonTintColor,
    buttonTextColor,
    onPress,
  } = props;
  return (
    <StyledButton buttonTintColor={buttonTintColor} style={TextButtonStyle} onPress={onPress}>
      <ButtonText buttonTextColor={buttonTextColor} style={TextButtonTextStyle}>
        {title}
      </ButtonText>
    </StyledButton>
  );
};

TextButton.defaultProps = {
  buttonTintColor: null,
  buttonTextColor: null,
  onPress: null,
};

TextButton.propTypes = {
  title: PropTypes.string.isRequired,
  buttonTintColor: PropTypes.string,
  buttonTextColor: PropTypes.string,
  onPress: PropTypes.func,
};

export default TextButton;
