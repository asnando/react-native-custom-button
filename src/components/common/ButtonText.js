import React from 'react';
import styled from 'styled-components';
import {
  buttonFontSize,
  buttonHeight,
  buttonDefaultFontColor,
} from '../../constants';

const ButtonText = styled.Text`
  font-size: ${buttonFontSize};
  color: ${props => props.buttonTextColor || buttonDefaultFontColor};
`;

export default ButtonText;
