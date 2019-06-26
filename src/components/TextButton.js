import React from 'react';
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

export default TextButton;
