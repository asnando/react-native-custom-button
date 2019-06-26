import React from 'react';
import PropTypes from 'prop-types';
import StyledButton from './common/StyledButton';
import ButtonText from './common/ButtonText';
import { buttonDefaultColor } from '../constants';

const OutlineButtonStyle = {
  borderWidth: 2,
  backgroundColor: 'transparent',
};

const OutlineButtonTextStyle = {
  color: buttonDefaultColor,
};

const OutlineButton = (props) => {
  const {
    title,
    buttonTintColor,
    buttonTextColor,
    onPress,
  } = props;
  return (
    <StyledButton buttonTintColor={buttonTintColor} style={OutlineButtonStyle} onPress={onPress}>
      <ButtonText buttonTextColor={buttonTextColor} style={OutlineButtonTextStyle}>
        {title}
      </ButtonText>
    </StyledButton>
  );
};

OutlineButton.defaultProps = {
  buttonTintColor: null,
  buttonTextColor: null,
  onPress: null,
};

OutlineButton.propTypes = {
  title: PropTypes.string.isRequired,
  buttonTintColor: PropTypes.string,
  buttonTextColor: PropTypes.string,
  onPress: PropTypes.func,
};

export default OutlineButton;
