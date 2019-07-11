import styled from 'styled-components';
import {
  buttonIconSize,
  buttonIconBorderRadius,
} from '../../constants';

export const ButtonIconContainer = styled.View`
  width: ${buttonIconSize};
  height: ${buttonIconSize};
  flex: 1;
  justify-content: center;
`;

export const ButtonIcon = styled.Image`
  width: ${buttonIconSize};
  height: ${buttonIconSize};
  border-radius: ${buttonIconBorderRadius};
`;
