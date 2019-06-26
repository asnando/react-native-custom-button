import React from 'react';
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

export default Button;
