/**
 * @name CTALink
 * @desc description here
 * @param {} param desc
 * @returns returns desc
 */

import React from 'react';
import { CTALinkStyles } from '@components/CTALink/CTALinkStyles';
import { IButton } from '../../types/button/IButton';

interface CTALinkProps extends IButton {
  url: string;
  title: string;
  backgroundColor?: string;
}

export const CTALink: React.FC<CTALinkProps> = ({
  url,
  title,
  backgroundColor,
  icon,
  iconPosition,
}): JSX.Element => {
  const iconHasRightAlignmentOrDefault =
    (icon && iconPosition === 'right') || (icon && !iconPosition);
  return (
    <CTALinkStyles
      as="a"
      iconPosition={iconPosition}
      url={url}
      backgroundColor={backgroundColor}
    >
      {icon && iconPosition === 'left' && icon}
      {title}
      {iconHasRightAlignmentOrDefault && icon}
    </CTALinkStyles>
  );
};
