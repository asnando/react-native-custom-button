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
  } = props;
  return (
    <StyledButton buttonTintColor={buttonTintColor} style={FullWidthButtonStyle} onPress={onPress}>
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
};

FullWidthButton.propTypes = {
  title: PropTypes.string.isRequired,
  buttonTintColor: PropTypes.string,
  buttonTextColor: PropTypes.string,
  onPress: PropTypes.func,
};

export default FullWidthButton;
