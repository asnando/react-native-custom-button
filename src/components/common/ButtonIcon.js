import styled from 'styled-components';
import {
  buttonIconSize,
  buttonIconBorderRadius,
} from '../../constants';

export const ButtonIconContainer = styled.View`
  width: ${props => props.buttonIconSize || buttonIconSize};
  height: ${props => props.buttonIconSize || buttonIconSize};
  flex: 1;
  justify-content: center;
  flex-wrap: wrap;
  overflow: hidden;
`;

export const ButtonIcon = styled.Image`
  width: ${props => props.buttonIconSize || buttonIconSize};
  height: ${props => props.buttonIconSize || buttonIconSize};
  border-radius: ${buttonIconBorderRadius};
`;
