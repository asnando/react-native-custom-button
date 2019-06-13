import React from 'react';
import StyledButton from './common/StyledButton';
import ButtonText from './common/ButtonText';

const FullWidthButtonStyle = {
  width: '100%',
};

const FullWidthButton = props => (
  <StyledButton {...props} style={{
    ...FullWidthButtonStyle,
    ...props.style,
    }}>
    <ButtonText style={props.style}>
      {props.title}
    </ButtonText>
  </StyledButton>
);

export default FullWidthButton;
