import React from 'react';
import styled from 'styled-components';
import {
  buttonFontSize,
  buttonHeight,
  buttonDefaultFontColor,
} from '../../constants';

const ButtonText = styled.Text`
  font-size: ${buttonFontSize};
  line-height: ${buttonHeight};
  text-align: center;
  text-align-vertical: center;
  color: ${
    ({ style = {} }) => style.color || buttonDefaultFontColor
  };
`;

export default ButtonText;
