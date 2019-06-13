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
  background-color: ${
    ({ style = {} }) => style.backgroundColor || buttonDefaultColor
  };
  width: ${
    ({ style = {} }) => style.width || buttonDefaultWidth
  };
  borderWidth: ${
    ({ style = {} }) => style.borderWidth || 0
  };
`;

export default StyledButton;
