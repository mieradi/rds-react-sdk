/**
 * @name CTALink
 * @desc description here
 * @param {} param desc
 * @returns returns desc
 */

import React from 'react';
import { CTALinkStyles } from '@components/CTALink/CTALinkStyles';
import { IButton } from '../../types/button/IButton';

interface ICTALink extends IButton {
  url: string;
  title: string;
  backgroundColor?: string;
}

export const CTALink: React.FC<ICTALink> = (props): JSX.Element => {
  const { title, icon, iconPosition } = props;

  const iconHasRightAlignmentOrDefault =
    (icon && iconPosition === 'right') || (icon && !iconPosition);

  return (
    <CTALinkStyles {...props}>
      {icon && iconPosition === 'left' && icon}
      {title}
      {iconHasRightAlignmentOrDefault && icon}
    </CTALinkStyles>
  );
};
