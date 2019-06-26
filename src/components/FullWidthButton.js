import React from 'react';
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

export default FullWidthButton;
