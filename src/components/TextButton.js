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

const TextButton = (props) => (
  <StyledButton {...props} style={{
      ...TextButtonStyle,
      ...props.style,
    }}>
    <ButtonText style={{
        ...TextButtonTextStyle,
        ...props.style,
      }}>
      {props.title}
    </ButtonText>
  </StyledButton>
);

export default TextButton;
