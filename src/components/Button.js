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

Button.defaultProps = {
  buttonTintColor: null,
  buttonTextColor: null,
  onPress: null,
  buttonStyle: {},
  textStyle: {},
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  buttonTintColor: PropTypes.string,
  buttonTextColor: PropTypes.string,
  onPress: PropTypes.func,
  buttonStyle: PropTypes.object,
  textStyle: PropTypes.object,
};

export default Button;
