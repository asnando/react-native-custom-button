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
    style: propStyle,
  } = props;
  return (
    <StyledButton buttonTintColor={buttonTintColor} onPress={onPress} style={propStyle}>
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
  style: {},
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  buttonTintColor: PropTypes.string,
  buttonTextColor: PropTypes.string,
  onPress: PropTypes.func,
  style: PropTypes.object,
};

export default Button;
