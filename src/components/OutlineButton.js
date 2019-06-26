import React from 'react';
import PropTypes from 'prop-types';
import StyledButton from './common/StyledButton';
import ButtonText from './common/ButtonText';
import { buttonDefaultColor } from '../constants';

const OutlineButtonStyle = {
  borderWidth: 2,
};

const OutlineButton = (props) => {
  const {
    title,
    buttonTintColor,
    buttonTextColor,
    onPress,
    style: propStyle,
  } = props;
  return (
    <StyledButton buttonTintColor={buttonTintColor} style={[OutlineButtonStyle, propStyle]} onPress={onPress}>
      <ButtonText buttonTextColor={buttonTextColor}>
        {title}
      </ButtonText>
    </StyledButton>
  );
};

OutlineButton.defaultProps = {
  buttonTintColor: 'transparent',
  buttonTextColor: buttonDefaultColor,
  onPress: null,
  style: {},
};

OutlineButton.propTypes = {
  title: PropTypes.string.isRequired,
  buttonTintColor: PropTypes.string,
  buttonTextColor: PropTypes.string,
  onPress: PropTypes.func,
  style: PropTypes.object,
};

export default OutlineButton;
