import React from 'react';
import PropTypes from 'prop-types';
import StyledButton from './common/StyledButton';
import ButtonText from './common/ButtonText';

const Button = (props) => {
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

Button.defaultProps = {
  buttonTintColor: null,
  buttonTextColor: null,
  onPress: null,
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  buttonTintColor: PropTypes.string,
  buttonTextColor: PropTypes.string,
  onPress: PropTypes.func,
};

export default Button;
