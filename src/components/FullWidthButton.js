import React from 'react';
import PropTypes from 'prop-types';
import StyledButton from './common/StyledButton';
import ButtonText from './common/ButtonText';

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
    textStyle,
  } = props;
  return (
    <StyledButton
      buttonTintColor={buttonTintColor}
      style={[FullWidthButtonStyle, buttonStyle]}
      onPress={onPress}
    >
      <ButtonText buttonTextColor={buttonTextColor} style={textStyle}>
        {title}
      </ButtonText>
    </StyledButton>
  );
};

FullWidthButton.defaultProps = {
  buttonTintColor: null,
  buttonTextColor: null,
  onPress: null,
  buttonStyle: {},
  textStyle: {},
};

FullWidthButton.propTypes = {
  title: PropTypes.string.isRequired,
  buttonTintColor: PropTypes.string,
  buttonTextColor: PropTypes.string,
  onPress: PropTypes.func,
  buttonStyle: PropTypes.object,
  textStyle: PropTypes.object,
};

export default FullWidthButton;
