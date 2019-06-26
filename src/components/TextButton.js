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
  } = props;
  return (
    <StyledButton buttonTintColor={buttonTintColor} onPress={onPress}>
      <ButtonText buttonTextColor={buttonTextColor}>
        {title}
      </ButtonText>
    </StyledButton>
  );
};

TextButton.defaultProps = {
  buttonTintColor: 'transparent',
  buttonTextColor: buttonDefaultColor,
  onPress: null,
};

TextButton.propTypes = {
  title: PropTypes.string.isRequired,
  buttonTintColor: PropTypes.string,
  buttonTextColor: PropTypes.string,
  onPress: PropTypes.func,
};

export default TextButton;
