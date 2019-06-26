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
    style: propStyle,
  } = props;
  return (
    <StyledButton buttonTintColor={buttonTintColor} style={[FullWidthButtonStyle, propStyle]} onPress={onPress}>
      <ButtonText buttonTextColor={buttonTextColor}>
        {title}
      </ButtonText>
    </StyledButton>
  );
};

FullWidthButton.defaultProps = {
  buttonTintColor: null,
  buttonTextColor: null,
  onPress: null,
  style: {},
};

FullWidthButton.propTypes = {
  title: PropTypes.string.isRequired,
  buttonTintColor: PropTypes.string,
  buttonTextColor: PropTypes.string,
  onPress: PropTypes.func,
  style: PropTypes.object,
};

export default FullWidthButton;
