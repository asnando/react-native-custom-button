import styled from 'styled-components';
import {
  buttonIconSize,
  buttonIconBorderRadius,
} from '../../constants';

export const ButtonIconContainer = styled.View`
  width: ${props => (props.buttonIconSize || buttonIconSize) * 1.25};
  height: ${props => (props.buttonIconSize || buttonIconSize) * 1.25};
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ButtonIcon = styled.Image`
  width: ${props => props.buttonIconSize || buttonIconSize};
  height: ${props => props.buttonIconSize || buttonIconSize};
`;
