import React from 'react';
import styled from 'styled-components';
import {
  buttonHeight,
  buttonVerticalMargin,
  buttonDefaultColor,
  buttonDefaultBorderColor,
  buttonBorderRadius,
  buttonDefaultWidth,
} from '../../constants';

const StyledButton = styled.TouchableOpacity`
  overflow: hidden;
  height: ${buttonHeight};
  margin-top: ${buttonVerticalMargin};
  margin-bottom: ${buttonVerticalMargin};
  border-radius: ${buttonBorderRadius};
  border-color: ${props => props.buttonBorderColor || buttonDefaultBorderColor};
  background-color: ${props => props.buttonTintColor || buttonDefaultColor};
  width: ${buttonDefaultWidth};
`;

export default StyledButton;
