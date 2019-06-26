import React from 'react';
import styled from 'styled-components';
import {
  buttonHeight,
  buttonDefaultColor,
  buttonDefaultBorderColor,
  buttonBorderRadius,
  buttonDefaultWidth,
} from '../../constants';

const StyledButton = styled.TouchableOpacity`
  height: ${buttonHeight};
  border-radius: ${buttonBorderRadius};
  border-color: ${buttonDefaultBorderColor};
  background-color: ${props => props.buttonTintColor || buttonDefaultColor};
  width: ${buttonDefaultWidth};
`;

export default StyledButton;
