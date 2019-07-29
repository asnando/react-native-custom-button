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
  margin-top: auto;
  margin-bottom: auto;
  text-align: center;
`;

export default ButtonText;
