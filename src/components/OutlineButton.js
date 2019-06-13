import React from 'react';
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

const OutlineButton = (props) => (
  <StyledButton {...props} style={{
    ...OutlineButtonStyle,
    ...props.style,
    }}>
    <ButtonText style={{
      ...OutlineButtonTextStyle,
      ...props.style,
      }}>
      {props.title}
    </ButtonText>
  </StyledButton>
);

export default OutlineButton;
