import React from 'react';
import resolveButtonIconSource from './resolveButtonIconSource';
import {
  ButtonIconContainer,
  ButtonIcon,
} from '../components/common/ButtonIcon';

const renderButtonIcon = (source, buttonIconProps = {}) => {
  const resolvedButtonIcon = resolveButtonIconSource(source, buttonIconProps);
  if (resolvedButtonIcon !== null && typeof resolvedButtonIcon === 'object') {
    if (typeof resolvedButtonIcon.$$typeof !== 'undefined') {
      return (
        <ButtonIconContainer>
          {resolvedButtonIcon}
        </ButtonIconContainer>
      );
    }
  }
  return (
    <ButtonIconContainer {...buttonIconProps}>
      <ButtonIcon source={resolvedButtonIcon} {...buttonIconProps} />
    </ButtonIconContainer>
  );
};

export default renderButtonIcon;
